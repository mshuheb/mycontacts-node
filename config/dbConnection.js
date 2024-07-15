const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING); //This line attempts to connect to the MongoDB database using Mongoose. The mongoose.connect method returns a promise, which is awaited to resolve. The connection string is taken from an environment variable process.env.CONNECTION_STRING, which typically contains the URL to the MongoDB instance.
        console.log("Database connected:", connect.connection.host, connect.connection.name);  // If the connection is successful, this line logs a message to the console indicating the database connection details, including the host and database name.
}catch(err){
    console.log(err);
    process.exit(1); //This line terminates the Node.js process with an exit code of 1, which typically indicates that the process ended due to an error. This ensures that if the database connection fails, the application does not continue to run in an erroneous state.
}
};

module.exports =connectDB;