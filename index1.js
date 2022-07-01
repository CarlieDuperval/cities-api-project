import functions from "firebase-functions"
import express from 'express';
import cors from 'cors';
import { addCity, getAllCities } from './functions/getCities.js'
const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(express.json());


// routes 
app.get('/cities', getAllCities)

//app.get('/cities/:name', getCityById)

app.post('/cities', addCity)


app.listen(PORT, ()=>{
  console.log("We are listening at port: ", PORT)
})


// const functions = require("firebase-functions");
// const express = require('express');


// //This is an API point
// const app = express();   // the dark blue app is refer to express
// app.get('/test' , (req, res) =>{
//     res.send('This is actually working')
// })


// // This is an API point
// app.get('/' , (req, res) => {
//     res.send('This is Home')
// })


// // these are ny functions
// //create cloud function   // export.app is our cloud app 
// exports.app = functions.https.onRequest(app) // this function replace the app.listen(PORT)





