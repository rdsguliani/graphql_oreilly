const { GraphQLID, GraphQLString } = require("graphql");
const PostType = require("../types/post-type");
const Post = require("../../model/Post");


const CreatePost = {
    type: PostType, 
    args: {
        id: {
            type: GraphQLString
        },
        comment: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLID
        }
    },

    resolve(parent, args) {
        return Post.create({
            comment: args.comment,
            userId: args.userId
        });
    }
}

const UpdatePost = {
    type: PostType, 
    args: {
        id: {
            type: GraphQLString
        },
        comment: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLID
        }
    },

    resolve(parent, args) {
        return updatedPost = Post.findByIdAndUpdate(
            args.id, 
            {
                $set: {
                    comment: args.comment
                }
            },
            {
                new: true
            }
        )
    }   
}

const DeletePost = {
    type: PostType,
    args: {
      id: {
        type: GraphQLString
      }
    },
  
    resolve: async (parent, args) => {
      let result = Post.findByIdAndDelete(args.id);
      if (!result) {
        throw new Error("error removing post")
      }

      return result;
    }
  
  }
  


exports.CreatePost = CreatePost;
exports.UpdatePost = UpdatePost;
exports.DeletePost = DeletePost;

// const { DataStore } = require('notarealdb');