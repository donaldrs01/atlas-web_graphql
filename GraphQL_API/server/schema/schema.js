const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = require("graphql");
const _ = require('lodash');

// Dummy data
const tasks = [
    {
        id: '1',
        title: 'Create your first webpage',
        weight: 1,
        description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)'
    },
    {
        id: '2',
        title: 'Structure your webpage',
        weight: 1,
        description: 'Copy the content of 0-index.html into 1-index.html. Create the head and body sections inside the html tag, create the head and body tags (empty) in this order'
    }
];

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
                // uses lodash to search through tasks and return object with matching ID
                return _.find(tasks, { id: args.id });
                }
            }
        }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});