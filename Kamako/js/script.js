var popup = document.querySelector(".popup");
var close = popup.querySelector(".modal-close");

var slider = Peppermint(document.getElementById('peppermint'), {
  dots: true,
  slideshow: true,
  speed: 500,
  slideshowInterval: 7500,
  stopSlideshowAfterInteraction: true,
  onSetup: function(n) {
    console.log('Peppermint setup done. Slides found: ' + n);
  }
});

rightArr = document.getElementById('right-arr'),
leftArr = document.getElementById('left-arr');

rightArr.addEventListener('click', slider.next, false);
leftArr.addEventListener('click', slider.prev, false);

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("popup-close");
});
