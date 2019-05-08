/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// You can delete this file if you're not using it
exports.sourceNodes = ({
   node,
   actions,
   store,
   cache,
   createNodeId
}) => {
   let fileNode
   const { createNode } = actions
   return new Promise((resolve, reject) => {
      fileNode = createRemoteFileNode({
         url: "http://d1ly7esvudt5ap.cloudfront.net/Greystone+Place+-+512+Mohawk+Rd+E+Hamilton.mp4",
         parentNodeId: null,
         store,
         cache,
         createNode,
         createNodeId
      })
      resolve(fileNode)
   }).then(node => {
      console.log('then node', node)
      
      // resolve(fileNode)
      return node
   }).catch(e => {
      reject('error', e);
   })

}
