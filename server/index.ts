import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox"
import Fastify from "fastify"
import fastifyPostgres from "@fastify/postgres"
import routes from "./routes"

const app = Fastify({logger: true}).withTypeProvider<TypeBoxTypeProvider>()
app.register(routes)
app.register(fastifyPostgres, {
 connectionString: 'postgres://postgres:skibidi@localhost:5432/postgres',
})

app.listen({port: 8000}, (error, address) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`Server is listening on ${address}`)
})

