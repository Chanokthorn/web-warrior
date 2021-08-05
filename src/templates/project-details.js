import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'

const ProjectDetails = ({ data }) => {
    const { html } = data.markdownRemark
    console.log(html)
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={getImage(featuredImg)} alt="john"/>
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={ { __html: html } } />
            </div>
        </Layout>
    )
}

export default ProjectDetails

export const query = graphql`
    query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
        title
        stack
        featuredImg {
            childImageSharp {
            gatsbyImageData
            }
        }
        }
    }
    }
`