// routes/commentRoute.js
import express from 'express';
import Comment from '../models/Comments.js';
import { getComments, addComment} from '../controllers/commentsController.js';

const router = express.Router();

// GET all locations

router.get('/comments', getComments);
router.post('/comments', addComment);

// test the route
// router.get('/comments', (req, res) => {
//   res.json({test: "test"});
// })

export default router;

