import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';
import path from 'path';
import type { Resolvers } from './generated/resolvers';

const typeDefs = readFileSync(path.join(__dirname, 'typeDefs.graphql')).toString();

const resolvers: Resolvers = {
  Query: {
    totalPhotos() {
      return 42;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

async function main() {
  const { url } = await server.listen();
  console.log('GraphQL service running on', url);
}

main();
