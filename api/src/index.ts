import express from 'express';
import dotenv from 'dotenv';
import app from "../src/app.js"
import {config} from "../src/config.js"




app.listen(config.PORT, () => {
  console.log(`Running on port ${config.PORT}.`)
})
