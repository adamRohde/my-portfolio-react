import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"
import { Accordion, Card, Button } from "react-bootstrap"

const Accordions = () => {
  return (
    <section className="accordions-wrapper">
      {data.workProjectsEquipment.map(mywork => (
        <>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle
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
