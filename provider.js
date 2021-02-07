import React, { useState } from "react"

export const layoutContext = React.createContext(" ")

const Provider = props => {
  const [layout, setLayout] = useState("main")

  return (
    <layoutContext.Provider
      value={{
        layout,
        changeLayout: newLayout => setLayout(newLayout),
      }}
    >
      {props.children}
    </layoutContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
