/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

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
         url: "http://d2f2gzwlxrc309.cloudfront.net/Greystone+Place+-+512+Mohawk+Rd+E+HamiltonHLS+stream.m3u8",
         parentNodeId: null,
         store,
         cache,
         createNode,
         createNodeId
      })
      resolve(fileNode)
   }).then(node => {
      return node
   }).catch(e => {
      reject('error', e);
   })

}
