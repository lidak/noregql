const express = require('express');
const port = process.env.PORT || 1234;
require('dotenv').config();
const app = express();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const colors = require('colors');

const connectDB = require('./config/db');
connectDB();

app.use(
  '/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
)

app.listen(port, console.log(`server is running on port ${port}`));