import React from 'react';
import {Navbar, Nav, Modal,Form,Button,Image,ListGroup, Card, CardDeck } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


function Footer() {

    return (

        <div className="footer">
           
            <Button Variant="primary" type="submit" className="ctg-btn-primary contact-us-submit">Sign In</Button>
            <Navbar className="navbar-1 footer-icon-wrapper">
                {/* <Navbar.Brand href="/" className="paddingL0"><i className="fa fa-envelope-o"><span>abc@ctginfotech.com</span></i></Navbar.Brand>
                <Navbar.Brand href="/"><i className="fa fa-phone"><span>+11 1-111-111-111</span></i></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="header-navbar-1" />
                <Navbar.Collapse id="header-navbar-1" className="justify-content-center footer-icons">
                    <Nav>
                        <Nav.Link href="/"><i className="fa fa-facebook"></i></Nav.Link>
                        <Nav.Link href="/"><i className="fa fa-twitter"></i></Nav.Link>
                        <Nav.Link href="/"><i className="fa fa-linkedin"></i></Nav.Link>
                        <Nav.Link href="/"><i className="fa fa-youtube-play"></i></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Card className="footer-copyright">
                <Card.Body>
                    Copyright @2020 somecontent goes here
                    </Card.Body>
            </Card>
               
         
          
        </div>

    )

}
export default Footer;