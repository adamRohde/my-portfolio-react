import React from "react"
import data from "../../yourdata"
// import Fade from "react-reveal/Fade"
// import { Link } from "react-scroll"

const About = () => {
  return (
    <div className="ia-about-wrapper">
      <p>
        {/* For the past 13 years I have been working in the field of industrial
        automation. During this time I have had 4 different positions for two
        companies. Support Engineer, Trainer, Applications Engineer and as of
        recently, Sr Applications Engineer.
        <br />
        <br /> */}
        Aside from writing PLC code, working in the field of industrial
        automation has given me the opportunity to work with many different
        technologies. I listed a few of my favorites below -
        <br />
        <br />
        - C# WPF Application to automate the restore process of electronic servo
        systems
        <br />
        <br />
        - Android App (Java) developed for a customer to show at Pack Expo. The
        app pulled production data off a machine that made secure pouches. The
        app also allowed for controlling certain operations of the machine
        <br />
        <br />
        - VBA application to parse XML data
        <br />
        <br />
        - C program written for the Bosch XDK sensor. The program logged
        vibration, acoustic data off machines to determine how well they were
        running
        <br />
        <br />
      </p>
      {/* Username: mastermind
        <br />
        Password: mastermind
      </p>

      <a
        className="btn btn-primary"
        href="https://www.randomspanish.com"
        target="_blank"
      >
        Go to site
      </a> */}
    </div>
  )
}

export default About
