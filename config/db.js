const mongoose  = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.set("strictQuery",true);
        await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('mongodb Connected'))
        .catch((err) => console.log(err))
    } catch (error) {
        console.log(`mongodb server Issue ${error}`)
    }
}

module.exports = connectDB;