const initFramework = require('./global');
initFramework();
// console.log(framework);
const express = require('express');
const morgan = require('morgan');
// const exphbs = require('express-handlebars');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const serverConfig = require('../config/server.json');
//configs 
const app = express();
app.use(express.json());
app.use(cors());
app.set('port', serverConfig.port || 3000);
app.set('host', serverConfig.host || 'localhost');
app.set('views', path.join(__dirname, '../views'));
// app.engine('.hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs',

// }));
// app.set('view engine', '.hbs');
app.set('view engine', 'ejs');
app.use(expressLayouts);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
// Setting base url for ejs templates
app.locals.baseURL = `http${serverConfig.secure ? 's' : ''}://${app.get('host')}:${app.get('port')}/`

//static paths
app.use(express.static(path.join(__dirname, '../public')));

//routes 
// require('./routes');
app.use(require('./routes'));
module.exports = app;