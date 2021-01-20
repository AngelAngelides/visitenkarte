import React from "react"
import Footer from "../components/Footer"
import { GlobalStyleReset, Fonts } from "../theme"
import { ContextProviderComponent } from "../context"

const Layout = ({ children }) => (
  <ContextProviderComponent>
    <GlobalStyleReset />
    <Fonts />
    <main>{children}</main>
    <Footer />
  </ContextProviderComponent>
)

export { Layout }
