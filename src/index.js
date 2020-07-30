require("./styles/style.scss");
import loader from "./assets/loading.gif";
import newIcon from "./assets/-e-kz-bolt-line@3x.svg";
import searchIcon from "./assets/-e-kz-search-space@3x.svg";
import heartIcon from "./assets/-e-kz-heart@3x.svg";
import $ from "jquery";
import "slick-carousel";
import AOS from "aos";

// get data from API
const url =
  "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=8&store=US";

const params = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "asos2.p.rapidapi.com",
    "x-rapidapi-key": "0525f4e170msh84d4face6ac5315p15f636jsnf382aeca8012",
  },
};

const products = document.querySelector(".products-list");

products.innerHTML = `<img src='${loader}' style='display: block; max-width: 100px; margin: 0 auto 100px;' />`;

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url, params)
  .then((resp) => resp.json())
  .then(function (data) {
    let productsData = data.products;

    products.innerHTML = "";

    return productsData.map(function (productlItem) {
      let div = createNode("div");

      div.classList.add("col-6", "col-md-4", "col-lg-3", "product");
      div.setAttribute("data-aos", "fade-up");

      div.innerHTML = `
      <img src="http://${productlItem.imageUrl}" class="product__img" alt="" />
      <div class="product__body">
        <h5 class="product__title">
          <img src="${newIcon}" />NEW
        </h5>
        <p class="product__text">${productlItem.name}</p>
        <p class="product__price">${productlItem.price.current.text}</p>
        <div class="product__buttons">
          <div class="add">
            <button>ADD TO CART</button>
          </div>
          <div class="other">
            <button>
              <img src="${searchIcon}" />
            </button>

            <button>
              <img src="${heartIcon}" />
            </button>
          </div>
        </div>
      </div>
    `;
      append(products, div);
    });
  })
  .catch(function (error) {
    console.log(error);

    products.innerHTML = "";

    let h2 = createNode("h2");
    h2.style.margin = "0 auto 100px";
    h2.innerHTML = "Ups... wczytywanie produktów poszło nie tak :(";

    append(products, h2);
  });

window.addEventListener("DOMContentLoaded", () => {
  $(".carousel__items").slick({
    arrows: false,
    autoplay: true,
    centerMode: true,
    dots: true,
    cssEase: "ease-out",
    customPaging: function (slider, i) {
      return "<span class='dot'></span>";
    },
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    speed: 500,
    variableWidth: true,
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

  const topArrow = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      topArrow.classList.add("active");
    } else {
      topArrow.classList.remove("active");
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  const handleClick = () => {
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("nav--visible");
    document.documentElement.classList.toggle("lock-scroll");
  };

  hamburger.addEventListener("click", handleClick);

  window.addEventListener("click", (e) => {
    if (document.querySelector(".nav").classList.contains("nav--visible")) {
      if (!e.composedPath().includes(document.querySelector(".container"))) {
        document.querySelector(".nav").classList.remove("nav--visible");
        document
          .querySelector(".hamburger")
          .classList.remove("hamburger--active");
        document.documentElement.classList.remove("lock-scroll");
      }
    }
  });

  AOS.init({
    duration: 700,
    easing: "ease-out",
  });
});
