import React, { Component } from "react";
import Child from "./Child";
import Forms from "./Forms";
export class Parent extends Component {
  constructor() {
    super();
    let blog = JSON.parse(localStorage.getItem("blogs")) ;
    let comment = JSON.parse(localStorage.getItem("comments"));
    this.state = {
      blogs: blog?.length > 0 ? blog : [],
      comments: comment?.length > 0 ? comment : [],
    };
    this.updateUIblog = this.updateUIblog.bind(this);
    console.log(this.state);
  }

  updateUIblog(value) {
    console.log(value);
    this.setState({blogs: value});
  }
  render() {
    return (
      <div>
        <Forms updateView={this.updateUIblog}></Forms>
        {this.state.blogs.map((blog) => (
          <div key={blog.id}>
            <h1>Blog: {blog.title}</h1>
            <Child ids={blog.id} comments={this.state.comments}></Child>
          </div>
        ))}
      </div>
    );
  }
}

export default Parent;
