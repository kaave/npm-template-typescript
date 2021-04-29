import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';
import { nanoid } from 'nanoid';
import path from 'path';
import type { MutationResolvers, Photo, QueryResolvers, Resolvers } from './generated/resolvers';

const typeDefs = readFileSync(path.join(__dirname, 'typeDefs.graphql')).toString();

let photos: Photo[] = [];

const queryResolvers: QueryResolvers = {
  totalPhotos: () => photos.length,
  allPhotos: () => photos,
};

const mutationResolvers: MutationResolvers = {
  postPhoto: (_, { input: { name, category, description } }) => {
    const createdPhoto = {
      id: nanoid(),
      name,
      url: 'http://localhost',
      description: description ?? '',
      category: category ?? 'SELFIE',
      postedBy: {
        githubLogin: '',
        name: 'PostPhotoUser',
        avatar: 'http://localhost/image',
        postedPhotos: [],
        inPhotos: [],
      },
      taggedUsers: [],
      created: new Date(),
    };

    photos = [...photos, createdPhoto];

    return createdPhoto;
  },
};

const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};

const server = new ApolloServer({ typeDefs, resolvers });

async function main() {
  const { url } = await server.listen();
  console.log('GraphQL service running on', url);
}

main();
