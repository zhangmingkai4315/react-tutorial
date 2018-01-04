import React, { Component } from 'react'
import {NavLink, Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Blogs from './Blogs/Blogs'
import asyncComponent from './HOC/asyncComponent';
const AsyncNewBlogs = asyncComponent(()=>{
  return import ('./Blogs/NewBlog/NewBlog')
})
class App extends Component {
  state = {
    auth: true 
  }
  render() {
    return (
      <BrowserRouter basename="/app">
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><NavLink to="/blogs" exact>blogs</NavLink></li>
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
            {this.state.auth?<Route path="/new" component={AsyncNewBlogs}/>:null}
            <Route path="/blogs" component={Blogs}/>
            <Redirect from='/home' to='blogs'/>
            <Route render={()=><h3>404</h3>}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
