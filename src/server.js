import http from "http";
import app from './app.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3001;
const server = http.createServer(app);


const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://root:QX5OQZ3nRwaHb20M@cluster0.uxgmkk8.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true
    });

    app.listen(PORT, () => console.log('server in ' + PORT))
  }catch (e) {
    console.log(e);
  }
};

start();

