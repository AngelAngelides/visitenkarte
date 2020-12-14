import React from "react"
import Footer from "../components/Footer"
import { GlobalStyleReset } from "../theme"
import { ContextProviderComponent } from "../context"

const Layout = ({ children }) => (
  <ContextProviderComponent>
    <GlobalStyleReset />
    <main>{children}</main>
    <Footer />
  </ContextProviderComponent>
)

export { Layout }
