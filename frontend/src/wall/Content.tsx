import { useParams } from 'react-router-dom'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getTimeAgo } from '../app/time'

interface ParamTypes {
  id: string
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

function Content() {
  const { id } = useParams<ParamTypes>()
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" color="primary">
            {id}
          </Typography>
          <Typography variant="subtitle2" className={classes.timestamp}>
            {getTimeAgo(new Date('2020-10-10T00:00:00'))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default Content
