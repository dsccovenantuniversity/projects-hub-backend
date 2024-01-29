import { Router } from 'express';
import { asyncTryCatch } from '../middlewares/asyncTryCatch';
import { validate } from '../middlewares/validate';
import {
    createCommentController,
    deleteCommentController,
    getAllCommentsByProjectIdController,
    getSingleCommentByProjectIdController,
    updateCommentController,
} from '../controller/comment';
import {
    validateUpdatedComment,
    validateNewComment,
} from '../validators/comment';

const router = Router();

router.get('', asyncTryCatch(getAllCommentsByProjectIdController));

router.get('/:comment_id', asyncTryCatch(getSingleCommentByProjectIdController));

router.post(
    '/',
    validate(validateNewComment),
    asyncTryCatch(createCommentController),
);

router.put(
    '/:comment_id',
    validate(validateUpdatedComment),
    asyncTryCatch(updateCommentController),
);

router.delete('/:comment_id', asyncTryCatch(deleteCommentController));

export default router;
