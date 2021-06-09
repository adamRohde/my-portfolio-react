import React from "react"
import data from "../../yourdata"
// import Fade from "react-reveal/Fade"
// import { Link } from "react-scroll"

const About = () => {
  return (
    <div className="rs-about-wrapper">
      <p>
        I built this site while learning Spanish. I was paying for a
        subscription to a well known language learning site but I was
        dissapointed when there was no way to save phrases that I could go back
        to and study. So I decided to build my own site. If you would like to
        try logging in to test the site use the credentials found at the bottom
        of the screen.
        <br />
        <br />
        <ul>
          <li>React</li>
          <li>Google Translate API</li>
          {/* <br /> */}
          <li>Graphql</li>
          {/* <br /> */}
          <li>AWS Amplify</li>
          {/* <br /> */}
          <li>DynamoDB</li>
          {/* <br /> */}
          {/* <li>Bootstrap</li> */}
        </ul>
        Username: mastermind
        <br />
        Password: mastermind
      </p>
      <br />

      <a
        className="btn btn-primary"
        href="https://www.randomspanish.com"
        target="_blank"
      >
        Go to site
      </a>
    </div>
  )
}

export default About
