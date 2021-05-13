import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import PostListItem from './PostListItem'
import { PostList_root$key } from './__generated__/PostList_root.graphql'

const userFragment = graphql`
  fragment PostList_root on RootQueryType {
    posts: listPosts {
      id
      ...PostListItem_post
    }
  }
`

type Props = {
  root: PostList_root$key
}

function PostList(props: Props) {
  const root = useFragment(userFragment, props.root)

  return (
    <>
      {root.posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList
