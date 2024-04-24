const graphql = require("graphql");
const PostType = require("../types/post-type");
const Post = require("../../model/Post");

const { GraphQLString, GraphQLList } = graphql;

const getPostById = {
  type: PostType,
  args: {
    id: { type: GraphQLString },
  },

  resolve(parents, args) {
    return Post.findById(args.id)
  },
};

const getAllPost = {
  type: new GraphQLList(PostType),
  args: {
    id: { type: GraphQLString },
  },

  resolve: async (parents, args) => {
    return result = Post.find();
    const query = Post.find()
    const qResult = await query;
    return qResult;
  },
};



exports.getAllPost = getAllPost;
exports.getPostById = getPostById;