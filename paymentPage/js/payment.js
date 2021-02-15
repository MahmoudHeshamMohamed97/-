let allPersons = [];

let namePattern = /^[a-z]{3,}$/i;
let emailPattern= /^\S+@[a-z]+(.com)$/i; 
let visaPattern = /^\d{15}$/;


function visaSubmit() { 
        let username = document.getElementById("username");
        let myEmail = document.getElementById("email");
        let myVisa = document.getElementById("visa");
        console.log(username.value);
        console.log(myEmail.value);
        console.log(myVisa.value);
        if (namePattern.test(username.value) && emailPattern.test(myEmail.value) && visaPattern.test(myVisa.value) ) { 
                // we should make here a function to see if the visa card is already exist
                allPersons = JSON.parse( localStorage.getItem("metroPersons") );
                // let currentUser = JSON.parse(localStorage.getItem("currentMetroPerson"));
                let currentUserIdx = Number( JSON.parse( sessionStorage.getItem("currentMetroPersonIdx") ) );

                let currentUser = allPersons[currentUserIdx];
                let currentTravel = JSON.parse(sessionStorage.getItem("currentTravel"));
                let currentTicketCost =  Number( currentTravel.cost );
                currentUser.moneyToPay += currentTicketCost;
                let d = new Date();
                d = d.toDateString();
                let newTravel = {
                        fromStation: currentTravel.fromStation,
                        toStation: currentTravel.toStation,
                        cost: currentTravel.cost,
                        date: d
                }
                currentUser.prevTravels.push(newTravel);
                allPersons[currentUserIdx] = currentUser;
                localStorage.setItem("metroPersons", JSON.stringify(allPersons) );

                /*
                if we need to make a list of travels we should add the current travel in the
                list then delete it from session storage
                // sessionStorage.removeItem("travelInfo"); 

                here we should generate a qr code then display it in the profile
                using this link
                https://www.studytonight.com/post/javascript-qr-code-generator
                */
                window.open("../../profilePage/profile.html","_self");
        } else if (namePattern.test(username.value)==false) {
        	username.select();
        }
        else if (emailPattern.test(myEmail.value)==false) {
        	myEmail.select();
        }
       
        else if (visaPattern.test(myVisa.value)==false) {
        	myVisa.select();
        }

}



////////////////////////////////////////////////////////////////////////

let allPersonsVodaFone = [];

let phoneNumberPattern = /^\d{11}$/;
let passNumberPattern = /^\d{8,32}$/;


function vodaFoneSubmit() { 
        let myphoneNum = document.getElementById("phoneNumber");
        let mypassNum = document.getElementById("pass");
        console.log(myphoneNum.value);
        console.log(mypassNum.value);
        if (phoneNumberPattern.test(myphoneNum.value) && passNumberPattern.test(mypassNum.value) ) { 
                // we should make here a function to see if the visa card is already exist
                allPersonsVodaFone = JSON.parse( localStorage.getItem("metroPersons") );
                // let currentUser = JSON.parse(localStorage.getItem("currentMetroPerson"));
                let currentUserIdx = Number( JSON.parse( sessionStorage.getItem("currentMetroPersonIdx") ) );

                let currentUser = allPersonsVodaFone[currentUserIdx];
                let currentTravel = JSON.parse(sessionStorage.getItem("currentTravel"));
                //let currentTicketCost =  Number( currentTravel.cost );
                //currentUser.moneyToPay += currentTicketCost;
                let d = new Date();
                d = d.toDateString();
                let newTravel = {
                        fromStation: currentTravel.fromStation,
                        toStation: currentTravel.toStation,
                        cost: currentTravel.cost,
                        date: d
                }
                currentUser.prevTravels.push(newTravel);
                allPersonsVodaFone[currentUserIdx] = currentUser;
                localStorage.setItem("metroPersons", JSON.stringify(allPersonsVodaFone) );

                /*
                if we need to make a list of travels we should add the current travel in the
                list then delete it from session storage
                // sessionStorage.removeItem("travelInfo"); 

                here we should generate a qr code then display it in the profile
                using this link
                https://www.studytonight.com/post/javascript-qr-code-generator
                */
                window.open("../../profilePage/profile.html","_self");
        } else if (phoneNumberPattern.test(myphoneNum.value)==false) {
                myphoneNum.select();
        }
        else if (passNumberPattern.test(mypassNum.value)==false) {
                mypassNum.select();
        }
       

}
