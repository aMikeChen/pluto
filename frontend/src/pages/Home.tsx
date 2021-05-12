import graphql from 'babel-plugin-relay/macro'
import { loadQuery, usePreloadedQuery } from 'react-relay'
import RelayEnvironment from '../relay/RelayEnvironment'
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql'

const HomeQuery = graphql`
  query HomeQuery {
    listPosts {
      content
    }
  }
`

const preloadedQuery = loadQuery<HomeQueryType>(RelayEnvironment, HomeQuery, {})

function Home() {
  const data = usePreloadedQuery(HomeQuery, preloadedQuery)
  return (
    <>
      {data.listPosts.map((post) => (
        <div>{post.content}</div>
      ))}
    </>
  )
}

export default Home
