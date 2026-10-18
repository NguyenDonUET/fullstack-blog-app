import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost } from '../api/posts'

export function DeletePost({ postId }) {
  const queryClient = useQueryClient()

  const deletePostMutation = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  })
  return <button onClick={() => deletePostMutation.mutate()}>Delete</button>
}

DeletePost.propTypes = {
  postId: PropTypes.string.isRequired,
}
