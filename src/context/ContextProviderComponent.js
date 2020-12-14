import React, { createContext, useState } from "react"

const defaultContextValue = false

const SideBarContext = createContext(defaultContextValue)

const ContextProviderComponent = ({ children }) => {
  const [hasOpenSideBar, setSideBarOpenStatus] = useState(defaultContextValue)

  const burgerMenuHandler = () => setSideBarOpenStatus(!hasOpenSideBar)

  return (
    <SideBarContext.Provider
      value={{ onClick: burgerMenuHandler, hasOpenSideBar }}
    >
      {children}
    </SideBarContext.Provider>
  )
}

export { SideBarContext, ContextProviderComponent }
