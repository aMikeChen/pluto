import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostCommentContent_comment$key } from './__generated__/PostCommentContent_comment.graphql'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
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

const useStyles = makeStyles({
  card: {
    background: '#40516E',
    marginBottom: '0.8rem',
    contentVisibility: 'auto',
  },
  timestamp: {
    color: '#AAAAAA',
  },
})

function PostCommentContent(props: Props) {
  const classes = useStyles()
  const { content, insertedAt } = useFragment(userFragment, props.comment)

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1" color="primary">
          {content}
        </Typography>
        <Typography variant="subtitle2" className={classes.timestamp}>
          {getTimeAgo(new Date(insertedAt))}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PostCommentContent
