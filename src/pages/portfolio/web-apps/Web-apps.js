import React from "react"
import Layout from "../../../components/Layout/layout"
import WebAppsCard from "../../../components/Web-Apps/web-apps-card"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header"
import About from "../../../components/Web-Apps/About"

const webapps = () => {
  console.log("layoutContext  ", layoutContext)
  return (
    <section className="section-about-anti-skewed">
      <Header title={"Web Apps"} />
      {/* <About />
              <WebAppsCard /> */}
    </section>
  )
}

export default webapps
