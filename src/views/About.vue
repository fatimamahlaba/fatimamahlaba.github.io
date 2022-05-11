<template>
<main>
  <div class="container">
  <div class="about">
  <div class="section-head">
  <h2>About Me</h2>
  </div><br><br><br><br>
  <div class="row">
  <div class="text col-md-7 sm-12">
  <h3>Hi There! I am Fatima Mahlaba</h3><br>
  <p>I am a 25 year old Web Developer from Cape Town, South Africa.I am a passionate, hard-working and happy individual. As an extrovert, I make friends very easily because I always feel comfortable around new people as well as new environments. I am a bubbly person who is always available to assist anyone who might need my help. I am an explorer of life. Furthermore, I love travelling and being adventurous, and I love learning new things.</p><br>
  <h5>HTML</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
  </div>
  </div>
  <h5>CSS</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
  </div>
  </div>
  <h5>JAVASCRIPT</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
  </div>
  </div>
  <h5>MONGODB</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
  </div>
  </div>
  <h5>POSTGRES</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
  </div>
  </div>
  <h5>VUE X</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
  </div>
  </div>
  <h5>TAILWIND</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
  </div>
  </div>
  <h5>Vue</h5>
  <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
  </div>
  </div><br>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>
  <div class="col-md-5 sm-12">
  <img src="https://i.postimg.cc/VNQF1kJS/Fatima2-efe6bf9f.jpg" id="img" alt="me">
  </div>
  </div>
  </div>
  </div>
</main>
</template>

<script>
export default {

}
</script>

<style>
h2{
    position: absolute;
    left: 300px;
    top: 90px;
    color: green;
}
.section-head h2:before {
    content: "";
    height: 4px;
    width: 50px;
    background-color: green;
    position: absolute;
    top: 100%;
    left: 0;
}
.section-head h2:after {
    content: "";
    height: 4px;
    width: 25px;
    background-color: green;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
}
#img{
    width: 80%;
    vertical-align: top;
    max-width: 100%;
    padding-top: 150px;
}
h3{
    color: green;
    padding: 50px;
}
main {
    margin-left: 270px;
}
</style>