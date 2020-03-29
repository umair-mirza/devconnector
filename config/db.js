const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI').toString();

//we will use async awat instead of promises because its new and more advanced

const connectDB = async () => {
    try {
        mongoose.Promise = global.Promise;
        await mongoose.connect(db, {useNewUrlParser: true});

        console.log("MongoDB connected");
    }
    catch(err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;