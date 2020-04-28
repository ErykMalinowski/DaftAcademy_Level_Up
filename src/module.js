const moduleOne = function (scrollElement, expandElement, slideEffect) {
  const viewportHeight = window.innerHeight;
  const scrollCondition = viewportHeight / 2;
  const btnScroll = scrollElement;
  const btnExpand = expandElement;
  const elementsWrapper = document.querySelector(".elements-wrapper");
  const year = document.querySelector(".current-year");

  // carousel
  const carouselSlides = slideEffect;
  const carouselImages = document.querySelectorAll(".carousel-slide");

  let counter = 1;
  const size = carouselImages[0].clientWidth + 10; // 10 is margin between slides (2*5px)

  carouselSlides.style.transform = "translateX(" + -size * counter + "px)";

  return {
    showBtnScroll: function () {
      if (window.scrollY > scrollCondition) {
        btnScroll.classList.add("button-scroll--show");
      } else {
        btnScroll.classList.remove("button-scroll--show");
      }
    },
    scrollToTop: function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    showAllProducts: function () {
      for (let i = 0; i < 4; i++) {
        const products = document.querySelectorAll(".card");
        const lastProduct = products[products.length - 1];
        const img = lastProduct.querySelector(".card-buttons").innerHTML;

        let newProduct = document.createElement("div");
        newProduct.classList.add("col-6", "col-md-4", "col-lg-3", "card");
        newProduct.innerHTML = `
            <img src="https://via.placeholder.com/309x390" class="img-fluid" alt="">
            <div class="card-body">
            <p class="card-text">Cableknit shawl-collar cardigan</p>
            <p class="card-price">$290.00</p>
            <div class="card-buttons">
            ${img}
            </div>
            </div>`;

        elementsWrapper.appendChild(newProduct);
      }

      btnExpand.classList.add("d-none");
    },
    updateYear: function () {
      const today = new Date();
      const currentYear = today.getFullYear();

      year.innerHTML = currentYear;
    },
    nextSlide: function () {
      if (counter >= carouselImages.length - 4) return;
      carouselSlides.style.transition = "transform 0.4s ease-in-out";
      counter++;
      console.log(counter);
      carouselSlides.style.transform = "translateX(" + -size * counter + "px)";
    },
    prevSlide: function () {
      if (counter <= 0) return;
      carouselSlides.style.transition = "transform 0.4s ease-in-out";
      counter--;
      console.log(counter);
      carouselSlides.style.transform = "translateX(" + -size * counter + "px)";
    },
    transitionMethod: function () {
      if (carouselImages[counter].id === "lastClone") {
        carouselSlides.style.transition = "none";
        counter = carouselImages.length - 5;
        carouselSlides.style.transform =
          "translateX(" + -size * counter + "px)";
      }

      if (carouselImages[counter].id === "firstClone") {
        carouselSlides.style.transition = "none";
        counter = 1;
        carouselSlides.style.transform =
          "translateX(" + -size * counter + "px)";
      }
    },
  };
};

export default moduleOne;
