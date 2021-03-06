"use strict";

// let panels = document.querySelectorAll(".panel-container");
// let panel1 = document.querySelector(".panel-container-1");
// let panel2 = document.querySelector(".panel-container-2");

// let buttons = document.querySelectorAll(".panel-button");

// let workArea = document.querySelectorAll(".work-panel");

// // хэш с элементами конструктора

// let a = {
//     plants:
//         [
//             "succulent-icon.svg",
//             "botanic.svg",
//             "botanic-stone.svg"
//         ],
//     crystals: 
//         [
//             "crystal1.svg",
//             "crystal2.svg",
//             "crystal3.svg"
//         ]
// };


// // задание параметров элементам, позиционирование внутри контейнера


// function createItemTemplate(src) {
//     let itemTemplate = document.createElement("img");
//     itemTemplate.style.width = 200 + "px";
//     itemTemplate.style.height = 200 + "px";
//     itemTemplate.classList.add('item');
//     itemTemplate.src = src;
//     if (document.documentElement.clientWidth <= 768) {
//         itemTemplate.style.width = 90 + "px";
//         itemTemplate.style.height = 90 + "px";
//     }
//     return itemTemplate;
// }


// function appendItem(arr, container) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         container.append(createItemTemplate(element));
//     };
// }

// appendItem(a.plants, panel1);
// appendItem(a.crystals, panel2);

// let items = document.querySelectorAll(".item");

// function getOffsetParams () {
//     items.forEach(function(el){
//       var posY = el.offsetTop;
//       var posX = el.offsetLeft;
//       el.style.top = posY + "px";
//       el.style.left = posX + "px";
//     })
//     for (var i = 0; i < items.length; i++) {
//     items[i].style.position = "absolute";
//   }
//   }

//   window.addEventListener('load',getOffsetParams,false);


// //   переключение контейнеров с элементами



// for (let i = 0; i < buttons.length; i++) {
//     const element = buttons[i];
//     element.addEventListener('click',switchTab,false);
//     element.addEventListener('touchend',switchTab,false);
// }

// function switchTab(evt) {
//     evt.preventDefault();
//     let b = evt.target.nextElementSibling;
//     for (let i = 0; i < panels.length; i++) {
//         const element = panels[i];
//         element.classList.remove("active");
//     }
//     b.classList.add("active");
//     for (let i = 0; i < buttons.length; i++) {
//         const element = buttons[i];
//         element.classList.remove("b-active");
//     }
//     evt.target.classList.add("b-active");
// }



// // drag'n'drop

// for (var i = 0; i < items.length; i++) {
//     const item = items[i];
//     item.addEventListener('mousedown',mouseDown,false);
//     item.addEventListener('mouseup',mouseUp,false);
// }

// var clickX = 0;
// var clickY = 0;
// var currentIndex = 5;
// var targetImg = null;
// var newTargetImg = null;
// var panelWrap = document.querySelector(".left-panel-wrap");
// var panelContainer = document.querySelector(".left-panel-1");

// var someArray = [];

// function mouseDown(evt) {
//   evt.preventDefault();
//   targetImg = evt.target;
//   clickX = evt.clientX - evt.target.offsetLeft;
//   clickY = evt.clientY - evt.target.offsetTop;
//   currentIndex++;
//   targetImg.style.zIndex = currentIndex;
//   targetImg.style.cursor = "grab";
// //   newTargetImg = targetImg.cloneNode();
//   panelWrap.insertBefore(targetImg, panelContainer);
//   window.addEventListener('mousemove',mouseMove,false);

// }


// function mouseMove(evt) {
//   evt.preventDefault();
//   targetImg.style.left = (evt.pageX - clickX) + "px";
//   targetImg.style.top = (evt.pageY - clickY) + "px";
//   targetImg.style.cursor = "grabbing"; 


// }


// function mouseUp(evt) {
//   evt.preventDefault();
//   targetImg.style.visibility = "hidden";
//   let elemBelow = document.elementFromPoint(evt.clientX, evt.clientY);
//   console.log(elemBelow);
//   targetImg.style.visibility = "visible";
// //   if (elemBelow !== workArea) {
// //     targetImg.style.zIndex = "auto";
// //     // targetImg.style.left = targetImg.offsetLeft;
// //     // targetImg.style.top = targetImg.offsetTop;
// //   }
//   window.removeEventListener("mousemove", mouseMove, false);
// }


// без клонирования

// new tabs

var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2
      
      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
   });
});