import React, { Component } from "react";

const getRepos = (member) => {
  fetch(`https://api.github.com/users/${member}/repos`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(e => console.log(e));
}

const Profile = (props) => {
  
  return (
    <div id={props.member}>
      <h3>{props.member}</h3>
    </div>
  )
}


export default Profile;
