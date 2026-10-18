import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post.jsx'
import { DeletePost } from './DeletePost.jsx'

export function PostList({ posts = [] }) {
  console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Post
            title={post.title}
            contents={post.contents}
            author={post.author}
          />
          <hr />
          <DeletePost postId={post._id} />
        </Fragment>
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
