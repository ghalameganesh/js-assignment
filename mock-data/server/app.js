import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
// import favicon from 'serve-favicon';

import login from "./api-handlers/login";
import {getOrganizationDetails, getOrganizationList} from "./api-handlers/organization.controller";
import getUsers from "./api-handlers/users.controller";

const app = express();
const debug = Debug('server:app');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

/*app.use('/', index);*/

app.get('/', (request, result)=>{result.status(200).send("<div style='text-align: center; padding-top: 10%;'><h2>Mock server is up and running well!</h2></div>");});
app.get('/login', login);
app.get('/organizations', getOrganizationList);
app.get('/organizations/:id', getOrganizationDetails);
app.get('/organizations/:id/users', getUsers);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
