import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import axios from 'axios';
class Blogs extends React.Component {
  state = {
    posts:[]
  }
  componentDidMount() {
    axios.get("/posts")
         .then(response=>{
           let posts = response.data.slice(0,4);
           this.setState({posts:posts})
         })
         .catch(error=>{
           console.error(error)
         })
  }
  render(){
    let posts = this.state.posts.map(post=>(
      <BlogItem key={post.id} post={post} chooseBlog={this.props.chooseBlog.bind(null, post.id)}/>
    ))
    return (
      <div className="posts">
        {posts}
      </div>
    )
  }

}

export default Blogs;