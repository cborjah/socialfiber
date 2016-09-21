import React, { Component } from 'react';


class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    // this.setState({ })
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder="Username" required/>
          <input placeholder="Password" required/>
        </form>
        <span>
          <button type="submit">Create Account</button>
        </span>
      </div>
    );
  }
}

export default CreateUser;
