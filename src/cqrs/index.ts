import { serverHTTP } from '../adapters/server-http'
import { command } from './command'
import { query } from './query'

export function startApp () {
  serverHTTP.add('command', {
    callback: command,
    route: '/api/command',
    method: 'POST',
  })

  serverHTTP.add('query', {
    callback: query,
    route: '/api/query',
    method: 'GET',
  })

  serverHTTP.run()
}
