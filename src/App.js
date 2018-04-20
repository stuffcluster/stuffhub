import React, { Component } from "react";
import Profile from "./Profile.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null
    };
  }
  componentWillMount = () => {
    fetch("https:api.github.com/orgs/stuffcluster/public_members")
      .then(response => response.json())
      .then(data => {
        // const member_names = data.map(userObject => userObject.login);
        this.setState({ members: data});
      })
      .catch(e => console.log(e));
  };

  render() {
    const { members } = this.state;
    return (
      <div>
        {members ? (
          members.map(member => {
            return (
                <Profile 
                  member={member.login}
                  avatar={member.avatar_url}
                  key={member.id}
                />
            );
          })
        ) : (
          <div>data pending</div>
        )}
      </div>
    );
  }
}

export default App;
