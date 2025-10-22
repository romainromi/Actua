let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    window.open('http://')
})

let inscription = document.getElementById('inscription')



let header = document.querySelector("header");
let menu1 = document.querySelector(".menu1")
let menu2 = document.querySelector(".menu2")
let menu3 = document.querySelector(".menu3")
let actua = document.querySelector("h1")
let headerC = document.querySelector(".header-container")


 header.addEventListener("mouseover", function () {
   header.style.transition = "all 0.4s ease";
   header.style.paddingTop = "64px";
   header.style.paddingBottom = "64px";
   menu1.style.display = "block"
   menu2.style.display = "block"
   menu3.style.display = "block"
   document.querySelector("#navigation").style.alignItems = "flex-end"
 });

header.addEventListener("mouseleave", function () {
  header.style.paddingTop = "32px";
  header.style.paddingBottom = "32px";
  menu1.style.display = "none"
  menu2.style.display = "none"
  menu3.style.display = "none"

});