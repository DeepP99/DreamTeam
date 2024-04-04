const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const usersRouter = require('./routes/users')
const playersRouter = require('./routes/players')
const formationsRouter = require('./routes/formations')
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// View engine
app.set('view engine', 'ejs');


// const players = [
//     { name: 'John Doe', team: 'Red Devils', birth_year: 1990 },
//     { name: 'Jane Doe', team: 'Blue Lions', birth_year: 1995 }
// ];

// const formations = [
//     { name: '4-4-2', description: 'Four defenders, four midfielders, two forwards' },
//     { name: '3-5-2', description: 'Three defenders, five midfielders, two forwards' }
// ];

// Routes
app.use('/users', usersRouter);
app.use('/players', playersRouter);
app.use('/formations', formationsRouter);


app.get('/', (req, res) => {
    res.render('index');
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





// app.get('/users', (req, res) => {
//     // code to display users
// });

// app.get('/players', (req, res) => {
//     // code to display players
// });

// app.get('/formations', (req, res) => {
//     // code to display formations
// });

// Start server
const port = 5500;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});