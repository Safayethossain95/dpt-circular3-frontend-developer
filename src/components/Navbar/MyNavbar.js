import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import './MyNavbar.scss'
import { FaRegBell } from "react-icons/fa";
const MyNavbar = () => {
  return (
    <>
        <div className="mynavbar">
        <Navbar expand="lg" className="">
      <Container>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#link">Master Price</Nav.Link>
            <Nav.Link href="#link">Custom Price Price</Nav.Link>
            <Nav.Link href="#link">Calendar Price</Nav.Link>
            <Nav.Link href="#link">Reports</Nav.Link>
          </Nav>
          <div className="rightside">
          <FaRegBell />
            <img src="./images/profile.png" alt="" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>    
    </>
  )
}

export default MyNavbar