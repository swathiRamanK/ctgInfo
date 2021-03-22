import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Modal } from 'react-bootstrap';

function Header() {
    
   
  
    let name = 'Log In/SignUp';
    // localStorage.getItem("userName") ?  localStorage.getItem("userName") :

    return (
        <div className="header-section">
            <Navbar className="navbar-1">
                <Navbar.Brand href="/"><i className="fa fa-envelope-o"><span>abc@ctginfotech.com</span></i></Navbar.Brand>
                <Navbar.Brand href="/"><i className="fa fa-phone"><span>+11 1-111-111-111</span></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="header-navbar-1" />
                <Navbar.Collapse id="header-navbar-1" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/"><i className="fa fa-facebook"></i></Nav.Link>
                        <Nav.Link href="/"><i className="fa fa-twitter"></i></Nav.Link>
                        <Nav.Link href="/"><i className="fa fa-linkedin"></i></Nav.Link>
                        <Nav.Link href="/"><i className="fa fa-youtube-play"></i></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Navbar expand="lg" className="navbar-2">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="header-navbar-2" />
                <Navbar.Collapse id="header-navbar-2" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Meet-the-team">Meet The Team</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Services">Placeholder</Nav.Link>
                        <Nav.Link href="/Services">Placeholder</Nav.Link>
                        <Nav.Link href="/Contact-Us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/timesheet">
    {name}<i className="fa fa-user"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Navbar>
        </div>
    );
}

export default Header;