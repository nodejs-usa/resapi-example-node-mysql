const express = require('express');
const { join } = require('path');
const morgan = require('morgan');
const app = express();

// Import Routes
const customerRoutes =  require('./routes/customers');

const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const { urlencoded } = require('express');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Settings
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'x1234567890',
    port: 3306,
    dialect : "mysql",
    database: 'crudnodejsmysql'
}, 'single' ));

// Routes
app.use('/', customerRoutes);


// static files
app.use(express.static(path.join(__dirname, 'public' )));


app.listen(app.get('port'), ()=>{
    console.clear();
    console.log('Server on port:', app.get('port'));
});