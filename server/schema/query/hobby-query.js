
const  graphql = require("graphql");

const HobbyType = require("../types/hobby-type");
const Hobby = require("../../model/Hobby");

const {GraphQLString, GraphQLList } = graphql

const getHobbyById = {
    type: HobbyType,
    args: {
        id: {
            type: GraphQLString
        }
    },

    resolve: async (parent, args) => {
        return Hobby.findById(args.id)
    }
}

const getHobbyByTitle = {
    type: new GraphQLList(HobbyType),
    args: {
        title: {
            type: GraphQLString
        }
    },

    resolve: async (parent, args) => {
        return result = Hobby.find({title: args.title})
        let query = Hobby.find({title: args.title})
        let qResult = await query;
        return qResult
    }
}

const getAllHobby = {
    type: new graphql.GraphQLList(HobbyType),

    resolve: async (parent, args) => {
        return result = Hobby.find();
        let query = Hobby.find() ;
        let qResult = await query;
        return qResult
    }
}


exports.getHobbyById = getHobbyById;
exports.getAllHobby = getAllHobby;
exports.getHobbyByTitle = getHobbyByTitle;


// resolve: async (parent, args) => {
//     let query = args.id ? Hobby.findById(args.id) : Hobby.find()
//     let qResult = await query;
//     return isArray(qResult) ? qResult : [qResult]
// }


// return _.find(hobbyData, {id: args.id})
// console.log(typeof result, result instanceof Array, result instanceof Object, isArray(result))
        // return result;
        // console.log(count)
        // let result =  Hobby.findById(args.id)
        // let result = Hobby.find({title: "Programming"});
       
        // //({ title: "Programming" } )
        
        // // console.log(result)
        // return result;

        // const result = hobbyData.find(item => {
        //     return item.id === args.id
        // })
        // return result;