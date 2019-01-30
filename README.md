# node-delay-values
Delay and get values in callback. Very useful in loops.

**Usage:**

```
var delay = require("node-delay-values");
delay(time, values).then(function(values) {
  // do something with values
});
```

- time: in milliseconds.
- values: anything

**Example 1:**

```
var delay = require("node-delay-values");
delay(2000, {product: "XYZ"}).then(function(values) {
  console.log(values); // do something with values after 2 seconds.
});
```

**Example 2 (loop):**

```
var delay = require("node-delay-values");
for (var i=0; i<=9; i++) {  
  var plus2 = i + 2;
  delay(2000, {index: i, plus2: plus2}).then(function(values) {
    console.log(values); // do something with values after 2 seconds.
  });
}
```

- Its better than `setTimeout` because index or any other values that you pass will remain intact even in for-loop after waiting.

**Example 3 (loop: progressive delay):**

```
var delay = require("node-delay-values");
for (var i=0; i<=9; i++) {  
  var plus2 = i + 2;
  delay(2000 * i, {index: i, plus2: plus2}).then(function(values) {
    console.log(values); // do something with values every 2 seconds.
  });
}
```

Will output:

```
{ index: 0, plus2: 2 }

{ index: 1, plus2: 3 }

{ index: 2, plus2: 4 }

{ index: 3, plus2: 5 }

{ index: 4, plus2: 6 }

{ index: 5, plus2: 7 }

{ index: 6, plus2: 8 }

{ index: 7, plus2: 9 }

{ index: 8, plus2: 10 }

{ index: 9, plus2: 11 }
```