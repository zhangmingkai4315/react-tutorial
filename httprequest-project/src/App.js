import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter }from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import NewBlog from './Blogs/NewBlog/NewBlog';
import {Route} from 'react-router-dom'
import Aux from './HOC/Aux'
import Link from 'react-router-dom/Link';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/blogs">blogs</Link></li>
                <li><Link to="/new">new</Link></li>
              </ul>
            </nav>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/new" exact component={NewBlog}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
