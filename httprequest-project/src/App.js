import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Blogs from './Blogs/Blogs';
import FullBlog from './Blogs/FullBlog/FullBlog'
import NewBlog from './Blogs/NewBlog/NewBlog';
class App extends Component {
  state = {
    choosedBlogId:null
  }
  chooseBlog=(id)=>{
    if(typeof id==='number' && id>0){
      this.setState({choosedBlogId:id})
    }
  }
  deleteBlog=(id)=>{
    console.log('delete '+id)
    axios.delete('/posts/' + id)
         .then(response=>{
           console.log(response)
         })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Blogs chooseBlog={this.chooseBlog}/>
        <FullBlog 
            blogId={this.state.choosedBlogId}
            onDeleteBlog={this.deleteBlog}
            />
        <NewBlog/>
      </div>
    );
  }
}

export default App;
