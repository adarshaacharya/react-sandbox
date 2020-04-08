import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from './UserHeader'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers(); // action creator
  }

  renderPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId} />
            </div>
       </div>
      );
    });
  }; 

  render() {
    return (
      <div>
        <div className="ui middle aligned divided list">
            {this.renderPosts()}
        </div>
      </div>
    );
  }
}

// Mapping state from reducer to PostList Component
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers: fetchPostsAndUsers, // mapping funcion of actions to PostList Component
})(PostList);

//connect(reducer, {actions})(Component)
 