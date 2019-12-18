const graphql = require("graphql");
const db = require("../../database/postgresConnection").db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt } = graphql;
const { StoryType } = require("./types");

const RootMutation = new GraphQLObjectType({
    name: "RootMutationType",
    type: "Mutation",
    fields: {
        addStory: {
            type: StoryType,
            args: {
                id: { type: GraphQLID },
                launch_date: { type: GraphQLString },
                title: { type: GraphQLString },
                privacy: { type: GraphQLBoolean },
                likes: { type: GraphQLInt }
            },
            resolve(parentValue, args) {
                const query = `INSERT INTO stories (launch_date, title, privacy, likes) VALUES ($1, $2, $3, $4) RETURNING id`;
                const values = [
                    new Date().toISOString().split('T')[0],
                    args.title,
                    args.privacy,
                    args.likes
                ];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        }
    }
});

exports.mutation = RootMutation;
