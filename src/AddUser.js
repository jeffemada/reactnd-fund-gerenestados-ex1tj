import React, { Component } from "react";
import PropTypes from "prop-types";

class AddUser extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: ""
    },
    userExists: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(currentState => ({
      ...currentState,
      user: { ...currentState.user, [name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.state;
    const usernameAlredyExists = this.exists(user.username);

    if (!usernameAlredyExists) {
      this.props.onAddUser(user);
      this.setState({
        user: {
          firstName: "",
          lastName: "",
          username: ""
        },
        userExists: false
      });
    }

    this.setState({ userExists: usernameAlredyExists });
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === "" || lastName === "" || username === "";
  };

  exists = username => {
    const user = this.props.users.find(user => user.username === username);
    return user ? true : false;
  };

  render() {
    const { user, userExists } = this.state;

    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={user.firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={user.lastName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={this.handleInputChange}
          />
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        <p className="error">
          {userExists ? "Username is alredy been used by another user!" : ""}
        </p>
      </div>
    );
  }
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default AddUser;
