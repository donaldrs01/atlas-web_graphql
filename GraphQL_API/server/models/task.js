const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    weight: Number,
    description: String,
    projectID: String
});

module.exports = mongoose.model('Task', taskSchema);