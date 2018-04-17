import React, { Component } from "react";

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
        console.log(data);
        this.setState({ members: data });
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
              <img
                src={member.avatar_url}
                key={member.id}
                alt={member.login}
                height="150"
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
