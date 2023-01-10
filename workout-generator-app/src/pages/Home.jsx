import React from "react";
import Jumbotron from "../components/Jumbotron";
import {Button, ButtonGroup} from "react-bootstrap";

function Home() {
    const pageTitle = "Workout Generator App"
    return (
        <>
            <Jumbotron jumbotronClass={"bg-dark text-white jumbo-home"} jumbotronHeading={pageTitle}>
                <ButtonGroup>
                    <Button variant="info" size="lg" href="/about">About</Button>
                    <Button variant="info" size="lg" href="/generator">Generator</Button>
                </ButtonGroup>
            </Jumbotron>
        </>
    )
}

export default Home;