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

router.get('/:commentId', asyncTryCatch(getSingleCommentByProjectIdController));

router.post(
    '/',
    validate(validateNewComment),
    asyncTryCatch(createCommentController),
);

router.put(
    '/:commentId',
    validate(validateUpdatedComment),
    asyncTryCatch(updateCommentController),
);

router.delete('/:commentId', asyncTryCatch(deleteCommentController));

export default router;
