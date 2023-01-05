import React from "react";
import '../App.css';

function Welcome(props) {
    const date = new Date();
    const hour = date.getHours();
    const display = true;
    let timeOfDay;
    let classNameValue;

    if (hour < 12) {
        timeOfDay = "morning";
        classNameValue = "Morning";
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = "afternoon";
        classNameValue = "Afternoon";
    } else {
        timeOfDay = "night";
        classNameValue = "Night";
    }

    return (
        <div>
            <h1>Welcome {props.first} {props.last}!</h1>
            {
                display ?
                    <p className={classNameValue}>Good {timeOfDay}!</p> :
                    null
            }

        </div>
    )
}

export default Welcome;