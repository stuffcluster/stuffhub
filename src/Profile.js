import React, { Component } from "react";
import styled from 'styled-components';

const getRepos = (member) => {
  fetch(`https://api.github.com/users/${member}/repos`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(e => console.log(e));
}

const Image = styled.div`
  margin: 4px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  transition: all .5s ease;
  color: white;
  text-shadow: 0 0 25px black;
  &:hover {
    color: transparent;
    text-shadow: none;
    background-size: 400%;
    background-position: 50% 50%;
    transition: all .5s ease;
    }
  &:active {
    color: white;
    text-shadow: none;
    background-size: 300%;
    background-position: 50% 50%;
    }
`

const Name = styled.p`
  font-family: Helvetica Neue;
  color: inherit;
  text-shadow: inherit;
  overflow-wrap: break-word;
  text-align: center;
  width:150px;
`

const Link = styled.a`
  display: block;
  text-decoration: none;
  width: 150px;
  `


class Profile extends Component{
  state = {
    stuffclusterRepos: null
  }

  render(){
  return (
    <Link href="http://google.com">
      <Image
        id={this.props.member}
        image={this.props.avatar}
      >
        <Name>{this.props.member}</Name>
      </Image>
    </Link>
    )}
  }


export default Profile;
