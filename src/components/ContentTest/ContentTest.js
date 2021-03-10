import React from 'react';
import {Col, Row, Image, Container, Carousel } from 'react-bootstrap';

import gulu from '../../assets/images/fcity1.png';
import tour from '../../assets/icons/tourism.svg'
import eservices from '../../assets/icons/eservices.svg'
import event from '../../assets/icons/event.svg'
import faq from '../../assets/icons/faq.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css'
import './hover.css'


const ContentTest = () =>{
    
    return(
        <div>
            <Container fluid>
                <Row className="main3">
                    <Col xs={12} sm={12} md={8} lg={8} className="fort-city">
                        <Carousel className="carousel-inner">
                            <Carousel.Item className="item" interval={1000}>
                                <img fluid noGutters
                                className="d-block w-100"
                                src={ gulu }
                                alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            
                            <Carousel.Item className="item" interval={1000}>
                                <img fluid noGutters
                                className="d-block w-100"
                                src={ gulu }
                                alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>

                            <Carousel.Item className="item" interval={1000}>
                                <img fluid noGutters
                                className="d-block w-100"
                                src={ gulu }
                                alt="First slide"
                                />
                                 {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4} className="fort-servicez">
                        <Row className="row1">
                            <Col className="touriszm">
                                <div className="iconz">
                                    <Image className="iconnz" src={ tour } alt="Tourism" />
                                </div>

                                <div className="head-p">
                                    <h2>Tourism</h2>
                                    <p>Visit most of fort portal's best places</p>
                                </div>

                            </Col>

                            <Col className="eservicez">
                                <div className="iconz">
                                    <Image className="iconnz" src={ eservices } alt="e-services" />
                                </div>

                                <div className="head-p">
                                    <h2>E-Services</h2>
                                    <p>A fully self-service experience</p>
                                </div>
                            
                            </Col>
                        </Row>

                        <Row className="row2">
                            <Col className="eventzs">
                                <div className="iconz">
                                    <Image className="iconnz" src={ event } alt="Events" />
                                </div>

                                <div className="head-p">
                                    <h2>Events</h2>
                                    <p>For all the activities in and around the city</p>
                                </div>
                            
                            </Col>

                            <Col className="faqsz">
                                <div className="iconz">
                                    <Image className="iconnz" src={ faq } alt="Asked questions" />
                                </div>

                                <div className="head-p">
                                    <h2>FAQ's</h2>
                                    <p>Quick answers to frequently asked questions</p>
                                </div>
                            
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
               

            </Container>
            
              
        
        </div>
    )
}





export default ContentTest;