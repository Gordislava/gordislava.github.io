var button = document.querySelector('.button')
var space = " ";

button.addEventListener('click', function (evt) {
  var text = prompt('Введите текст');
  sort(splittingText(text, (space)));
})

var splittingText = function (textToSplit, separator) {
    var arrayOfStrings = textToSplit.split(separator);
   return arrayOfStrings;
}

var sort = function(array) {
    for (var j = 0; j < array.length; j++) {
        for (var i = array.length - 1; i > j; i--) {
          if (array[i].length > array[i - 1].length) {
            var temp = array[i];
            array[i] = array[i - 1];
            array[i - 1] = temp;
          }
        }
    }    
    alert(array.slice(0, 3));
}
