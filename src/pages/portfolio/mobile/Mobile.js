import React from "react"
import Layout from "../../../components/Layout/layout"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header.js"
import About from "../../../components/Mobile/About"
import MainImage from "../../../components/Mobile/MainImage"

const Mobile = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <div>
              <Header title={"Mobile"} />
              <div className="mobile-grid">
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

export default Mobile
