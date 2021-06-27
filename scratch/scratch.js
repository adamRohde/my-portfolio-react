import React from "react"

const WebAppsCard = ({
  heading,
  paragraph,
  imgUrl,
  repo_url,
  app_url,
  projectLink,
  target,
  app_btn_text,
  technologies,
}) => {
  console.log("This is the page context from the card ")

  return (
    <div className="section">
      <div className="container-compensate-tilt-center">
        <div className="web-apps-card">
          <h4>{heading}</h4>
          <p>{paragraph}</p>
          {technologies.map(technology => (
            <ul>
              <li>{technology}</li>
            </ul>
          ))}
          <div style={{ marginTop: "2rem" }}>
            <a
              type="button"
              className="btn btn-primary"
              href={repo_url}
              target={target}
            >
              Repo
            </a>

            <a
              href={app_url}
              target={target}
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "1rem" }}
            >
              {app_btn_text}
            </a>
          </div>
        </div>
      </div>

      <div
        className="web-apps-card"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
            imgUrl +
            ")",
        }}
      ></div>
    </div>
  )
}

export default WebAppsCard

{
  /* <div className="imageRow ">
        <p>
          User is able to translate phrases from English to Spanish or Spanish
          to English and save the words/phrases to test themself on at a later
          time.
        </p>
        <img className="imageRowImage " src={translate_gif}></img>
      </div>

      <div className="imageRow ">
        <p>
          The user can this test themself with the computer randomly selecting
          words/phrases they have previously saved.
        </p>
        <img className="imageRowImage " src={testYourself} />
      </div>

      <div className="imageRow ">
        <p>
          The user can save as many phrases as they would like after signing up
          for a account.
        </p>
        <img className="imageRowImage " src={savePhrases} />
      </div> */
}

import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar2 = () => {
  return (
    <div>
      <div className="section-nav-2">
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#randomspanish")}
        >
          <p>RandomSpanish.com</p>
        </button>
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#webapps")}
        >
          <p>Play apps</p>
        </button>
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#mobile")}
        >
          <p>Mobile</p>
        </button>
        <button
          type="button"
          class="btn btn-link active"
          onClick={() => scrollTo("#industrialautomation")}
        >
          <p>Industrial Automation</p>
        </button>
        <a onClick={() => scrollTo("#mobile")}>Automation</a>
      </div>
    </div>
  )
}

export default Navbar2

import React from "react"
import Card from "../Card/Card"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"

const Cards = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="projects-wrapper">
          <h2>Projects</h2>
          <div className="projects-grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <div className="projects-card-container">
                  {/* <div>
                     <a
                      key={project.id}
                            href={project.url ? project.url : "#"}
                       target={project.target}
                    >
                      <h4> {project.title}</h4>
                    </a>
                  </div>  */}
                  <Card
                    key={project.id}
                    heading={project.title}
                    paragraph={project.para}
                    imgUrl={project.imageSrc}
                    //  target={project.target}
                    //     projectLink={project.url}
                    // buttonText={project.btn_text}
                    // layout={project.setLayout}
                  ></Card>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cards


.content {
  // font-family: "Open Sans";
  // text-align: center;
  // padding: 1rem;
  // opacity: 0;
  // transition: all 500ms ease-in-out;
  // transform: translate(0, 20px);
  // cursor: pointer;
  // h1 {
  //   font-size: 1rem;
  //   color: white;
  // }
  // p {
  //   font-size: 10px;
  //   color: white;
  //   margin-bottom: 20px;
  // }

  // &:hover {
  //   opacity: 1;
  //   transform: translate(0, 0px);
  // }
  // &:hover {
  //   opacity: 1;
  //   transform: translate(0, 0px);
  // }
}