import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import bg from '../assets/bg.jpg';

const Layout = ({ children, data }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr minmax(max-content, 1024px) 1fr',
    background: `url(${bg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }}>
    <div/>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
    {children()}
    </div>
    <div/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
