import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {Container, Col, Row, Form, Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import exercises from "../dummy_data/exercises";

const validationSchema = Yup.object().shape({
    workoutDuration: Yup.number(),
});

function WorkoutGeneratorForm() {
    const [workoutDuration, setWorkoutDuration] = React.useState(15);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [currentWorkout, setCurrentWorkout] = React.useState({});

    function handleSubmit(values) {
        setFormSubmitted(true);
        setWorkoutDuration(values.workoutDuration);
        const absArr = exercises.filter(exercise => exercise.type === "abs");
        const chestArr = exercises.filter(exercise => exercise.type === "chest");
        const cardioArr = exercises.filter(exercise => exercise.type === "cardio");
        const legsArr = exercises.filter(exercise => exercise.type === "legs");

        const absWorkout = absArr[Math.floor(Math.random() * absArr.length)];
        const chestWorkout = chestArr[Math.floor(Math.random() * chestArr.length)];
        const cardioWorkout = cardioArr[Math.floor(Math.random() * cardioArr.length)];
        const legsWorkout = legsArr[Math.floor(Math.random() * legsArr.length)];
        const rounds = (workoutDuration / 5);
        const workout = {
            "rounds": rounds,
            "absName": absWorkout.name,
            "chestName": chestWorkout.name,
            "cardioName": cardioWorkout.name,
            "legsName": legsWorkout.name,
            "absReps": absWorkout.reps,
            "chestReps": chestWorkout.reps,
            "cardioReps": cardioWorkout.reps,
            "legsReps": legsWorkout.reps,
        };
        setCurrentWorkout(workout);
    }

    return (
        <Container fluid>
            <Formik
                validationSchema={validationSchema}
                onSubmit={ handleSubmit }
                initialValues={{
                    workoutDuration: 15
                }}>
                {
                    (
                        {
                            handleSubmit,
                            handleChange,
                            values,
                        }
                    ) => (
                        <Form noValidate onSubmit={ handleSubmit }>
                            <Row>
                                <Col
                                    md={{span: 4, offset: 4}}
                                    lg={{span: 4, offset: 4}}
                                    xl={{span: 4, offset: 4}}
                                    xxl={{span: 4, offset: 4}}
                                >
                                    <Form.Group controlId="workoutForm.ControlSelect">
                                        <Form.Label>How long would you like to workout?</Form.Label>
                                        <Form.Select
                                            name="workoutDuration"
                                            value={ values.workoutDuration }
                                            onChange={ handleChange } className="text-center">
                                            <option>15</option>
                                            <option>20</option>
                                            <option>25</option>
                                            <option>30</option>
                                            <option>35</option>
                                            <option>40</option>
                                            <option>45</option>
                                            <option>50</option>
                                            <option>55</option>
                                            <option>60</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button type="submit" variant="info">Generate Workout</Button>
                        </Form>
                    )
                }
            </Formik>
            {
                formSubmitted ? (
                    <>
                        <br />
                        <Row>
                            <Col md={{ offset: 4, span: 4 }} lg={{ offset: 4, span: 4 }} xl={{ offset: 4, span: 4 }}>
                                <Card bg="secondary">
                                    <Card.Header>{currentWorkout.rounds} rounds of:</Card.Header>
                                    <ListGroup varient="flush">
                                        <ListGroupItem>{currentWorkout.absName} for {currentWorkout.absReps} reps</ListGroupItem>
                                        <ListGroupItem>{currentWorkout.chestName} for {currentWorkout.chestReps} reps</ListGroupItem>
                                        <ListGroupItem>{currentWorkout.cardioName} for {currentWorkout.cardioReps} reps</ListGroupItem>
                                        <ListGroupItem>{currentWorkout.legsName} for {currentWorkout.legsReps} reps</ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </>
                ) : null
            }
        </Container>
    )
}

export default WorkoutGeneratorForm;