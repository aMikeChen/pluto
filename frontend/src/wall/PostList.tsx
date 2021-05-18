import graphql from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay'
import PostListItem from './PostListItem'
import { PostList_root$key } from './__generated__/PostList_root.graphql'
import { styled } from '@material-ui/core/styles'

const Background = styled('div')({
  marginBottom: '0.4rem',
  padding: '1rem',
})

const userFragment = graphql`
  fragment PostList_root on RootQueryType
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String", defaultValue: null }
  )
  @refetchable(queryName: "PostListPaginationQuery") {
    posts: listPosts(first: $count, after: $cursor) @connection(key: "PostList_root_posts") {
      edges {
        node {
          id
          ...PostListItem_post
        }
      }
    }
  }
`

type Props = {
  root: PostList_root$key
}

function PostList(props: Props) {
  const { data } = usePaginationFragment(userFragment, props.root)
  return (
    <Background>
      {data.posts?.edges?.map(
        (edge) => edge?.node && <PostListItem key={edge.node.id} post={edge.node} />
      )}
    </Background>
  )
}

export default PostList
