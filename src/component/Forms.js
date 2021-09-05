import React, { Component } from "react";

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
    };
    this.idChange =  this.idChange.bind(this);
    this.titleChange =  this.titleChange.bind(this);
    this.descChange =  this.descChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  idChange(event) {
    this.setState({id: event.target.value});
  }

  titleChange(event) {
    this.setState({title: event.target.value});
  }

  descChange(event) {
    this.setState({description: event.target.value});
  }


  handleSubmit(event) {
    if(this.state.id !=='' && this.state.title !=='' && this.state.description !==''){
      let data = JSON.parse(localStorage.getItem("blogs"));

      if( data?.length > 0) {
        data = data.filter(item => item.id != this.state.id);
      } else {
        data = [];
      }

      data.push({
        id: this.state.id,
        title: this.state.title,
        description: this.state.description,
      });
      localStorage.setItem('blogs',JSON.stringify(data));
      this.props.updateView(data);
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Blog Id:
            <input type="text" value={this.state.id} onChange={this.idChange} />
          </label>
          <label>
            Title:
            <input type="text" value={this.state.title}  onChange={this.titleChange} />
          </label>
          <label>
            Description:
            <input type="text" value={this.state.description} onChange={this.descChange} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Forms;
