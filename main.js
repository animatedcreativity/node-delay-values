module.exports = exports = function(time, values) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(values);
    }, time);
  });
};