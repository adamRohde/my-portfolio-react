import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "../components/Home-Page/About"
import MyWork from "../components/Home-Page/MyWork"
import ContactInfo from "../components/Home-Page/ContactInfo"
import { layoutContext } from "../../provider"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("MAIN")}
              <SEO title="Adam's Portfolio" />
              <About></About>
              <MyWork></MyWork>
              <ContactInfo></ContactInfo>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default IndexPage
