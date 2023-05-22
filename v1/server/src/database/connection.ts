// import {
//   Collection,
//   Db,
//   MongoClient,
// } from 'mongodb';
// import config from '@config/mongoConfig';

// export const collections: { studentList?: Collection } = {};

// export async function connectToDatabase() {
//   const client: MongoClient = new MongoClient(config.mongo.url as string);

//   await client.connect();

//   const db: Db = client.db(config.mongo.database);
//   const studentListConnection: Collection = db.collection(config.mongo.collection as string);

//   collections.studentList = studentListConnection;
//   console.log(`Successfully connected to database: ${db.databaseName} and collection: ${studentListConnection.collectionName}`);
// }
