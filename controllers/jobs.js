const Task = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const Job = require('../models/Job')

const getAllTasks = async (req, res) => {
    res.send('get all Tasks')
}
const getTask = async (req, res) => {
    res.send('get Single Task')
}
const createTask = async (req, res) => {
    req.body.createdBy = req.user.userId 
    const task = await Task.create(req.body)
    res.status(StatusCodes.CREATED).json({ task })
}
const updateTask = async (req, res) => {
    res.send('update Task')
}
const deleteTask = async (req, res) => {
    res.send('delete Task')
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}