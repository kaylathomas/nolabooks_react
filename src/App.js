import React from 'react';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Image, Tab, Tabs } from 'react-bootstrap'

// GRAPHICS
import nolaBooksLogoOrange from "./components/images/NolaBooksLogoOrangeText.png"

// COMPONENTS
import Budget from "./components/budget/Budget"

function App() {
  return (
    <div>
      <Container fluid>
        <Row className="pt-3 mx-5">
          <Col md={6}>
            <i className="fa fa-calendar float-left fa-2x top-icons" aria-hidden="true"></i>
          </Col>
          <Col md={6}>
            <i class="fa fa-cog fa-2x top-icons float-right" aria-hidden="true"></i>
          </Col>
        </Row>
      </Container>
      <Row>
        <Image className="nolabooks-logo pt-2 pb-4" src={nolaBooksLogoOrange} />
      </Row>
      <Row>
        <Container>
          <div className="budget-border-box">
            <Container fluid>
              <div className="p-4">
                <Tabs defaultActiveKey="Budget" className="tab-heading">
                  <Tab eventKey="Budget" title="Budget">
                    <div className="pt-3">
                      <Budget />
                    </div>
                  </Tab>
                  <Tab eventKey="Breakdown" title="Breakdown">
                    <div className="pt-3">
                      This is tab 2
                    </div>
                  </Tab>
                  <Tab eventKey="Goals" title="Goals">
                    <div className="pt-3">
                      This is tab 3
                    </div>
                  </Tab>
                  <Tab eventKey="Export" title="Profile">
                    <div className="pt-3">
                      This is tab 4
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Container>
          </div>
        </Container>
      </Row>
      
    </div>
  );
}

export default App;
