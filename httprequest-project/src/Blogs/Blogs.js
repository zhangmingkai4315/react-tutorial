import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import FullBlog from './FullBlog/FullBlog';
import { Route }from 'react-router-dom';
import axios from 'axios';
import Aux from '../HOC/Aux';
import Link from 'react-router-dom/Link';

class Blogs extends React.Component {
  state = {
    posts:[],
    choosedBlogId : null
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
        <Route path={this.props.match.url+"/:id"} exact component={FullBlog}/>
      </Aux>
    )
  }

}

export default Blogs;