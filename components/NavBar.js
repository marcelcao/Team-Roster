/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import SignOut from './SignOut';
import SearchBar from './Search';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>TEAM ROSTER</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/team">
              <Nav.Link>View Team</Nav.Link>
            </Link>
            <Link passHref href="/members/newMember">
              <Nav.Link>Add Member</Nav.Link>
            </Link>
            <SearchBar />
            <SignOut />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
