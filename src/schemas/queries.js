const { db } = require("../../database/postgresConnection");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt } = require("graphql");
const { StoryType } = require("./types");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        story: {
            type: new GraphQLList(StoryType),
            args: { privacy: {type: GraphQLBoolean}, likes: {type: GraphQLInt} },
            resolve(parentValue, args) {
                const query = `SELECT title FROM stories WHERE privacy = $1 AND likes >= $2`;
                const values = [ args.privacy, args.likes ];

                return db
                    .many(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        }
    }
});

exports.query = RootQuery;
