var db = require('./db');

module.exports = {

	getById: function(StudentId, callback){
		var sql = "select * from student where id="+StudentId;
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(id,callback)
	{
		var sql = "select * from student where StudentId='"+id+"'" ;
		// var sql = "select * from Teacher where Id='"+id+"'" ;
		db.getResult(sql, function(results)
		{
			callback(results);
		});	
	},

	getAlL2: function(id,callback)
	{
		var sql = "select * from course_result_tname_time where StudentId='"+id+"'" ;
		// var sql = "select * from Teacher where Id='"+id+"'" ;
		db.getResult(sql, function(results)
		{
			callback(results);
		});	
	},


getAlLregistration: function(id,callback)
	{

		var sql = "select * from registration where StudentId='"+id+"'" ;
		// var sql = "select * from Teacher where Id='"+id+"'" ;
		db.getResult(sql, function(results)
		{

			callback(results);
		});	
	},




	getPassword: function(id,callback){
		var sql = "select password from student where StudentId='"+id+"'";
		db.getResult(sql, function(results){
			callback(results);
		});	
	},
	
	validate: function(student, callback){

		var sql = "select * from student where StudentId='"+student.StudentId+"' and password='"+student.password+"'";
		db.getResult(sql, function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},


	
	create: function(Data, callback){
		
		var sql = " insert  into registration ( CourseId , CourseName, StudentId , Semester   ) VALUES ( '"+Data.CourseId+"' ,'"+Data.Course+"' , '"+Data.StudentId+"' ,'"+Data.Semester+"' )";
		// var VALUES = [Data.Course , Data.StudentId];
		// console.log("mara khaw"+Data.Course);
		db.execute(sql , function( status ){
		
			callback(status);
		});
	},


	update: function(data, callback){
		var sql = "update student set  password='"+data.password+"' where StudentId='"+data.id+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(CourseId, callback){
		var sql = "delete from registration where CourseId='"+CourseId+"'";
		db.execute(sql, function(status){
			console.log("delete");
			callback(status);
		});
	}
}