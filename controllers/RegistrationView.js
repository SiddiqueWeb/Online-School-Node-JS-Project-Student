var express = require('express');
var user	= require.main.require('./models/user-model');

var router = express.Router();

router.get('/', function(req, res)
{
	var id= req.session.un;


	user.getAlLregistration(id,function(results)
			{
						if(results != null)
								{
			// console.log(results[0].CourseName);

									if(req.session.un != null)
												{	
		     										res.render('pages/RegistrationView',{RegistrationData: results});
												}
									else
												{
													res.redirect('/login');
												}

			
								}
		


		});
	
	
});


// router.post('/RegistrationView/delete', function(req, res)
// {


// 	var CourseId = "127";

// console.log("Page gate");
// 	user.delete(CourseId,function(status)
// 			{
// 						if(status != null)
// 								{
// 			// console.log(results[0].CourseName);

// 									if(req.session.un != null)
// 												{	
// 		     										// res.render('pages/RegistrationView',{RegistrationData: results});
// 		     										res.render('pages/RegistrationView');
// 												}
// 									else
// 												{
// 													res.redirect('/login');
// 												}

			
// 								}
		


// 		});
	
	
// });





// router.get('/RegistrationView/delete', function(req, res){

// 	var sql = "select * from registration";

// 	db.getResult(sql, function(results){

// 		if(results != null){
// 			res.render('pages/RegistrationView', {userList: results});			
// 		}else{
// 			res.send('Error!.. try again...');
// 		}

// 	});
// });








module.exports = router ;
