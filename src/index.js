require("./styles/style.scss");
import loader from "./assets/loading.gif";
import newIcon from "./assets/-e-kz-bolt-line@3x.svg";
import searchIcon from "./assets/-e-kz-search-space@3x.svg";
import heartIcon from "./assets/-e-kz-heart@3x.svg";
import $ from "jquery";
import "slick-carousel";
import AOS from "aos";

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

  // get data from API
  const carouselURL =
    "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=pricedesc&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=6&store=US";
  const productsURL =
    "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=8&store=US";
  const params = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "0525f4e170msh84d4face6ac5315p15f636jsnf382aeca8012",
    },
  };
  const carouselItems = document.querySelector(".carousel__items");
  const products = document.querySelector(".products-list");

  products.innerHTML = `<img src='${loader}' style='display: block; max-width: 100px; margin: 0 auto 100px;' />`;

  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  // fetch(carouselURL, params)
  //   .then((resp) => resp.json())
  //   .then(function (data) {
  //     let carouselData = data.products;
  //     return carouselData.map(function (carouselItem) {
  //       let div = createNode("div"),
  //         img = createNode("img"),
  //         desc = createNode("div"),
  //         name = createNode("p"),
  //         price = createNode("p");
  //       div.classList.add("carousel__item");
  //       img.src = `http://${carouselItem.imageUrl}`;
  //       desc.classList.add("desc");
  //       name.classList.add("desc__name");
  //       name.innerHTML = `${carouselItem.name}`;
  //       price.classList.add("desc__price");
  //       price.innerHTML = `${carouselItem.price.current.text}`;

  //       append(desc, name);
  //       append(desc, price);
  //       append(div, img);
  //       append(div, desc);
  //       append(carouselItems, div);
  //     });
  //   });

  fetch(productsURL, params)
    .then((resp) => resp.json())
    .then(function (data) {
      let productsData = data.products;

      products.innerHTML = "";

      return productsData.map(function (productlItem) {
        let div = createNode("div"),
          img = createNode("img"),
          body = createNode("div"),
          h5 = createNode("h5"),
          imgNew = createNode("img"),
          span = createNode("span"),
          text = createNode("p"),
          price = createNode("p"),
          buttons = createNode("div"),
          add = createNode("div"),
          other = createNode("div"),
          btnAdd = createNode("button"),
          btnSearch = createNode("button"),
          btnHeart = createNode("button"),
          imgSearch = createNode("img"),
          imgHeart = createNode("img");

        div.classList.add("col-6", "col-md-4", "col-lg-3", "product");
        div.setAttribute("data-aos", "fade-up");
        img.src = `http://${productlItem.imageUrl}`;
        img.classList.add("product__img");
        body.classList.add("product__body");
        h5.classList.add("product__title");
        imgNew.src = newIcon;
        span.innerHTML = "NEW";
        text.classList.add("product__text");
        text.innerHTML = `${productlItem.name}`;
        price.classList.add("product__price");
        price.innerHTML = `${productlItem.price.current.text}`;
        buttons.classList.add("product__buttons");
        add.classList.add("add");
        other.classList.add("other");
        btnAdd.innerHTML = "ADD TO CART";
        imgSearch.src = searchIcon;
        imgHeart.src = heartIcon;

        append(btnSearch, imgSearch);
        append(btnHeart, imgHeart);
        append(other, btnSearch);
        append(other, btnHeart);
        append(add, btnAdd);
        append(buttons, add);
        append(buttons, other);
        append(h5, imgNew);
        append(h5, span);
        append(body, h5);
        append(body, text);
        append(body, price);
        append(body, buttons);
        append(div, img);
        append(div, body);
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
});
