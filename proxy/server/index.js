const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = require('./router')
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', router)

app.listen(port, () => {
  console.log(`AYEEE YOUR SERVER IS RUNNING AT http://localhost:${port}`);
});