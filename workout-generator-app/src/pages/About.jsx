import React from "react";
import Jumbotron from "../components/Jumbotron";
import {ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";

function About() {
    const pageTitle = "About Us"
    return (
        <>
            <Jumbotron jumbotronClass={"bg-dark text-white jumbo-about"} jumbotronHeading={pageTitle}>
                <Row>
                    <Col md={{offset: 4, span: 4}} lg={{offset: 4, span: 4}} xl={{offset: 4, span: 4}}>
                        <ListGroup>
                            <ListGroupItem variant="primary">This is a simple app that generates a workout for you.</ListGroupItem>
                            <ListGroupItem variant="primary">You can choose the type of workout you want to do.</ListGroupItem>
                            <ListGroupItem variant="primary">You can also choose the number of exercises you want to do.</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>

            </Jumbotron>
        </>
    )
}

export default About;