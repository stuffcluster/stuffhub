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
        // console.log(data);
        // let member_names = data.map(name => {return data.login})
        let member_names = [];
        for (let i = 0; i < data.length; i++) {
          // console.log(data[i].login);
          member_names.push(data[i].login);
        }
        this.setState({ members: member_names});
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
              // <img
              //   src={member.avatar_url}
              //   key={member.id}
              //   alt={member.login}
              //   height="150"
              // />
              <div key={member}>
                <Profile member = {member}/>
              </div>
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
