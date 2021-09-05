import React, { Component } from "react";

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.id});
  }
  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Blog Id:
            <input type="text" value={this.state.id} onChange={this.handleChange} />
          </label>
          <label>
            Title:
            <input type="text" value={this.state.title}  onChange={this.handleChange}/>
          </label>
          <label>
            Description:
            <input type="text" value={this.state.description} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Forms;
