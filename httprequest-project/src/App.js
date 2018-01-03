import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter }from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import NewBlog from './Blogs/NewBlog/NewBlog';
import {Route} from 'react-router-dom'
import Aux from './HOC/Aux'
import FullBlog from './Blogs/FullBlog/FullBlog'
import NavLink from 'react-router-dom/NavLink';
import Switch from 'react-router-dom/Switch';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><NavLink to="/" exact>blogs</NavLink></li>
                <li><NavLink to={{
                  pathname:'/new',
                  hash:"#submit",
                  search:"?quick-submit=true"
                }}>new</NavLink></li>
              </ul>
            </nav>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route path="/" exact component={Blogs}/>
            <Route path="/blogs/:id" exact component={FullBlog}/>
            <Route path="/new" component={NewBlog}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
