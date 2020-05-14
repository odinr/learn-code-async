(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/examples/promise-race.ts":
/*!**************************************!*\
  !*** ./src/examples/promise-race.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst random = (max, min = 0) => Math.floor(Math.random() * max - min) + min;\nconst chance = (c) => random(100) < c;\nconst promise1 = () => new Promise((resolve, reject) => {\n    setTimeout(() => {\n        chance(75) ? resolve('Promise1 resolved') : reject('Promise1 rejected');\n    }, random(1000));\n});\nconst promise2 = () => new Promise((resolve, reject) => {\n    setTimeout(() => {\n        chance(75) ? resolve('Promise2 resolved') : reject('Promise2 rejected');\n    }, random(1000));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => Promise.race([promise1(), promise2()])\n    .then(data => {\n    console.log(data);\n    return \"👍🏻 promise resolved\";\n})\n    .catch(error => {\n    console.error(error);\n    return \"🤬 failed to deliver promise\";\n}));\n\n\n//# sourceURL=webpack:///./src/examples/promise-race.ts?");

/***/ })

}]);