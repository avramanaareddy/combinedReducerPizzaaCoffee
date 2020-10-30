import React, { Component } from "react";
import { connect } from "react-redux";

class AddCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    console.log(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  onSubmit(e) { 
    e.preventDefault();
    console.log(e);
    console.log(this.state.name);
    const { coffee } = this.state;
    console.log(coffee);
    this.props.dispatch({ type: "ADD_COFFEE", payload: { name: coffee } });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Add Coffee:</label>
          <br />
          <input
            type="text"
            name="coffee"
            value={this.state.coffee}
            onChange={this.onChange}
          />

          <input type="submit" value="Add Coffee" />
        </form>
        <hr />
      </div>
    );
  }
}

export default connect(null)(AddCoffee);
