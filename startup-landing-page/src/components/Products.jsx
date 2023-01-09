import React from "react";
import {Container, Row, Col, ListGroup, Card} from "react-bootstrap";

const products = [
    {
        "id": 0,
        "header": "Cash-Out",
        "body1": "Cash-out body 1",
        "body2": "Cash-out body 2",
        "body3": "Cash-out body 3"
    },
    {
        "id": 1,
        "header": "Cash-In",
        "body1": "Cash-in body 1",
        "body2": "Cash-in body 2",
        "body3": "Cash-in body 3"
    },
    {
        "id": 2,
        "header": "DWaaS",
        "body1": "DWaaS body 1",
        "body2": "DWaaS body 2",
        "body3": "DWaaS body 3"
    }
]

function Products() {
    return (
        <Container>
            <div className="jumbotron products d-flex align-items-center min-vh-100" style={{fontFamily: "Raleway"}}>
                <Container className="text-center">
                    <h1 style={{fontSize: "4em"}}>Products</h1>
                    <br/>
                    {
                        products.map((item) =>
                            <Row key={item.id + 1}>
                                <Col key={item.id}
                                     // xs={{ offset: 8 }}
                                     // sm={{ offset: 8 }}
                                     // md={{ offset: 8 }}
                                     // lg={{ offset: 8 }}
                                     // xl={{ offset: 8 }}
                                     // xxl={{ offset: 8 }}
                                >
                                    <Card>
                                        <Card.Header>{item.header}</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{item.body1}</ListGroup.Item>
                                            <ListGroup.Item>{item.body2}</ListGroup.Item>
                                            <ListGroup.Item>{item.body3}</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                                <br />
                            </Row>
                        )
                    }
                </Container>
                <hr className="my-4"/>
            </div>
        </Container>
    )
}

export default Products;