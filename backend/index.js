import express from 'express';
import { PORT, mongoDBURL,mysqlConfig ,pgConfig} from './config.js';
import mongoose from 'mongoose';
import mysqlRoute from './routes/endpoints.js'
import cors from 'cors';

import mysql from "mysql2/promise.js"
import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool(pgConfig);



const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
// app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );
// Option 3: set headers manually
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/clients', mysqlRoute);





let mongo = mongoDBURL.length>0?true:false;
let mysqlaccess = mysqlConfig.password.length?true:false;

if (mongo) {
  
  mongoose.set('strictQuery', false);
  
  mongoose
    .connect(mongoDBURL)
    .then(() => {
      console.log('App connected to database');
      app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });

} else if(mysqlaccess) {
  
  try {
    mysql.createConnection(mysqlConfig);
    console.log('App connected to MySQL database');
  
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
  }
} else{
  pool.connect()
  .then(() => {
    console.log('App connected to PostgreSQL database');

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL database:', error);
  });
}


// //npm run dev


//INSERT INTO `facilita`.`clientes` (`nome`, `email`, `telefone`, `fecha`) VALUES ('mari', 'mas', '2343', '2122');