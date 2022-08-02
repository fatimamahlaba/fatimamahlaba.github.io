<template>
<main>
    <div class="section-head">
  <h2>Resume</h2>
  </div>
 <div class="work-experience">
   <div class="work-img"> 
       <span class="iconify" data-icon="ic:baseline-work" style="color: green; font-size: xx-large"></span>
   </div>
    <h1 class="work-title">Work Experience</h1>
   <div class="job-box">
   <div class="job-title">Afriquezeen Restuarant</div>
   <div class="job-date"> 2019 - Present</div><br>
   <div class="job-description">Director</div>
  </div>
   <div class="job-box">
   <div class="job-title">Life Choices</div>
   <div class="job-date">20 September 2021 - Present</div>
   <div class="job-description">Internship</div>
  </div>
   <div class="job-box">
   <div class="job-title">Cornerstone Institute</div>
   <div class="job-date">20 June 2022 - 20 July 2022 (Contract)</div>
   <div class="job-title">Cornerstone Institute</div>
   <div class="job-date">20 June 2022 - 20 July 2022</div>
   <div class="job-description">Internship</div>
  </div>
</div>
<div class="education">
  <div class="work-img"> 
      <span class="iconify" data-icon="zondicons:education" style="color: green; font-size: xx-large"></span>
   </div>
  <h1>Education</h1>
  <div class="job-box">
   <div class="job-title">Islamia College</div><br>
   <div class="job-date">2014</div><br>
   <div class="job-description">Matric</div><br>
  </div>
   <div class="job-box">
   <div class="job-title">Cape Peninsula University of Cape Town</div>
   <div class="job-date">2016 - 2019</div>
   <div class="job-description">ND: Retail Business Management</div>
  </div>
   <div class="job-box">
   <div class="job-title">University of Johannesburg</div>
   <div class="job-date">2020</div>
   <div class="job-description">Diploma in Transportation Management</div>
  </div>
</div>
</main>
</template>

<script>
export default {

}
</script>

<style>

h3.title{
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 700;
    color: green;
}
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

main {
    margin-left: 270px;
    padding: 150px;
}

/**work experience box**/
.work-experience {
  float: left;
  box-shadow: 10px 10px 5px grey;
  background-color: white;
  height: 200px;
  width: 850px;
  margin: 15px 15px 15px 15px;
  box-sizing: border-box;
}

.work-img {
  float: left;
  height: auto;
  width: 50px;
  margin: 25px 30px 100% 30px;
  box-sizing: border-box;
}

.job-box{
  float: left;
  border: solid;
  border-width: 0px 0px 3px 0px;
  box-sizing: border-box;
  margin: 0px 10px 0px 0px;
  padding: 10px 10px 10px 10px;
  width: 200px;
  height: auto;
}

.job-box:hover {
  background-color: gray;
}

.job-title {
  font-weight: bold;
  line-height: 1.5;
  box-sizing: border-box;
}

.job-date{
  color: green;
  line-height: 1.5;
  box-sizing: border-box;
}


.job-description{
  line-height: 1.5;
  box-sizing: border-box;
}

/**Education box**/
.education {
  float: left;
  box-shadow: 10px 10px 5px grey;
  background-color: white;
  box-sizing: border-box;
  height: 250px;
  width: 850px;
  margin: 15px 15px 15px 15px;
}

</style>