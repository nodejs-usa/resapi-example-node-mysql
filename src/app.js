const express = require('express');
const { join } = require('path');
const morgan = require('morgan');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view.engine', 'ejs');
app.set('views',join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'x1234567890',
    port: 3306,
    dialect : "mysql",
    database: 'crudnodejsmysql'
}, 'single' ));

// Routes

app.listen(app.get('port'), ()=>{
    console.clear();
    console.log('Server on port:', app.get('port'));
});