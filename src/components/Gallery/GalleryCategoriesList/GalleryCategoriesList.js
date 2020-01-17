import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const GalleryCategoriesList = ({ categoryInView, presentCategoryName }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategoryList(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            categoryName
            id
          }
        }
      }
    }
  `)
  return (
    <ul className="gallery-categories-list">
      {data.allContentfulCategoryList.edges.map(edge => (
        <li
          className="gallery-categories-listitem"
          key={edge.node.id}
          style={
            presentCategoryName === edge.node.categoryName
              ? { opacity: "1" }
              : { opacity: "0.5" }
          }
        >
          <Link
            className="gallery-categories-listlink"
            to={`/gallery/${edge.node.categoryName}`}
          >
            {edge.node.categoryName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default GalleryCategoriesList
