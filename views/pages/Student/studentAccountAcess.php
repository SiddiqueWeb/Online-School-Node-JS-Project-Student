<?php
	session_start();
	
	$name = $photo = "";
	
	if( !isset( $_SESSION['studentId'] ) ) {
		session_destroy();
		header("location: ../signin.php");
		exit();
	} else {
		require_once( "../dbconnection.php" );
		$id = $_SESSION['studentId'];
		
		$query = oci_parse( $con, "SELECT * FROM student_login WHERE STUDENT_ID = '$id'" );
		oci_execute( $query );
		$data = oci_fetch_array( $query );
		
		if( oci_num_rows( $query ) > 0 ) {
			$name = $data['ST_NAME'];
			$photo = $data['ST_PHOTO'];
		} else {
			header( "location: ../signin.php" );
			exit();
		}
	}
?>