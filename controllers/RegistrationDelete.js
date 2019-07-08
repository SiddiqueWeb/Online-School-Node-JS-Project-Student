var express = require('express');
var user	= require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res)
{
	var CourseId = "127";
	var id= req.session.un;

user.delete(CourseId,function(status)
	{
	if(status != null)
		{
		if(req.session.un != null)
			{	
		     user.getAlLregistration(id,function(results)
				{
				if(results != null)
					{
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
		 	}
		else
			{
			res.redirect('/login');
			}
		}
	});
});







// user.getAlLregistration(id,function(results)
// 			{
// 						if(results != null)
// 								{
// 			// console.log(results[0].CourseName);

// 									if(req.session.un != null)
// 												{	
// 		     										res.render('pages/RegistrationView',{RegistrationData: results});
// 												}
// 									else
// 												{
// 													res.redirect('/login');
// 												}

			
// 								}
		


// 		});



	
// });



module.exports = router ;