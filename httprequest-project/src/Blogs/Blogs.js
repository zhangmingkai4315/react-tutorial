import React from 'react';
import BlogItem from './BlogItem/BlogItem';

import axios from 'axios';
import Aux from '../HOC/Aux';
import Link from 'react-router-dom/Link';

class Blogs extends React.Component {
  state = {
    posts:[],
    choosedBlogId : null
  }
  // chooseBlog = (id) => {
  //   if (typeof id === 'number' && id > 0) {
  //     this.setState({choosedBlogId: id})
  //   }
  // }
  // deleteBlog = (id) => {
  //   console.log('delete ' + id)
  //   axios
  //     .delete('/posts/' + id)
  //     .then(response => {
  //       console.log(response)
  //     })
  // }
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
      <Link to={"/blogs/"+post.id}>
        <BlogItem key={post.id} 
                  post={post} />
      </Link>
    ))
    return (
      <Aux>
        <div className="posts">
          {posts}
        </div>
      </Aux>
    )
  }

}

export default Blogs;