import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "react-scroll"
import data from "../../yourdata"

const Header = () => {
  return (
    <div className="section-randspan" id="randomspanish">
      <div className="about-randspan">
        <div className="heading">
          <h1>{data.aboutParaRandomSpanish}</h1>
        </div>
        <div className="image-wrapper-randspan">
          <img src={data.randomSpanishImage} alt="about"></img>
        </div>
        <div className="description">
          <p>
            I built this site while learning Spanish. I was paying for a
            subscription to a well known language learning site but I was
            dissapointed when there was no way to save phrases that I could go
            back to and study. So I decided to build my own site. If you would
            like to try logging in to test the site use the credentials found at
            the bottom of the screen
            <br />
            <br />
            - React
            <br />
            - Graphql
            <br />
            - AWS Amplify
            <br />
            - DynamoDB
            <br />
            - Bootstrap
            <br />
            <br />
            Username: mastermind
            <br />
            Password: mastermind
          </p>

          <a
            className="btn btn-primary"
            href="https://www.randomspanish.com"
            target="_blank"
          >
            Go to site
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
