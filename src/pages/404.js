import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/layout.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
       <h1>Page Not Found</h1>
       <p>The page you're looking for doesn&#39;t exist. Go back to the <Link to="/" title='Home'>home page</Link>.</p>
       <p>&nbsp;</p>
    </section>
  </Layout>
)

export default NotFoundPage
