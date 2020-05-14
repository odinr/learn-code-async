(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/examples/_common.ts":
/*!*********************************!*\
  !*** ./src/examples/_common.ts ***!
  \*********************************/
/*! exports provided: randomInt, chance, workDuration, work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomInt\", function() { return randomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chance\", function() { return chance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workDuration\", function() { return workDuration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"work\", function() { return work; });\nconst randomInt = (min, max) => {\n    return Math.floor(Math.random() * max - min) + min;\n};\nconst chance = (c) => randomInt(0, 100) < c;\nconst workDuration = () => randomInt(100, 500);\nconst work = (duration, chance = 100) => {\n    return new Promise((resolve, reject) => setTimeout(() => {\n        randomInt(0, 100) < chance ? resolve() : reject();\n    }, duration));\n};\n\n\n//# sourceURL=webpack:///./src/examples/_common.ts?");

/***/ }),

/***/ "./src/examples/dish-promise.ts":
/*!**************************************!*\
  !*** ./src/examples/dish-promise.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common */ \"./src/examples/_common.ts\");\n\nconst chanceOfStock = 80;\nconst work = (duration, chance = 100) => {\n    return new Promise((resolve, reject) => setTimeout(() => {\n        Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"randomInt\"])(0, 100) < chance ? resolve() : reject();\n    }, duration));\n};\nconst fetch = (ingredient) => {\n    return work(Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])(), chanceOfStock).then(() => {\n        console.log(`Fetched: ${ingredient}`);\n        return ingredient;\n    }).catch(() => {\n        console.error(`Out of stock: ${ingredient}`);\n        throw Error(\"urk\");\n    });\n};\nconst apply = (dish, ingredient) => {\n    return work(Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])()).then(() => {\n        const ingredients = [...dish.ingredients, ingredient];\n        console.log(`Applied: ${ingredient}`);\n        return Object.assign(Object.assign({}, dish), { ingredients });\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    const hamburger = {\n        name: \"🍔 Hamburger\",\n        ingredients: new Array()\n    };\n    return new Promise((resolve, reject) => {\n        fetch('🍞Bun')\n            .then(ingredient => apply(hamburger, ingredient)\n            .then(hamburger => fetch('🥩Patty')\n            .then(ingredient => apply(hamburger, ingredient)\n            .then(hamburger => fetch('🧀Chesse')\n            .then(ingredient => apply(hamburger, ingredient)\n            .then(hamburger => fetch('🥓Bacon')\n            .then(ingredient => apply(hamburger, ingredient)\n            .then(hamburger => fetch('🍞Bun')\n            .then(ingredient => apply(hamburger, ingredient)\n            .then(resolve)))))))))).catch(() => reject(\"💩 Made a turd\"));\n    });\n});\n\n\n//# sourceURL=webpack:///./src/examples/dish-promise.ts?");

/***/ })

}]);