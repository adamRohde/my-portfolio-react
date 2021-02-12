import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Header from "../components/Home-Page/Header"
import Projects from "../components/Home-Page/Projects"
import Promotion from "../components/Promotion"
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
              {/* <SEO title="Adam's Portfolio" /> */}
              <Header></Header>
              <Projects></Projects>
              <ContactInfo style={{ marginTop: "15vh" }}></ContactInfo>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default IndexPage
