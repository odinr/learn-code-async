(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/examples/promise-all.ts":
/*!*************************************!*\
  !*** ./src/examples/promise-all.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst random = (max, min = 0) => Math.floor(Math.random() * max - min) + min;\nconst chance = (c) => random(100) < c;\nconst promise1 = () => new Promise((resolve, reject) => {\n    setTimeout(() => {\n        chance(75) ? resolve('Promise1 resolved') : reject('Promise1 rejected');\n    }, random(1000, 100));\n});\nconst promise2 = () => new Promise((resolve, reject) => {\n    setTimeout(() => {\n        chance(75) ? resolve('Promise2 resolved') : reject('Promise2 rejected');\n    }, random(1000, 100));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => Promise.all([promise1(), promise2()])\n    .then(data => {\n    console.log(data[0]);\n    console.log(data[1]);\n    return \"👍🏻 all promises resolved\";\n})\n    .catch(error => {\n    console.error(error);\n    return \"🤬 failed to resolve all promises\";\n}));\n\n\n//# sourceURL=webpack:///./src/examples/promise-all.ts?");

/***/ })

}]);