import React from "react"
import data from "../../yourdata"
import { Accordion, useAccordionToggle, Card, Button } from "react-bootstrap"
// import Fade from "react-reveal/Fade"

const Accordions = () => {
  return (
    <section className="wp-accordions-wrapper">
      {data.workProjectsEquipment.map(mywork => (
        <>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  as={Button}
                  variant="link"
                  eventKey={mywork.id}
                >
                  {mywork.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={mywork.id}>
                <Card.Body> {mywork.description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
      ))}
    </section>
  )
}

export default Accordions
