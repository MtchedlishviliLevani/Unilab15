const burger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

burger.addEventListener("click", () =>  {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});




// margintop for main when i click burger menu

  const main = document.querySelector("main");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
 main.style.margin = "40rem 0 0 0";
  
  })


  // Modal box

  const button = document.querySelector("#btn");
const close_cl = document.querySelector(".close");
const windowsA = document.querySelector(".window");

button.addEventListener("click", () => {

windowsA.style.display = "block";

})

close_cl.addEventListener("click",  () => {
    windowsA.style.display = "none"
})
