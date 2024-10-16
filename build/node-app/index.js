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
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next(); 
  } else {
    res.status(503).send('Not connected to the DB ❌'); 
  }
});

app.get('/', (req, res) => {
  res.send('Successfully connected to DB ✅');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

