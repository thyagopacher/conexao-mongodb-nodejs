const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.URL_BANCO_MONGODB);

const userSchema = new mongoose.Schema({
    username: String, email: String
}, { collection: 'users' });

module.exports = { Mongoose: mongoose, UserSchema: userSchema }