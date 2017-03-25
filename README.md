# imports bug repro

`npm import` then run with:

`npm run unit-test`

which outputs 

```
/Users/robertdickert/src/okgrow/repros/babel-preset-meteor-imports/tests/unit-tests/repro.tests.js:3
var expect = void 0;module.import("chai", { "expect": function (v) {
                                 ^

TypeError: module.import is not a function
```


Go to the previous commit, `npm install`, and it works. 
