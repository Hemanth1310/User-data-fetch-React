import React, { Component } from 'react'

//component that fetchs data onto the modal

export class SecFech extends Component {
    
    state = {
        loading: true,
        person:[]
    };
    
    async componentDidMount(){
        const url ="https://f23acdec-663e-4643-a760-6dfda5bd29fe.mock.pstmn.io/vi/home/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.members, loading: false });
        console.log(this.state.person)
    }
    
    
    
    render() {
        if(this.state.loading){
            return <div>loading...</div>
        }

        if(!this.state.person.length){
            return <div>didnt get any person</div>;
        }
        const peoplesJsx = [];

        this.state.person.forEach(person =>{
               peoplesJsx.push(
                <div key={person.id}>
                <div><h2>{person.real_name}</h2></div> 
                {
                person.activity_periods.map((sub)=>
                 <div key={sub.start_time}>  
                    <div>Start---{sub.start_time}</div>
                    <div>  end----{sub.end_time}</div>
                    <div>---------------------</div>
                 </div>
                 
                 )
                 

                 } 
                 </div>
               );
            })


        return (
            <div>
               
            <div>{peoplesJsx[1]}</div>
            
            </div>
        )
    }
}

export default SecFech
