import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostComments_post$key } from './__generated__/PostComments_post.graphql'

const userFragment = graphql`
  fragment PostComments_post on Post {
    comments {
      id
    }
  }
`

type Props = {
  post: PostComments_post$key
}

function PostComments(props: Props) {
  const post = useFragment(userFragment, props.post)
  return <div>{post.comments.length}</div>
}

export default PostComments
