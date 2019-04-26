const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: any, res) => res.render('index', { title: 'Index'}));

app.listen(3000, () => console.log('Running on port 3000...'));