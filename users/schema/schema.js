const graphql = require("graphql");
const _ = require("lodash");

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql;

const users = [
    { id: '23', firstName: 'James', age: 34},
    { id: '26', firstName: 'Malina', age: 23}
];


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
                return _.find(users, { id: args.id });
            }
        }
    }
});