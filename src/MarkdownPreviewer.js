import React, {Componets} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {App} from './App'
import marked from 'marked';



marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();


const editorStyle = {
  resize: "none",
  height: "400px", 
  backgroundColor: "#b3ffb3",
  borderRadius: "2px",
  outline: "none ",
  borderTop: "2px solid white",
  borderLeft: "none",
  borderRight: "none",
  fontWeight: "bold", 
  color: "#404040",
}

const previewStyle = {
  marginTop: "20px",
  height: "400px", 
  overflowX: "hidden",
  color: "#404040",
  backgroundColor: "#b3ffb3",
  borderRadius: "2px",
  outline: "none ",
  borderTop: "2px solid white",
  borderLeft: "none",
  borderRight: "none",
  
}


class Editor extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <textarea value = {this.props.input} onChange={this.props.handleChange}className="w-100 p-2 "style={editorStyle} id="editor"placeholder={this.props.input}></textarea>
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
          <p className="w-100 text-left p-2 "style={previewStyle} id="preview"  dangerouslySetInnerHTML={{__html: marked(this.props.input, { renderer: renderer })}}></p>
      </div>
      );
    }
  }
  

export {Editor};
export {Preview};