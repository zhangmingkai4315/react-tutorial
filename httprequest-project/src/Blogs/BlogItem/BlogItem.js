import React from 'react';

const blogItems = (props) => {
    // console.log(props.post)
    return (
      <div className="post" onClick={props.chooseBlog}>
        <h3 className="post-title">{props.post.title}</h3>
        <p className="post-body">{props.post.body}</p>
        <p className="post-userid">User: {props.post.userId}</p>
      </div>
    )
}

export default blogItems;