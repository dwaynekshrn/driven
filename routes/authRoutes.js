const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('users');

module.exports = app => {

    app.post('/auth/register', async (req, res) => {
        const { username, email, password } = req.body;
      
                const user = new User({
                  username, 
                  email, 
                  password,
                  date: Date.now() 
                });
                  user.email = email;
      
                  try {
                  console.log(user);
                  await user.save();
                  } catch(err) {
                    res.status(422).send(err);
                  }
      });

      app.post('/auth/login',
      passport.authenticate('local'),
      function(req, res) {
        res.redirect('/user/' + req.user.username);
      });
    
    app.get('/auth/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) { return res.redirect('/login'); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            resave.req.user.username;
            return res.redirect('/user/' + req.user.username);
          });
        })(req, res, next);
      });   
      

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
     (req, res) => {
        res.redirect('/surveys');
     }
    );
    
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
      });

     app.get('/api/current_user', (req, res) => {
       res.send(req.user)
     });

}

