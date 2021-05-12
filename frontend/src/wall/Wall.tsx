import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { Wall_root$key } from './__generated__/Wall_root.graphql'

const userFragment = graphql`
  fragment Wall_root on RootQueryType {
    listPosts {
      id
      content
      insertedAt
    }
  }
`

type Props = {
  root: Wall_root$key
}

function Wall(props: Props) {
  const data = useFragment(userFragment, props.root)

  return (
    <>
      {data.listPosts.map((post) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </>
  )
}

export default Wall
