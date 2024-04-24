const graphql = require("graphql");
const UserType = require("../types/user-type");
const User = require("../../model/User");

const { GraphQLString, GraphQLInt } = graphql

const CreateUser = {
  type: UserType,
  args: {
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    profession: {
      type: GraphQLString,
    },
  },

  resolve(parent, args) {
    return User.create ({
      name: args.name,
      age: args.age,
      profession: args.profession
    });    
  }
};

const UpdateUser = {
  type: UserType,
  args: {
    id: {
      type: graphql.GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    profession: {
      type: GraphQLString,
    },
  },

  resolve(parent, args) {
    return updatedUser = User.findByIdAndUpdate(
      args.id, 
      {
        $set: {
          name: args.name,
          age: args.age,
          profession: args.profession
        }
      },
      {
        new: true
      }
    )
  }
};

const DeleteUser = {
  type: UserType,
  args: {
    id: {
      type: GraphQLString
    }
  },

  resolve: async (parent, args) => {
    return result = User.findByIdAndDelete(args.id);
    const query = User.deleteOne({id: args.id});
    const rQuery = await query;
    console.log(rQuery)
    return rQuery.acknowledged
  }

}

exports.CreateUser = CreateUser;
exports.UpdateUser = UpdateUser;
exports.DeleteUser = DeleteUser