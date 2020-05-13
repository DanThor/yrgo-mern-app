const path = require("path");
const mongoose = require("mongoose");

const logger = require(path.join(__dirname, '../utils/logger'));

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    error => {
        if (error) throw error;

        logger.info("MongoDB connection successful");
    }
);
// Add NodeJS native promises to Mongoose
// Allows us to use async/await with Mongoose methods
mongoose.Promise = global.Promise;

/*
    Import models - singleton,
    allows us to do `const ModelName = mongoose.model('ModelName');`
    in any file
*/
// require(path.join(__dirname, "../models/ModelName"));

module.exports = mongoose;
