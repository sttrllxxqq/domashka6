function sortArray(array) {
  array.sort(function(a, b) {
    return a - b;
  });
}

function deleteElements(array) {
  array.splice(1, 4);
}

function printArray(array) {
  document.getElementById("output").innerHTML = array.join(", ");
}

var length = parseInt(prompt("Введіть довжину масиву:"));

var array = [];

for (var i = 0; i < length; i++) {
  var element = parseInt(prompt("Введіть елемент масиву:"));
  array.push(element);
}

sortArray(array);
deleteElements(array);

printArray(array);

<p id="output"></p>
