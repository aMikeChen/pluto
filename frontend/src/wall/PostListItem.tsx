import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'

const userFragment = graphql`
  fragment PostListItem_post on Post {
    id
    content
    insertedAt
  }
`

type Props = {
  post: PostListItem_post$key
}

function PostListItem(props: Props) {
  const post = useFragment(userFragment, props.post)

  return <div key={post.id}>{post.content}</div>
}

export default PostListItem
