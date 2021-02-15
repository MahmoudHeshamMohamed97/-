if (!sessionStorage.getItem("currentMetroPersonIdx")) {
  location.replace("../loginPage/login.html");
}
else{
  let x = JSON.parse(localStorage.getItem("metroPersons"))[Number( sessionStorage.getItem("currentMetroPersonIdx") )].userName;
  document.getElementById("userNameInNav").innerHTML = 'مــرحــبــاً ' + x;

}

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

let alltravels = [];
let allpersons = [];
getalltravels();
displayalltravels();
function displayalltravels() {
  let html = "";
  for (let i = 0; i < alltravels.length; i++) {
    html += ` <div class="col-md-3 py-2">
          <div class="item-box-blog">
              <div class="item-box-blog-image">
                  <!--Date-->
                  <div class="item-box-blog-date bg-blue-ui white"> <span class="mon">
                          رحله رقم `+ (i + 1) + `</span> </div>
                  <!--Image-->
                  <figure> <img alt="" src="../resources/takeit.jpeg"> </figure>
              </div>
              <div class="item-box-blog-body">
                  <!--Heading-->
                  <div class="item-box-blog-heading">
                      <a href="#" tabindex="0">
                          <h5>`+ alltravels[i].date +`</h5>
                      </a>
                  </div>
                  <!--Data-->
                  <div class="item-box-blog-data" style="padding: px 15px;">
                      <p> أدمن <i class="fa fa-user-o"></i> </div>
                  <!--Text-->
                  <div class="item-box-blog-text">
                      <p>لقد قمت بحجز تذكره من محطة `+ alltravels[i].fromStation + `
                       الى محطة `+ alltravels[i].toStation + ` 
                        بسعر `+ alltravels[i].cost + `
                      </p>
                  </div>
    
              </div>
          </div>
    
    
      </div>`;
  }
  document.getElementById("inserttravels").innerHTML = html;
}


function getalltravels() {
  allpersons = JSON.parse(localStorage.getItem("metroPersons"));
  let index = JSON.parse(sessionStorage.getItem("currentMetroPersonIdx"));
  console.log(allpersons[index]);
  alltravels = allpersons[index].prevTravels;
}


function changeNavToDefault(){
  
  // don't forget to un comment this
  sessionStorage.removeItem("currentMetroPersonIdx");
  location.reload();

}

