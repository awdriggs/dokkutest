// routes/commentRoute.js
import express from 'express';
import Comment from '../models/Comments.js';
import { getComments, addComment} from '../controllers/commentsController.js';

const router = express.Router();

// GET all comments 
router.get('/comments', getComments);

// POST a new comment
router.post('/comments', addComment);

export default router;

