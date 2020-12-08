import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Impressum() {
  return (
    <Layout>
      <SEO title="Impressum" />
      <h1 className="main-title">Die App-Entwicklungsagentur</h1>
      <p className="tagline">We realise your ideas</p>
      <div className="background-container">
        <h1 className="buzzword buzzword-transparent konzeption">Konzeption</h1>
        <h2 className="buzzword buzzword-transparent marketing">Marketing</h2>
        <h2 className="buzzword buzzword-transparent beratung">Beratung</h2>
        <h1 className="buzzword buzzword-transparent entwicklung">
          Entwicklung
        </h1>
        <h3 className="buzzword buzzword-transparent programmierung">
          Programmierung
        </h3>
        <h4 className="buzzword buzzword-transparent weiterentwicklung">
          Weiterentwicklung
        </h4>
        <div className="impressum">
          <p>
            <span className="bolder space-under">Impressum:</span>
            <br />
            Inhaltlich verantwortlich: <br />
            <span className="bolder">AppConceptionOne GmbH</span>
            <br />
            <span className="bolder">Marc Moughrabi </span>
            <br />
            Legiendamm 14 <br />
            <span className="space-under">10179 Berlin</span>
            <br />
            <span className="space-under">
              Handelsregister Nummer: HRB 220089 B
            </span>
            <br />
            <span className="bolder space-under">Kontakt:</span>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@appconception.one"
            >
              info@appconception.one
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
