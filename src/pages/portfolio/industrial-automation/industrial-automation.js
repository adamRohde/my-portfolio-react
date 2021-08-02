import React from "react"

const WorkProjects = () => {
  return (
    <section id="industrialautomation">
      {/* <Header title={"Industrial Automation"} /> */}
      <h2>Industrial Automation</h2>
      <div className="ia-grid">
        <p>
          For 13 years I have worked in the field of industrial automation. This
          is where I began programming. Below are a few projects I created while
          working in this field.
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
                target="_blank"
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
