import React, {Component} from 'react';

class AddUser extends Component {
  state = {
	firstName: '',
    lastname: '',
    username: ''
  };

 updateFisrtName = (value) => {
 	this.setState({firstName: value});
 };

  updateLastName = (value) => {
 	this.setState({lastname: value});
 };

  updateUserName = (value) => {
 	this.setState({username: value});
 };
  
  render() {
    const {firstName, latName, userName} = this.state;

    return (
      <div>
        <form>
          <input type="text" placeHolder="First name" value={firstName} onChange={(event) => this.updateFisrtName(event.target.value)} />
          <input type="text" placeHolder="Last name" value={latName} onChange={(event) => this.updateLastName(event.target.value)} />
          <input type="text" placeHolder="Username" value={userName} onChange={(event) => this.updateUserName(event.target.value)} />
        <button type="submit" onclick={this.props.add({})}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;