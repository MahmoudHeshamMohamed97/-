let allPersons = [];

function login() {
    location.assign("login.html");
}

function register() {
    location.assign("../registerPage/register.html");
}

function home() {
    location.assign("../index.html");
}

function disName() {
	var name = document.getElementById("myUser").value;
	
	if (name.length != 14 || isNaN(name)) {
		document.getElementById("psw").disabled = true;
        document.getElementById("invalid").innerHTML = " برجاء ادخال الرقم القومي بشكل صحيح !!";
		document.getElementById("invalid").style.display = "block";
		document.getElementById("myUser").value = "أسم مستخدم خاطئ !!";
		document.getElementById("validate").src = "../resources/notvalid.png";
		return false;
	}
    
	else {
		document.getElementById("psw").disabled = false;
		document.getElementById("myUser").onfocus = name;
		document.getElementById("psw").focus();
		document.getElementById("validate").src = "../resources/valid.png";
        document.getElementById("invalid").style.display = "none";
		return true;

	}
}

function disPass() {
	var myPassword = document.getElementById("psw").value;

	if (myPassword.length <= 3 || myPassword.length > 10) {
		document.getElementById("invalid").innerHTML = " كلمة سر خاطئة !!";
		document.getElementById("validate2").src = "../resources/notvalid.png";
		document.getElementById("invalid").style.display = "block";
		return false;

	}
	else {
		document.getElementById("validate2").src = "../resources/valid.png";
		document.getElementById("psw").onfocus = myPassword;
		document.getElementById("invalid").style.display = "none";
		return true;

	}
}


function loadAllPersons(){

	if( localStorage.getItem("metroPersons") )
		allPersons = JSON.parse( localStorage.getItem("metroPersons") );

	else{
		fetch("../JSONFolder/persons.json")
		.then( (res)=> { return res.json(); } )
		.then( (data)=> {
			allPersons = data.allPersons;
			localStorage.setItem("metroPersons",JSON.stringify(allPersons) );
		} )
		.catch( (e)=> { console.log(e.message) } );
	}
}


document.querySelector(".login_btn").onclick = function(){
	
	if( disName() && disPass() ){
		loadAllPersons();
		let userNameValue = document.getElementById("myUser").value;
		let userPassValue = document.getElementById("psw").value;
		for( let i=0; i<allPersons.length; i++ ){
			if( allPersons[i].userName == userNameValue && allPersons[i].password == userPassValue ){
				let currObj = allPersons[i];
				let currUserIndex = i;
				// localStorage.setItem("currentMetroPerson", JSON.stringify(currObj));
				sessionStorage.setItem("currentMetroPersonIdx", JSON.stringify(currUserIndex));
				window.open("../index.html","_self");
				return;
			}
		}
		document.querySelector(".alert-danger").classList.remove("d-none");
	}

}