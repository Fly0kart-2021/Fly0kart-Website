import React, { useState } from "react";
import logo from "./logo.png";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar1 = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#fff",
        padding: "0.5rem 3rem 0.5rem 3rem",
      }}
      className="shadow-sm rounded"
    >
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="130"
          height="42"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end"
        style={{ width: "100%" }}
      >
        <Nav className="ml-auto">
          {/* <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link> */}
          <Link style={{padding: "0.5rem 0.5rem", color: "#000", textDecoration: 'none'}} to="/">Home</Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Link style={{padding: "0.5rem 0.5rem", color: "#000", textDecoration: 'none'}} to="/about">About Us</Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
