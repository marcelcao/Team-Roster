/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div>
      <div className="home-nav">
        <img src="/logoTR.png" alt="icon" className="main-logo" />
        <Button type="button" size="lg" className="copy-btn" onClick={signIn}>Sign In</Button>
      </div>
      <div className="home-splash">
        <h1><i className="home-title">Team Roster</i> makes it easier</h1>
        <h2>to manage your organizations</h2>
      </div>
      <div className="home-info">
        <div id="info">
          <h3>CREATE</h3>
          <h4>create your favorite</h4>
          <h4>teams and organizations</h4>
        </div>
        <div className="info">
          <h3>READ</h3>
          <h4>view your personalized teams</h4>
        </div>
        <div className="info">
          <h3>UPDATE</h3>
          <h4>update your teams with members</h4>
        </div>
        <div className="info">
          <h3>DELETE</h3>
          <h4>delete and customize</h4>
          <h4>the members of your team</h4>
        </div>
      </div>
    </div>
  );
}

export default Signin;
