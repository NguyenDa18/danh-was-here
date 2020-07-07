import React from "react"
import { Link } from "gatsby"
import { kebabCase } from '../utils/helpers'

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
      {post.frontmatter.tags && Object.values(post.frontmatter.tags).map((tag, i) => (
        <>
          <Link key={i} to={`/tags/${kebabCase(tag)}/`} style={{ paddingRight: '10px' }}>{tag}</Link>
        </>
      ))}
    </header>
  </article>
)
export default PostLink
