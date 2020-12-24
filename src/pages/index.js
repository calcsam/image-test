import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

export const Dino = ({ i }) => (
  <img width={100} src={`/gatsby-astronaut${i}.png`} alt="T-Rex" />
)


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Dino i="" />
    <Dino i="1" />
    <Dino i="2" />
    <Dino i="3" />
    <Dino i="4" />
    <Dino i="5" />
    <Dino i="6" />
    <Dino i="7" />
    <Dino i="8" />
    <Dino i="9" />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
