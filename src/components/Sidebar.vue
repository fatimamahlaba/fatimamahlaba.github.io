<template>
  <div class="container">
<div class="aside">    
<div class="logo">
<a href="#">
<span>F</span>atima</a>
</div>
<div class="nav-toggler">
<span></span>
</div>
<div class="links">
<ul class="sidebar "> 
 <li class="side-item">
 <router-link class="side-link active" aria-current="page" to="/">Home</router-link>
 </li>
<li class="side-item">
 <router-link class="side-link active" aria-current="page" to="/about">About</router-link>
 </li>
<li class="side-item">
 <router-link class="side-link active" aria-current="page" to="/resume">Resume</router-link>
 </li>
<li class="side-item">
 <router-link class="side-link active" aria-current="page" to="/portfolio">Portfolio</router-link>
 </li>
<li class="side-item">
 <router-link class="side-link active" aria-current="page" to="/testimonials">Testimonials</router-link>
 </li>
<li class="side-item">
 <router-link class="side-link active" aria-current="page" to="/contact">Contact</router-link>
 </li>
</ul>
 </div>
</div>
</div>
</template>

<script>
export default {
    name: "Sidebar",

}
</script>

<style>

.aside .sidebar li a {
    font-size: 16px;
    font-weight: 600;
    display: block;
    color: #000;
    padding: 5px 15px;
}
a.router-link-active, li:hover {
    content: "";
    color: green!important;
    padding: 0;
    text-decoration: none;
    box-shadow: none;
}
.aside .logo a {
    color: #000;
    padding: 15px 20px;
    font-size: 30px;
    letter-spacing: 5px;
    position: relative;
    border-bottom: none;
}
a {
    text-decoration: none;
    color: black;    
}
ul{
    list-style: none;
    
}
.aside .logo a:after {
    border-top: 5px solid green;
    border-right: 5px solid green;
    top: 0;
    right: 0;
}
.aside .logo a:before {
    border-bottom: 5px solid green;
    border-left: 5px solid green;
    bottom: 0;
    left: 0;
}
.aside .logo a:after, .aside .logo a:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
}

.aside {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    padding: 30px;
    height: 100%;
    border-right: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.aside .logo {
    position: absolute;
    top: 80px;
    font-size: 30px;
    text-transform: capitalize;
}

</style>