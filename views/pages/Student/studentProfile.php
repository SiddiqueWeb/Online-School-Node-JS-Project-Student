<?php

	require("studentAccountAcess.php");	
	
	$info_name = $info_cgpa = $info_credit = $info_dept = $info_father = $info_mother = $info_address = $info_email = "";
	
	$info_birth = $info_gender = $info_religion = $info_nationality = $info_admission = $info_phone = "";
	
	require_once( "../dbconnection.php" );
	$query1 = oci_parse( $con, "SELECT * FROM student_info, department WHERE student_info.DEPARTMENT_NO = department.DEPARTMENT_NO AND STUDENT_ID = '$id'" );
	oci_execute( $query1 );
	$data1 = oci_fetch_array( $query1 );
		
	if( oci_num_rows( $query1 ) > 0 ) {
		$info_cgpa = $data1['ST_CGPA'];
		$info_credit = $data1['ST_CREDIT_COMPLETE'];
		$info_dept = $data1['DEPT_NAME'];
		$info_father = $data1['ST_FATHER_NAME'];
		$info_mother = $data1['ST_MOTHER_NAME'];
		$info_address = $data1['ST_ADDRESS'];
		$info_gender = $data1['ST_GENDER'];
		$info_religion = $data1['ST_RELIGION'];
		$info_nationality = $data1['ST_NATIONALITY'];
		$info_phone = $data1['ST_PHONE'];
	} /*else {
		header( "location: ../signin.php" );
		exit();
	}
	*/
?>


<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Registration</title>
	<link rel="stylesheet" href="../../css/Student/myaccount.css" />
	<link rel="stylesheet" href="../../css/Student/studentProfile.css" />
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
						<li><a href="studentAccount.php">My Account</a></li>
						<li><a href="">Registration</a></li>
						<li><a href="">My Curriculam</a></li>
						<li><a href="">Finacials</a></li>
						<li><a href="">Course</a></li>
						<li><a href="">Results</a></li>
						<li><a href="" id="active" >Profile</a></li>
						<li><a href="">Message</a></li>
						<li><a href="../logout.php">Logout</a></li>
					</ul>
				</div>
			</div>
			
			<div class="content_right">
				<div class="student_profile">
					<table class="student_info">
						<tr>
							<td class="info_col" >Name:</td>
							<td class="info_val"><?php echo $info_name;?></td>
						</tr>
						<tr>
							<td class="info_col">CGPA:</td>
							<td class="info_val"><?php echo $info_cgpa;?></td>
						</tr>
						<tr>
							<td class="info_col">Credit Completed:</td>
							<td class="info_val"><?php echo $info_credit;?></td>
						</tr>
						<tr>
							<td class="info_col">Department:</td>
							<td class="info_val"><?php echo $info_dept;?></td>
						</tr>
						<tr>
							<td class="info_col">Father Name:</td>
							<td class="info_val"><?php echo $info_father;?></td>
						</tr>
						<tr>
							<td class="info_col">Mother Name:</td>
							<td class="info_val"><?php echo $info_mother;?></td>
						</tr>
						<tr>
							<td class="info_col">Address:</td>
							<td class="info_val"><?php echo $info_address;?></td>
						</tr>
						<tr>
							<td class="info_col">Email:</td>
							<td class="info_val"><?php echo $info_email;?></td>
						</tr>
						<tr>
							<td class="info_col">Phone:</td>
							<td class="info_val"><?php echo $info_phone;?></td>
						</tr>
						<tr>
							<td class="info_col">Date of Birth:</td>
							<td class="info_val"><?php echo $info_birth;?></td>
						</tr>
						<tr>
							<td class="info_col">Gender:</td>
							<td class="info_val"><?php echo $info_gender;?></td>
						</tr>
						<tr>
							<td class="info_col">Religion:</td>
							<td class="info_val"><?php echo $info_religion;?></td>
						</tr>
						<tr>
							<td class="info_col">Nationality:</td>
							<td class="info_val"><?php echo $info_nationality;?></td>
						</tr>
						<tr>
							<td class="info_col">Admission Date:</td>
							<td class="info_val"><?php echo $info_admission;?></td>
						</tr>
					</table>
				
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