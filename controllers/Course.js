var express = require('express');
var user	= require.main.require('./models/user-model');

var router = express.Router();
// var ssn;
router.get('/', function(req, res){
	 // ssn = req.session; 

	// var id= "16-32308-2";
	var id= req.session.un;

	user.getAlL2(id,function(results){
			if(results != null)
		{
			// console.log(results[0].Name);

			if(req.session.un != null)
			{
		
		     res.render('pages/Course',{CourseData: results});

			}
			else
			{
					res.redirect('/login');
			}

			
		}
		// 	else{
		// 	res.send('Error!.. try again...');
		// }


	});
	// res.render('pages/studentProfile');
	
});






// router.get('/', function(req, res){
	
// 	var id= "16-32308-2";

// 	user.getPassword(id,function(results){

// 		if(results != null){
// 			// console.log(results[0].password);
// 			res.render('pages/ChangePassword',{oldpassword: results});
// 		}else{
// 			res.send('Error!.. try again...');
// 		}
// 	});

// });




























module.exports = router ;