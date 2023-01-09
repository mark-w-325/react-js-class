import React from "react";
// import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function LandingJumbotron() {
    return (
        <div className="jumbotron jumbotron-landing d-flex align-items-center min-vh-100" style={{fontFamily: "Raleway"}}>
            <Container className="text-center">
                <h1 className="display-4" style={{fontSize: "6.2em"}}>
                    <FontAwesomeIcon icon={solid('wallet')} /> Pocketbook
                </h1>
                <p className="lead">No card, No Problem!</p>
            </Container>
            <hr className="my-4" />
        </div>
    );
}

export default LandingJumbotron;