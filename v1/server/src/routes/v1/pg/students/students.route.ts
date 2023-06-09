// express and eco.
import { Router } from 'express';
// controller modules.
import {
  addNewUserController,
} from '@controllers/v1/pg/user';

const router: Router = Router();

router.post('/addNew', addNewUserController);

export default router;
