import express from "express";
import { ConnectDatabase } from "./db/ConnectDatabase.js";
import dotenv from 'dotenv'
import {defaultData} from "./default.js"


dotenv.config();

const app = express();


ConnectDatabase();
app.listen(process.env.PORT, () => console.log("Server running on port :", process.env.PORT));
defaultData();