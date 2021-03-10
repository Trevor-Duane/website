import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleRight } from "react-icons/fa";
import './news.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const NewsComponent = () =>{
    
    return(
        <div>
            <Container fluid className="main">
                <h3 className="city-news-head">City News</h3>

                
                    <div className="side-box">

                    </div>

                    <div className="the-newz">
                        <div className="headline">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="more">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </p>
                        </div>
                        <div className="button">
                            <Button className="news-button" href="#"><FaAngleRight/></Button>
                        </div>
                    </div>

                    <div className="the-newz">
                        <div className="headline">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="more">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </p>
                        </div>
                        <div className="button">
                            <Button className="news-button" href="#"><FaAngleRight/></Button>
                        </div>
                    </div>
                    <div className="the-newz">
                        <div className="headline">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="more">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </p>
                        </div>
                        <div className="button">
                            <Button className="news-button" href="#"><FaAngleRight/></Button>
                        </div>
                    </div>

                    <div className="the-newz">
                        <div className="headline">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="more">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </p>
                        </div>
                        <div className="button">
                            <Button className="news-button" href="#"><FaAngleRight/></Button>
                        </div>
                    </div>

            </Container>
            
        </div>
    )
}





export default NewsComponent;