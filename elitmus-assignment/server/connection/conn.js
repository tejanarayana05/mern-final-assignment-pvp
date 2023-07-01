const mongoose = require('mongoose')

const connectDB = async () => {
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/gamedb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connection Successfull')
    }
    catch(err){
        console.error('Failed to connect to MongoDB' , err);
        process.exit(1);
    }

}
module.exports = connectDB;
//connectDB();