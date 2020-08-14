import React, { Component } from 'react';
import './App.css';


const buttonStyle = {
  fontSize: "14px",
  position: "relative",
  margin: "18px 15px 0px 15px",
  borderRadius: "5px",
  boxShadow: "none",
  border: "1px solid #ff0066",
  color: "#ff0066",
  fontWeight: "bold", 
}

const buttonStyleLink = {
  fontSize: "28px",
  position: "relative",
  margin: "10px 10px 0px 5px"
}




class ChangeQuoteComponent extends React.Component{
    constructor(props){
      super(props)
    }
    
    render(){
      return(
        <div>
          <button style = {buttonStyle} onClick={this.props.changeQuote} id="new-quote" className=" btn float-right buttonStyle ">New Quote</button>
        </div>
      );
    }
  }
  
  
  class LinkComponent extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
        return(
            <div>
                <a style = {buttonStyleLink} id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" className="float-left btn btn-default fa fa-twitter buttonStyleLink"></a>
            </div>
        );
    }
  }
  
  export {ChangeQuoteComponent};
  export {LinkComponent};