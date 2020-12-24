import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

export const Dino = ({ i }) => (
  <StaticImage width={100} src={`../images/gatsby-astronaut${i}.png`} alt="T-Rex" />
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
    <StaticImage width={100} src="../images/gatsby-astronaut.png" alt="T-Rex" />    
<StaticImage width={100} src="../images/gatsby-astronaut.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut1.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut2.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut3.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut4.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut5.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut6.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut7.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut8.png" alt="T-Rex" />
<StaticImage width={100} src="../images/gatsby-astronaut9.png" alt="T-Rex" />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
