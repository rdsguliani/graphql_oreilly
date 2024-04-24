const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require("cors");

const expressPlayground = require('graphql-playground-middleware-express')
  .default

const mongoose = require('mongoose');
const schema = require("./schema/schema")

const uri = "mongodb+srv://{username}:mongo@cluster0.erxx1qv.mongodb.net/?retryWrites=true&w=majority&appName={clusterName}&dbName={dbName}";

const app = express();


mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log('Yes !! we are connected ');
})
app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(3001, () => {
    console.log("app starting to listen on 3001")
})
