import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Modal,Image } from 'react-bootstrap';
import Logo from './images/Logo.jpg';


function Header() {
    
   
  
    let name = 'Log In/SignUp';
    // localStorage.getItem("userName") ?  localStorage.getItem("userName") :

    return (
        <div>
           
            <Navbar expand="lg" className="navbar-2">
                <Navbar.Brand href="/"><Image className="logo-header" src={Logo}></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="header-navbar-2" />
                <Navbar.Collapse id="header-navbar-2" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/Meet-the-team">MEET THE TEAM</Nav.Link>
                        <Nav.Link href="/Services">SERVICES</Nav.Link>
                        {/* <Nav.Link href="/Services">Placeholder</Nav.Link>
                        <Nav.Link href="/Services">Placeholder</Nav.Link> */}
                        <Nav.Link href="/Contact-Us">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
             
                <Navbar.Brand href="/Contact-Us" className="paddingL0 font-16"><i className="fa fa-envelope-o"><span className="paddingL5">talents@ctginfotech.co.in</span></i></Navbar.Brand>
              
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