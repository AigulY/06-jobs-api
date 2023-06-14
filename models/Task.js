const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
    toDo:{
        type: String,
        required: [true, 'Please provide ToDo task name'],
        maxlength: 50,
    },
    description:{
        type: String,
        required: [true, 'Please provide description'],
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ['in progress', 'done', 'cancelled'],
        default: 'in progress',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    },
    }, 
{ timestamps: true }
)

module.exports = mongoose.model('Task', TaskSchema)