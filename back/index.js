const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const postsRoutes = require('./routes/posts.js');
const usersRoutes = require('./routes/users.js');

dotenv.config();

//express app
const app = express();

//config
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
);
app.use(express.json());

app.use((req, res, next) => {
  // console.log(req.path, req.method);
  next();
});

//read routes
app.get('/', (req, res) => {
  res.send('Hello to myBucket API');
});
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);

//Server production assets

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('front/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../front/build'));
  });
}

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
  .catch((err) => console.log('Error with connection', err.message));
