var words = ["ground", "control", "to", "major", "tom"];

function myMap(list, callback) {
  var lengthWords = []
  list.forEach(function(item) {
    var transformedItem = callback(item);
    lengthWords.push(transformedItem);
  });
  return lengthWords;
}

var conversion = myMap(words, function(item) {
  return item.length;
});
console.log(conversion);