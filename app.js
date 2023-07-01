import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import apiRouter from "./api.routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', apiRouter);

export default app;
