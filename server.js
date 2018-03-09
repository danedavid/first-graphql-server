const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const createDb = require('./config/mongoose');
const userSchema = require('./graphql');
const db = createDb();
const app = express();
const PORT = 5000;

app.use('*', cors());

app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Hope GraphQL is running at ${PORT}`);
});
