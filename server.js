import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import { DATABASE } from './config.js';

const app = express();

const PORT = 8100;

mongoose
    .connect(DATABASE)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        data: 'Hello from NodeJS API'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});