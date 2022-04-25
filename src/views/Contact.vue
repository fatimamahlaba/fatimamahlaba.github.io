<template>
<main>
  <div class="contact section" id="contact">
  <div class="container">
  <div class="row">
  <div class="section-head">
  <h2>Contact Me</h2>
  </div>
  </div>
  <h3 class="contact-title">Have Any Questions ?</h3>
  <h4 class="contact-sub-title">I'M AT YOUR SERVICES</h4>
  <div class="row">
  <div class="column">
  <!-- <div class="icon"> -->
  <span class="iconify" data-icon="ant-design:phone-filled" style="color: green;"></span>
  <!-- </div> -->
  <h4>Call Me On</h4>
  <p>072 382 72 44</p>
  </div>
  <div class="column">
  <!-- <div class="icon"> -->
  <span class="iconify" data-icon="bxs:map" style="color: green;"></span>
  <!-- </div> -->
  <h4>Location</h4>
  <p>Cape Town</p>
  </div>
  <div class="column">
  <span class="iconify" data-icon="bi:envelope-fill" style="color: green;"></span>
  <h4>Email</h4>
  <p>fatimamhlaba@gmail.com</p>
  </div>
  </div>
  <h4 class="cont-title">SEND ME AN EMAIL</h4>
  <div class="row">
  <form>
  <div class="contact-form">
  <div class="row">
  <div class="form-item col-6">
  <div class="form-group">
  <input name="name" type="text" class="form-control" placeholder="Name">
  </div>
  </div>
  <div class="form-item col-6">
  <div class="form-group">
  <input name="email" type="email" class="form-control" placeholder="Email">
  </div>
  </div>
  </div>
  <div class="row">
  <div class="form-item col-12">
  <div class="form-group">
  <input name="subject" class="form-control" id="" placeholder="Subject">
  </div>
  </div>
  </div>
  <div class="row">
  <div class="form-item col-12">
  <div class="form-group">
  <textarea name="message" class="form-control" id="" placeholder="Message">
  </textarea>
  </div>
  </div>
  </div>
  <div class="row">
  <div class="form-item col-12 padd-15">
  <button type="submit" class="btn">Send Message</button>
  </div>
  </div>
  </div>
  </form>
  </div>
  </div>
  </div>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
padding: 100px;
margin-top: 10px;
}
.column {
  float: left;
  width: 33.33%;
  padding: 0px;
  /* height: 300px;  */
}
h2{
    position: absolute;
    left: 300px;
    top: 90px;
    color: green;
}
h4{
    font-size: 20px;
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
.contact-title{
    color: green;
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    margin-top: 50px;
}
.contact .btn{
    height: 50px;
    padding: 0 50px;
    border: 1px solid green;
    border-radius: 25px;
}
/* .contact .form-item .form-control{
    width: 100%;
    height: 50px;
    
    background: #fff;
    
    padding: 10px 25px;
    font-size: 16px;
    color: #000;
    width: 80%;
} */
/* .contact .form-item textarea.form-control{
    height: 140px;
    width: 80%;
} */
.contact-form .form-control{
border: 1px solid green;
margin: 10px;
border-radius: 25px;
}
.btn{
    background: green;
    position: absolute;
    color: white;
    left: 380px;
 
}
textarea.form-control {
    min-height: calc(1.5em + 0.75rem + 2px);
    height: 100px;
}
main {
    margin-left: 270px;
}


</style>