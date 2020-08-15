import React from "react";
import SecFech from './secFech'

//The Modal component


export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> User Activity Log </div>
    <div className="content">
      {" "}
      
    <SecFech></SecFech>
      
     
    </div>
  </div>
);