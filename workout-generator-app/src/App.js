import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Generator from "./pages/Generator";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            activeKey: window.location.pathname
        }
    }

  render() {
      return (
          <Router>
              <div>
                  <Navbar bg="dark" variant="dark">
                      <Container>
                          <Navbar.Brand href="/">Workout Generator</Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto" activeKey={this.state.activeKey}>
                                  <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
                                  <Nav.Link href="/generator" eventKey="/generator">Generator</Nav.Link>
                              </Nav>
                          </Navbar.Collapse>
                      </Container>
                  </Navbar>
              </div>
              <Routes>
                  <Route index path="/" element={<Home />}/>
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/generator" element={<Generator />} />
              </Routes>
          </Router>
          // <div>
          //     <Jumbotron
          //         jumbotronClass="jumbotron jumbotron-fluid"
          //         jumbotronHeading="Workout Generator"
          //     />
          // </div>
      );
  }
}

export default App;