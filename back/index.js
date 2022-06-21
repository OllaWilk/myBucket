const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const postsRoutes = require('./routes/posts.js');

dotenv.config();

//express app
const app = express();

//config
app.use(express.json());
app.use(bodyParser.json({ linit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ linit: '30mb', extended: true }));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//read routes

app.use('/api/posts', postsRoutes);

//connect to mongodb
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
