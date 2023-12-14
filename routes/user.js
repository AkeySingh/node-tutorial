const express = require('express')
const route = express.Router()
const User = require('../models/userModel')



route.get('/', async (req, res, next) => {
    try {
        const userData = await User.find()
        res.status(200).json({
            result: userData
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })

    }
})

route.post('/', async (req, res, next) => {
    try {
        const product = await User.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
})

route.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await User.findById(id)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
})

route.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if (!user) {
            return res.status(404).json({ message: `cannot find any user with ID ${id}` })
        }
        const updateUser = await User.findById(id);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
})

route.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        //  if id is not correct 
        if (!user) {
            return res.status(404).json({ message: `cannot find any user with ID ${id}` })
        }
        res.send(200).json(user)
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})








module.exports = route
