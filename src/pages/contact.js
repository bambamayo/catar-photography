import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/main.scss"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Layout/Seo"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategoryList(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            categoryName
          }
        }
      }
      allContentfulCategoryListWithPictures(
        sort: { fields: createdAt, order: ASC }
      ) {
        edges {
          node {
            categoryName
            categoryImage {
              id
              description
              fluid(maxWidth: 1000) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.allContentfulCategoryListWithPictures.edges)
  return (
    <Layout footerColor="black" footerDisplay="block" linkColor="black">
      <SEO title="Catar photography | Contact me" />

      <p>Welcome to the contact page</p>
      {data.allContentfulCategoryListWithPictures.edges.map(edge => (
        <p style={{ color: "red" }}>{edge.node.categoryName}</p>
      ))}
    </Layout>
  )
}

export default Contact
