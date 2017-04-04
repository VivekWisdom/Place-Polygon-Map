var mongoose = require('mongoose');
var q = require('q');

//defining schema for users table
var userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    name: String,
    password: String,
    activeSession: String
});

var User = mongoose.model('Users', userSchema);

//generating random session id
//todo: make sure no 2 users can have single sessionId
function makeSessionId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 32; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


//Initlizing interface object of this model.
var userModel = {};

//seeding database with default users
userModel.seed = function() {
    var defaultUser = new User({
        name: 'Vivek Wisdom',
        email: 'vivek@vivekwisdom.com',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        activeSession: ''
    });
    defaultUser.save(function(err, user) {
        if (err) console.dir('error occured in populating database');
    });

    defaultUser = new User({
        name: 'Tom Smith',
        email: 'tom@smith.com',
        password: '5f4dcc3b5aa765d61d8327deb882cf99',
        activeSession: ''
    });
    defaultUser.save(function(err, user) {
        if (err) console.dir('error occured in populating database');
    });

    console.log('users table populated.');
}

//saving database with users
userModel.saveUser = function(name, email, password) {
    var results = q.defer();

    var newUser = new User({
        name: name,
        email: email,
        password: password,
        activeSession: ''
    });

    User.findOne({
        email: email
    }, function(err, user) {
        if (user) {
            var response = {};
            response.status = 'error';
            response.error = 'User Email is already registered.';
            results.resolve(response);
        } else {
            newUser.save(function(err, user) {
                if (err) {
                    var response = {};
                    response.status = 'error';
                    response.error = 'Error occured in populating database';
                    results.resolve(response);
                }
                if (user) {
                    var response = {};
                    response.status = 'success';
                    response.name = user.name;
                    results.resolve(response);
                }
            });
        }
    });

    console.log('User' + newUser.name + 'table populated.');
    return results.promise;
}

//saving database with users
userModel.updateUser = function(name, email, password) {
    var results = q.defer();
    
    User.findOne({
        email: email
    }, function(err, user) {
        if (user) {
            user.name = name;
            user.password = password;
            user.save(function(err, user) {
                if(user){
                  var response = {};
                  response.status = 'success';
                  response.sessionId = user.sessionId;
                  response.name = user.name;
                  results.resolve(response);
                }
                if(err){
                  var response = {};
                  response.status = 'error';
                  response.error = 'Error occured in populating database';
                  results.resolve(response);
                }
            });
        }
    });

    console.log('User' + name + 'Updated.');
    return results.promise;
}

//Function to auth user baed on username and password.
userModel.authUser = function(email, password) {
    var results = q.defer();

    User.findOne({
        email: email,
        password: password
    }, function(err, dbuser) {
        if (err) {
            results.reject(err);
        }

        if (dbuser) {
            dbuser.activeSession = makeSessionId();
            dbuser.markModified('string');
            dbuser.save(function(err, dbuser) {
                var response = {};

                response.status = 'success';
                response.sessionId = dbuser.activeSession;
                response.name = dbuser.name;
                results.resolve(response);
            });
        } else {
            var response = {};
            response.status = 'error';
            response.error = 'Invalid username or password';
            results.resolve(response);
        }
    });

    return results.promise;
}

//Function to return users by its sessionID.
userModel.getBySessionId = function(sessionId) {
    var results = q.defer();

    User.findOne({
        activeSession: sessionId
    }, function(err, dbuser) {
        if (err) {
            results.reject(err);
        }

        results.resolve(dbuser);
    });

    return results.promise;
}

//Function to return all users.
userModel.get = function() {
    var results = q.defer();

    User.find(function(err, users) {
        if (err) {
            results.reject(err);
        }
        results.resolve(users);
    });

    return results.promise;
}


//Function to logout user.
userModel.logout = function(sessionId) {
    var results = q.defer();

    User.findOne({
        activeSession: sessionId
    }, function(err, dbuser) {
        if (err) {
            results.reject(err);
        }
        if (dbuser) {
            dbuser.activeSession = '';
            dbuser.markModified('string');
            dbuser.save();
            results.resolve(dbuser);
        }
        results.reject({
            status: 'error',
            error: 'No active session'
        });

    });

    return results.promise;
}

module.exports = userModel;
