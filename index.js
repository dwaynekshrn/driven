const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
require('./models/Google');
require('./models/User');
require('./models/Survey');
require('./services/passport');



mongoose.connect(keys.mongoURI);

app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({ secret: keys.cookieKey, saveUninitialized: false, resave: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(
    cookieSession({
       maxAge: 30 * 24 * 60 * 60 * 1000,
       keys: [keys.cookieKey]
    })
);

require('./routes/authRoutes')(app, passport);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);