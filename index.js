//import functions from "firebase-functions"
import express from 'express';
import cors from 'cors';
import { addCity, getAllCities } from './getCities.js'
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





