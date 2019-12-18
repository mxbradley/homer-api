"use strict";

const graphql = require("graphql");
const express = require("express");
const expressGraphQl = require("express-graphql");
const { GraphQLSchema } = graphql;
const { query } = require("../schemas/queries");
const { mutation } = require("../schemas/mutations");

const app = express();

const schema = new GraphQLSchema({
    query,
    mutation
});

app.use(
    '/',
    expressGraphQl({
        schema: schema,
        graphiql: true
    })
);

const port = process.env.NODEJS_PORT;

app.listen(port, () =>
    console.log(`GraphQL server running on localhost:${port}`)
);
