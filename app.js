// Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

// Create router
const indexRouter = require('./routes/index');
const varsRouter = require('./routes/variables');
const arraysRouter = require('./routes/arrays');
const objectsRouter = require('./routes/objects');
const formsRouter = require('./routes/forms');
const conditionalsRouter = require('./routes/conditionals');
const cssRouter = require('./routes/css');
const tagsRouter = require('./routes/tags');
const mixinsRouter = require('./routes/mixins');
const caseRouter = require('./routes/case');
const interationRouter = require('./routes/interation');
const attributesRouter = require('./routes/attributes');

const defaultTitle = 'Express';

// livereload
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

// App is express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(connectLivereload());

// Router use
app.use('/', indexRouter);
app.use('/variables', varsRouter);
app.use('/arrays', arraysRouter);
app.use('/objects', objectsRouter);
app.use('/forms', formsRouter);
app.use('/conditionals', conditionalsRouter);
app.use('/css', cssRouter);
app.use('/tags', tagsRouter);
app.use('/mixins', mixinsRouter);
app.use('/case', caseRouter);
app.use('/interation', interationRouter);
app.use('/attributes', attributesRouter);

// POST
app.post('/forms', (req, res) => {
  console.log('Submitted');
  res.render('forms', {
    title: 'Result of form action',
    name: req.body.name,
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
