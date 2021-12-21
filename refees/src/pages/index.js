import React from "react"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Layout from "../components/baseLayout/Layout"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <div>

      <Hero/>

      <Stats/>
    </div>
  </Layout>
)

export default IndexPage