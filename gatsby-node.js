const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const galleryCategoryTemplate = path.resolve(
    "./src/templates/GalleryCategory.js"
  )

  const res = await graphql(`
    query {
      allContentfulCategoryListWithPictures {
        edges {
          node {
            categoryName
          }
        }
      }
    }
  `)

  res.data.allContentfulCategoryListWithPictures.edges.forEach(edge => {
    console.log(edge.node.categoryName)
    createPage({
      component: galleryCategoryTemplate,
      path: `/gallery/${edge.node.categoryName}`,
      context: {
        categoryName: edge.node.categoryName,
      },
    })
  })
}
