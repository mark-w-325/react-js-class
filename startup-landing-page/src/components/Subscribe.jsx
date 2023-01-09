import React, {useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col, Alert} from "react-bootstrap";
import {Formik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
    }
);

function Subscribe() {
    const [subscribed, setSubscribed] = React.useState(false);

    function handleSubmit() {
        setSubscribed(!subscribed);
    }

    useEffect(() => {
        console.log(subscribed);
    }, [subscribed]);

    return (
        <Container>
            <div className="jumbotron d-flex align-items-center min-vh-100" style={{fontFamily: "Raleway"}}>
                <Container className="text-center jumbotron">
                    {
                        subscribed ?
                            <Alert key="success" variant="success">
                                Thanks for subscribing!
                            </Alert> : <Container className="text-center"><h1 style={{fontSize: "4em"}}>Subscribe</h1>
                                <br/>
                                <Row>
                                    <Col
                                        xs={{span: 8, offset: 2}}
                                        s={{span: 8, offset: 2}}
                                        md={{span: 4, offset: 4}}
                                        lg={{span: 4, offset: 4}}
                                        xl={{span: 4, offset: 4}}
                                        xxl={{span: 4, offset: 4}}
                                    >
                                        <Formik
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                            initialValues={{
                                                email: "",
                                            }}>
                                            {
                                                ({
                                                     handleSubmit,
                                                     handleChange,
                                                     values,
                                                     errors,
                                                 }) => (
                                                    <Form noValidate onSubmit={handleSubmit}>
                                                        <Form.Group controlId="validationFormikEmail">
                                                            <Form.Label>
                                                                Email
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                placeholder="Email"
                                                                name="email"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.email}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.email}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Row>
                                                            <div><br/></div>
                                                        </Row>
                                                        <Button type="submit">Subscribe</Button>
                                                    </Form>
                                                )
                                            }
                                        </Formik>
                                    </Col>
                                </Row>
                                <br/>
                            </Container>
                    }
                </Container>
            </div>
        </Container>
    )
}

export default Subscribe;