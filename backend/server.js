const fastify = require("fastify")({ logger: true });
const fs = require("fs").promises;
const bcrypt = require("bcrypt");
const jwt = require('@fastify/jwt')
const path = require("path");
const csv = require("csvtojson");
const cors = require("@fastify/cors");

// Register CORS
fastify.register(cors, {
  origin: true,
});
fastify.register(jwt, {
  secret: "supersecret",
});

const users = {
  admin: {
    id: 1,
    name: "Admin User",
    username: "admin",
    email: "admin@flanks.com",
    password: "$2b$12$JgDkLTJ1NrBPixs6gidyZegOiPnXgMO.GUJPOZFW8afHyUWgBOfWy",
    image: "https://media.licdn.com/dms/image/D4D03AQFhDb_gX8eOAQ/profile-displayphoto-shrink_800_800/0/1667155391357?e=1724889600&v=beta&t=DyipEaJgtzH9jcKbQb5y9e16ax6sqXvlN2ZJONd5jk4"
  },
};

fastify.post('/api/login', async (request, reply) => {
  const { username, password } = request.body;
  if (!username || !password) {
    return reply.status(400).send({ error: 'Request missing username or password' });
  }

  const user = users[username];
  if (!user) {
    return reply.status(401).send({ error: 'User not found' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return reply.status(401).send({ error: 'Password is incorrect' });
  }

  const token = fastify.jwt.sign({ username: user.username, email: user.email });
  reply.send({ token });
});

fastify.get('/api/user', async (request, reply) => {
  try {
    await request.jwtVerify();
    const username = request.user.username;

    const user = users[username];
    if (!user) {
      return reply.status(404).send({ error: 'User not found' });
    }
    
    reply.send({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      image: user.image
    });

  } catch (error) {
    reply.send({
      error: 'Authentication failed',
      message: error.message
    });
  }
});


fastify.get("/api/positions", async (request, reply) => {
  try {
    const filePath = path.join(__dirname, "positionDataset.csv");
    const csvData = await fs.readFile(filePath, "utf8");
    const jsonArray = await csv().fromString(csvData);
    reply.send(jsonArray);
  } catch (error) {
    fastify.log.error(error);
    reply.status(500).send({ error: "Failed to load data" });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: '0.0.0.0' });
    fastify.log.info(`Server listening on http://0.0.0.0:4000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
start();
