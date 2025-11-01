import express from 'express';
import dotenv from 'dotenv';    
import route from '../src/route/route.js';

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use("/api/user", route)
export default app;