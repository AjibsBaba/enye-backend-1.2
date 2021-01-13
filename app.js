const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 4001

const Router = require('./routes/router');

const app = express();


app.use(logger('dev'));
app.use(cors('*'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Logs the port in use to the console
app.listen(PORT, () => {
  console.log('Server is listening on port ${PORT}')
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

