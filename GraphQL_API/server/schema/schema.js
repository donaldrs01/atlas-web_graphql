const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require("graphql");

// Create new GraphQLObjectType
const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    })
});