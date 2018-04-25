var link = document.querySelector(".feedback-form");
var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close");
var loginField = popup.querySelector(".input-name");
var emailField = popup.querySelector(".input-email");
var commentField = popup.querySelector("[name=comment]");
var form = popup.querySelector("form");
var linkMap = document.querySelector(".link-modal-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".map-close");
var back = document.querySelector(".slider-button-back");
var next = document.querySelector(".slider-button-next");
var slide1 = document.querySelector(".slide1");
var slide2 = document.querySelector(".slide2");
var delivery = document.querySelector(".service-delivery");
var warranty = document.querySelector(".service-warranty");
var credit = document.querySelector(".service-credit");
var itemDelivery = document.querySelector(".service-text-item-delivery");
var itemWarranty = document.querySelector(".service-text-item-warranty");
var itemCredit = document.querySelector(".service-text-item-credit");
var drills = document.querySelector(".drills");
var perforators = document.querySelector(".perforators");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-display");
  loginField.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-display");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!loginField.value || !emailField.value || !commentField.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  }
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-display");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-display");
});

next.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e.target.parentNode);
  if (slide2.classList.contains("show")) {
    slide2.classList.remove("show");
    slide1.classList.add("show");
    slide1.classList.add("show");
    perforators.classList.remove("active");
    drills.classList.add("active");
  } else {
    slide1.classList.remove("show");
    slide2.classList.add("show");
    drills.classList.remove("active");
    perforators.classList.add("active");
  }
});

back.addEventListener("click", function(e) {
  console.log(e.target.parentNode);
  if (slide2.classList.contains("show")) {
    slide2.classList.remove("show");
    slide1.classList.add("show");
    slide1.classList.add("show");
    perforators.classList.remove("active");
    drills.classList.add("active");
  } else {
    slide1.classList.remove("show");
    slide2.classList.add("show");
    drills.classList.remove("active");
    perforators.classList.add("active");
  }
});

delivery.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e.target.parentNode);
  warranty.classList.remove("current-item");
  credit.classList.remove("current-item");
  delivery.classList.add("current-item");
  itemWarranty.classList.remove("active");
  itemCredit.classList.remove("active");
  itemDelivery.classList.add("active");
});

warranty.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e.target.parentNode);
  delivery.classList.remove("current-item");
  credit.classList.remove("current-item");
  warranty.classList.add("current-item");
  itemWarranty.classList.remove("active");
  itemDelivery.classList.remove("active");
  itemCredit.classList.add("active");
});

credit.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e.target.parentNode);
  warranty.classList.remove("current-item");
  delivery.classList.remove("current-item");
  credit.classList.add("current-item");
  itemDelivery.classList.remove("active");
  itemCredit.classList.remove("active");
  itemWarranty.classList.add("active");
});
