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
   // if (node.path == '/') {
   //    console.log('parentNode', node.id);
      fileNode = createRemoteFileNode({
         url: "http://d1ly7esvudt5ap.cloudfront.net/Greystone+Place+-+512+Mohawk+Rd+E+Hamilton.mp4",
         parentNodeId: null,
         store,
         cache,
         createNode,
         createNodeId
      })
   // }
   // if (fileNode) {
   //    node.localFile___NODE = fileNode.id
   //  }
   // console.log('hello world', node);
}
