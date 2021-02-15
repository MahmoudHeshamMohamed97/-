function disRegPhone() {
    var regPhone = document.getElementById("phone").value;
    // console.log(regPhone.value.length);
    var regPattern = /^(010|011|012|015)\d{8}$/;
    if (regPattern.test(regPhone) == false) {
        document.getElementById("invalid").innerHTML = "الهاتف المستخدم غير صحيح !!";
        document.getElementById("invalid").style.display = "block";
        document.getElementById("phone").value = " رقم غير صحيح !!";
        document.getElementById("validate").src = "../resources/notvalid.png";
        return false;

    }
    else {
        document.getElementById("phone").onfocus = regPhone;
        document.getElementById("validate").src = "../resources/valid.png";
        document.getElementById("invalid").style.display = "none";
        return true;

    }
}

function disName() {
    var name = document.getElementById("myUser").value;

    if (name.length != 14 || isNaN(name)) {
        document.getElementById("password").disabled = true;
        // document.getElementById("confirm").disabled = true;
        document.getElementById("invalid").innerHTML = " برجاء ادخال الرقم القومي بشكل صحيح !!";
        document.getElementById("invalid").style.display = "block";
        document.getElementById("myUser").value = "أسم مستخدم خاطئ !!";
        document.getElementById("validate1").src = "../resources/notvalid.png";
        return false;
    }

    else {
        document.getElementById("password").disabled = false;
        // document.getElementById("confirm").disabled = false;
        document.getElementById("myUser").onfocus = name;
        // document.getElementById("password").focus();
        document.getElementById("validate1").src = "../resources/valid.png";
        document.getElementById("invalid").style.display = "none";
        return true;

    }
}

function disRegEmail() {
    var regEmail = document.getElementById("email");
    // console.log(regEmail.value.length);
    var regPattern = /^\S+@[a-z]+(.com)$/i;
    if (regEmail.value.length <= 3 || regPattern.test(regEmail.value) == false) {
        document.getElementById("invalid").innerHTML = " برجاء ادخال ايميل صحيح !!";
        document.getElementById("invalid").style.display = "block";
        document.getElementById("email").value = " أيميـل غير صحيح !!";
        document.getElementById("validate2").src = "../resources/notvalid.png";
        return false;

    }
    else {
        document.getElementById("email").onfocus = regEmail;
        document.getElementById("validate2").src = "../resources/valid.png";
        document.getElementById("invalid").style.display = "none";
        return true;

    }
}

var myPassword = document.getElementById("password");
function disPass() {
	
	if (myPassword.value.length <= 3 ) {
        document.getElementById("confirm").disabled = true;
		document.getElementById("invalid").innerHTML = " يجب الا تقل كلمة السر عن 4 ارقام !!";
		document.getElementById("validate3").src = "../resources/notvalid.png";
		document.getElementById("invalid").style.display = "block";
        // document.getElementById("password").value = "كلمة سر غير صالحة !!";

		return false;

	}
	else {
        document.getElementById("confirm").disabled = false;
        document.getElementById("confirm").focus();
		document.getElementById("validate3").src = "../resources/valid.png";
		document.getElementById("password").onfocus = myPassword;
		document.getElementById("invalid").style.display = "none";
		return true;

	}
}

function RegConfirmPass(){
    var confirmPass = document.getElementById("confirm");
    if(confirmPass.value != myPassword.value ){
            // document.getElementById("confirm").value = "PassWord didn't Match,Try again!";
            document.getElementById("invalid").innerHTML = " الباسـورد غير متطابق !!";
		document.getElementById("invalid").style.display = "block";
            document.getElementById("validate4").src = "../resources/notvalid.png";
            return false;

    }
    else if(confirmPass.value == myPassword.value){
            // document.getElementById("confirm").onfocus = confirmPass;
            document.getElementById("validate4").src = "../resources/valid.png";       
		document.getElementById("invalid").style.display = "none";
            return true;

    }
}



function registerBtn(){

    if( RegConfirmPass() && disPass() && disRegEmail() && disName() && disRegPhone ){
        // alert("valid");

        let obj = {
            userName : document.getElementById("myUser").value,
            password : document.getElementById("password").value,
            prevTravels : [],
            email : document.getElementById("email").value,
            phone : document.getElementById("phone").value,
            moneyToPay : 0
        }

        let allPersons = JSON.parse( localStorage.getItem("metroPersons") );
        allPersons.push( obj );
        localStorage.setItem( "metroPersons", JSON.stringify( allPersons ) );
        let idx = allPersons.length -1;
        sessionStorage.setItem("currentMetroPersonIdx", idx);
        window.open("../index.html","_self");
    }
    

}


