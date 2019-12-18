const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt } = graphql;

const StoryType = new GraphQLObjectType({
    name: "Story",
    type: "Query",
    fields: {
        id: { type: GraphQLID },
        launch_date: { type: GraphQLString },
        title: { type: GraphQLString },
        privacy: { type: GraphQLString },
        likes: { type: GraphQLInt },
    }
});

exports.StoryType = StoryType;
