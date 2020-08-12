import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {LinkComponent} from './QuoteMachineComponents';
import {ChangeQuoteComponent} from './QuoteMachineComponents';
import {Editor} from './MarkdownPreviewer';
import {Preview} from './MarkdownPreviewer';




const appStyle = {
  height: "100vh",
  width: "100%",
  overflowX: "hidden"
}

const quoteMachineStyle = {
  backgroundColor: '#b3ffff',
}


const heightStyle = {
  height: "400px",
  border: "1px solid red",
}



class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quoteNumber: 0,
      quotes: [
        {"Live as if you were to die tomorrow. Learn as if you were to live forever": "Mahatma Gandhi"},
        {"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.": "Marilyn Monroe"},
        {"Be yourself; everyone else is already taken.": "Oscar Wilde"},
        {"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.": " Albert Einstein"},
        {"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.": "Bernard M. Baruch"},
        {"A room without books is like a body without a soul.": "Marcus Tullius Cicero"},
        {"You've gotta dance like there's nobody watching, Love like you'll never be hurt Sing like there's nobody listening,And live like it's heaven on earth.": "William W. Purkey"},
        {"You only live once, but if you do it right, once is enough": "Mae West"}
      ]
    }
    this.changeQuote = this.changeQuote.bind(this);
  }
  changeQuote(){
    this.setState({
      quoteNumber:  Math.floor(Math.random() * this.state.quotes.length),
    });
  }
  
 
  render(){
    return (
      <div className="App" style={appStyle}>
        <div style={quoteMachineStyle}className="row h-100 justify-content-center align-items-center">
            <wrapper id="quote-box" className="w-25 d-inline">
              <h5 id="text" className="text-center">{Object.getOwnPropertyNames(this.state.quotes[this.state.quoteNumber])}</h5>
              <p id="author" >-{this.state.quotes[this.state.quoteNumber][Object.getOwnPropertyNames(this.state.quotes[this.state.quoteNumber])]}</p>
              <LinkComponent />
              <ChangeQuoteComponent changeQuote={this.changeQuote}/>
            </wrapper>
        </div>
        <div style={appStyle} >
          <div style={ heightStyle} className="w-25 mx-auto mt-1">
            <h6 className="float-left mt-1">Editor</h6>
            <Editor />  
          </div>
          <div style={heightStyle} className="w-25 mx-auto mt-5">
            <h6 className="float-left mt-1">Preview</h6>
            <Preview />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
