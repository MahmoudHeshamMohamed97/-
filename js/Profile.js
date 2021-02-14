wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();
  // document.getElementById('moar').onclick = function() {
  //   var section = document.createElement('section');
  //   section.className = 'section--purple wow fadeInDown';
  //   this.parentNode.insertBefore(section, this);
  // };

let allPersons = [];
let currentIdx;
(function getAllPersons(){
  allPersons = JSON.parse( localStorage.getItem("metroPersons") );
  currentIdx = Number( JSON.parse( sessionStorage.getItem("currentMetroPersonIdx") ) );

  setData();
})();



function setData(){

  document.getElementById("userName").innerHTML = allPersons[currentIdx].userName;
  document.getElementById("userMail").innerHTML = allPersons[currentIdx].email;
  document.getElementById("userPhone").innerHTML = allPersons[currentIdx].phone;
  var qr;
  let d = new Date();

  let qrtext = d.toISOString() + allPersons[currentIdx].userName;

  qr = new QRious({
    element: document.getElementById('qrCode'),
    background: 'white',
    foreground: 'black',
    size: 250,
    value: qrtext
  });

}


function displayAllTravels(){
  window.open("../userAllTrans/allTrans.html","_self");
}
