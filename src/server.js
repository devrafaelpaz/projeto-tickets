import http from 'node:http'

import { jsonHandler } from "./middlerwares/jsonHandler.js"
import { routeHandler } from "./middlerwares/routeHandler.js"

async function listener (request, response) {
  await jsonHandler(request, response)

  routeHandler(request, response)
}

http.createServer(listener).listen(3333)