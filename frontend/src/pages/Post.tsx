import graphql from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import { PostQuery as PostQueryType } from './__generated__/PostQuery.graphql'
import PostContent from '../wall/PostContent'
import { styled, Typography } from '@material-ui/core'
import PostComments from '../replies/PostComments'

const PostQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      ...PostContent_post
      ...PostComments_post
    }
  }
`

const Root = styled('div')({
  padding: '1rem',
})

interface ParamTypes {
  id: string
}

function Post() {
  const { id } = useParams<ParamTypes>()
  const data = useLazyLoadQuery<PostQueryType>(PostQuery, { id })

  if (!data.post) {
    return (
      <div>
        <Typography variant="h1" color="primary">
          Post Not Found
        </Typography>
      </div>
    )
  }

  return (
    <Root>
      <PostContent post={data.post} />
      <PostComments post={data.post} />
    </Root>
  )
}

export default Post
