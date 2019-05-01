export const fluidImage = graphql`
   fragment fluidImage on File {
     childImageSharp {
       fluid(maxWidth: 1000) {
         ...GatsbyImageSharpFluid
       }
     }
   }
`
