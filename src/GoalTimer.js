import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {addMoney} from './store/actions';
import {changeMoneyInput} from './store/actions';
import {connect} from 'react-redux'
import moneyStore  from './store/store';


const daysLeftHeader = {
    color: "white",
    fontSize: "80px",
    marginTop: "0px",
    borderBottom: "2px solid white",
    paddingBottom: "10px",
}

const moneyContainer = {
   width: "400px", 
   outline: "none ",
   border: "2px solid white",
   fontWeight: "bold", 
   borderLeft: "none",
   borderRight: "none",
   marginTop: "30px",
}

const moneyHeader = {
    color: "white",
    fontSize: "30px",
    marginTop: "20px",
    border: "1px solid white",
    
}

const weekHeader = {
    color: "white",
    fontSize: "40px",
    marginTop: "20px",
    borderBottom: "2px solid white",
    paddingBottom: "20px"
}


const checkStyle = {
    color: "white",
    fontSize: "22px",
    margin: "10px", 
    
}

const checkButtonStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "10px",
    margin: "3px"
}

const logInForm = {
    width: "400px",
    height: "200px",
    background: "#ff4d4d",
    border: "1px solid white",
    display: "none"
}


function MoneyForm(props) {
    var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var date1 = new Date(); //"now"
var date2 = new Date("04/19/2021")
var date3 = new Date("03/1/2021")
var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 
var diffDays2 = parseInt((date3 - date1) / (1000 * 60 * 60 * 24 * 7), 10); 

    return(
        <div  style={moneyContainer} className="d-flex flex-column">
            <h1 style = {daysLeftHeader}>{diffDays} Tage</h1>
            <h6 style = {weekHeader}>{diffDays2} Wochen</h6>  
            <h5 className="hoverClass"style={moneyHeader} className="m-3 p-2">Ziel: {props.moneyNeeded}€</h5>
            <h5 className="hoverClass"className="hoverClass" style={moneyHeader} className="m-3 p-2">Aktuell: {props.moneyIGot}€</h5> 
            <h5 className="hoverClass" style={moneyHeader} className="m-3 p-2">Bis zum Ziel: {props.moneyNeeded - props.moneyIGot}€</h5> 
            <div style={logInForm} className="flex-column">
              <input type="text" onChange = { (e) => props.changeMoneyInput(e.target.value)}></input>
              <button type = "submit" onClick = {props.addMoney} className="m-1 ">Login</button>    
            </div>
            <form>
              <input type="text" onChange = { (e) => props.changeMoneyInput(e.target.value)}></input>
              <button type = "submit" onClick = {props.addMoney} className="m-1 ">Oh Yeah</button>
            </form>  
        </div>
    );
}





class PreGoals extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={moneyContainer} className="d-flex flex-column">
               <h5 className="hoverClass" style={moneyHeader} className="m-3 p-2">Laptop ~ 1000€</h5>
               <h5 className="hoverClass" style={moneyHeader} className="m-3 p-2">Anzahlung {'->'} 2000€</h5> 
               <h5 className="hoverClass" style={moneyHeader} className="m-3 p-2">Aufenhalt ~ 1200€</h5> 
               <h5 className="hoverClass" style={moneyHeader} className="m-3 p-2">ETC ~ 500€</h5>   
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
                    <button  type="submit">Check Check!</button> 
                   </div> 
               </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      moneyIGot: state.moneyIGot,
      moneyNeeded: state.moneyNeeded,
      daysLeft: state.daysLeft,
      moneyInput: state.moneyInput,
      logedIn: state.logedIn  
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addMoney: () => dispatch(addMoney()),
      changeMoneyInput: (e) => dispatch(changeMoneyInput(e)),
    }
  }
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoneyForm)
  
  


export {PreGoals};
export {MoneyForm};
export {CheckForm};