// express and eco.
import express, {
  Request,
  Response,
  Router,
} from 'express';
// external packages.
import axios from 'axios';


import { ObjectId } from 'mongodb';
import { collections } from '@database/connection';
import { Student } from 'custom-types/v1/mongo/studentList';


export const studentRouter = Router();

studentRouter.use(express.json());

studentRouter.get('/', async (request: Request, response: Response) => {
  // try {
  //   const studentList: Student[] = await collections.studentList.find({}).toArray();

  //   console.log(studentList);
  //   response.status(200).send(studentList);
  // } catch (error: unknown) {
  //   response.status(500).send(error);
  // }
});

// module.exports = studentRouter;
