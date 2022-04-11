import express from 'express';
import mongoose from 'mongoose';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitController   from "./controllers/tuits-controller.js";
import cors from 'cors';
const app = express();

const cors_options = {origin : "https://a9--znieto-webdev.netlify.app/"};
app.use(cors(cors_options));

app.use(express.json());



const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);


helloController(app);
userController(app);
tuitController(app);
app.listen(process.env.PORT || 4000);