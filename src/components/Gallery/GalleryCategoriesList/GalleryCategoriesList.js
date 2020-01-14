import React from "react"

const GalleryCategoriesList = ({
  categoryInView,
  clicked,
  presentCategoryName,
}) => {
  return (
    <div className="gallery-categories-list">
      {!categoryInView
        ? null
        : categoryInView.map(category => (
            <button
              key={category.node.id}
              className="gallery-categories-listitem"
              onClick={() => clicked(category.node.id)}
              style={
                presentCategoryName === category.node.categoryName
                  ? { opacity: "1" }
                  : { opacity: "0.5" }
              }
            >
              {category.node.categoryName}
            </button>
          ))}
    </div>
  )
}

export default GalleryCategoriesList
