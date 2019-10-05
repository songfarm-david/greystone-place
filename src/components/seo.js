import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ title, description, lang, meta, keywords, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({
         site: {
            siteMetadata: {
               defaultTitle,
               titleTemplate,
               defaultDescription,
               siteUrl
            },
         },
      }) => {
         const seo = {
            title: title || defaultTitle,
            description: description || defaultDescription,
            url: `${siteUrl}${pathname || '/'}`,
         }
         return (
            <Helmet
               htmlAttributes={{
                 lang,
               }}
               title={seo.title}
               titleTemplate={titleTemplate}
               meta={[
                 {
                   name: `description`,
                   content: seo.description,
                 },
               ]
               .concat(
                  keywords.length > 0
                     ? {
                        name: `keywords`,
                        content: keywords.join(`, `),
                       }
                     : []
                )
                .concat(meta)}
            />
         )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
      }
    }
  }
`
