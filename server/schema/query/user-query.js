const graphql = require("graphql");

const User = require("../../model/User");
const UserType = require("../types/user-type");

const { GraphQLString, GraphQLList } = graphql

const getUserById = {
  type: UserType,
  args: {
    id: { type: GraphQLString },
  },

  resolve: (parent, args) => { 
   return User.findById(args.id)
  },
};

const getAllUser = {
  type: new GraphQLList(UserType),
 

  resolve: async (parent, args) => {
    return result = User.find();
    const query = User.find()
    const qResult = await query;
    return qResult;
  },
};

exports.getUserById = getUserById;
exports.getAllUser = getAllUser;