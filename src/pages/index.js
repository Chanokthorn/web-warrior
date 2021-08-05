import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'

export default function Home({ data }) {
  const banner =  getImage(data.file)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={banner} alt="banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`