import React from "react";
import {Container} from "react-bootstrap";


function Jumbotron(props) {
    return (
        // <Container>
            <div className={"jumbotron d-flex align-items-center min-vh-100 fluid" + props.jumbotronClass } style={{fontFamily: "Raleway"}}>
                <Container className="text-center">
                    <h1 style={{fontSize: "4em"}}>{ props.jumbotronHeading }</h1>
                    { props.children }
                </Container>
                <hr className="my-4"/>
            </div>
        // </Container>
    )
}

export default Jumbotron;