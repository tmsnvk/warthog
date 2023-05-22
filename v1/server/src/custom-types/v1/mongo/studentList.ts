import { ObjectId } from 'mongodb';

export type Student = {
  firstName: string,
  lastName: string,
  id?: ObjectId | undefined
}
