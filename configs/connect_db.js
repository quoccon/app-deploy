const mongoose = require('mongoose');

require('dotenv-flow').config();

const connectDB = async () => {
    const dbUrl = process.env.DB_URL;

    if (!dbUrl) {
        process.exit(1);
    }

    try {
        await mongoose.connect(dbUrl);
        console.log(`✅ MongoDB connected: ${dbUrl}`);
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;