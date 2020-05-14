(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/examples/basic.ts":
/*!*******************************!*\
  !*** ./src/examples/basic.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fetch = (ingredient) => {\n    console.log(`Fetched: ${ingredient}`);\n    return ingredient;\n};\nconst apply = (dish, ingredient) => {\n    dish.ingredients.push(ingredient);\n    console.log(`Applied: ${ingredient}`);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    const hamburger = {\n        name: \"🍔 Hamburger\",\n        ingredients: new Array()\n    };\n    apply(hamburger, fetch('🍞Bun'));\n    apply(hamburger, fetch('🥩Patty'));\n    apply(hamburger, fetch('🧀Chesse'));\n    apply(hamburger, fetch('🥓Bacon'));\n    apply(hamburger, fetch('🍞Bun'));\n    return hamburger;\n});\n\n\n//# sourceURL=webpack:///./src/examples/basic.ts?");

/***/ })

}]);