// express and eco.
import { Router } from 'express';
// controller modules.
import {
  createRecordController,
} from '@controllers/v1/pg/record';

const router: Router = Router();

router.post('/createRecord', createRecordController);

export default router;
