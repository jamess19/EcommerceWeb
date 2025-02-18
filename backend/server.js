// const express = require('express');

import express from 'express'
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
dotenv.config(); // load environment variables from a .env file into process.env

const PORT = process.env.PORT || 3000;
const app = express(); 

app.use(express.json()); // parse application/json
app.use(cors()); // enable CORS - Cross Origin Resource Sharing
app.use(helmet()); // secure your app by setting various HTTP headers
app.use(morgan('dev')); // log every request to the console
app.get('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
