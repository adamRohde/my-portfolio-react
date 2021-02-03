import Provider, { layoutContext } from "./provider"
import react, { useState } from "react"

export const wrapRootElement = Provider

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)

  return (
    <layoutContext.Consumer>
      {context => <>{console.log(context.layout)}</>}
    </layoutContext.Consumer>
  )
}
