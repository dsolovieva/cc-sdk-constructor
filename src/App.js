import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Header from './components/Header';
import Editor from './components/Editor/Editor';
import Viewer from './components/Viewer/Viewer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Row className="align-items-start">
          <Col sm="7">
            <Editor />
          </Col>
          <Col sm="5">
            <Viewer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
