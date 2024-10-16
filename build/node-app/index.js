const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB!');
    app.get('/', (req, res) => res.send('Successfully connected to DB ✅'));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    app.get('/', (req, res) => res.send('Not connected to the DB ❌'));
  });

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

