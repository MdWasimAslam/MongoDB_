const mongoose = require('mongoose');
const users = require('./Schema/users');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/mongoosedb', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Call the createUser function after the connection is established
        await insertQuery();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

connectDB();

const insertQuery = async () => {
    try {
        const db = mongoose.connection.db;
        const res = await db.collection('users').insertOne({name:'rahul'});
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}


const mongoAggregate = async () => {
    try {
        const db = mongoose.connection.db;
        const aggregatePipeline = [
            {
              $match: {
                name:'Kyle'
              }
            }
          ]
        const res = await db.collection('users').aggregate(aggregatePipeline).toArray();
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}
