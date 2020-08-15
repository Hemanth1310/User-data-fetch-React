import  React ,{Component} from "react"
import Popup from "reactjs-popup";
import SecContent from './secContent';
import Content from './Content';

// maincomponent i.e component of home page .....displays users List 

class Climp extends Component{

    state = {
        loading: true,
        person:[]
    };
    
    async componentDidMount(){
        const url ="http://localhost:3000/people";
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
               <div key={person.id} >
                <Popup modal trigger={<button className="button">{person.real_name}</button>}>
                  {close => <Content close={close} />}
                 </Popup>
                 <br></br>
                   <div className="hr"></div> 
                 </div>
                 )
            
               })
            
               const peoplesJsx2 = [];

               this.state.person.forEach(person =>{
                      peoplesJsx2.push(
                      <div key={person.id} >
                       <Popup modal trigger={<button className="button" >{person.real_name}</button>}>
                         {close => <SecContent close={close} />}
                        </Popup>
                        <br></br>
                      
                        </div>
                        )
                   
                      })
              
        const logo = require('../profile.png');                

        return (
           
            <div className="box">
            <div ><img src={logo} width="100" height="100" /></div>
            <br></br>
            <div>{peoplesJsx[0]}</div>
            <br></br>
            <div className ="box1"></div> 
            <br></br>
            <div>{peoplesJsx2[1]}</div>
            </div>
        )
    }
}

export default Climp;