import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = ({ location }) => (
  <Layout location={location}>
    <h1 className="main-title">Die App-Entwicklungsagentur</h1>
    <div className="background-container">
      <h1 className="buzzword buzzword-transparent konzeption">Konzeption</h1>
      <h2 className="buzzword buzzword-transparent marketing">Marketing</h2>
      <h2 className="buzzword buzzword-transparent beratung">Beratung</h2>
      <h1 className="buzzword buzzword-transparent entwicklung">Entwicklung</h1>
      <h3 className="buzzword buzzword-transparent programmierung">
        Programmierung
      </h3>
      <h4 className="buzzword buzzword-transparent weiterentwicklung">
        Weiterentwicklung
      </h4>
      <div className="impressum">
        <p>
          <span className="bolder">Impressum:</span>
          <br />
          <br />
          Inhaltlich verantwortlich: <br />
          <span className="bolder">Marc Moughrabi </span>
          <br />
          Legiendamm 14 <br />
          10179 Berlin
          <br />
          <br />
          Handelsregister Nummer: HRB 220089 B
          <br />
          <br />
          <span className="bolder">Kontakt:</span>
          <br />
          <br />
          <a
            target="_blank"
            rel="noopener"
            href="mailto:info@appconception.one"
          >
            info@appconception.one
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default Impressum
