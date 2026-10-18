import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CreatePost } from './components/CreatePost.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostSorting } from './components/PostSorting.jsx'
import { PostList } from './components/PostList.jsx'
import { getPosts } from './api/posts.js'

export function Blog() {
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')
  const [author, setAuthor] = useState('')
  const { data: posts } = useQuery({
    queryKey: ['posts', { sortBy, sortOrder, author }],
    queryFn: () => getPosts({ sortBy, sortOrder, author }),
  })

  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <hr />
      Filter by:
      <PostFilter field='author' value={author} onChange={setAuthor} />
      <br />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={setSortBy}
        orderValue={sortOrder}
        onOrderChange={setSortOrder}
      />
      <hr />
      <PostList posts={posts ?? []} />
    </div>
  )
}
