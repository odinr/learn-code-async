(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/examples/_common.ts":
/*!*********************************!*\
  !*** ./src/examples/_common.ts ***!
  \*********************************/
/*! exports provided: randomInt, chance, workDuration, work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomInt\", function() { return randomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chance\", function() { return chance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workDuration\", function() { return workDuration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"work\", function() { return work; });\nconst randomInt = (min, max) => {\n    return Math.floor(Math.random() * max - min) + min;\n};\nconst chance = (c) => randomInt(0, 100) < c;\nconst workDuration = () => randomInt(100, 500);\nconst work = (duration, chance = 100) => {\n    return new Promise((resolve, reject) => setTimeout(() => {\n        randomInt(0, 100) < chance ? resolve() : reject();\n    }, duration));\n};\n\n\n//# sourceURL=webpack:///./src/examples/_common.ts?");

/***/ }),

/***/ "./src/examples/dish-callback-2.ts":
/*!*****************************************!*\
  !*** ./src/examples/dish-callback-2.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common */ \"./src/examples/_common.ts\");\n\nconst fetch = (ingredient, cb) => {\n    setTimeout(() => {\n        console.log(`Fetched: ${ingredient}`);\n        cb(ingredient);\n    }, Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])());\n};\nconst apply = (dish, ingredient, cb) => {\n    setTimeout(() => {\n        console.log(`Applied: ${ingredient}`);\n        cb(Object.assign(Object.assign({}, dish), { ingredients: [...dish.ingredients, ingredient] }));\n    }, Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])());\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((done) => {\n    const hamburger = {\n        name: \"🍔 Hamburger\",\n        ingredients: new Array()\n    };\n    fetch('🍞Bun', (ingredient) => {\n        apply(hamburger, ingredient, (hamburger) => {\n            fetch('🥩Patty', (ingredient) => {\n                apply(hamburger, ingredient, (hamburger) => {\n                    fetch('🧀Chesse', (ingredient) => {\n                        apply(hamburger, ingredient, (hamburger) => {\n                            fetch('🥓Bacon', (ingredient) => {\n                                apply(hamburger, ingredient, (hamburger) => {\n                                    fetch('🍞Bun', (ingredient) => {\n                                        apply(hamburger, ingredient, (hamburger) => {\n                                            done(hamburger);\n                                        });\n                                    });\n                                });\n                            });\n                        });\n                    });\n                });\n            });\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./src/examples/dish-callback-2.ts?");

/***/ })

}]);