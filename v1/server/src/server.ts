// express and eco.
import express, {
  Application,
  Request,
  Response,
} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import {
  corsConfig,
  expressConfig,
  helmetConfig,
} from '@config/express.config';
// router imports.
import basicOperations from '@routes/v1/pg/record/basicOperations.route';
import { ErrorHandler } from '@middlewares';

// import { connectToDatabase } from '@database/connection';

dotenv.config({ path: '.env' });

const app: Application = express();
const port: number | string = process.env.PORT || 3001;

app.use(cors(corsConfig));
app.use(helmet(helmetConfig));
app.use(express.urlencoded(expressConfig));
app.use(express.json());

// routing.
// app.use('/', require('./routes/api/v1/data/fetchData'));

// connectToDatabase().then(() => {
//   app.use('/', studentRouter);

//   app.listen(3002, () => {
//     console.log(`Server started at http://localhost:${3002}`);
//   });
// }).catch((error: Error) => {
//   console.error('Database connection failed', error);
//   process.exit();
// });

// ** pg routers ** //
app.use('/api/v1/pg/record', basicOperations);
app.use(ErrorHandler);

app.listen(port, () => console.log(`server @ port ${port}! <===`));
