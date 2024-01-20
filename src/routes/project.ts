import { Router } from 'express';
import { createProjectController } from '../controller/project';
import { asyncTryCatch } from '../middlewares/asyncTryCatch';

const router = Router();

router.post('/', asyncTryCatch(createProjectController));

export default router;
