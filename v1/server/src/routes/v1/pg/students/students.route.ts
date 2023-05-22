// express and eco.
import { Router } from 'express';
// controller modules.
import {
  addNewStudentController,
} from '@controllers/v1/pg/student';

const router: Router = Router();

router.post('/addNew', addNewStudentController);

export default router;
