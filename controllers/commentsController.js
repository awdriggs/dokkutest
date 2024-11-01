import Comment from '../models/Comments.js';

// // Ctonroller for posting a new location
export const addComment = async (req, res) => {
  console.log("adding a comment");
  console.log(req.body);
  try {
    console.log("trying");
    const {name, text} = req.body; //destructuring

    // Create a new user
    const newComment = new Comment({name, text});

    console.log("comment", newComment);
    await newComment.save();

    res.status(201).json({
      message: 'Comment created successfully',
      comment: newComment,
    });
  } catch (error) {
    console.log("wtf")
    res.status(500).json({
      message: 'Error creating comment',
      error: error.message,
    });
  }
};

console.log(Comment)
// Controller for getting all locations 
export const getComments = async (req, res) => {
  console.log("getting comments");
  try {
    console.log("trying");
    const comments = await Comment.find(); // Fetch all users from the database
    console.log(comments);
     
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching comments',
      error: error.message,
    });
  }
};
 

