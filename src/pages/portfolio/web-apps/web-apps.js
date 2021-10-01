import React from "react"
import WebAppsCard from "../../../components/Web-Apps/web-apps-card"
// import { layoutContext } from "../../../provider"

const WebApps = () => {
  // console.log("layoutContext  ", layoutContext)
  return (
    <section className="webapps" id="webapps">
      <div className="about-paragraph">
        <h2>Web Apps</h2>
        <p>
          These are apps I created when attending Andy Sterkowitz's Web
          Bootcamp. They were my introduction to HTML, CSS and Javascript.{" "}
          <strong style={{ color: "black" }}>
            All of them were written by me and me alone. No tutorials were
            followed.{"  "}
          </strong>
          Despite the simplicity I am proud of this work. We all have
          beginnings, these apps were mine.
        </p>
      </div>

      <WebAppsCard />
    </section>
  )
}

export default WebApps
