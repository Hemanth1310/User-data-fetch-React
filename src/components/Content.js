import React from "react";
import Fech from './fech'

//The Modal component

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> User Activity Log </div>
    <div className="seccontent">
      {" "}
      
    <Fech></Fech>
    </div>
  </div>
);