import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import commentRoutes from './routes/commentRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
// Secrets
dotenv.config();


// Access the MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;
console.log(mongoURI);


mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static('public')); //Middleware for front-end content

// Use the location routes
// app.use('/comments', commentRoutes);
app.use('/api', commentRoutes); // Make sure to include this line

// Use the static routes 
app.use('/', homeRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Test route
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'Server is running!' });
// });




