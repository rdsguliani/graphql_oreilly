
const graphql = require("graphql");
// const _ = require("lodash");

const PostType = require("./post-type");
const { postData, hobbyData } = require("../dummy");
const HobbyType = require("./hobby-type");
const Post = require("../../model/Post");
const Hobby = require("../../model/Hobby");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = graphql;

// Create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: "Documentation for user",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        profession: { type: GraphQLString },
        posts: {
            type: new GraphQLList(require("./post-type")),
            resolve(parent, args) {
                return Post.find({userId: parent.id});
                let result = postData.filter(item => {
                    return item.userId === parent.id;
                })
                // return _.filter(postData, {userId: parent.id})

                return result;
            }
        },
        
        hobbies: {
            type: new GraphQLList(require("./hobby-type")),
            resolve(parent, args) {
                return Hobby.find({userId: parent.id});
                // return _.filter(hobbyData, {userId: parent.id})

                let result = hobbyData.filter(item => {
                    return item.userId === parent.id;
                })

                return result;
            }
        }
       
    })
})

module.exports = UserType;