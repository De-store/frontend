import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css"

interface P { }

export const Header: React.FC<P> = (props) => {

  return (
    <Navbar bg="light" expand="sm" sticky="top">
      <Navbar.Brand href="/">DeStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#developers">Developers</Nav.Link>
          <Nav.Link href="/#users">Users</Nav.Link>
          <Nav.Link href="/profile">Your Apps</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
