const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType
} = graphql;
const queryType = require('./queries/user');
const mutation = require('./mutations');

const userSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
});

module.exports = userSchema;
