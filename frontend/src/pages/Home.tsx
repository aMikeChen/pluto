import graphql from 'babel-plugin-relay/macro'
import { loadQuery, usePreloadedQuery } from 'react-relay'
import RelayEnvironment from '../relay/RelayEnvironment'
import Wall from '../wall/Wall'
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql'

const HomeQuery = graphql`
  query HomeQuery {
    ...Wall_root
  }
`

const preloadedQuery = loadQuery<HomeQueryType>(RelayEnvironment, HomeQuery, {})

function Home() {
  const data = usePreloadedQuery(HomeQuery, preloadedQuery)

  return (
    <>
      <Wall root={data} />
    </>
  )
}

export default Home
