import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import FullBlog from './FullBlog/FullBlog'
import axios from 'axios';
import Aux from '../HOC/Aux';

class Blogs extends React.Component {
  state = {
    posts:[],
    choosedBlogId : null
  }
  chooseBlog = (id) => {
    if (typeof id === 'number' && id > 0) {
      this.setState({choosedBlogId: id})
    }
  }
  deleteBlog = (id) => {
    console.log('delete ' + id)
    axios
      .delete('/posts/' + id)
      .then(response => {
        console.log(response)
      })
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
      <BlogItem key={post.id} post={post} chooseBlog={this.chooseBlog.bind(null, post.id)}/>
    ))
    return (
      <Aux>
        <div className="posts">
          {posts}
        </div>
        <FullBlog 
            blogId={this.state.choosedBlogId}
            onDeleteBlog={this.deleteBlog}/>
      </Aux>
    )
  }

}

export default Blogs;