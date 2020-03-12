import React from "react";
import Post from "./Post";
import { Header, } from "semantic-ui-react";
import PostForm from "./PostForm";

class Blog extends React.Component {
  state = {
    posts: [
      { id: 1, title: "Cats", body: "I love cats." },
      { id: 2, title: "Utah", body: "This is where I live." },
      { id: 3, title: "React", body: "React is so awesome!" },
    ]
  };

  renderPosts = () => {
    return this.state.posts.map( post => <Post key={post.id} {...post} edit={this.editPost} />)
  };
  editPost = (postData) => {
    const posts = this.state.posts.map( post => {
      if (post.id === postData.id)
        return postData;
      return post
    });
    this.setState({ posts, });
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  
  addPost = (postData) => {
    const { posts, } = this.state;
    const post = { id: this.getId(), ...postData, };
    this.setState({ posts: [post, ...posts], });
  };
  
  render() {
    return (
      <div>
        <Header as="h1">Blog</Header>
        <PostForm  add={this.addPost} />
        { this.renderPosts() }
      </div>
    )
  }
}

export default Blog;