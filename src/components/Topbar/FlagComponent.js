import React from 'react';
import {Container} from 'react-bootstrap';
import './TopStyle.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const FlagComponent = () =>{

    return(
        <div>
            <Container fluid className="black"></Container>
            <Container fluid className="yellow" ></Container>
            <Container fluid className="red" ></Container>
        </div>
    )
}


export default FlagComponent;