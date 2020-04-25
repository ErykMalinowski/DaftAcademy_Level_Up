import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  var module = function (element) {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const headerPosition = headerHeight / 2;
    const btnScroll = element;
    const year = document.querySelector(".current-year");

    return {
      showBtnScroll: function () {
        if (window.scrollY > headerPosition) {
          btnScroll.classList.add("button-scroll--show");
        } else {
          btnScroll.classList.remove("button-scroll--show");
        }
      },
      scrollToTop: function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      },
      updateYear: function () {
        const today = new Date();
        const currentYear = today.getFullYear();

        year.innerHTML = currentYear;
      },
    };
  };

  const btnScroll = document.querySelector(".button-scroll");

  var scroll = module(btnScroll);

  window.addEventListener("scroll", scroll.showBtnScroll);
  btnScroll.addEventListener("click", scroll.scrollToTop);
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
