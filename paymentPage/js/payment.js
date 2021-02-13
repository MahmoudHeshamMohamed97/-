var myNname = document.getElementById('name');
var myVisa = document.getElementById('visa');
var myEmail = document.getElementById('email');



var namePattern = /^[a-z]{3,}$/i;
var emailPattern= /^\S+@[a-z]+(.com)$/i; 
var visaPattern = /^\d{15}$/;


function myValidation() { 

        if (namePattern.test(name.value) && emailPattern.test(email.value) && visaPattern.test(visa.value) ) { 
                   window.open("https://www.google.com/");
        } else if (namePattern.test(name.value)==false) {
        	name.select();
        }
        else if (emailPattern.test(email.value)==false) {
        	email.select();
        }
       
        else if (phonePattern.test(phone.value)==false) {
        	phone.select();
        }

        }