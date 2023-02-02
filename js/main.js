var burger = document.querySelector(".burger-menu");
var nav = document.querySelector("nav");
var navTranslate = document.querySelector(".nav__a");

burger.addEventListener("click", function(){
   nav.classList.toggle("__is-Active");
   console.log("test");
})