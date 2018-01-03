import React from 'react';
import axios from 'axios';
class FullBlog extends React.Component {
  state = {
    blog:null,
    loading:true
  }
  componentDidMount = (prevProps)=>{
    let id = this.props.match.params.id;
    // if(prevProps.blogId===this.props.blogId){
    //   return
    // }
    this.setState({loading:true})
    if (id) {
      axios.get('/posts/'+id)
         .then(response=>{
          this.setState({blog:response.data,loading:false})
      })
    }
  }
  
  render() {
    if(this.state.loading){
      return 'loading...'
    }else {
      return (
        <div className="full-blog">
          <h2>{this.state.blog.title}</h2>
          <p>{this.state.blog.body}</p>
         
        </div>
        )
    }
  }
}

export default FullBlog;