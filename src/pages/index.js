import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="main-title">Die App-Entwicklungsagentur</h1>
      <p className="tagline">We realise your ideas</p>
      <p className="blurb">
        Willkommen bei der AppConceptionOne GmbH | Die App-Entwicklungsagentur
        für die Konzeption, Gestaltung, Programmierung und Vermarktung von
        IT-basierten Anwendungen
      </p>
      <div className="background-container background-smaller">
        <h1 className="buzzword buzzword-bolder konzeption">Konzeption</h1>
        <h2 className="buzzword buzzword-bolder marketing">Marketing</h2>
        <h2 className="buzzword buzzword-bolder beratung">Beratung</h2>
        <h1 className="buzzword entwicklung">Entwicklung</h1>
        <h3 className="buzzword buzzword-bolder programmierung">
          Programmierung
        </h3>
        <h4 className="buzzword weiterentwicklung">Weiterentwicklung</h4>
      </div>
    </Layout>
  )
}
