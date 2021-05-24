require('dotenv').config()
import { connectDB } from './database/index';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';

const PORT = process.env.PORT || 4000;

(async () => {
  connectDB();

  const server = new ApolloServer({ typeDefs: schema, resolvers, playground: true, introspection: true });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
})();
