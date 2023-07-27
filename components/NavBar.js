/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import SignOut from './SignOut';

export default function NavBar() {
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
        <div id="signout-btn">
          <SignOut />
        </div>
      </Container>
    </Navbar>
  );
}
