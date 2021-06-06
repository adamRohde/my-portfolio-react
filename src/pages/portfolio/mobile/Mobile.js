import React from "react"
import Layout from "../../../components/Layout/layout"
import { layoutContext } from "../../../../provider"
import Header from "../../../components/Header/Header.js"

const Mobile = () => {
  return (
    <>
      <Layout>
        <layoutContext.Consumer>
          {context => (
            <div>
              <Header title={"Mobile"} />
            </div>
          )}
        </layoutContext.Consumer>
      </Layout>
    </>
  )
}

export default Mobile
