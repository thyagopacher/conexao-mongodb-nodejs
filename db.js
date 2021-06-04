const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thyagopacher:brasil@cluster0.jziq9.mongodb.net/hackathon?retryWrites=true&w=majority');

const userSchema = new mongoose.Schema({
    username: String, email: String
}, { collection: 'users' });

module.exports = { Mongoose: mongoose, UserSchema: userSchema }