import React, { Component } from 'react'
import axios from 'axios';
import './NewBlog.css'
class NewBlog extends Component {
  state = {
    title:"",
    content:"",
    author:"mike"
  }
  postDataHandler=()=>{
    const blog = {
      title:this.state.title,
      body:this.state.content,
      author:this.state.author
    }
    axios.post('/posts',blog)
         .then(response=>{
           console.log(response.data);
           this.props.history.push('/blogs')
         })
  }
  render () {
    return (
      <div className="new-blog">
        <h1>Add a new blog</h1>
        <div className="group">
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={(e)=>{this.setState({title:e.target.value})}}/>
        </div>
        <div className="group">
        <label>content</label>
        <textarea value={this.state.content} onChange={(e) => { this.setState({ content: e.target.value }) }} />    
        </div>
        <div className="group">
        <button onClick={this.postDataHandler}>Save</button>
        </div>
      </div>
    )
  }
}


export default NewBlog