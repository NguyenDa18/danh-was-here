import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <img src="https://res.cloudinary.com/dnguyen/image/upload/v1580098970/blog/personal/bg_uyytdy.jpg" style={{ boxShadow: '0 0 30px black' }} alt="Danh logo" />
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description }}
        />
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)