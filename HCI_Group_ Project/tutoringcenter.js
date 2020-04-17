function setinfo(thisForm){

var user = document.getElementById("username");
var pass = document.getElementById("password");
 	localStorage.setItem("userN", user.value);
  	localStorage.setItem("passW", pass.value);

  	//Checking if info gets saved 
  	//console.log(localStorage.getItem("userN"));
  	//console.log(localStorage.getItem("passW"));

  	return false;
}

function check(thisForm){
	
	console.log(localStorage.getItem("passW"));

	var logUser = document.getElementById("login_username");
	var logPass = document.getElementById("login_password");
	
	var l_user = logUser.value;
	var l_pass = logPass.value;
	

	if( l_user == localStorage.getItem("userN") && l_pass == localStorage.getItem("passW")  )
	{
		console.log("Hello");
		swal("Login Successful", 
		{ 	icon: "success",
			title: "Success",
		});
		
		setTimeout(function() {
			window.location.href = "register.html"; //Will Change to Home
		} , 5000);
		
	}
	else {
			//document.getElementById('Login').innerHTML = "Invalid";
		//	console.log(logfirst);
		console.log("Bye");
		// alert("Invalid, try again");
		swal("Username or password incorrect, try again", {
			icon:"error",
			title: 'Oops...',
			
		});
		//window.location.href = "login.html";

	}

	//console.log(l_user);
	return false;

}

//Reveals the password field
function showPass(id){
	var x = document.getElementById(id);
	if (x.type === "password"){
		x.type = "text";
	} else{
		x.type = "password";
	}
}

//Using JQuery, checks if the password match
$(document).ready(function (){
	$("#password").keyup(validate);
	$("#password2").keyup(validate);
})
function validate(){
	var pass1 = $("#password").val();
	var pass2 = $("#password2").val();

	if(pass1 == pass2){
		$("#validate_status").text("Passwords match");
	}else{
		$("#validate_status").text("Passwords not match");
		//swal("passwords don't match", {timer:1000,});
	}
}

//Pointless function, used to debug. DELETE
function showLoginInfo(){
	console.log(localStorage.getItem("testF") + "from check()");
}

function successRegister(){
	swal("Congrats, account created! Go to 'Login' to login to account",{
  		icon: "success",
  		title: "Success",
  		showCloseButton: true,
  		timer: 5000,
	});

}


//Works  with disabled="disabled" in the submit field
$(document).ready(function (){

	var major = $("inputGroupSelect01").val();
	var major2 =	document.getElementById("inputGroupSelect01").value;

	$('#primero, #ultimo, #username, #password,#password2,#birth, #email, #inputGroupSelect01'  ).change(function(){
		if($("#primero").val().length && $("#ultimo").val().length && $("#username").val().length && $("#password").val().length && $("#password2").val().length && $("#birth").val().length && $("#email").val().length  &&
			(document.getElementById("inputGroupSelect01").value) != "not_valid" )
			 {

				$("#register").prop('disabled', false);
		} else {
				$("#register").prop('disabled', true);
				console.log(document.getElementById("inputGroupSelect01").value);
		}
	});
});

//&& $("#inputGroupSelect01").val().length
//&& $("#inputGroupSelect01").value )
//( $("#inputGroupSelect01 ").val()!= "not_valid")
//&& $("#major").val().length


