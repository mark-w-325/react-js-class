import './App.css';
import React from "react";
// import Alert from 'react-bootstrap/Alert';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import {faHouse} from '@fortawesome/free-regular-svg-icons'
import LandingJumbotron from "./components/LandingJumbotron";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Subscribe from "./components/Subscribe";

class App extends React.Component {
    render() {
        return (
            <div>
                <LandingJumbotron />
                <AboutUs />
                <Products />
                <Subscribe />
            </div>
        );
    }
}

export default App;
