import React, { useState } from "react"
import LayoutMain from "../components/Layouts/layout-main"
import SEO from "../components/seo"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Promotion from "../components/Promotion"
import ContactInfo from "../components/ContactInfo"

import { layoutContext } from "../../provider"

const IndexPage = () => {
  return (
    <>
      <LayoutMain>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("MAIN")}
              <SEO title="Adam's Portfolio" />
              <div>Hello</div>
            </>
          )}
        </layoutContext.Consumer>
      </LayoutMain>
    </>
  )
}

export default IndexPage
