(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./src/pages/callbacks/callback_2.ts":
/*!*******************************************!*\
  !*** ./src/pages/callbacks/callback_2.ts ***!
  \*******************************************/
/*! exports provided: render, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ \"./src/components/index.ts\");\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nlet CodePageCallback2 = class CodePageCallback2 extends _components__WEBPACK_IMPORTED_MODULE_0__[\"PageElement\"] {\n    getHighlight() {\n        switch (this.step) {\n            case 1: return Array([1, 1], [6, 6], [13, 13]);\n            case 2: return Array([22, 43]);\n        }\n    }\n    renderMain() {\n        if (this.step === this.steps) {\n            requestAnimationFrame(() => this.CodeRunner.run());\n        }\n        // const highlight = Array((this.getHighlight() || []) as [number, number]);\n        return lit_element__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `\n            <mdc-grid-cell span=\"12\">\n            <cwc-code-highlight src=\"/examples/dish-callback-2.ts\" .highlight=\"${this.getHighlight()}\"></cwc-code-highlight>\n            <cwc-code-runner .execute=\"${this.runCode.bind(this)}\"></cwc-code-runner>\n            </mdc-grid-cell>\n        `;\n    }\n    runCode() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const code = yield __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ../../examples/dish-callback-2 */ \"./src/examples/dish-callback-2.ts\"));\n            const result = yield new Promise(resolve => code.default(resolve));\n            const content = result.ingredients.map(i => lit_element__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `<span>${i} </span>`);\n            return lit_element__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `<h2>${result.name}</h2>${content}`;\n        });\n    }\n};\n__decorate([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__[\"query\"])('cwc-code-runner')\n], CodePageCallback2.prototype, \"CodeRunner\", void 0);\nCodePageCallback2 = __decorate([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__[\"customElement\"])('cwc-learn-page-code-callback-2')\n], CodePageCallback2);\nconst render = lit_element__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `<cwc-learn-page-code-callback-2 header=\"TICK\" steps=\"3\"></cwc-learn-page-code-callback-2>`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n\n//# sourceURL=webpack:///./src/pages/callbacks/callback_2.ts?");

/***/ })

}]);