import React from 'react';
import axios from 'axios';
class FullBlog extends React.Component {
  state = {
    blog:null,
    loading:true
  }
  componentDidUpdate = (prevProps)=>{
    if(prevProps.blogId===this.props.blogId){
      return
    }
    this.setState({loading:true})
    if(this.props.blogId){
      axios.get('/posts/'+this.props.blogId)
         .then(response=>{
          this.setState({blog:response.data,loading:false})
      })
    }
  }
  
  render() {
    let blogId = this.props.blogId;
    if (blogId === null) {
      return <p>Please select one blog first</p>
    }
    if(this.state.loading){
      return 'loading...'
    }else {
      return (
        <div className="full-blog">
          <h2>{this.state.blog.title}</h2>
          <p>{this.state.blog.body}</p>
          <button onClick={this.props.onDeleteBlog.bind(null,this.state.blog.id)}>Delete</button>
        </div>
        )
    }
  }
}

export default FullBlog;