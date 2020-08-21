import React from 'react'
import { Accordion, Button, Row } from 'react-bootstrap'


export default function Budget() {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Toggle className="btn-block text-uppercase accordion-header text-railway" eventKey="0">
                    <span>Income</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <p>This is the income accordion!</p>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Toggle className="btn-block text-uppercase accordion-header text-railway" eventKey="1">
                    <span>Savings</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <p>This is the savings accordion!</p>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="2">
                <Accordion.Toggle className="btn-block text-uppercase accordion-header text-railway" eventKey="2">
                    <span>Expenses</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <p>This is the expenses accordion!</p>
                </Accordion.Collapse>
            </Accordion>
        </div>
    )
}
