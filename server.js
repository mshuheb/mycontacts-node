const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

const dotenv =require("dotenv").config();

const app=express();

connectDB();
//const port = 5000;

const port = process.env.PORT || 5000;

// app.get('/api/contacts', (req,res)=>{
//     res.send("GET ALL CONTACTS")
// })

app.use(express.json()); //This is going to provide us a parser which will help us to parse the data stream that we receive from the client 
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})