/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import SignOut from './SignOut';

export default function NavBar() {
  const { user } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>TEAM ROSTER</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
          </Nav>
        </Navbar.Collapse>
        <div id="user-profile">
          <Link passHref href="/userProfile">
            <img src={user.photoURL} alt="user" width="100rem" height="100rem" />
          </Link>
        </div>
        <div id="signout-btn">
          <SignOut />
        </div>
      </Container>
    </Navbar>
  );
}
