var express = require('express');
var user	= require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	var id= req.session.un;
	user.getPassword(id,function(results)
	{

		if(results != null)
		{
			
			if(req.session.un != null)
			{
		
		     res.render('pages/ChangePassword',{oldpassword: results});

			}
			else
			{
					res.redirect('/login');
			}

	   	}
	   	else
	   	{

	   	}
		
	});

});

router.post('/', function(req, res)
{

var data = 
	{
			id : req.session.un,
			password: req.body.password	
	}
console.log("ChangePassword_id : "+req.session.un+ "ChangePassword_Password:" +req.body.password);

user.update(data, function(status){

		if(status)
		{
			res.redirect('/studentAccount');			
		}
		else
		{
			res.redirect('/ChangePassword');
		}

	});
});


module.exports = router ;