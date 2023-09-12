import Navbar from 'react-bootstrap/Navbar';
import React, { Component, useState } from 'react';
import logo from '../assets/logo.png';
import './header.css';
import { Dropdown, Nav, Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Link } from 'react-router-dom'

import reactDom from 'react-dom';
function Header() {



  const [mp, setmp] = React.useState(false);
  const [sgm, setsgm] = React.useState(false);

  const closemodal = () => setmp(false);
  const closesignup = () => setsgm(false);
  const openmodal = () => setmp(true);
  const opensignup = () => setsgm(true);
  return (

    <div className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark" >
        <Navbar.Brand Link to="/Home"  ><b><img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top" />&nbsp;Old Town Cafe`</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="a" >

          <Nav  >

            <Nav.Link href="/"><b className="bold">Home</b></Nav.Link>

            <Nav.Link href="/galleries"><b className="bold">Galleries</b></Nav.Link>
            <Dropdown>
  <Dropdown.Toggle variant="dark" className="success1" id="dropdown-basic">
   <b><i>Services</i></b> 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/Services">Services</Dropdown.Item>
    <Dropdown.Item href="/Venue">Our Products</Dropdown.Item>
    <Dropdown.Item href="/News">Daily News</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            {/* <Nav.Link href="/venue"><b className="bold">Our Products</b></Nav.Link> */}

            {/* <Nav.Link href="/services"><b className="bold">Services</b></Nav.Link> */}
            <Nav.Link href="/menu"><b className="bold">Menu</b></Nav.Link>
            {/* <Nav.Link href="/news"><b className="bold">Daily News</b></Nav.Link> */}
            <Nav.Link href="/contact"><b className="bold">Contact</b></Nav.Link>
            <Dropdown>
  <Dropdown.Toggle variant="dark" className="success1" id="dropdown-basic">
   <b><i>Book venue</i></b> 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/create-student">Make Booking</Dropdown.Item>
    {/* <Dropdown.Item href="/Venue">Our Products</Dropdown.Item>
    <Dropdown.Item href="/News">Daily News</Dropdown.Item> */}
  </Dropdown.Menu>
</Dropdown>
            {/* <Link to={"/create-student"} className="nav-link">
                React MERN Stack App
              </Link>
              <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link> */}
            <Nav.Link onClick={openmodal}><b className="bold">login</b></Nav.Link>
            {/* <Button onClick={openmodal}>Login</Button> */}
            
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <Modal id="modallogin" show={mp} onHide={closemodal}>
        <ModalHeader closeButton onClick={closemodal}>login</ModalHeader>
        <ModalBody>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="checkbox">
              <label><input type="checkbox" /> Remember me</label>
            </div>
            <Link onClick={opensignup}>don't have an account? signup</Link>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closemodal}>close</Button>
          <Button type="submit">Submit</Button>

        </ModalFooter>
      </Modal>

      {/* 2nd modal */}

      <Modal id="modalsignup" show={sgm} onHide={closesignup}>
        <ModalHeader closeButton onClick={closesignup}>signup</ModalHeader>
        <ModalBody>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="form-group">
              <label for="pwd2">Confirm Password:</label>
              <input type="password" class="form-control" id="pwd2" />
            </div>


          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closesignup}>close</Button>
          <Button type="submit">Signup</Button>

        </ModalFooter>
      </Modal>



    </div>

  )


}

export default Header

