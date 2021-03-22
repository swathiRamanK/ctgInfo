import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Modal } from 'react-bootstrap';

function Header() {
    
   
  
    let name = 'Log In/SignUp';
    // localStorage.getItem("userName") ?  localStorage.getItem("userName") :

    return (
        <div>
           
            <Navbar expand="lg" className="navbar-2">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="header-navbar-2" />
                <Navbar.Collapse id="header-navbar-2" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Meet-the-team">Meet The Team</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        {/* <Nav.Link href="/Services">Placeholder</Nav.Link>
                        <Nav.Link href="/Services">Placeholder</Nav.Link> */}
                        <Nav.Link href="/Contact-Us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
             
                <Navbar.Brand href="/" className="paddingL0 font-16"><i className="fa fa-envelope-o"><span>abc@ctginfotech.com</span></i></Navbar.Brand>
              
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