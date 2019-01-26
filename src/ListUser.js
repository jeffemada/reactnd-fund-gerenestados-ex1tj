import React, { Component } from "react";
import PropTypes from "prop-types";

class ListUser extends Component {
  state = {
    showGamesPlayed: false
  };

  toggleGamesPlayedPanel = () => {
    this.setState(currentState => ({
      showGamesPlayed: !currentState.showGamesPlayed
    }));
  };

  render() {
    const { users } = this.props;
    const { showGamesPlayed } = this.state;

    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? "Hide " : "Show "}the Number of Games Played
        </button>
      </div>
    );

    return (
      <div>
        <h1>List of users:</h1>
        {users && users.length > 0 ? gamesPlayedButton : ""}
        <ol>
          {users.map(user => (
            <li key={user.username}>{`${user.username} played ${
              showGamesPlayed ? user.numGamesPlayed : "*"
            } games.`}</li>
          ))}
        </ol>
      </div>
    );
  }
}

ListUser.proptypes = {
  users: PropTypes.array.isRequired
};

export default ListUser;
