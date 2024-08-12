//I should be able to see the application under categories like games, beauty, fashion, women, and health. 
//I should be able to select the app from the list and see the details of the application, including name, description, 
//release date, version, ratings, and genre. I should be able to perform CRUD (Create, Read, Update, Delete) operations on the 
//application added.

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const application = require('./Routes/Application.js');
const app = express();


mongoose.connect('mongodb+srv://test:test@cluster0.vkjnqsh.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// const applicationSchema = new mongoose.Schema({
//         name : String,
//         description : String,
//         release_date : Date,
//         version : Number,
//         ratings : Number,
//         genre : String,
//         categories : {type : String , enum:[games, beauty, fashion, women, health]}
//     });
// const Application = mongoose.model('Application' , applicationSchema);

const PORT = 4000;
app.listen(PORT, ()=>{
    console.log(`Mongodb Connected on PORT ${PORT}`);
}) 

app.use(bodyParser.json());
app.use(cors());
app.use('/applications',application); 