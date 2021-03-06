"use strict";

let panels = document.querySelectorAll(".panel-container");
let panel1 = document.querySelector(".panel-container-1");
let panel2 = document.querySelector(".panel-container-2");

let buttons = document.querySelectorAll(".panel-button");

// хэш с элементами конструктора

let a = {
    plants:
        [
            "succulent-icon.svg",
            "botanic.svg",
            "botanic-stone.svg"
        ],
    crystals: 
        [
            "crystal1.svg",
            "crystal2.svg",
            "crystal3.svg"
        ]
};


// задание параметров элементам, позиционирование внутри контейнера


function createItemTemplate(src) {
    let itemTemplate = document.createElement("img");
    itemTemplate.style.width = 200 + "px";
    itemTemplate.style.height = 200 + "px";
    itemTemplate.classList.add('item');
    itemTemplate.src = src;
    if (document.documentElement.clientWidth <= 768) {
        itemTemplate.style.width = 90 + "px";
        itemTemplate.style.height = 90 + "px";
    }
    return itemTemplate;
}


function appendItem(arr, container) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        container.append(createItemTemplate(element));
    };
}

appendItem(a.plants, panel1);
appendItem(a.crystals, panel2);

let items = document.querySelectorAll(".item");

function getOffsetParams () {
    items.forEach(function(el){
      var posY = el.offsetTop;
      var posX = el.offsetLeft;
      el.style.top = posY + "px";
      el.style.left = posX + "px";
    })
    for (var i = 0; i < items.length; i++) {
    items[i].style.position = "absolute";
  }
  }

  window.addEventListener('load',getOffsetParams,false);


//   переключение контейнеров с элементами



for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click',switchTab,false);
    element.addEventListener('touchend',switchTab,false);
}

function switchTab(evt) {
    evt.preventDefault();
    let b = evt.target.nextElementSibling;
    for (let i = 0; i < panels.length; i++) {
        const element = panels[i];
        element.classList.remove("active");
    }
    b.classList.add("active");
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.classList.remove("b-active");
    }
    evt.target.classList.add("b-active");
}



// drag'n'drop

for (var i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('mousedown',mouseDown,false);
    item.addEventListener('mouseup',mouseUp,false);
}

var clickX = 0;
var clickY = 0;
var currentIndex = 5;
var targetImg = null;
var newTargetImg = null;
var panelWrap = document.querySelector(".left-panel-wrap");

var someArray = [];

function mouseDown(evt) {
  evt.preventDefault();
  targetImg = evt.target;
  newTargetImg = evt.target.cloneNode(true);
  newTargetImg.classList.add('aaa');
  someArray.push(newTargetImg);
  panelWrap.appendChild(newTargetImg);
  currentIndex++;
  newTargetImg.style.zIndex = currentIndex;

  for (var i = 0; i <someArray.length; i++) {
    const item = someArray[i];
    console.log('aaa');
    item.addEventListener('mousedown',aaa,false);
    item.addEventListener('mouseup',mouseUp,false);
}


}

var bbb = document.querySelectorAll(".aaa");





function aaa(evt) {
    evt.preventDefault();
    // console.log(evt.target);
    // targetImg = evt.target;
    // clickX = evt.clientX - evt.target.offsetLeft;
    // clickY = evt.clientY - evt.target.offsetTop;
    // currentIndex++;
    // targetImg.style.zIndex = currentIndex;
    targetImg.style.transform = "translate(10px, 10px)";
    targetImg.style.cursor = "grab";
    window.addEventListener('mousemove',mouseMove,false);
}

function mouseMove(evt) {
  evt.preventDefault();

  targetImg.style.left = (evt.pageX - clickX) + "px";
  targetImg.style.top = (evt.pageY - clickY) + "px";
  targetImg.style.cursor = "grabbing"; 
  targetImg.style.visibility = "hidden";
  let elemBelow = document.elementFromPoint(evt.clientX, evt.clientY);
//   console.log(elemBelow);
  targetImg.style.visibility = "visible";

}


function mouseUp(evt) {
  evt.preventDefault();
  window.removeEventListener("mousemove", mouseMove, false);
}

