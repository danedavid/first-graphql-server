const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType
} = graphql;
const queryType = require('./queries/user');

const userSchema = new GraphQLSchema({
  query: queryType
});

module.exports = userSchema;
