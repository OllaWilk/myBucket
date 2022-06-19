import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ linit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ linit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.CONNECTDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`App runs on: http://localhost:${PORT}/`)
    )
  )
  .catch((err) => console.log(err.message));
