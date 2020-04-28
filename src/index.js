import "./styles/style.scss";
import moduleOne from "./module";

window.addEventListener("DOMContentLoaded", () => {
  const btnScroll = document.querySelector(".button-scroll");
  const btnExpand = document.querySelector(".expand");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const carouselSlides = document.querySelector(".carousel-slides");

  const scroll = moduleOne(btnScroll, btnExpand, carouselSlides);

  window.addEventListener("scroll", scroll.showBtnScroll);
  btnScroll.addEventListener("click", scroll.scrollToTop);
  btnExpand.addEventListener("click", scroll.showAllProducts);
  scroll.updateYear();

  nextBtn.addEventListener("click", scroll.nextSlide);
  prevBtn.addEventListener("click", scroll.prevSlide);
  carouselSlides.addEventListener("transitionend", scroll.transitionMethod);
});
