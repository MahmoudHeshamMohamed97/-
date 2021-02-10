let wasalnyBtn = document.getElementById("wasalny");
let fromStation = "",toStation = "";
let firstWay = [ 'المرج الجديدة',
'المرج','عزبة النخل','عين شمس','المطرية','حلمية الزيتون',
'حدائق الزيتون','سراي القبة','حدائق القبة','كوبري القبة','منشية الصدر',
'الدمرداش','غمرة','الشهداء'
];
let allPersons = [];


document.body.onload = function(){
    //#region  this condition to check if the user logged in
    if( localStorage.getItem("currentMetroPerson") )
        changeTheNavbarViewLoggedIn();

    //#endregion
    
    
    //#region set all Stations in select options
    let html = "";
    for(let i=0; i<firstWay.length; i++){
        html += `<option value=`+ i +`>`+ firstWay[i] +`</option>`;
    }
    document.getElementById("selectFrom").innerHTML = html;
    document.getElementById("selectTo").innerHTML = html;
    //#endregion

    // check if the users included in the localstorage or not
    checkIfUsers();
}

wasalnyBtn.onclick = function(){
    fromStation = Number(document.getElementById("selectFrom").value);
    toStation = Number(document.getElementById("selectTo").value);
    // fromStation = firstWay[fromStation];
    // toStation = firstWay[toStation];
    
    //after we have got the two stations we should show him the direction
    let directionResult = getDirection(fromStation,toStation);
    console.log(fromStation);
    console.log(toStation);
    if(directionResult == 0)
        showMessage('من فضلك قم بإختيار المحطة المقصودة بعناية');

    else
    {
        let numOfStations = getNumOfStations(fromStation, toStation);
        let cost = getCostOfTicket(numOfStations);
        document.querySelector(".map").style.display = "block";
        let disccuss = 
        `عـمـيـلـنـا الـعـزيـز يـرجـى الـعـلـم انـه فـي حـالـة الـتحرك مـن مـحـطة <span>`
        + firstWay[fromStation] +
        `</span> إلـى مـحـطـة <span>` + firstWay[toStation] +
        `</span> ف سـوف تـتـجه إلـى <span>` + directionResult +
        `</span> عـلـمـاً بأن عدد الـمـحـطـات هـو <span>` + numOfStations +
        `</span> محطة و تـكـلـفـة الـرحـلـة هـي <span>` + cost + '</span> جنيه مصري' ;
        document.querySelector(".mpaCaption h1").innerHTML = disccuss;
    }

}

// function to decide the direction
function getDirection(s1,s2){
    if(s1 < s2)
        return "إتــجــاه حــلــوان";
    else if(s1 > s2)
        return "إتــجــاه الــمــرج";
    else
        return 0;
}

// message box if the user choosed the same station
function showMessage(msg){
    let messageBox = document.createElement("messageBox");
    messageBox.innerHTML = "<h1>"+msg+"</h1>";
    document.body.appendChild(messageBox);

    setTimeout( function(){
        document.body.removeChild(messageBox);
    }, 3500 )
}

// function to detect the num of stations
function getNumOfStations(s1,s2){
    let numOfStations = 0;
    if(s1 > s2)
        numOfStations = s1 - s2;
    else
        numOfStations = s2 - s1;
    
    return numOfStations;
}

// function calculates the cost of the trip ticket
function getCostOfTicket(stNum){
    if( stNum < 9 )
        return 5;
    else if( stNum < 16 )
        return 7;
    else
        return 10;
}

// function check if the users in the localstorage or not and store them in allPersons array
function checkIfUsers(){
    if( localStorage.getItem('metroPersons') )
        allPersons = JSON.parse( localStorage.getItem("metroPersons") );
    else
        getPersons();
}

// function called if the users not saved in the localstorage
// and put the users from json file into localstorage
function getPersons(){
    fetch('../JSONFolder/persons.json')
    .then( (resp)=> { return resp.json() } )
    .then( (data)=> {
        allPersons = data.allPersons
        localStorage.setItem("metroPersons",JSON.stringify(allPersons) );
        } )
    .catch( (e)=> {console.log(e.message)} );
}

// function change the view of navbar if user is logged in
function changeTheNavbarViewLoggedIn(){
    let x = JSON.parse( localStorage.getItem("currentMetroPerson") ).userName;
    let html = 
    `
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#">الــرئــيــســيــة <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">اتـــصـــل بـــنـــا</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">الإشــتــراكــاتــت </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">مــرحــبــاً `+ x +`</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" onclick='changeNavToDefault()'>تــســجــيــل الــخــروج</a>
        </li>
    </ul>
    `;

    document.getElementById("navbarSupportedContent").innerHTML = html;

}

// function returns the navbar into it's default
// called when user log out
// don't forget to remove comment in this func
function changeNavToDefault(){
    let html = 
    `
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#">الــرئــيــســيــة <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">اتـــصـــل بـــنـــا</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">الإشــتــراكــاتــت </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">تــســجــيــل الــدخــول</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">ســجــل مــعــنــا</a>
        </li>
    </ul>
    `;

    document.getElementById("navbarSupportedContent").innerHTML = html;
    // don't forget to un comment this
    // localStorage.removeItem("currentMetroPerson");

}

function bookTicket(){
    if( ! localStorage.getItem("currentMetroPerson") ){
        showMessage('من فضلك قم بتسجيل الدخول اولاً حتى يتسنى لك إستخدام هذه الخاصية');
    }
    else
        window.open("../profilePage/profile.html","_self");

}