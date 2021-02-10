let wasalnyBtn = document.getElementById("wasalny");
let fromStation = "",toStation = "";
let firstWay = [ 'المرج الجديدة',
'المرج','عزبة النخل','عين شمس','المطرية','حلمية الزيتون',
'حدائق الزيتون','سراي القبة','حدائق القبة','كوبري القبة','منشية الصدر',
'الدمرداش','غمرة','الشهداء'
];

document.body.onload = function(){
    let html = "";
    for(let i=0; i<firstWay.length; i++){
        html += `<option value=`+ i +`>`+ firstWay[i] +`</option>`;
    }
    document.getElementById("selectFrom").innerHTML = html;
    document.getElementById("selectTo").innerHTML = html;
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
        showMessage();

    else
    {
        let numOfStations = getNumOfStations(fromStation, toStation);
        let cost = getCostOfTicket(numOfStations);
        document.querySelector(".map").style.display = "block";
        let disccuss = 
        `عـمـيـلـنـا الـعـزيـز يـرجـى الـعـلـم انـه فـي حـالـة الـتحرك مـن مـحـطة `
        + firstWay[fromStation] +
        ` إلـى مـحـطـة ` + firstWay[toStation] +
        ` ف سـوف تـتـجه إلـى ` + directionResult +
        ` عـلـمـاً بأن عدد الـمـحـطـات هـو ` + numOfStations +
        ` محطة و تـكـلـفـة الـرحـلـة هـي ` + cost + ' جنيه مصري';
        document.querySelector(".mpaCaption h1").innerHTML = disccuss;
    }

}

function getDirection(s1,s2){
    if(s1 < s2)
        return "إتــجــاه حــلــوان";
    else if(s1 > s2)
        return "إتــجــاه الــمــرج";
    else
        return 0;
}

function showMessage(){
    let messageBox = document.createElement("messageBox");
    messageBox.innerHTML = "<h1>من فضلك قم بإختيار المحطة المقصودة بعناية</h1>";
    document.body.appendChild(messageBox);

    setTimeout( function(){
        document.body.removeChild(messageBox);
    }, 3500 )
}

function getNumOfStations(s1,s2){
    let numOfStations = 0;
    debugger;
    if(s1 > s2)
        numOfStations = s1 - s2;
    else
        numOfStations = s2 - s1;
    
    return numOfStations;
}

function getCostOfTicket(stNum){
    if( stNum < 9 )
        return 5;
    else if( stNum < 16 )
        return 7;
    else
        return 10;
}