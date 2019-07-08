var express = require('express');
var user	= require.main.require('./models/user-model');

var router = express.Router();
// var ssn;
router.get('/', function(req, res)
{

  res.render('pages/registration');
	
});



router.post('/', function(req, res)
{

	var Data = 
	{
		StudentId: req.session.un,
		Course: req.body.Course,
		Semester : req.body.Semester,
		CourseId : req.body.CourseId
	}
	// console.log("StudentId : "+Data.StudentId);
	// console.log("CourseName : "+Data.Course);

	
	user.create(Data, function(status)
	{
		if(status)
		{

		res.redirect('/RegistrationView');
		}
		else
		{
	     res.redirect('registration');
		}
	

	});
});





module.exports = router ;