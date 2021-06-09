import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostCommentContent_comment$key } from './__generated__/PostCommentContent_comment.graphql'
import { Card, CardContent, styled, Typography } from '@material-ui/core'
import { getTimeAgo } from '../app/time'

const userFragment = graphql`
  fragment PostCommentContent_comment on Post {
    content
    insertedAt
  }
`

type Props = {
  comment: PostCommentContent_comment$key
}

const StyledCard = styled(Card)({
  background: '#40516E',
  marginBottom: '0.8rem',
  contentVisibility: 'auto',
})

const Timestamp = styled(Typography)({
  color: '#AAAAAA',
})

function PostCommentContent(props: Props) {
  const { content, insertedAt } = useFragment(userFragment, props.comment)

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="body1" color="primary">
          {content}
        </Typography>
        <Timestamp variant="subtitle2">{getTimeAgo(new Date(insertedAt))}</Timestamp>
      </CardContent>
    </StyledCard>
  )
}

export default PostCommentContent
