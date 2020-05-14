(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/examples/_common.ts":
/*!*********************************!*\
  !*** ./src/examples/_common.ts ***!
  \*********************************/
/*! exports provided: randomInt, chance, workDuration, work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomInt\", function() { return randomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chance\", function() { return chance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workDuration\", function() { return workDuration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"work\", function() { return work; });\nconst randomInt = (min, max) => {\n    return Math.floor(Math.random() * max - min) + min;\n};\nconst chance = (c) => randomInt(0, 100) < c;\nconst workDuration = () => randomInt(100, 500);\nconst work = (duration, chance = 100) => {\n    return new Promise((resolve, reject) => setTimeout(() => {\n        randomInt(0, 100) < chance ? resolve() : reject();\n    }, duration));\n};\n\n\n//# sourceURL=webpack:///./src/examples/_common.ts?");

/***/ }),

/***/ "./src/examples/stream.ts":
/*!********************************!*\
  !*** ./src/examples/stream.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/operators/index.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_common */ \"./src/examples/_common.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst ingredients = ['🍞 Bun', '🥩 Patty', '🧀 Chesse', '🥓 Bacon', '🍞 Bun'];\nconst fetch = (ingredient) => __awaiter(void 0, void 0, void 0, function* () {\n    yield Object(_common__WEBPACK_IMPORTED_MODULE_2__[\"work\"])(Object(_common__WEBPACK_IMPORTED_MODULE_2__[\"workDuration\"])());\n    return ingredient;\n});\nconst apply = (ingredient) => __awaiter(void 0, void 0, void 0, function* () {\n    yield Object(_common__WEBPACK_IMPORTED_MODULE_2__[\"work\"])(Object(_common__WEBPACK_IMPORTED_MODULE_2__[\"workDuration\"])());\n    return ingredient;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __awaiter(void 0, void 0, void 0, function* () {\n    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"from\"])(ingredients).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"concatMap\"])(ingredient => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[\"from\"])(fetch(ingredient)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"tap\"])(ingredient => console.log(`Fetched: ${ingredient}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"concatMap\"])(apply), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"tap\"])(ingredient => console.log(`Applied: ${ingredient}`)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"reduce\"])((hamburger, ingredient) => {\n        const ingredients = [...hamburger.ingredients, ingredient];\n        return Object.assign(Object.assign({}, hamburger), { ingredients });\n    }, {\n        name: \"🍔 Hamburger\",\n        ingredients: []\n    }));\n}));\n\n\n//# sourceURL=webpack:///./src/examples/stream.ts?");

/***/ })

}]);