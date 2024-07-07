# Projeto Node WebApi da Fórmula 1 utilizando framework Fastify

Este é um projeto de uma API da Fórmula 1 desenvolvida com o framework Fastify em Node.js.

## Código

```javascript
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
```

Este código define uma API da Fórmula 1 utilizando o framework Fastify. Ele inclui duas listas de dados: uma com as equipes da Fórmula 1 e outra com os pilotos.

## Como usar essa API

Para utilizar essa API, siga os seguintes passos:

1. Instale as dependências do projeto:
```
npm install
```

2. Inicie o servidor de desenvolvimento:
```
npm run start:dev
```

Isso irá iniciar o servidor Fastify em modo de desenvolvimento, com suporte a hot reload.

3. Acesse a API em `http://localhost:3333`
- Endpoints:
  ```
  /teams
  /drivers
  ```

## Tecnologias utilizadas

Este projeto utiliza as seguintes tecnologias:

- **Fastify**: Um framework web rápido e eficiente para Node.js, que foi usado para criar a API.
- **Typescript**: Uma linguagem de programação superset do JavaScript, que adiciona tipagem estática ao código.
- **TSUp**: Uma ferramenta de empacotamento e compilação de código Typescript.
- **tsx**: Uma ferramenta de execução de scripts Typescript, que permite usar o Typescript diretamente no Node.js.
- **@fastify/cors**: Um plugin Fastify para habilitar o CORS (Cross-Origin Resource Sharing).

Essas tecnologias foram escolhidas para fornecer uma base sólida e escalável para o desenvolvimento da API da Fórmula 1.