var myName = document.getElementById('name');
var myEmail = document.getElementById('email');
var myVisa = document.getElementById('visa');



var namePattern = /^[a-z]{3,}$/i;
var emailPattern= /^\S+@[a-z]+(.com)$/i; 
var visaPattern = /^\d{15}$/;


function mySubmit() { 

        if (namePattern.test(myName.value) && emailPattern.test(myEmail.value) && visaPattern.test(myVisa.value) ) { 
                   window.open("https://www.google.com/");
        } else if (namePattern.test(myName.value)==false) {
        	myName.select();
        }
        else if (emailPattern.test(myEmail.value)==false) {
        	myEmail.select();
        }
       
        else if (visaPattern.test(myVisa.value)==false) {
        	myVisa.select();
        }

        }


