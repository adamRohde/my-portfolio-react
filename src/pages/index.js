import React, { useState } from "react"
import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import Projects from "../components/Projects"
import Promotion from "../components/Promotion"
import ContactInfo from "../components/ContactInfo"

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
              <Header></Header>

              <Projects></Projects>
              <Promotion></Promotion>
              <ContactInfo></ContactInfo>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default IndexPage
