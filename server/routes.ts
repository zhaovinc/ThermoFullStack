import Fastify, { FastifyInstance } from 'fastify'

async function routes (app: FastifyInstance) {
  app.get('/ping', async (request, response) => {
    return 'pong'
  })

  app.get('/', async (request, response) => {
    return { hello: 'world'}
  })

  app.get('/testdb', async (request, response) => {
    const client = await app.pg.connect()
    const results = await client.query<{sum: number }>('select 1+3 as sum')
    client.release()

    return results.rows[0]
  })
}

export default routes