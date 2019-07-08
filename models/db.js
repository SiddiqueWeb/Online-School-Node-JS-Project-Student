var mysql = require('mysql');

var confiq = {
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'Online_School'
};

var getConnection = function(callback){

	var connection = mysql.createConnection(confiq);
	
	connection.connect(function(err) {
	  	if (err){
	  		console.log('Connection error...');
	  	}
	  	console.log('connected as id ' + connection.threadId);
	});

	callback(connection);
}

module.exports= {
	getResult: function(sql, callback){

		getConnection(function(connection){
			connection.query(sql, function (error, results) {

				if(error){
					callback([]);
				}else{
					callback(results);					
				}
			});

			connection.end(function(err) {
				console.log('connection ending....');
			});
		});
	},
	execute: function(sql, callback){

		getConnection(function(connection){
			connection.query(sql, function (error, results) {

				if(error){
					callback(false);
				}else{
					callback(true);					
				}
			});

			connection.end(function(err) {
				console.log('connection ending....');
			});
		});
	}
}




