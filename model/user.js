const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type: String},
    Email:{type: String},
    Role:{type: String},
    Ph:{type: Number},
        
})
const User = mongoose.model('user',UserSchema)
module.exports = {
    User
}