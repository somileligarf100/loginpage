import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api', (req, res) => {
  const { userRegistration } = req.body;
  const { email, password } = userRegistration;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  res.status(201).json({ message: 'User Logged-In successfully' });
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});        