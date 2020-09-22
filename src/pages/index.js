import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <h1 className="main-title">Die App-Entwicklungsagentur</h1>
      <p className="blurb">
        Ich bin eine kleine Erklärzeile von Dingen die wir tun und entwickeln,
        sie dient um uns kurz und knackig zu präsentieren - damit verschaffen
        wir dem Besuchern eine kleinen Überblick.
      </p>
      <div className="background-container">
        <h1 className="buzzword konzeption">Konzeption</h1>
        <h2 className="buzzword marketing">Marketing</h2>
        <h2 className="buzzword beratung">Beratung</h2>
        <h1 className="buzzword entwicklung">Entwicklung</h1>
        <h3 className="buzzword programmierung">Programmierung</h3>
        <h4 className="buzzword weiterentwicklung">Weiterentwicklung</h4>
      </div>
    </Layout>
  )
}
