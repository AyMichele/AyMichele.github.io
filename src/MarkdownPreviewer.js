import React, {Componets} from 'react';
import './App.css';
import { render } from '@testing-library/react';




const editorStyle = {
  resize: "none",
  height: "370px", 

}

const previewStyle = {
  marginTop: "30px",
  height: "370px", 
  border: "1px solid green",
}


class Editor extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <textarea className="w-100 "style={editorStyle} id="editor"></textarea>
    </div>
    );
  }
}


class Preview extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>
          <p className="w-100 "style={previewStyle} id="preview"></p>
      </div>
      );
    }
  }
  

export {Editor};
export {Preview};