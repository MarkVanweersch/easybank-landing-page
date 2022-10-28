const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("nav-mobile");
const navMobileOverlay = document.getElementById("nav-mobile-overlay");
const phonesImg = document.getElementById("intro-phones-img");

hamburger.addEventListener("click", showHideNav);

function showHideNav() {
  navMobile.classList.toggle("hidden");
  navMobileOverlay.classList.toggle("hidden");
  phonesImg.classList.toggle("hidden");


  if (hamburger.src.includes("hamburger")) {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
}