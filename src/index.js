import express, {json} from "express";
import mongoose  from 'mongoose';
import { routes } from "../routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const databaseurl = "mongodb+srv://amartarocks3:2tq91NNVocAxVPYW@cluster0.aderzjp.mongodb.net/meet";
mongoose.connect(databaseurl);
let database = mongoose.connection;
database.on('connected',()=> {
    console.log("Database connected successfully");
    app.use(routes);
app.get('/healthcheck', (req,res)=> {
    console.log("Server is running");
    res.send('Server is up and running !');
})

app.post('/sendData',(req,res)=> {
    console.log("Data being send by the client...",req.body);
    res.send("Data received successfully!");
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});
});
database.on('error',(err)=> {
    console.log("Error whilr connecting to database",err);
});
