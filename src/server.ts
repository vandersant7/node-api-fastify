import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify({ logger: true })

server.register(cors, {
    origin: '*',
})

const teams = [
  { id: 1, name: 'McLaren', base: 'Woking, United Kingdom' },
  { id: 2, name: 'Mercedes', base: 'Brackley, United Kingdom' },
  { id: 3, name: 'Red Bull Racing', base: 'Milton Keynes, United Kingdom' },
  { id: 4, name: 'Ferrari', base: 'Maranello, Italy' },
  { id: 5, name: 'Alpine', base: 'Enstone, United Kingdom' },
  { id: 6, name: 'AlphaTauri', base: 'Faenza, Italy' },
  { id: 7, name: 'Aston Martin', base: 'Silverstone, United Kingdom' },
  { id: 8, name: 'Haas', base: 'Kannapolis, United States' },
  { id: 9, name: 'Alfa Romeo', base: 'Hinwil, Switzerland' },
  { id: 10, name: 'Williams', base: 'Grove, United Kingdom' },
]

const drivers = [
  { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing' },
  { id: 2, name: 'Lewis Hamilton', team: 'Mercedes' },
  { id: 3, name: 'Lando Norris', team: 'McLaren' },
  { id: 4, name: 'Charles Leclerc', team: 'Ferrari' },
  { id: 5, name: 'Sergio Pérez', team: 'Red Bull Racing' },
  { id: 6, name: 'Carlos Sainz', team: 'Ferrari' },
  { id: 7, name: 'George Russell', team: 'Mercedes' },
  { id: 8, name: 'Daniel Ricciardo', team: 'McLaren' },
  { id: 9, name: 'Valtteri Bottas', team: 'Alfa Romeo' },
  { id: 10, name: 'Esteban Ocon', team: 'Alpine' },
  { id: 11, name: 'Fernando Alonso', team: 'Alpine' },
  { id: 12, name: 'Pierre Gasly', team: 'AlphaTauri' },
  { id: 13, name: 'Yuki Tsunoda', team: 'AlphaTauri' },
  { id: 14, name: 'Kevin Magnussen', team: 'Haas' },
  { id: 15, name: 'Mick Schumacher', team: 'Haas' },
  { id: 16, name: 'Zhou Guanyu', team: 'Alfa Romeo' },
  { id: 17, name: 'Alexander Albon', team: 'Williams' },
  { id: 18, name: 'Nicholas Latifi', team: 'Williams' },
]

// Implementar um verbo http GET
// Passar uma rota
// Criar um controller
server.get('/teams', async (request, response) => {
  response.type('application/json').code(200)

  return { teams }
})

server.get('/drivers', async (request, response) => {
  response.type('aplication/json').code(200)

  return { drivers }
})

//Route params: é um parametro da rota
interface DriverParams {
  id: string
}

server.get<{ Params: DriverParams }>(
  '/drivers/:id',
  async (request, response) => {
    const id = parseInt(request.params.id)
    const driver = drivers.find((d) => d.id === id)

    if (!driver) {
      response.type('application/json').code(404)
      return {
        message: 'Driver Not Found',
      }
    } else {
      response.type('application/json').code(200)
      return { driver }
    }
  }
)

server.listen({ port: 3333 }, () => {
  console.log('Server init')
})
