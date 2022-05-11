<template>
   <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                    <!-- side images -->
                    <ol class="carous tabs">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" >
                            <figure>
                                <img src="https://i.postimg.cc/28BrfXh9/Seth-3f8b5280.png" width="250" height="400" class="img" alt="">
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" >
                            <figure>
                                <img src="https://i.postimg.cc/YC9N9Y2P/Godwin-abdba4eb.jpg" class="img" alt="">
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" >
                            <figure>
                                <img src="https://i.postimg.cc/vTVjCkkW/jason-a013744d.jpg" width="200" height="400" class="img" alt="">
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" >
                            <figure>
                                <img src="https://i.postimg.cc/vTVjCkkW/jason-a013744d.jpg" width="200" height="400" class="img" alt="">
                            </figure>
                        </li>
                    </ol>
                    <!-- end of side images -->
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                    <div id="carouselExampleIndicators" data-interval="false" class="carousel slide " data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </div>
                        </div>
                        <ol class="carous" @click="Slide()">
                            <li data-target="#carouselExampleIndicators"  data-slide-to="0"></li>
                            <li data-target="#carouselExampleIndicators"  data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators"  data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    created() {
       
    },
methods: {
    
    Slide() {
   document.querySelector(".img li").click(function(){
    let i = document.querySelector(this).index();
    let targetElement = document.querySelector(".img .tabs li");
    targetElement.eq(i).class.add('active');
    targetElement.not(targetElement[i]).removeClass('active');
            });
            document.querySelector(".img .tabs li").click(function(){
                let targetElement = document.querySelector(".img .tabs li");
                targetElement.class.add('active');
                targetElement.not(document.querySelector(this)).removeClass('active');
            });

            document.querySelector(document).ready(function(){
          document.querySelector(".slider .swiper-pagination span").each(function(i){
        document.querySelector(this).text(i+1).prepend("0");
    });
});
    }
}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-weight: 300;
  line-height: 23px;
  font-family: "Poppins", sans-serif;
}

ul {
  list-style-type: none;
}

a,
a:hover {
  text-decoration: none;
}

body {
  font-family: "Montserrat", sans-serif;
}
body .img {
  padding: 100px 0;
}
.img{
    border-radius: 50%;
}
body .img .row .tabs {
  all: unset;
  margin-right: 50px;
  display: flex;
  flex-direction: column!important
}
body .img .row .tabs .li {
  all: unset;
  display: block;
  position: relative;
}
/* not showing */
body .img .row .tabs .li.active::before {
  position: absolute;
  content: "";
  width: 50px;
  height: 50px;
  background-color: #71b85f;
  border-radius: 50%;
}
/* not showing */
body .img .row .tabs .li.active::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: #71b85f;
  border-radius: 50%;
}
/* not showing */
body .img .row .tabs .li:nth-child(1) {
  align-self: flex-end;
}
/* not showing */
body .img .row .tabs .li:nth-child(1)::before {
  left: 64%;
  bottom: -50px;
}
/* not showing */
body .img .row .tabs .li:nth-child(1)::after {
  left: 97%;
  bottom: -81px;
}
/* not showing */
body .img .row .tabs .li:nth-child(1) figure img {
  margin-left: auto;
}
body .img .row .tabs .li:nth-child(2) {
  align-self: flex-start;
}
body .img .row .tabs .li:nth-child(2)::before {
  right: -65px;
  top: 50%;
}
/* not showing */
body .img .row .tabs .li:nth-child(2)::after {
  bottom: 101px;
  border-radius: 50%;
  right: -120px;
}
/* not showing */
body .img .row .tabs .li:nth-child(2) figure img {
  margin-right: auto;
  max-width: 300px;
  width: 100%;
  margin-top: -50px;
}
/* not showing */
body .img .row .tabs .li:nth-child(3) {
  align-self: flex-end;
}
/* not showing */
body .img .row .tabs .li:nth-child(3)::before {
  right: -10px;
  top: -66%;
}
/* not showing */
body .img .row .tabs .li:nth-child(3)::after {
  top: -130px;
  border-radius: 50%;
  right: -46px;
}
/* not showing */
body .img .row .tabs .li:nth-child(3) figure img {
  margin-left: auto;
  margin-top: -50px;
}
/* not showing */
body .img .row .tabs .li:nth-child(3):focus {
  border: 10px solid red;
}
/* not showing */
body .img .row .tabs .li figure {
  position: relative;
}
body .img .row .tabs .li figure img {
  display: block;
}
/* not showing */
body .img .row .tabs .li figure::after {
  content: "";
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border: 4px solid #dff9d9;
  border-radius: 50%;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
/* not showing */
body .img .row .tabs li figure:hover::after {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
/* not showing */
body .img .row .tabs.carous li.active figure::after {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

body .img .row .carousel > h3 {
  font-size: 20px;
  line-height: 1.45;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  margin-bottom: 0;
}
body .img .row .carousel h1 {
  font-size: 40px;
  line-height: 1.225;
  margin-top: 23px;
  font-weight: 700;
  margin-bottom: 0;
}
/* not showing */
body .img .row .carousel .carous {
  all: unset;
  padding-top: 43px;
  display: flex;
  list-style: none;
}
/* not showing */
body .img .row .carousel .carous li {
  background: #000;
  background-clip: padding-box;
  height: 2px;
}
body .img .row .carousel .carousel-inner .carousel-item .quote-wrapper {
  margin-top: 42px;
}
body .img .row .carousel .carousel-inner .carousel-item .quote-wrapper p {
  font-size: 18px;
  line-height: 1.72222;
  font-weight: 500;
  /* color: rgba(0, 0, 0, 0.7); */
}
body .img .row .carousel .carousel-inner .carousel-item .quote-wrapper h3 {
  font-weight: 700;
  margin-top: 37px;
  font-size: 20px;
  line-height: 1.45;
  text-transform: uppercase;
}

@media only screen and (max-width: 1200px) {
  body .img .row .tabs {
    margin-right: 25px;
  }
}
</style>