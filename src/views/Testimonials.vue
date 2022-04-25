<template>
  <main>
 <div class="section-head">
<h2>Testimonials</h2>
</div>
 <div class="container"> 
      <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" id="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
            class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" id="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" id="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
            <button type="button" id="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
            <button type="button" id="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.postimg.cc/g2v2RkcP/Lilitha-750f6638.jpg" class="d-block" alt="..."><br><br>
            <h4>Lilitha Mantini- Collegue</h4>
            <h3>I have worked with Fatima on a few projects. She is a good team player, target driven and not afraid of
              challenges. She is very professional in and of duty. She is always willing to assit where she is needed,
              also she's capable of working solo on projects.</h3>
              
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/Qtn8sFmc/Siyabonga-f112f100.jpg" class="d-block" alt="..."><br><br>
            <h4>Siyabonga Mkhosana- Collegue.</h4>
            <h3>Fatima is a bubbly soul, all throughout our time on the Academy she has maintained an eagerness to learn
              and good work ethic. She is a very committed individual.</h3>
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/vTVjCkkW/jason-a013744d.jpg" class="d-block" alt="..."><br><br>
            <h4>Jason Wandrag-Lecturer.</h4>
            <h3>I learn something new about Fatima every day. I enjoy when she gives her answers in class. She works very diligently when she is focused. I always enjoy seeing Fatima grow as a student in my class, and I hope she continues to study hard.</h3>
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/28BrfXh9/Seth-3f8b5280.png" class="d-block" alt="..."><br><br>
            <h4> Seth Kleynhauns - Collegue.</h4>
            <h3>Fatima is one of the most caring people I know. She's dedicated and hard working. She's always open to learn new things.</h3>
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/YC9N9Y2P/Godwin-abdba4eb.jpg" class="d-block" alt="..."><br><br>
            <h4>Godwin – Head of Curriculum and Learning.</h4>
            <h3>I am delighted to be called upon as a reference for Fatima. She always behaves professionally.</h3> 
          </div><br><br><br>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
    position: absolute;
    left: 300px;
    top: 90px;
    color: green;
}
h4 {
  color: green;
}
main {
    margin-left: 270px;
}

/* .container {
    padding-top: 100px;
} */
#button {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  /* background-color: green; */
  border: solid green;
}
.carousel .carousel-item {
  text-align: center;
  height: 400px;
  margin-top: 200px;
  padding-right: 100px;
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

.carousel .carousel-item .d-block {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  padding: 5px;
  border: 1px dashed green;
  border-radius: 50%;
}
.carousel .d-block img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
h3 {
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
}
h3 {
  font-size: large;
  font-family: sans-serif;
  color: rgb(8, 8, 8);
}
.bi-arrow-down-short:hover {
  color: #f7f8f9;
}
.button {
  border-radius: 50%;
}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none;
    padding-right: 100px;
}

</style>