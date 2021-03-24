let burger = document.getElementsByClassName("burger");
let nav = document.querySelector("nav");
let flou = document.querySelector(".flou");

if (window.matchMedia("(max-width: 840px)").matches) {
    burger[0].addEventListener("click", function () {
      nav.style.transform = "translateX(0px)";
      flou.style.display = "block";
      flou.style.opacity = "0.3";
    });
    flou.addEventListener("click", function () {
      nav.style.transform = "translateX(-30vw)";
      flou.style.display = "none";
      flou.style.opacity = "0";
    });
  }
  