var express = require('express');
var user	= require.main.require('./models/user-model');
var router = express.Router();



// router.get('/', function(req, res){

// 	if(req.session.un != null){
		
// 		res.render('pages/studentAccount');

// 	}else{
// 		res.redirect('/login');
// 	}
// });


router.get('/', function(req, res){

	var id= req.session.un;

	user.getAlL2(id,function(results){
			if(results != null)
		{
			
			if(req.session.un != null)
			{
		
		     res.render('pages/studentAccount',{ClassData: results});

			}
			else
			{
					res.redirect('/login');
			}

			
		}
		else
		{

			 res.render('pages/studentAccount',{ClassData: results});
		}
	


	});

	
});



module.exports = router ;