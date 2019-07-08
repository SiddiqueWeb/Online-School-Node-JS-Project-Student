var express = require('express');
var user	= require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('pages/login');
});






// user.post('/',function(req,res){
//   ssn = req.session;
//   ssn.StudentId=req.body.StudentId;
//   // res.end('done');
// });


router.post('/', function(req, res){
	
	var data = {
		StudentId: req.body.StudentId,
		password: req.body.password,
	};

	console.log("user : "+data.StudentId);
	console.log("pass : "+data.password);
	console.log("done");
	
	// res.send();
	// res.send("StudentId : "+req.body.StudentId+" password : "+req.body.password);

	user.validate(data, function(status){
		if(status)
		{
			req.session.un = req.body.StudentId;
			if(req.session.un != null)
			{
			 res.redirect('/studentAccount');
			}
			else
			{
				res.redirect('/login');
			}

			// res.send('Succesfull');
			console.log("Login Succesfull");
	
	    }
			else
	   {
			res.redirect('/login');
			// res.send('invalid StudentId/password...');
			console.log("User input data is invalid");
		}
	});

});















module.exports = router;