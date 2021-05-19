import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import { PostListItem_post$key } from './__generated__/PostListItem_post.graphql'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { getTimeAgo } from '../app/time'

const useStyles = makeStyles({
  card: {
    background: '#40516E',
    marginBottom: '0.8rem',
    height: '6rem',
    contentVisibility: 'auto',
  },
  timestamp: {
    color: '#AAAAAA',
  },
})

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
  const classes = useStyles()
  return (
    <div key={post.id}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" color="primary">
            {post.content}
          </Typography>
          <Typography variant="subtitle2" className={classes.timestamp}>
            {getTimeAgo(new Date(post.insertedAt))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default PostListItem