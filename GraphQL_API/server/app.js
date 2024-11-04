const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// Establish MongoDB connection
const dbURI = "mongodb+srv://donaldrs:3fHTf9syPHNYcKv@graphql.do4y4.mongodb.net/?retryWrites=true&w=majority&appName=GraphQL";

mongoose.connect(dbURI);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});