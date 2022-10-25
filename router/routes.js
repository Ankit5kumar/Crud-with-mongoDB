const express = require('express');
const route = express.Router()
const {Create,CreateUser,getallUser,
    findById,
    updateData,
    deleteData} = require('../controller/user')

// Routes

route.get('/crud/api', Create)

route.post('/crud/api/createUser',CreateUser)
route.get('/crud/api/getallUser',getallUser)
route.get('/crud/api/findByid/:id',findById)
route.put('/crud/api/updateData/:id',updateData)
route.delete('/crud/api/deleteData/:id',deleteData)






module.exports = route