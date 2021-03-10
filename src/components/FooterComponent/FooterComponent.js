import React from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/images/Fort-logo.png';
import yoya from '../../assets/images/yoya.svg';
import './footer.css';

const FooterComponent = () =>{

    return(
        <div>
            <Container fluid className="container-fluid footer-main">

                    <div className="logo">

                        <h2 className="head">Fort Portal City</h2>
                        <hr></hr>
                        <Image className="fort-logo" src={ logo } alt="fort-logo" />

                    </div>

                    <div className="faq">

                        <h2 className="head">FAQ's</h2>
                        <hr></hr>
                        <p>When are town council meetings help </p>
                        <p>What services are available to businesses </p>
                        <p>Who is required to have a business license</p>
                        <p>Do i nedd a permit to start work in the town's right-of-way </p>
                        <p>When is a building permit required</p>

                    </div>

                    <div className="links">

                        <h2 className="head">Useful Links</h2>
                        <hr></hr>
                        <p> Pay Taxes</p>
                        <p> Register Business</p>
                        <p> Find an office</p>

                    </div>

                    <div className="social">

                        <h2 className="head"> Social Media</h2>
                        <hr></hr>
                            <div className="fa-section">

                                <span className="social-link">
                                    <i className="facebook"><FaFacebookF /></i>
                                    <p>Facebook</p>
                                </span>

                                <span className="social-link">
                                    <i className="twitter"><FaTwitter /></i>
                                    <p>Twitter</p>
                                </span>

                                <span className="social-link">
                                    <i className="youtube"><FaYoutube /></i>
                                    <p>YouTube</p>
                                </span>

                                <span className="social-link">
                                    <i className="linkedin"><FaLinkedin /></i>
                                    <p>LinkedIn</p>
                                </span>
                                 
                                
                            </div>
            
                    </div>
    
            </Container>
                <span className="Yoya">
                    <Image src={ yoya } height="80" width="80" />Government Website by <a  className="yoya" href=""> YoyaConsultancy</a>
                 </span>
            
        </div>
    )
}





export default FooterComponent;