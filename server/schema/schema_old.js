
const graphql = require("graphql");


const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} = graphql;

// RootQuery
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "",
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                },
                name: {
                    type: GraphQLString
                }
            },

            resolve(parent, args){
                // we resolve with data
                // get and return data from datasource

                let user = {
                    id: "345",
                    age: 34,
                    name: "paul"
                }

                return user;
                
            }
        }

    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})