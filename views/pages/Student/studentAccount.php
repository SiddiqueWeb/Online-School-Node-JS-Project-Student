<?php
	require("studentAccountAcess.php");	
?>


<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Registration</title>
	<link rel="stylesheet" href="../../css/Student/myaccount.css" />
	
	<style>
		@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
	</style>
</head>
<body>
	<div class="full_container">
		<div class="account_header_wraper">
			<div class="account_header">
				<div class="account_logo">
					<a href="#"><img src="../../images/logo.png" alt="Logo" /></a>
					<a href="#"><h2>Online School Portal</h2></a>
				</div>
				<div class="account_menu_top">
					<ul>
						<li><a href="#">&#x2630 Courses & Results</a></li>
						<li><a href="#">&#x27A4 Registration</a></li>
						<li><a href="#">&#x2738 Grade Report</a></li>
					</ul>
				</div>
				<div class="account_menu_icon">
					<ul>
						<li><a href="#">&#x274B Change Password</a></li>
						<li><a href="../logout.php" style="font-size: 26px;padding-top: 3px;" title="Logout">&#x27A5</a></li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="content_wraper">
			<div class="content_left">
				<div class="client_photo">
					<img src="../../images/profiles/<?php echo $photo;?>" alt="Profile Photo" />
				</div>
				<div class="client_name">
					<p>Welcome, <?php echo $name;?></P>
				</div>
				<div class="client_menu_section">
					<ul>
						<li><a href="#" id="active" >My Account</a></li>
						<li><a href="">Registration</a></li>
						<li><a href="">My Curriculam</a></li>
						<li><a href="">Finacials</a></li>
						<li><a href="">Course</a></li>
						<li><a href="">Results</a></li>
						<li><a href="studentProfile.php">Profile</a></li>
						<li><a href="">Message</a></li>
						<li><a href="../logout.php">Logout</a></li>
					</ul>
				</div>
			</div>
			
			<div class="content_right">
				<div class="my_account">
				</div>
				
				<div class="student_profile">
				</div>
			</div>
		</div>
		
		<div class="footer_wraper">
			<div class="footer container_center">
				<div class="footer_top">
				</div>
				<div class="footer_bottom">
					<p>Copyright 2018-19 &copy; onlineschool.com <br/> &reg All Right Reserved</p>
				</div>
			</div>
		</div>
	</div>
</body>
</html>