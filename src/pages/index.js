import React from "react"
import SEO from "../components/Seo"
import Navigation from "../components/Navigation"
import Image from "../components/Image"
import Section from "../components/Section"
import FirstSectionContent from "../components/FirstSectionContent"
import SecondSectionContent from "../components/SecondSectionContent"
import Jobs from "../components/Jobs"
import Partner from "../components/Partner"
import LastSectionContent from "../components/LastSectionContent"
import SideBar from "../components/Sidebar"

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Navigation isMain />
      <Image />
      <Section id="first">
        <FirstSectionContent />
      </Section>
      <Section id="second">
        <SecondSectionContent />
      </Section>
      <Section id="jobs">
        <Jobs />
      </Section>
      <Section id="partner">
        <Partner />
      </Section>
      <Section id="last">
        <LastSectionContent />
      </Section>
      <SideBar isMain />
    </>
  )
}
