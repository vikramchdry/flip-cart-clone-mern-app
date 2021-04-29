
// database configuration connection to mongoose database

require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log(`MongoDB connection SUCCESS : ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
};

module.exports = connectDB;