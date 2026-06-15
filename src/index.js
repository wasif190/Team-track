import crypto from 'crypto';
global.crypto = crypto;

import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 3000;

import connectDB from './db/index.js';

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Getting error while connecting', err);
    process.exit(1);
  });
