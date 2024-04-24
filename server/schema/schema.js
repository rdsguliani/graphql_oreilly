const graphql = require("graphql");


// QUERIES 
const { getUserById, getAllUser } = require("./query/user-query");
const { getAllPost, getPostById } = require("./query/post-query");
const { getHobbyById, getAllHobby, getHobbyByTitle } = require("./query/hobby-query");

const { CreateUser, UpdateUser, DeleteUser } = require("./mutations/user-mutation");
const { CreatePost, UpdatePost, DeletePost } = require("./mutations/post-mutation");
const { CreateHobby, UpdateHobby, DeleteHobby } = require("./mutations/hobby-mutation");

const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;


// RootQuery
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "",
    fields: {
        getUserById: getUserById,
        getAllUser: getAllUser,
        
        getAllPost: getAllPost,
        getPostById: getPostById,

        getHobbyById: getHobbyById,
        getAllHobby: getAllHobby,
        getHobbyByTitle: getHobbyByTitle
       
    }
})



const Mutation = new GraphQLObjectType({
    name: "MutationType",
    description: "Root Mutation",
    fields: {
        createUser: CreateUser,
        updateUser: UpdateUser,
        deleteUser: DeleteUser,

        createPost: CreatePost,
        updatePost: UpdatePost,
        deletePost: DeletePost,

        createHobby: CreateHobby,
        updateHobby: UpdateHobby,
        deleteHobby: DeleteHobby
    }
 })


const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})



module.exports = schema




 // {
        //     type: UserType,
        //     args: {
        //         id: {
        //             type: GraphQLString
        //         },
        //         name: {
        //             type: GraphQLString   
        //         }
        //     },

        //     resolve(parent, args){
        //         // we resolve with data
        //         // get and return data from datasource
        //         return _.find(userData, {id: args.id})
                
        //     }
        // },

        // hobby: {
        //     type: HobbyType,
        //     args: {
        //         id: {
        //             type: GraphQLString
        //         }
        // },

        //     resolve(parent, args){
        //         // we resolve with data
        //         // get and return data from datasource
        
                
        //     }
        // }
