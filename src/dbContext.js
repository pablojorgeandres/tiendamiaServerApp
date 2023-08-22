require('dotenv').config();
const mongoose = require('mongoose')

const main = async (callback) => {
    const uri = process.env.MONGO_URI;
    
    const connection = await mongoose
        .connect(uri)
        .then(() => console.log('Succesfully connected to DB'))
        .catch((e) => console.error(e))

    await callback(connection)
}

module.exports = main