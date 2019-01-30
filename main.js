module.exports = exports = function(time, values) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(values);
    }, time);
  });
};
var delay = exports;
for (var i=0; i<=9; i++) {  
  var plus2 = i + 2;
  delay(2000, {index: i, plus2: plus2}).then(function(values) {
    console.log(values); // do something with values after 2 seconds.
  });
}