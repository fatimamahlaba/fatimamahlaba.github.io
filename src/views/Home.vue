<template>
<main>
  <div class="container" style="margin-right: 350px;">
  <section class="home section" id="home">
  <div class="container">
  <div class="row justify-content-between">
  <div class="column">
  <h3 class="hello">Hello, my name is <span class="name">Fatima Mahlaba</span></h3>
  <h3 class="my-profession">I am <span class="typing">{{ word }}</span></h3>
  <p>That is passionate about coding.</p>
  <a href="/contact" class="btn hire-me">Hire Me</a>
  <div style="text-align:center;">
  <ul>
  <li>
  <a class="github" href="https://github.com/fatimamahlaba">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span class="iconify" data-icon="ant-design:github-outlined" style="color: green;"></span></a>
  </li>
  <li>
  <a class="linkedin" href="https://www.linkedin.com/in/fatima-mahlaba-197a70224/">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span class="iconify" data-icon="akar-icons:linkedin-v2-fill" style="color: green;"></span></a>
  </li>
  <li>
  <a class="netlify" href="https://app.netlify.com/teams/fatimamahlaba/overview?_ga=2.94171417.5011832.1645438700-523954179.1642774775">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span class="iconify" data-icon="bxl:netlify" style="color: green;"></span></a>
  </li>
  </ul>
  </div>
  </div>
  <div class="column">
    <div class="home-img">
  <img src="https://i.postimg.cc/Z5Z3gSrx/Fatima-df7d0a96.jpg" alt="">
  </div>
  </div>
  </div>
  </div>
  </section>
  </div>
</main>
</template>

<script>
export default {
  name: 'Home',
  data(){
      return {
          sentences: [
            "a junior fullstack developer",
            "creative and logical",
            "passionate about JavaScript"
          ],
          word: ''
      }
  },
  methods: {
    waitForMs(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async typeSentence(sentence, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await this.waitForMs(delay);
    this.word += letters[i];
    i++;
  }
},
async deleteSentence() {
  const sentence = this.word;
  const letters = sentence.split("");
  while (letters.length > 0) {
    await this.waitForMs(100);
    letters.pop();
    this.word = letters.join("");
  }
},
async sentenceLoop(sentenceList) {
  let i = 0;
  while (true) {
    await this.typeSentence(sentenceList[i]);
    await this.waitForMs(1500);
    await this.deleteSentence();
    await this.waitForMs(500);
    i++;
    if (i >= sentenceList.length) {
      i = 0;
    }
  }
}
  },
  mounted(){
      this.sentenceLoop(this.sentences);
  }
}
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; 
}

h3 span{
    font-family: Clicker Script,cursive; 
    font-size: 30px;
    font-weight: 700;
    color: green;
}
.typing{
  color: green;
}
.hello, p{
  color: black;
}
.btn{
    font-size: 16px;
    font-weight: 500;
    padding: 12px 35px;
    color: #fff;
    border-radius: 40px;
    display: inline-block;
    white-space: nowrap;
    border: none;
    background: green;
    transition: .25s;
}
.home{
    min-height: 100vh;
    display: flex;
    color: #000;
}
.container{
    max-width: 1100px;
    width: 100%;
    margin: auto;
}
main {
    margin-left: 270px;
}
ul li a {
    display: block;
    float: left;
    position: relative;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 40px;
    text-align: center;
    text-decoration: none;
    color: green;
    margin: 0 30px;
    transition: .5s;
    left: 90px;
}

ul li a span:nth-child(2) {
    top: 0;
    left: 0;
    transform: scale(0);
    transform-origin: bottom;
}
ul li a span:nth-child(2), ul li a span:nth-child(4) {
    width: 3px;
    height: 100%;
    background: #fff;
}
ul li a span:first-child {
    top: 0;
    left: 0;
    transform-origin: right;
}
ul li a span:first-child, ul li a span:nth-child(3) {
    width: 100%;
    height: 3px;
    background: #fff;
}
ul li a span {
    position: absolute;
    transition: transform .5s;
}
ul li a:hover span:first-child {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .5s;
}
.github:hover span{
    background: green;
}
.home-img:before {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    border-top: 10px solid green;
    border-left: 10px solid green;
    left: 900px;
    top: 150px;
}
.home-img:after {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    border-bottom: 10px solid green;
    border-right: 10px solid green;
    /* right: 20px; */
    bottom: 39px;
}
.home .home-img img {
    margin: auto;
    border-radius: 5px;
    height: 400px;
}
</style>
