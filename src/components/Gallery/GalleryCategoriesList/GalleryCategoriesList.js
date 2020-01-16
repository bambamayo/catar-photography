import React from "react"
import { Link } from "gatsby"

const GalleryCategoriesList = ({ categoryInView, presentCategoryName }) => {
  return (
    <ul className="gallery-categories-list">
      {!categoryInView
        ? null
        : categoryInView.map(category => (
            <li
              className="gallery-categories-listitem"
              key={category.node.id}
              style={
                presentCategoryName === category.node.categoryName
                  ? { opacity: "1" }
                  : { opacity: "0.5" }
              }
            >
              <Link
                className="gallery-categories-listlink"
                to={`/gallery/${category.node.categoryName}`}
                state={{ catName: category.node.categoryName }}
              >
                {category.node.categoryName}
              </Link>
            </li>
          ))}
    </ul>
  )
}

export default GalleryCategoriesList
