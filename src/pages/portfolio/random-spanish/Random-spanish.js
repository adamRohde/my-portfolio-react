import React from "react"
import Layout from "../../../components/Layout/layout"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header.js"
import About from "../../../components/Random-Spanish/About"
import MainImage from "../../../components/Random-Spanish/MainImage"

const randomspanish = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <div>
              <Header title={"RandomSpanish.com"} />
              <div className="rs-grid">
                <About />
                <MainImage />
              </div>
            </div>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default randomspanish
