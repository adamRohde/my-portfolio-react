import React, { useState } from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Work from "./Work"
import Navbar2 from "../../components/Layout/Navbar2"
import { layoutContext } from "../../../provider"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("WORK")}
              <SEO title="Adam's Portfolio" />
              <div className="section-main" id="work">
                {/* <Navbar2 /> */}
                <Work />
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
