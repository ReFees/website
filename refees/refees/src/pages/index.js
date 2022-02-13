import React from "react"
import Team from "../components/Team"
import Hero from "../components/Hero"
import Layout from "../components/baseLayout/Layout"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <div>

      <Hero/>

      <Stats/>

      <Team/>
    </div>
  </Layout>
)

export default IndexPage