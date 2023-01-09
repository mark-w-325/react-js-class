import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {Container} from "react-bootstrap";

const aboutUs = [
    {
        "id": 0,
        "header": "No Cards",
        "body": "No Card!"
    },
    {
        "id": 1,
        "header": "ATMS",
        "body": "Yeah, ATMS!"
    },
    {
        "id": 2,
        "header": "Kiosks",
        "body": "Yeah, Kiosks!"
    }
]

function AboutUs() {
    return (
        <Container>
            <div className="jumbotron about-us d-flex align-items-center min-vh-100" style={{fontFamily: "Raleway"}}>
                <Container className="text-center">
                    <h1 style={{fontSize: "4em"}}>About Us</h1>
                    <Accordion defaultActiveKey="0">
                        {
                            aboutUs.map((item) =>
                                <Accordion.Item eventKey={item.id} key={item.id}>
                                    <Accordion.Header>{item.header}</Accordion.Header>
                                    <Accordion.Body>{item.body}</Accordion.Body>
                                </Accordion.Item>
                            )
                        }
                    </Accordion>
                </Container>
                <hr className="my-4" />
            </div>
        </Container>
    )
}

export default AboutUs;