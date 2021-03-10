import React from 'react';
import { Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import map from '../../assets/images/map.svg'
import city from '../../assets/images/building.svg'
import town from '../../assets/images/town.svg'
// import cityy from '../../assets/images/city-map.jpeg'
import './about.css'

const AboutComponent = () =>{

    return(
        <div>
            <div noGutters className="container-fluid all-about">

                <div className="for-map" >
                    <div className="about-icon">
                        <Image src={ map } alt="city map" className="the-icon"/>

                    </div>
                    <div className="about-foot">
                        <div className="about-head">
                            <h2>Fort Portal City Map</h2>
                        </div>
                        <div className="para-button">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                    </div>

                </div>

                <div className="for-city" >
                    <div className="about-icon">
                    <Image src={ city } alt="city map" className="the-icon"/>

                    </div>
                    <div className="about-foot">
                        <div className="about-head">
                            <h2>Major Fort portal City Name</h2>
                        </div>
                        <div className="para-button">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            <Button className="button" href="#">Read More</Button>
                        </div>
                    </div>

                </div>

                <div className="for-town" >
                    <div className="about-icon">
                    <Image src={ town } alt="city map" className="the-icon"/>

                    </div>
                    <div className="about-foot">
                        <div className="about-head">
                            <h2>Town Clerk</h2>
                        </div>
                        <div className="para-button">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            <Button className="button" href="#">Read More</Button>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    
    )
}





export default AboutComponent;