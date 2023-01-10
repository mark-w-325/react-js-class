import React from "react";
import Jumbotron from "../components/Jumbotron";
// import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import WorkoutGeneratorForm from "../components/GeneratorForm";

function Generator() {
    const pageTitle = "Workout Generator"
    return (
        <>
            <Jumbotron jumbotronClass={"bg-dark text-white jumbo-generator"} jumbotronHeading={pageTitle}>
                <WorkoutGeneratorForm/>
            </Jumbotron>
        </>
    )
}

export default Generator;