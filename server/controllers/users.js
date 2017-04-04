var userModel = require('../models/users');

var users = {};

// controller that handles user login request
users.auth = function(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400);
        res.send({
            status: 'error',
            error: 'Email or password is missing.'
        });
    }

    var user = userModel.authUser(req.body.email, req.body.password);

    user.then(function(users) {
        res.send(users);
    }, function() {
        res.send({
            status: 'error',
            error: 'Error occured while fetching data from database.'
        });
    });

};

// controller that handles user login request
users.getBySessionId = function(req, res) {
    if (!req.body.sessionId) {
        res.status(400);
        res.send({
            status: 'error',
            error: 'sessionId is missing.'
        });
    }

    var user = userModel.getBySessionId(req.body.sessionId);

    user.then(function(users) {
        res.send(users);
    }, function() {
        res.send({
            status: 'error',
            error: 'Error occured while fetching data from database.'
        });
    });

};

// controller that handles user signup request
users.saveUser = function(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400);
        res.send({
            status: 'error',
            error: 'Name, Email or Password is missing.'
        });
    }

    var user = userModel.saveUser(req.body.name, req.body.email, req.body.password);

    user.then(function(users) {
        res.send(users);
    }, function() {
        res.send({
            status: 'error',
            error: 'Error occured while fetching data from database.'
        });
    });

};

// controller that handles user signup request
users.updateUser = function(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400);
        res.send({
            status: 'error',
            error: 'Name, Email or Password is missing.'
        });
    }

    var user = userModel.updateUser(req.body.name, req.body.email, req.body.password);

    user.then(function(users) {
        res.send(users);
    }, function() {
        res.send({
            status: 'error',
            error: 'Error occured while fetching data from database.'
        });
    });

};

// controller that handles user logout request
users.logout = function(req, res) {

    var sessionId = req.query.sessionId;

    var user = userModel.logout(sessionId);

    res.send({
        status: 'success'
    });


};


module.exports = users;
