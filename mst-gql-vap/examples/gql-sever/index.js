const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();

// Mount Apollo middleware here.
server.applyMiddleware({ app, path: '/' });

app.listen(8000);
console.log('server listen url:http://localhost:' + 8000);