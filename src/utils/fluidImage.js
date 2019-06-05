import {graphql} from 'gatsby'

export const fluidImage = graphql`
   fragment fluidImage on File {
     childImageSharp {
       fluid(maxWidth: 700) {
         ...GatsbyImageSharpFluid_withWebp
       }
     }
   }
`
