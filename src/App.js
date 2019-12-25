import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TopComponent from './components/TopComponents/topComponent';
import Stacked from './components/Stacked';
import MiddleComponent from './components/MiddleComponent/MiddleComponent';
import BottomComponent from './components/BottomComponents/BottomComponent';
export default class App extends Component {
    render() {
        return (
            <div>
               <Header /> 
               <TopComponent />
               <Stacked />
               <MiddleComponent />
               <BottomComponent />
            </div>
        )
    }
}
