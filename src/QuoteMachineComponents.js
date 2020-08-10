import React, { Component } from 'react';
import './App.css';



class ChangeQuoteComponent extends React.Component{
    constructor(props){
      super(props)
    }
    
    render(){
      return(
        <div>
          <button onClick={this.props.changeQuote} id="new-quote" className="btn btn-outline-primary float-right buttonStyle ">New Quote</button>
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
                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" className="float-left btn btn-default fa fa-twitter buttonStyleLink"></a>
            </div>
        );
    }
  }
  
  export {ChangeQuoteComponent};
  export {LinkComponent};