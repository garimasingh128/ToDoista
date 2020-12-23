import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  ErrorNotify(message) { toast.error(message) };

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    try {
      axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err)
          this.ErrorNotify("Failed to add user")
        });
    } catch (err) {
      console.log(err)
      this.ErrorNotify("Failed to add user")
    }

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                minLength={3}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
