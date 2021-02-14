import React from "react"
import Layout from "../components/Layout/layout"
import Fade from "react-reveal/Fade"
import { layoutContext } from "../../provider"
import Header from "../components/Random-Spanish/Header.js"
import equipmentPicture from "../images/equipment-pic.jpg"
import xmlParseVideo from "../images/XML_Parser.mp4"

const randomspanish = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              <Header />

              {context.changeLayout("WORK_PROJECTS")}
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default randomspanish
