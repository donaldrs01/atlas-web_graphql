const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
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

// Define RootQueryType
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return {
                    id: args.id,
                    title: 'Practice Task',
                    weight: 5,
                    description: 'Sample task description'
                };
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});