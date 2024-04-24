

const graphql = require("graphql");
const UserType = require("./user-type");

const {GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const HobbyType = new GraphQLObjectType({
    name: "Hobby",
    description: "Hobby - Description",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        userId: {type: GraphQLID}
        // user: {
        //     type: UserType,
        //     resolve(parent, args) {
        //         return _.find(usersData, {id: parent.userId})
        //     }
        // },
    })
})

module.exports = HobbyType;

 // user: {
        //     type: UserType,
        //     resolve(parent, args) {
        //         return {
        //             name: "!2"
        //         }
        //         // return _.find(usersData, {id: parent.userId})
        //     }
        // }