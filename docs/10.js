(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/examples/_common.ts":
/*!*********************************!*\
  !*** ./src/examples/_common.ts ***!
  \*********************************/
/*! exports provided: randomInt, chance, workDuration, work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomInt\", function() { return randomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chance\", function() { return chance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workDuration\", function() { return workDuration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"work\", function() { return work; });\nconst randomInt = (min, max) => {\n    return Math.floor(Math.random() * max - min) + min;\n};\nconst chance = (c) => randomInt(0, 100) < c;\nconst workDuration = () => randomInt(100, 500);\nconst work = (duration, chance = 100) => {\n    return new Promise((resolve, reject) => setTimeout(() => {\n        randomInt(0, 100) < chance ? resolve() : reject();\n    }, duration));\n};\n\n\n//# sourceURL=webpack:///./src/examples/_common.ts?");

/***/ }),

/***/ "./src/examples/dish-async-refactor.ts":
/*!*********************************************!*\
  !*** ./src/examples/dish-async-refactor.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_common */ \"./src/examples/_common.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __await = (undefined && undefined.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }\nvar __asyncGenerator = (undefined && undefined.__asyncGenerator) || function (thisArg, _arguments, generator) {\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\n    function fulfill(value) { resume(\"next\", value); }\n    function reject(value) { resume(\"throw\", value); }\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\n};\nvar __asyncValues = (undefined && undefined.__asyncValues) || function (o) {\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\n    var m = o[Symbol.asyncIterator], i;\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\n};\n\nconst chanceOfStock = 90;\nconst fetch = (ingredient) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"work\"])(Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])(), chanceOfStock);\n        console.log(`Fetched: ${ingredient}`);\n        return ingredient;\n    }\n    catch (error) {\n        console.error(`Out of stock: ${ingredient}`);\n        throw Error(\"urk\");\n    }\n});\nconst apply = (ingredient) => __awaiter(void 0, void 0, void 0, function* () {\n    yield Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"work\"])(Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"workDuration\"])());\n    console.log(`Applied: ${ingredient}`);\n    return ingredient;\n});\nfunction make(ingredients) {\n    return __asyncGenerator(this, arguments, function* make_1() {\n        for (const ingredient of ingredients) {\n            const fetched = yield __await(fetch(ingredient));\n            const applied = yield __await(apply(fetched));\n            yield yield __await(applied);\n        }\n    });\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __awaiter(void 0, void 0, void 0, function* () {\n    var e_1, _a;\n    const ingredients = ['🍞 Bun', '🥩 Patty', '🧀 Chesse', '🥓 Bacon', '🍞 Bun'];\n    const dish = {\n        name: \"🍔 Hamburger\",\n        ingredients: new Array()\n    };\n    try {\n        try {\n            for (var _b = __asyncValues(make(ingredients)), _c; _c = yield _b.next(), !_c.done;) {\n                const ingredient = _c.value;\n                dish.ingredients.push(ingredient);\n            }\n        }\n        catch (e_1_1) { e_1 = { error: e_1_1 }; }\n        finally {\n            try {\n                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);\n            }\n            finally { if (e_1) throw e_1.error; }\n        }\n        return dish;\n    }\n    catch (error) {\n        throw \"💩 Made a turd\";\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/examples/dish-async-refactor.ts?");

/***/ })

}]);