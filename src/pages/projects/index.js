import { graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, projects as prjectsStyle } from '../../styles/projects.module.css'

const Projects = ({ data }) => {
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={prjectsStyle}>
                    {projects.map(project => (
                        <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                            <div>
                                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={project.frontmatter.title}/>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like waht you see? Email me at { contact } for a quote!</p>
            </div>
        </Layout>
    )
}

export default Projects

export const query = graphql`
    query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
        frontmatter {
            stack
            title
            slug
            thumb {
            childImageSharp {
                gatsbyImageData
            }
            }
        }
        id
        }
    }
    contact: site {
        siteMetadata {
        contact
        }
    }
    }


`
