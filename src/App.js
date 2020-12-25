import React,{Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Address from './components/pages/Address';

export default class App extends Component {
  render() {
    return (
      <div className="app-div">
      
        <Navbar />
        

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/gallery' component={Address} />
          <Route path='/sign-up' component={SignUp} />
          
          
        </Switch>
        </div>        
    )
  }
}

