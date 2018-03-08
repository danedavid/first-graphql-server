const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList
} = graphql;
const User = require('../../models/user');
const userType = require('../types/user');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: {
      type: new GraphQLList(userType),
      resolve: async () => {
        return await User.find().select('name').exec()
        //     .then(data => {
        //       console.log('data inside resolve-->', data);
        //       return data;
        //     })
        //     .catch(err => {
        //       console.log(err);
        //     });
      }
    }
  })
});

module.exports = queryType;
