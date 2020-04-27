import "./styles/style.scss";
import moduleOne from "./module";

window.addEventListener("DOMContentLoaded", () => {
  const btnScroll = document.querySelector(".button-scroll");
  const btnExpand = document.querySelector(".expand");

  const scroll = moduleOne(btnScroll, btnExpand);

  window.addEventListener("scroll", scroll.showBtnScroll);
  btnScroll.addEventListener("click", scroll.scrollToTop);
  btnExpand.addEventListener("click", scroll.showAllProducts);
  scroll.updateYear();
});

// $("#carousel-example").on("slide.bs.carousel", function (e) {
//   var $e = $(e.relatedTarget);
//   var idx = $e.index();
//   var itemsPerSlide = 5;
//   var totalItems = $(".carousel-item").length;

//   if (idx >= totalItems - (itemsPerSlide - 1)) {
//     var it = itemsPerSlide - (totalItems - idx);
//     for (var i = 0; i < it; i++) {
//       if (e.direction == "left") {
//         $(".carousel-item").eq(i).appendTo(".carousel-inner");
//       } else {
//         $(".carousel-item").eq(0).appendTo(".carousel-inner");
//       }
//     }
//   }
// });
