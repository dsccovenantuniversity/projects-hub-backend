import { Router, Request, Response } from 'express';
import { createProject } from '../controller/project';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const project = await createProject(req.body);
    return res.json(project);
});

export default router;
