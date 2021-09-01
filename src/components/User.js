import React from "react";
import { useAPI } from "../contexts/apiContext";
import { Link } from 'react-router-dom';

import './styles.css';
import FeatherIcon from 'feather-icons-react';
import yellowMarker from '../assets/yellow.png';

export default function User() {
  const { user } = useAPI();
  
  return (
    <div className="user-container">
      
      <section className="header">
        <span>#{user.login}</span>
        <Link to ='/' className = "sair">
          <text>Sair </text>
          <FeatherIcon icon="log-out" className = "log-out"></FeatherIcon>
        </Link>
      </section>
      
      <section className="avatar-container">
        <img className="avatar" src={user.avatar_url} alt="alternatetext"></img>
      </section>

     
      <section className="name-container">
        <img src={yellowMarker} className="yellow-marker"/>
        <h1>{user.name}</h1>
      </section>

      <section className="contact-container">
        <span>{user.email}</span>
        <span>{user.location}</span>
      </section>

      <section className="navbar">
        <Link to = '/seguidores' className="navText">{user.followers}<span>Seguidores</span></Link>
        <Link to = '/seguindo' className="navText">{user.following}<span>Seguindo</span></Link>
        <Link to = '/repositorios' className="navText">{user.public_repos}<span>Repos</span></Link>
      </section>

      <section className="bio-container">
        <img src={yellowMarker} className="yellow-marker"/>
        <h1>Bio</h1>
      </section>

      <text className = "bio-text">{user.bio}</text>
      
    </div>
  );
}