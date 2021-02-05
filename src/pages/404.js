import React from "react"

import LayoutMain from "../components/Layouts/layout-main"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <LayoutMain>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutMain>
)

export default NotFoundPage
