import React from "react"
import Layout from "../components/Layout/layout"
import { layoutContext } from "../../provider"
import Navbar from "../components/Layout/Navbar"
import Header from "../components/Random-Spanish/Header.js"
import About from "../components/Random-Spanish/About"
import MainImage from "../components/Random-Spanish/MainImage"

const randomspanish = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <div className="rs-grid">
              <div className="rs-item-nav">
                <Navbar />
              </div>
              <Header />
              <About />
              <MainImage />

              {context.changeLayout("WORK_PROJECTS")}
            </div>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default randomspanish
