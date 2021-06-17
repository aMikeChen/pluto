import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
  Observable,
  GraphQLResponse,
} from 'relay-runtime'
import fetchGraphQL from './fetchGraphQL'
import * as withAbsintheSocket from '@absinthe/socket'
import { Socket as PhoenixSocket } from 'phoenix'
import { RelayObservable } from 'relay-runtime/lib/network/RelayObservable'
import { AbsintheSocket, Notifier, Observer } from 'absinthe__socket'

async function fetchRelay(params: RequestParameters, variables: Variables) {
  return fetchGraphQL(params.text, variables)
}

const absintheSocket = withAbsintheSocket.create(new PhoenixSocket('ws://localhost:4000/socket'))

const unobserveOrCancelIfNeeded = (
  socket: AbsintheSocket,
  notifier?: Notifier<Variables>,
  observer?: Observer<Variables>
) => {
  if (notifier && observer) {
    withAbsintheSocket.unobserveOrCancel(socket, notifier, observer)
  }
}

const subscribe = (request: RequestParameters, variables: Variables) => {
  const notifier = withAbsintheSocket.send(absintheSocket, {
    operation: request.text!,
    variables,
  })
  const observable = withAbsintheSocket.toObservable(absintheSocket, notifier, {
    onError: () => {
      return
    },
    onStart: () => {
      return
    },
    unsubscribe: unobserveOrCancelIfNeeded,
  })
  return Observable.from(observable) as RelayObservable<GraphQLResponse>
}

export default new Environment({
  network: Network.create(fetchRelay, subscribe),
  store: new Store(new RecordSource()),
})
