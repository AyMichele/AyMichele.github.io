import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {moneyStore} from './store';
import {addMoney} from './store';


const daysLeftHeader = {
    color: "white",
    fontSize: "80px",
    marginTop: "100px",
}

const moneyContainer = {
   width: "400px", 
   outline: "none ",
   border: "2px solid white",
   fontWeight: "bold", 
   borderLeft: "none",
   borderRight: "none",
}

const moneyHeader = {
    color: "white",
    fontSize: "30px",
    marginTop: "20px",
}


const checkStyle = {
    color: "white",
    fontSize: "22px",
    margin: "10px"  
}

const checkButtonStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "10px",
    margin: "3px"
}

class DaysLeft extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <h1 style = {daysLeftHeader}>{this.props.daysLeft} Tage</h1> 
            </div>
        );
    }
}

class MoneyCalc extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={moneyContainer} className="d-flex flex-column">
               <h5 style={moneyHeader} className="m-3 p-2">Ziel: {this.props.moneyNeeded}€</h5>
               <h5 style={moneyHeader} className="m-3 p-2">Aktuell: {this.props.moneyIGot}€</h5> 
               <h5 style={moneyHeader} className="m-3 p-2">Bis zum Ziel: {this.props.moneyNeeded - this.props.moneyIGot}€</h5>  
            </div>
        );
    }
}

class MoneyForm extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="d-flex flex-row">
               <form>
                   <input type = "text" value = {this.props.moneyInput} onChange = {this.props.handleMoneyChange} className="m-1"></input>
                   <button onClick = {this.props.gotThatMoney} className="m-1 " type="submit">Oh Yeah</button>
               </form>
            </div>
        );
    }
}




class PreGoals extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={moneyContainer} className="d-flex flex-column">
               <h5 style={moneyHeader} className="m-3 p-2">Laptop ~ 1000€</h5>
               <h5 style={moneyHeader} className="m-3 p-2">Anzahlung {'->'} 2000€</h5> 
               <h5 style={moneyHeader} className="m-3 p-2">Aufenhalt ~ 1200€</h5> 
               <h5 style={moneyHeader} className="m-3 p-2">ETC ~ 500€</h5>   
            </div>
        );
    }
}

class CheckForm extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="d-flex flex-column">
               <form>
                  <div>
                    <label style={checkStyle} for = "Laptop">Laptop</label>
                    <input style = {checkButtonStyle} type="checkbox" name="Laptop"></input>
                    <label style={checkStyle} for = "Anzahlung">Anzahlung</label>
                    <input style = {checkButtonStyle} type="checkbox" name="Anzahlung"></input>
                    <label style={checkStyle} for = "Aufenhalt">Aufenhalt</label>
                    <input style = {checkButtonStyle} type="checkbox" name="Aufenhalt"></input>
                    <label style={checkStyle} for = "ETC">ETC</label>
                    <input style = {checkButtonStyle} type="checkbox" name="ETC"></input>
                   </div>
                   <div>
                        <button className="" type="submit">Check Check!</button>     
                   </div> 
               </form>
            </div>
        );
    }
}


export {DaysLeft};
export {MoneyCalc};
export {PreGoals};
export {MoneyForm};
export {CheckForm};