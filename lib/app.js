const express = require('express');
const app = express();

app.use(require('cors')());

app.use(express.json());

app.use('/api/v1/houses', require('./controllers/houseController'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
