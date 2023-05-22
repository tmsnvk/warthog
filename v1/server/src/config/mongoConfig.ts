import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.i4dls.mongodb.net/?retryWrites=true&w=majority`;
const MONGO_DATABASE = process.env.MONGO_DATABASE || '';
const MONGO_STUDENT_COLLECTION = process.env.MONGO_STUDENTLIST_COLLECTION || '';

const mongoConfig = {
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  url: MONGO_URL,
  database: MONGO_DATABASE,
  collection: MONGO_STUDENT_COLLECTION,
};

export default mongoConfig;
