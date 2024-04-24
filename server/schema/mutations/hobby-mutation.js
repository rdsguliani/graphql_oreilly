const { GraphQLID, GraphQLString } = require("graphql");
const HobbyType = require("../types/hobby-type");
const Hobby = require("../../model/Hobby");


const CreateHobby = {
    type: HobbyType, 
    args: {
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLID
        },
    },

    resolve(parent, args) {
        console.log(args.userId)
        return Hobby.create({
            title: args.title,
            description: args.description,
            userId: args.userId
        })
      
    }
}


const UpdateHobby = {
    type: HobbyType, 
    args: {
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        // userId: {
        //     type: GraphQLID
        // },
    },

    resolve(parent, args) {
        return updatedHobby = Hobby.findByIdAndUpdate(
            args.id, 
            {
                $set: {
                    title: args.title,
                    description: args.description
                }
            },
            {
                new: true
            }
        )
      
    }
}

const DeleteHobby = {
    type: HobbyType,
    args: {
      id: {
        type: GraphQLString
      }
    },
  
    resolve: async (parent, args) => {
      let result = Hobby.findByIdAndDelete(args.id);
      if (!result) {
        throw new Error("error removing user")
      }

      return result;
    }
  
  }
  

exports.CreateHobby = CreateHobby
exports.UpdateHobby = UpdateHobby;
exports.DeleteHobby = DeleteHobby;