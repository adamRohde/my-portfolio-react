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
