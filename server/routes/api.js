var users = require('../controllers/users');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){
	//user routes
	app.post('/user/auth', users.auth);
	app.post('/user/getuser', users.getBySessionId);
	app.post('/user/signup', users.saveUser);
	app.post('/user/update', users.updateUser);
	app.get('/user/logout', helpers.isAuthenticated, users.logout);
}


module.exports = routesAPI;
