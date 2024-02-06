import { statusHTTP } from 'src/adapters/server-http'
import { HTTPReturn } from 'src/adapters/server-http/types'
import { getItems } from 'src/use-cases/get-items'
import { ERROR_GETING_ITEMS } from 'src/domain/constants'
import { eventBus } from '../adapters/event-bus'

eventBus.on('get-items', async (): Promise<HTTPReturn> => {
  try {
    const response = await getItems()
    return {
      response,
      code: statusHTTP.OK,
    }
  } catch (err) {
    return {
      response: {
        error: {
          code: ERROR_GETING_ITEMS,
          message: 'Error getting items',
        },
      },
      code: statusHTTP.INTERNAL_SERVER_ERROR,
    }
  }
})
