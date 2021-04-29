/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
/* eslint-enable */
import fs from 'fs';
import path from 'path';

const schema = fs.readFileSync(path.join(__dirname, '..', 'src', 'typeDefs.graphql')).toString();

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(schema),
    graphiql: true,
  }),
);

const port = 4000;
app.listen(port);
console.log(`open http://localhost:${port}/graphql`);
