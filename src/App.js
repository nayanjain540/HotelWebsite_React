import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component{
  constructor(props) {
    super(props);
  }
  render(){
  return (
       <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
  );
}
}

export default App;
