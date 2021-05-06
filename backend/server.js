import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cards from "./dbCards.js";
import Cors from "cors";
import dbCards from "./dbCards.js";

const app = express();
// App Config
dotenv.config();
const port =  process.env.PORT || 8001;
const connection_url = process.env.DBCONNECTION;

//Middlewares
app.use(express.json());
app.use(Cors());

// DB congig
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
},()=>{console.log("DB is Connected")})


// API Endpints
app.get('/',(req, res)=>{
    res.status(200).send("Helloe");
});

app.post('/tinder/cards',(req,res) => {
    const dbCard = req.body;
    Cards.create(dbCard,(err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards',(req,res) => {

    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});


// Listener
app.listen(port,()=>console.log(`lising port ${port}`));
