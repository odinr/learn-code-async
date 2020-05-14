(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/examples/_common.ts":
/*!*********************************!*\
  !*** ./src/examples/_common.ts ***!
  \*********************************/
/*! exports provided: randomInt, chance, workDuration, work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomInt\", function() { return randomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chance\", function() { return chance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workDuration\", function() { return workDuration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"work\", function() { return work; });\nconst randomInt = (min, max) => {\n    return Math.floor(Math.random() * max - min) + min;\n};\nconst chance = (c) => randomInt(0, 100) < c;\nconst workDuration = () => randomInt(100, 500);\nconst work = (duration, chance = 100) => {\n    return new Promise((resolve, reject) => setTimeout(() => {\n        randomInt(0, 100) < chance ? resolve() : reject();\n    }, duration));\n};\n\n\n//# sourceURL=webpack:///./src/examples/_common.ts?");

/***/ }),

/***/ "./src/examples/dish-async.ts":
/*!************************************!*\
  !*** ./src/examples/dish-async.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common */ \"./src/examples/_common.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst chanceOfStock = 80;\nconst work = (duration, chance = 100) => {\n    return new Promise((resolve, reject) => setTimeout(() => {\n        Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"randomInt\"])(0, 100) < chance ? resolve() : reject();\n    }, duration));\n};\nconst fetch = (ingredient) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield work(Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])(), chanceOfStock);\n        console.log(`Fetched: ${ingredient}`);\n        return ingredient;\n    }\n    catch (error) {\n        console.error(`Out of stock: ${ingredient}`);\n        throw Error(\"urk\");\n    }\n});\nconst apply = (dish, ingredient) => __awaiter(void 0, void 0, void 0, function* () {\n    yield work(Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])());\n    const ingredients = [...dish.ingredients, ingredient];\n    console.log(`Applied: ${ingredient}`);\n    return Object.assign(Object.assign({}, dish), { ingredients });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __awaiter(void 0, void 0, void 0, function* () {\n    let hamburger = {\n        name: \"🍔 Hamburger\",\n        ingredients: new Array()\n    };\n    try {\n        hamburger = yield apply(hamburger, yield fetch('🍞Bun'));\n        hamburger = yield apply(hamburger, yield fetch('🥩Patty'));\n        hamburger = yield apply(hamburger, yield fetch('🧀Chesse'));\n        hamburger = yield apply(hamburger, yield fetch('🥓Bacon'));\n        hamburger = yield apply(hamburger, yield fetch('🍞Bun'));\n        return hamburger;\n    }\n    catch (error) {\n        throw \"💩 Made a turd\";\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/examples/dish-async.ts?");

/***/ })

}]);