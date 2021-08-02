import React from "react"

const WorkProjects = () => {
  return (
    <section id="industrialautomation">
      {/* <Header title={"Industrial Automation"} /> */}
      <h2>Industrial Automation</h2>
      <div className="ia-grid">
        <p>
          For 13 years I have worked in the field of industrial automation.
          Working in this field was my first introduction to writing code. More
          and more this world is merging with IT and high-level programmming
          lanagues. Also, the new trend has become going away from native IDEs
          and instead look to web technologies. Below is examples of projects I
          have worked on that exhibits some of this integration of Industrial
          Automation and more traditional IT technologies.
          <br></br>
          <br></br>
          <ul>
            <li>
              Android app that allows workers to find relevant production data
              from a machine
            </li>
            <br />
            <li>C Program for Bosch XDK IoT Device</li>
            <br />
            <li>
              WPF C# Application for serial commissioning of the safety
              parameters for a Rexroth servo drive
            </li>
            <br />
            <li>
              VBA application that formats XML data to work as OPC UA driver
              <br />
              <br />
              <a
                className="btn btn-primary"
                href="https://github1s.com/adamRohde/OPC-Driver-Sheet-Builder-Files/blob/HEAD/Class%20Modules/Class1.cls"
              >
                Repo
              </a>
            </li>
          </ul>
        </p>
      </div>
    </section>
  )
}

export default WorkProjects
