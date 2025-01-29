const express = require('express');
const app = express();

const router = require('./src/routes');

const mongoose = require('mongoose');
const debug = require('debug')("app:main");
const config = require('config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));

mongoose
    .connect(config.get('db.address'))
    .then(() => debug('MongoDB Connected!'))
    .catch(() => debug('could not Connected!'));

app.use('/api', router)

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server started on port ${port}`)})