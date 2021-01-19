const graphql = require("graphql");
const axios = require("axios");

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema
} = graphql;


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString},
        firstName: { type: GraphQLString},
        age: { type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
               return axios.get(`http://localhost:3000/users/${args.id}`)
               .then(res => res.data); //have to return res.data because graphql doesnt know axios returns the data under the data property
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});