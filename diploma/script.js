"use strict";


let panels = document.querySelectorAll(".panel-container");
let panel1 = document.querySelector(".panel-container-1");
let panel2 = document.querySelector(".panel-container-2");

let buttons = document.querySelectorAll(".panel-button");
let workArea = document.querySelector(".work-panel");


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

let b = {
  a: ["a"," b", "c"],
  b: ["a", "a", "v"]
}
let jsonFile = JSON.stringify(b);
// console.log(jsonFile);





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

let items;

// function testLoadData() {
//   $.ajax("json.json",
//       { type:'GET', dataType:'json', success:dataLoaded, error:errorHandler }
//   );
// }

// function dataLoaded(data) {
//   appendItem(data.plants, panel1);
//   appendItem(data.crystals, panel2);
//   items = document.querySelectorAll(".item");
//   getOffsetParams();
//   for (var i = 0; i < items.length; i++) {
//     const item = items[i];
//     item.addEventListener('pointerdown',mouseDown,false);
//     // item.addEventListener('pointerup',mouseUp,false);
//     // item.addEventListener('toushstart',mouseDown,false);
//     // item.addEventListener('touchend',mouseUp,false);
// }

// }

appendItem(data.plants, panel1);
  appendItem(data.crystals, panel2);
  items = document.querySelectorAll(".item");
  getOffsetParams();
  for (var i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('pointerdown',mouseDown,false);
    // item.addEventListener('pointerup',mouseUp,false);
    // item.addEventListener('toushstart',mouseDown,false);
    // item.addEventListener('touchend',mouseUp,false);
}

// function errorHandler(jqXHR,statusStr,errorStr) {
//   alert(statusStr+' '+errorStr);
// }





function mainFunction () {
  
  
}





//   переключение контейнеров с элементами



for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click',switchTab,false);
    // element.addEventListener('touchend',switchTab,false);
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

  // window.addEventListener('load',getOffsetParams,false);




  var clickX = 0;
  var clickY = 0;
  var currentIndex = 5;
  var targetImg = null;
  var newTargetImg = null;
  var panelWrap = document.querySelector(".left-panel-wrap");

  var someArray = [];

  function mouseDown(evt) {
    evt.preventDefault();
    // targetImg = evt.target;
    newTargetImg = evt.target.cloneNode(true);

    newTargetImg.style.transform = "scale(1) translate(10px, 10px)";
    //someArray.push(newTargetImg);
    // panelWrap.appendChild(newTargetImg);
    workArea.appendChild(newTargetImg);
    currentIndex++;
    newTargetImg.style.zIndex = currentIndex;
    newTargetImg.addEventListener('pointerover',aaa,false);
    newTargetImg.addEventListener('pointerup',mouseUp,false);
    console.log("mousedown on target --> create new img, pick it on newTarget");
    newTargetImg.style.border = "1px solid red";
    newTargetImg.classList.add('aaa');

    // newTargetImg.addEventListener('touchstart',aaa,false);
    // newTargetImg.addEventListener('touchend',mouseUp,false);

  }




  function aaa(evt) {
      evt.preventDefault();
      // console.log(evt.target);
      targetImg = evt.target;
      clickX = (evt.clientX - evt.target.offsetLeft);
      clickY = (evt.clientY - evt.target.offsetTop);
      currentIndex++;
      targetImg.style.zIndex = currentIndex;
      // targetImg.style.transform = "translate(10px, 10px)";

      targetImg.style.cursor = "grab";

      // targetImg.classList.add("edit");
      window.addEventListener('pointermove',mouseMove,false);
      // window.addEventListener('touchmove',mouseMove,false);
      console.log("mousover on newtarget");    

  }

  function mouseMove(evt) {
    evt.preventDefault();

    targetImg.style.left = (evt.pageX - clickX) + "px";
    targetImg.style.top = (evt.pageY - clickY) + "px";
    targetImg.style.cursor = "grabbing"; 
    targetImg.style.visibility = "hidden";
    let elemBelow = document.elementFromPoint(evt.clientX, evt.clientY);
    targetImg.style.visibility = "visible";
    console.log("mousmove on target");


  }


  function mouseUp(evt) {
    evt.preventDefault();
    window.removeEventListener("pointermove", mouseMove, false);
    // window.removeEventListener("touchmove", mouseMove, false);

    targetImg.style.visibility = "hidden";
    let elemBelow = document.elementFromPoint(evt.clientX, evt.clientY);
    targetImg.style.visibility = "visible";

    // newTargetImg.classList.add('active');
    if (elemBelow == workArea || elemBelow.classList.contains("aaa")) {
      targetImg.removeEventListener('pointerover',aaa,false);
      targetImg.addEventListener('pointerdown',aaa,false);
      // targetImg.removeEventListener('touchmove',aaa,false);
      // targetImg.addEventListener('touchstart',aaa,false);
      console.log("mouseup on target");
 
      // console.log(elemBelow.className + " save img");

    } else {
      targetImg.removeEventListener('pointerover',aaa,false);
      targetImg.remove();
      // console.log(elemBelow);
      // console.log("delete target");

    }
    var b = document.querySelectorAll(".aaa");
    for (let i = 0; i < b.length; i++) {
      const element = b[i];
      element.classList.remove("active-img");
      targetImg.classList.add("active-img");

    }

  }

  // масштабирование

  function setScale () {
    var scaleValue = document.querySelector(".active-img").style.transform.split('(')[1];
    console.log(scaleValue);
    scaleValue = scaleValue.split(')')[0];

    var newScaleValue = Number(scaleValue); 

    return newScaleValue;
    // return document.querySelector(".active-img").style.transform = "scale(" + newScaleValue + ")";

  }

  function growScale() {
    var c = setScale();
    var n = 0.1;
    var f = c + n
    return document.querySelector(".active-img").style.transform = "scale(" + f + ") translate(10px, 10px)";
  }

  function shrinkScale() {
    var c = setScale();
    var n = 0.1;
    var f = c - n
    return document.querySelector(".active-img").style.transform = "scale(" + f + ")";
  }

  var growButton = document.querySelector("#growButton");
  var shrinkButton = document.querySelector("#shrinkButton");

  growButton.addEventListener("click", growScale);
  shrinkButton.addEventListener("click", shrinkScale);


  // удаление 

  var delButton = document.querySelector("#delButton");

  function deleteResult() {
    var b = document.querySelectorAll(".aaa");
    for (let i = 0; i < b.length; i++) {
      const element = b[i];
      element.remove();
    }

  }

  delButton.addEventListener("click", deleteResult);