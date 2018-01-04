import React from 'react';
import axios from 'axios';
class FullBlog extends React.Component {
  state = {
    blog:null,
    loading:true
  }
  componentDidMount= (prevProps)=>{
    this.loadData()
  }
  componentDidUpdate=(prevProps, prevState)=> {
    this.loadData()
  }
  loadData = () => {
    let id = this.props.match.params.id;
    if (id) {
      if(!this.state.blog||(this.state.blog&& this.state.blog.id!== + id)){
        // this.setState({loading: true})
        axios.get('/posts/'+id)
         .then(response=>{
          this.setState({blog:response.data,loading:false})
          })
      }
    }
  }
  render() {
    let ret = <p>loading...</p>
    if(this.state.blog)
    ret= (
        <div className="full-blog">
          <h2>{this.state.blog.title}</h2>
          <p>{this.state.blog.body}</p>
         
        </div>
        )
    return ret 
    } 
}

export default FullBlog;