import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"
import { Accordion, Card, Button } from "react-bootstrap"

const Accordions = () => {
  const [open, setOpen] = useState(0)

  return (
    <>
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
    </>
  )
}

export default Accordions
