import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Contact from "./Contact"
import { layoutContext } from "../../../provider"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <>
              {context.changeLayout("CONTACT")}
              <SEO title="Adam's Portfolio" />
              <div className="section-main" id="work">
                <Contact />
              </div>
            </>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}
export default IndexPage
