import React from 'react';
import {Container, Row, Col, Navbar, Nav, Button, NavbarBrand} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/Fort-logo.png'
import { BsSearch } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {IconContext} from 'react-icons';
import './NavBarTest.css';



const NavBarTest = () =>{
    
    return(
       <div>
           <section className="navBar-main">

               <div className="logo-name">
                   <div className="the-logo">
                       <Navbar.Brand>
                           <img src={ logo } style={{ width:"150px", height:"120px" }} className="citylogo" alt="fortportal city logo"/>
                       </Navbar.Brand>
                   </div>
                   <div className="the-name">
                       <h2 className="font-weight-bold" style={{ color:"#18500F", top:"40px", position:"relative", left:"20px", fontSize:"32px", lineHeight:"30px", textAlign:"left" }}>FORT PORTAL<br></br>CITY COUNCIL</h2>
                   </div>

               </div>

               <div className="all-links">
                   <div className="top-links d-xs-none">
                       <div className="signup-section">
                           <Button className="account-button" variant="transparent">Login/Create Account</Button>

                       </div>

                       <div className="search-button">
                           <span className="icon"><i><BsSearch /></i></span>
                            <input type="search" id="search" placeholder="Search..." />

                       </div>

                       <div className="social-links">
                            <IconContext.Provider value={{ color:"blue", size:"14px" }}>
                                <FaFacebookF className="social-linkk"/>
                            </IconContext.Provider>
                            &nbsp; &nbsp;
                            <IconContext.Provider value={{ color:"#00bfff", size:"14px" }}>
                                <FaTwitter className="social-linkk" />
                            </IconContext.Provider>
                            &nbsp; &nbsp;
                            <IconContext.Provider value={{ color:"ff0000", size:"14px" }}>
                                <FaYoutube className="social-linkk"/>
                            </IconContext.Provider>
                            &nbsp; &nbsp;
                            <IconContext.Provider value={{ color:"#1e90ff", size:"14px" }}>
                                <FaLinkedin className="social-linkk" />
                            </IconContext.Provider>
                            &nbsp; &nbsp;

                       </div>

                   </div>

                   <div className="bottom-links" id="mytogglernav">
                        <Navbar collapseOnSelect expand="lg" variant="light">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mynavbar" activeKey="/home">
                                        <Nav.Item>
                                            <Nav.Link className="navv-link" href="/home">Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="navv-link" eventKey="link-1">About Us</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="navv-link" eventKey="link-2">Departments</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="navv-link" eventKey="link-3">Jobs/Tenders</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="navv-link" eventKey="link-3">Services</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="navv-link" eventKey="link-3">Publications</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="navv-link" eventKey="link-3">Contact Us</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                    

                   </div>
               </div>
           </section>
          
       </div>

    );
}

export default NavBarTest;