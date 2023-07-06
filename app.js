import express from "express";
import dotenv from "dotenv";
import storageBodegas from "./routers/bodegas.js";
import storageBodegasPost from "./routers/bodegasPost.js";
dotenv.config();

const appExpress = express();
appExpress.use(express.json());
appExpress.use("/bodegas", storageBodegas);
appExpress.use("/bodegas/add", storageBodegasPost);

const config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));