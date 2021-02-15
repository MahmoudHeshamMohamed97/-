if (!sessionStorage.getItem("currentMetroPersonIdx")){
    location.replace("../loginPage/login.html");
    }
       wow = new WOW(
        {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
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
      let allpersons=[];
      getalltravels();
      displayalltravels();
      function displayalltravels()
      {
        let html= "";
        for(let i=0; i<alltravels.length; i++){
          html += ` <div class="col-md-3">
          <div class="item-box-blog">
              <div class="item-box-blog-image">
                  <!--Date-->
                  <div class="item-box-blog-date bg-blue-ui white"> <span class="mon">
                          رحله رقم `+ (i+1) +`</span> </div>
                  <!--Image-->
                  <figure> <img alt="" src="../resources/حجز.jpg"> </figure>
              </div>
              <div class="item-box-blog-body">
                  <!--Heading-->
                  <div class="item-box-blog-heading">
                      <a href="#" tabindex="0">
                          <h5>رحله جديده</h5>
                      </a>
                  </div>
                  <!--Data-->
                  <div class="item-box-blog-data" style="padding: px 15px;">
                      <p> أدمن <i class="fa fa-user-o"></i> ، تعليقاتك(0) <i class="fa fa-comments-o"></i></p>
                  </div>
                  <!--Text-->
                  <div class="item-box-blog-text">
                      <p>لقد قمت بحجز تذكره من محطة `+ alltravels[i].fromStation +`
                       الى محطة `+ alltravels[i].toStation +` 
                        بسعر `+ alltravels[i].cost +`
                      </p>
                  </div>
    
              </div>
          </div>
    
    
      </div>`;
        }
      document.getElementById("inserttravels").innerHTML=html;
        }
    
    
        function getalltravels()
        {
          allpersons = JSON.parse(localStorage.getItem("metroPersons"));
          let index = JSON.parse(sessionStorage.getItem("currentMetroPersonIdx"));
          console.log(allpersons[index]);
          alltravels = allpersons[index].prevTravels;
        }