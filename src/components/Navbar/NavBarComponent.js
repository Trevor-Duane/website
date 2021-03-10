import React from 'react';
import {Container, Row, Col, Navbar, Nav, Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/Fort-logo.png'
import { BsSearch } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {IconContext} from 'react-icons';
import './NavStyles.css';
// import { NavbarSection, Logo, LogoText, UIList, ListItem, Anchor } from './NavStyle.js';


const NavBarComponents = () =>{
    
    return(
       <div>
           <Container fluid className="no-gutters main-nav">
                <Row>
                
                    <Col md={5} className="logo-text ml-0 d-flex">
                        <Navbar variant="dark">
                             <Navbar.Brand href="#home" className="d-flex">
                              <img alt="logo" src={ logo } style={{ width:"150px", height:"120px" }} className="d-inline-block align-top"/>
                              <h2 className="font-weight-bold" style={{ color:"#18500F", top:"40px", position:"relative", left:"20px", fontSize:"32px", lineHeight:"30px", textAlign:"left" }}>FORT PORTAL<br></br>CITY COUNCIL</h2>
                            </Navbar.Brand>
                        </Navbar>
                        {/* <img src={ logo } atl="fort Portal Logo" style={{ right:"0px", width:"200px", height:"180px", position:"relative" }}/>
                        <h2 className="font-weight-bold" style={{ color:"#18500F", top:"45px", position:"relative", left:"0" }}>Fort Portal<br></br>City Council</h2> */}
                    </Col>

                    <Col md={7} className="mt-3 p-2 ">

                        <Row className="d-inflex justify-content-start" style={{ borderBottom:"1px solid #dcdcdc" }}>
                            <Col>
                                <div className="ml-0">
                                    <Button className="button1" variant="transparent">Login/Create Account</Button>
                                </div>
                            </Col>
                            
                            <Col>
                                <div>
                                    <div className="box">
                                    <div className="container-2">
                                        <span className="icon"><i><BsSearch /></i></span>
                                        <input type="search" id="search" placeholder="Search..." />
                                    </div>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className="justify-content-end social">
                                    {/* <img src={ facebook } alt="search" style={{ width:"15px", height:"15px" }}/> */}
                                    <IconContext.Provider value={{ color:"blue", size:"14px" }}>
                                        <FaFacebookF />
                                    </IconContext.Provider>
                                    &nbsp; &nbsp;
                                    <IconContext.Provider value={{ color:"#00bfff", size:"14px" }}>
                                        <FaTwitter />
                                    </IconContext.Provider>
                                    &nbsp; &nbsp;
                                    <IconContext.Provider value={{ color:"ff0000", size:"14px" }}>
                                        <FaYoutube />
                                    </IconContext.Provider>
                                    &nbsp; &nbsp;
                                    <IconContext.Provider value={{ color:"#1e90ff", size:"14px" }}>
                                        <FaLinkedin />
                                    </IconContext.Provider>
                                    &nbsp; &nbsp;
                                
                                    {/* <img src={ twitter } alt="search" style={{ width:"15px", height:"15px" }}/> */}
                                    {/* <img src={ search} alt="search" style={{ width:"15px", height:"15px" }}/> */}
                                </div>
                            </Col>
                             
                        </Row>
                        
                        <Row className="mt-2 text-align-right">
                            <Nav className="text-align-right navv" activeKey="/home">
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
                            </Nav>
                        </Row>
                    </Col>
                </Row>

           </Container>


       </div>

    );
}

export default NavBarComponents;