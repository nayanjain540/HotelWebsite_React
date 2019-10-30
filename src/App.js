import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import {DISHES} from './components/dishes';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
  return (
       <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}
}

export default App;
