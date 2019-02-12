
var open = document.querySelector(".main-nav__mobile-menu");
var mobilePurchase = document.querySelector(".mobile__container");
var mobileOverlay = document.querySelector(".mobile");
var close = document.querySelector(".mobile__close");

var orderButton = document.querySelector(".button");
var productItem = document.querySelectorAll(".button");
var modalPurchase = document.querySelector(".modal__container");
var modalOverlay = document.querySelector(".modal");
var filter = document.querySelector(".page__filter-item");

if (orderButton) {
  orderButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOverlay.classList.remove("visually-hidden");
  });
}

productItem.forEach(e =>
  e.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOverlay.classList.remove("visually-hidden");
  })
);

modalOverlay.addEventListener(
  "click",
  function (evt) {
    if (evt.currentTarget !== evt.target) {
      return;
    }

    modalOverlay.classList.add("visually-hidden");
  },
  false
);

if (open) {
  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    mobileOverlay.classList.remove("visually-hidden");
  });
}

if (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    mobileOverlay.classList.add("visually-hidden");
  });
}

mobileOverlay.addEventListener(
  "click",
  function (evt) {
    if (evt.currentTarget !== evt.target) {
      return;
    }

    mobileOverlay.classList.add("visually-hidden");
  },
  false
);


  var filterizd = $('.filtr-container').filterizr({
    //options object
  });



