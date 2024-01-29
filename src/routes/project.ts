import { Router } from 'express';
import { createProjectController } from '../controller/project';
import { asyncTryCatch } from '../middlewares/asyncTryCatch';
import { validate } from '../middlewares/validate';
import { validateNewProject } from '../validators/project';

const router = Router();

router.post(
    '/',
    validate(validateNewProject),
    asyncTryCatch(createProjectController),
);

export default router;
