import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {LinkComponent} from './QuoteMachineComponents';
import {ChangeQuoteComponent} from './QuoteMachineComponents';
import {Editor} from './MarkdownPreviewer';
import {Preview} from './MarkdownPreviewer';
import {DaysLeft} from './GoalTimer';
import {MoneyCalc} from './GoalTimer';
import {PreGoals} from './GoalTimer';
import {MoneyForm} from './GoalTimer';
import {CheckForm} from './GoalTimer';
import marked from 'marked';

const textStyle = {
  padding: "15px",
}

const quoteBoxStyle = {
  background: "#99e6ff",
  border: "1px solid #ff0066",
  padding: "5px",
  borderRadius: "15px"
}

const quoteAppStyle = {
  height: "100vh",
  width: "100%",
  overflowX: "hidden"
}

const markdownAppStyle = {
  height: "130vh",
  width: "100%",
  overflowX: "hidden"
}

const quoteMachineStyle = {
  backgroundColor: '#b3ffff',
  border: "1px solid #b3ffff",
  height: "100%"
}

const markDownPreviewerStyle = {
  backgroundColor: '#b3ffb3',
  border: "1px solid #b3ffb3",
  height: "100%"
}

const goelTimerStyle = {
  backgroundColor: "#ff4d4d",
  border: "1px solid #ff4d4d",
  height: "200vh",
  overflowX: "hidden",
}


const heightStyle = {
  height: "420px",
  borderRadius: "15px",
  border: "2px solid white",
  overflow: "hidden",
  borderBottomRightRadius: "2px",
  borderBottomLeftRadius: "2px",
  marginTop: "100px",
  marginBottom: "20",
}

let placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`



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
      ],
      input: placeholder,
      daysLeft: 249,
      moneyNeeded: 5000,
      moneyIGot: 0,
      moneyInput: 0
    }
    this.changeQuote = this.changeQuote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMoneyChange = this.handleMoneyChange.bind(this);
    this.gotThatMoney = this.gotThatMoney.bind(this);
  }
  changeQuote(){
    this.setState({
      quoteNumber:  Math.floor(Math.random() * this.state.quotes.length),
    });
  }
  
  handleMoneyChange(e){
    this.setState({
      moneyInput: e.target.value
    })
  }
  
  gotThatMoney(){
    this.setState({
      moneyIGot: this.state.moneyInput
    })
  }


  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
 
  render(){
    return (
      <div className="App text-center">
        {/* ###################################################################################
        ------------------------------------ GOAL TIMER APP -----------------------------------
        #######################################################################################*/}
        <div style={goelTimerStyle} className="">
          <DaysLeft daysLeft={this.state.daysLeft}/>
          <div className="row justify-content-center align-items-center">
            <MoneyCalc moneyNeeded={this.state.moneyNeeded} moneyIGot = {this.state.moneyIGot}/>
          </div>
          <div className="row justify-content-center align-items-center">
            <MoneyForm handleMoneyChange = {this.handleMoneyChange}
             moneyInput={this.state.moneyInput} gotThatMoney = {this.gotThatMoney} />
          </div>
          <div className="row justify-content-center align-items-center mt-1">
            <PreGoals/>
          </div>
          <div>
            <CheckForm />
          </div>
        </div>
        {/*......................................................................................*/}
        {/* ###################################################################################
        ------------------------------------QUOTE MACHINE APP -----------------------------------
        #######################################################################################*/}
        <div style={quoteAppStyle} >
          <div style={quoteMachineStyle}className="row h-100 justify-content-center align-items-center">
              <wrapper style = {quoteBoxStyle} id="quote-box" className="w-25 d-inline">
                <h5 style = {textStyle} id="text" className="text-center">"{Object.getOwnPropertyNames(this.state.quotes[this.state.quoteNumber])}"</h5>
                <p id="author" >-{this.state.quotes[this.state.quoteNumber][Object.getOwnPropertyNames(this.state.quotes[this.state.quoteNumber])]}</p>
                <LinkComponent />
                <ChangeQuoteComponent changeQuote={this.changeQuote}/>
              </wrapper>
          </div>
        </div>
         {/*......................................................................................*/}
        {/* ###################################################################################
        -------------------------------- MARKDOWN PREVIEWER APP -------------------------------
        #######################################################################################*/}  
        <div style={markdownAppStyle} >
          <div style={markDownPreviewerStyle} className=" flex-column">
            <div style={ heightStyle} className="w-25 mx-auto ">
              <h6 className="float-left mt-2 ml-3">Editor</h6>
              <Editor input={this.state.input} handleChange={this.handleChange} />  
            </div>
            <div style={heightStyle} className="w-50 mx-auto ">
              <h6 className="float-left mt-2 ml-3">Preview</h6>
              <Preview input={this.state.input}/>  
            </div>
          </div>  
        </div>
        {/*......................................................................................*/}
      </div>
    );
  }
}

export default App;
