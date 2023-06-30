import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import apiRouter from "./api.routes.js";

const app = express();

app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Origin", "X-Requested-With", "Accept", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Access-Control-Allow-Credentials", "Access-Control-Allow-Private-Network", "jwt-token", "resettoken", "*"],
}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', apiRouter);

export default app;
