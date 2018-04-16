const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = fs.readFileSync('./schema.graphql').toString();

const app = express();
const PORT = 5000;

const fakeData = [
  { name: 'John Doe' },
  { name: 'Dane David' },
];

const resolvers = {
  Query: {
    users: () => fakeData
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});


app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
  console.log(`GraphQL is running at http://localhost:${PORT}/graphiql`);
});
