// const express = require('express');

import express from 'express'
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import { sql } from './config/db.js';
import { aj } from './lib/arcjet.js';
import path from 'path'
dotenv.config(); // load environment variables from a .env file into process.env

const PORT = process.env.PORT || 3000;
const app = express(); 
const __dirname = path.resolve();

app.use(express.json()); // parse application/json
app.use(cors()); // enable CORS - Cross Origin Resource Sharing
app.use(helmet({
  contentSecurityPolicy: false,
}
)); // secure your app by setting various HTTP headers
app.use(morgan('dev')); // log every request to the console
app.use(async (req,res,next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1, // specifies each request consumes 1 token
    });
    if (decision.isDenied()){
      if(decision.reason.isRateLimit()){
        res.status(429).json({error: "Too many requests"});
      }
      else if (decision.reason.isBot()){
        res.status(403).json({error: "Bot access denied"})
      }
      else {
        res.status(403).json({error: "Fobidden"})
      }
      return;
    }
    // check spoofed bot
    if( decision.result && decision.result.some(result => result.reason.isBot() && result.reason.isSpoofed())){
      res.status(403).json({error: "Spoofed bot detected"});
      return;
    }
    next()
  } catch (error) {
    console.log("Arcjet error:", error);
    next(error);
  }
})
app.use('/api/products', productRoutes);

if(process.env.NODE_ENV === "production") {
  // server our react app
  app.use(express.static(path.join(__dirname, "frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile((path.resolve(__dirname, "frontend", "dist", "index.html")))
  })
}

async function initDB(){
  try {
    await sql`
    create table if not exists products 
    (
      id serial primary key,
      name varchar(255) not null,
      image varchar(255) not null,
      price decimal(10,2) not null,
      created_at timestamp default current_timestamp,
      updated_at timestamp default current_timestamp
    );`;

    console.log('Database is ready');
  } catch (error) {
    console.log('error init:',error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }); 
});
