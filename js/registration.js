
//Registration Form Validation With OnSubmit Event
 
function registration_validation() {
	
	//Name Validation
	var result = false;
	
	if( document.registration.name.value == "") {
		document.getElementById("icon1").innerHTML = "";
		document.getElementById("error1").innerHTML = "Please, give your name";
		document.registration.name.focus();
		return false;
	} else {
		var name = document.registration.name.value;
		var error = document.getElementById("error1");
		var icon = document.getElementById("icon1");
		
		//Check Name With Pattern
		
		var str1 = /^[a-zA-Z ]+$/;
		var op = str1.test(name);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			result = true;
			document.registration.username.focus();
		} else {
			error.innerHTML = "Only allow letter & white space";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.name.focus();
			return false;
		}	
	}
	
	//Username Validation
	
	if( document.registration.username.value == "" ) {
		document.getElementById("icon2").innerHTML = "";
		document.getElementById("error2").innerHTML = "Please, give your username";
		document.registration.username.focus();
		return false;
	} else {
		var username = document.registration.username.value;
		var error = document.getElementById("error2");
		var icon = document.getElementById("icon2");
		
		//Check Email With Pattern
		
		var str2 = /^[a-zA-Z]+[0-9]*$/;
		var op = str2.test(username);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			result = true;
			document.registration.email.focus();
		} else {
			error.innerHTML = "Only allow letter & number";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.username.focus();
			return false;
		}	
	}
	
	//Email Validation
	
	if( document.registration.email.value == "" ) {
		document.getElementById("icon3").innerHTML = "";
		document.getElementById("error3").innerHTML = "Please, give your email";
		document.registration.email.focus();
		return false;
	} else {
		var email = document.registration.email.value;
		var error = document.getElementById("error3");
		var icon = document.getElementById("icon3");
		
		//Check Email With Pattern
		
		var str2 = /^[a-zA-Z_]+[0-9_]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;;
		var op = str2.test(email);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			result = true;
			document.registration.password.focus();
		} else {
			error.innerHTML = "Invalid Email";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.email.focus();
			return false;
		}	
	}
	
	//Phone Validation
	/*
	if( document.signup.phone.value == "" ) {
		document.getElementById("icon3").innerHTML = "";
		document.getElementById("error3").innerHTML = "Please, give your phone";
		document.signup.phone.focus();
		return false;
	} else {
		var phone = document.signup.phone.value;
		var error = document.getElementById("error3");
		var icon = document.getElementById("icon3");
		
		//Check Phone With Pattern
		
		var str3 = /^[0-9]{11}$/;
		var op = str3.test(phone);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			icon.style.fontSize = "18px";
			
			result = true;
			
			document.signup.password.focus();
		} else {
			error.innerHTML = "Invalid Phone";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			icon.style.fontSize = "18px";
			document.signup.phone.focus();
			return false;
		}	
	}
	*/
	//Password Validation
	
	if( document.registration.password.value == "" ) {
		document.getElementById("icon4").innerHTML = "";
		document.getElementById("error4").innerHTML = "Please, give your password";
		document.registration.password.focus();
		return false;
	} else {
		var password = document.registration.password.value;
		var error = document.getElementById("error4");
		var icon = document.getElementById("icon4");
		
		//Check Password With Pattern
		
		var str4 = /^[a-zA-Z0-9.?%@]{5,10}$/;
		var op = str4.test(password);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			result = true;
			document.registration.cpassword.focus();
		} else {
			error.innerHTML = "Password length should be between 5 & 10";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.password.focus();
			return false;
		}	
	}
	
	//Confirm Password Validation
	
	if( document.registration.cpassword.value == "" ) {
		document.getElementById("icon5").innerHTML = "";
		document.getElementById("error5").innerHTML = "Please, give confirm password";
		document.registration.cpassword.focus();
		return false;
	} else if( document.registration.cpassword.value != document.registration.password.value ) {
		var error = document.getElementById("error5");
		var icon = document.getElementById("icon5");
		error.innerHTML = "Password don't match";
		icon.innerHTML = "&#10006";
		icon.style.color = "red";
		document.registration.cpassword.focus();
		return false;
	}else if( document.registration.cpassword.value == document.registration.password.value ) {
		var error = document.getElementById("error5");
		var icon = document.getElementById("icon5");
		error.innerHTML = "Password Matched";
		icon.innerHTML = "&#10004";
		icon.style.color = "green";
		result = true;
	}
	return result;
}


//Registration Form Validation With OnInput & OnKeyUp Event

//Name Validation

function oninput_name_validation() {
	if( document.registration.name.value != "" ) {
		var name = document.registration.name.value;
		var error = document.getElementById("error1");
		var icon = document.getElementById("icon1");
		
		//Check Name With Pattern
		
		var str1 = /^[a-zA-Z ]+$/;
		var op = str1.test(name);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			document.registration.name.focus();
		} else {
			error.innerHTML = "Only allow letter & white space";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.name.focus();
		}	
	}
}

function onkeyup_name_validation() {
	if( document.registration.name.value == "" ) {
		document.getElementById("error1").innerHTML = "";
		document.getElementById("icon1").innerHTML = "";
	}
}


//Username Validation

function oninput_username_validation() {
	if( document.registration.username.value != "" ) {
		var username = document.registration.username.value;
		var error = document.getElementById("error2");
		var icon = document.getElementById("icon2");
		
		//Check Username With Pattern
		
		var str1 = /^[a-zA-Z]+[0-9]*$/;
		var op = str1.test(username);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			document.registration.username.focus();
		} else {
			error.innerHTML = "Only allow letter & number";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.username.focus();
		}	
	}
}

function onkeyup_username_validation() {
	if( document.registration.username.value == "" ) {
		document.getElementById("error2").innerHTML = "";
		document.getElementById("icon2").innerHTML = "";
	}
}


//Email Validation

function oninput_email_validation() {
	if( document.registration.email.value != "" ) {
		var email = document.registration.email.value;
		var error = document.getElementById("error3");
		var icon = document.getElementById("icon3");
		
		//Check Email With Pattern
		
		var str2 = /^[a-zA-Z_]+[0-9_]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
		var op = str2.test(email);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			document.registration.email.focus();
		} else {
			error.innerHTML = "Invalid Email";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.email.focus();
		}	
	}
}

function onkeyup_email_validation() {
	if( document.registration.email.value == "" ) {
		document.getElementById("error3").innerHTML = ""; 
		document.getElementById("icon3").innerHTML = ""; 
	}
}


//Password Validation

function oninput_password_validation() {
	if( document.registration.password.value != "" ) {
		var password = document.registration.password.value;
		var error = document.getElementById("error4");
		var icon = document.getElementById("icon4");
		
		//Check Password With Pattern
		
		var str4 = /^[a-zA-Z0-9.?%@]{5,10}$/;
		var op = str4.test(password);
		
		if( op ) {
			error.innerHTML = "";
			icon.innerHTML = "&#10004";
			icon.style.color = "green";
			document.registration.password.focus();
		} else {
			error.innerHTML = "Password length should be between 5 & 10";
			icon.innerHTML = "&#10006";
			icon.style.color = "red";
			document.registration.password.focus();
		}	
	}
}

function onkeyup_password_validation() {
	if( document.registration.password.value == "" ) {
		document.getElementById("error4").innerHTML = ""; 
		document.getElementById("icon4").innerHTML = ""; 
	}
}

// Confirm Password Validation

function oninput_cpassword_validation() {
	var error = document.getElementById("error5");
	var icon = document.getElementById("icon5");
	if( document.registration.cpassword.value != document.registration.password.value ) {
		error.innerHTML = "Password don't match";
		icon.innerHTML = "&#10006";
		icon.style.color = "red";
		document.registration.cpassword.focus();
	}else if( document.registration.cpassword.value == document.registration.password.value ) {
		error.innerHTML = "Password Matched";
		icon.innerHTML = "&#10004";
		icon.style.color = "green";
		document.registration.cpassword.focus();
	}
}

function onkeyup_cpassword_validation() {
	if( document.registration.cpassword.value == "" ) {
		document.getElementById("error5").innerHTML = "";
		document.getElementById("icon5").innerHTML = "";
	}
}

