var orderButton = document.querySelector(".promo__button");
var productItem = document.querySelectorAll(".product-item__button");
var modalPurchase = document.querySelector(".modal__container");
var modalOverlay = document.querySelector(".modal");

if (orderButton) {
orderButton.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
});
}

productItem.forEach(e =>
e.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
})
);

modalOverlay.addEventListener(
"click",
function(evt) {
if (evt.currentTarget !== evt.target) {
return;
}

modalOverlay.classList.add("visually-hidden");
},
false
);
