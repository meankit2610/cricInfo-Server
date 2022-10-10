const mongoose = require("mongoose")

const connection = mongoose.connect('mongodb+srv://ankit:ankit770@cluster0.n05qagf.mongodb.net/?retryWrites=true&w=majority')
console.log("mongoose connect")
module.exports = connection
