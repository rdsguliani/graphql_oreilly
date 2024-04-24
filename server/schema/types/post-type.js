const graphql = require("graphql");
const UserType = require("./user-type");
const { usersData } = require("../dummy");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

// Create types
const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Documentation for post",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    userId: {type: GraphQLID}
    // user: {
    //     type: require("./user-type"),
    //     resolve(parent, args) {
    //       return _.find(usersData, { id: parent.userId }); 
    //     }
    // },
  })
});

module.exports = PostType



 // fields: () => ({
  //   id: { type: GraphQLID },
  //   comment: { type: GraphQLString },
  //   // user: {
  //   //   type: UserType,  
      
  //   // }
  //   // user: {
  //   //   type: UserType,
  //   //   resolve(parent, args) {
  //   //     // console.log(usersData)
  //   //     const result = usersData.filter(item => {
  //   //       return item.id === parent.userId
  //   //     })
  //   //     return result;
  //   //     // return _.find(usersData, { id: parent.userId });
  //   //   },
  //   // },
  // }),