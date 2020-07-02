import "./styles/style.scss";
import $ from "jquery";
import "slick-carousel";

window.jQuery = window.$ = $;

window.addEventListener("DOMContentLoaded", () => {
  $(".carousel__items").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    customPaging: function (slider, i) {
      return "<span class='dot'></span>";
    },
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // fetch(
  //   "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",
  //   {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "asos2.p.rapidapi.com",
  //       "x-rapidapi-key": "0525f4e170msh84d4face6ac5315p15f636jsnf382aeca8012",
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     let products = data.products;
  //     let counter = 0;
  //     return products.map(function (product) {
  //       if (counter < imgs.length) {
  //         if (imgs[counter].classList.contains("lazy-main")) {
  //           imgs[counter].parentElement.querySelector(
  //             "button:first-child"
  //           ).innerHTML = "ADD TO CART";
  //         }
  //         imgs[counter].src = `http://${product.imageUrl}`;
  //         counter++;
  //       }
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log(imgs);
  //     return imgs.map(function (img) {
  //       if (img.classList.contains("lazy-main")) {
  //         img.parentElement.querySelector("button:first-child").innerHTML =
  //           "PRODUCT NOT AVAILABLE";
  //       }
  //       img.src = `https://us2guntur.com/assets/images/Productnotavl.jpg`;
  //     });
  //   });
});
