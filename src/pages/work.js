import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Navbar from "../components/Layout/Navbar"
import MyWork from "../components/Home-Page/MyWork"
import { layoutContext } from "../../provider"

const WorkPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("MAIN")}
              <SEO title="Adam's Portfolio" />
              <MyWork></MyWork>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default WorkPage
