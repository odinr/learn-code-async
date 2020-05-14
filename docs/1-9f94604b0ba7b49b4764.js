(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/pages/intro/the_tick.jpg":
/*!**************************************!*\
  !*** ./src/pages/intro/the_tick.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0ae11f6b46e25bab2577ed164bf5be99.jpg\");\n\n//# sourceURL=webpack:///./src/pages/intro/the_tick.jpg?");

/***/ }),

/***/ "./src/pages/intro/tick.scss":
/*!***********************************!*\
  !*** ./src/pages/intro/tick.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (lit_element__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`@charset \"UTF-8\";img{max-height:150px}ul{list-style:none;margin:0;padding:0}ul li{margin:.5rem 0;padding:1rem;font-size:1rem;border-left:1rem solid transparent;line-height:normal}ul li.active{border-left:1rem solid rgba(0,100,255,.5);background-color:rgba(0,100,255,.1)}ul li:not(.active){color:var(--color,rgba(0,0,0,.75))}ul li .title{font-weight:700;display:block;margin-bottom:.5rem}ul li code{background:rgba(0,0,0,.1);line-height:1;font-family:\"Fira code\"}`);\n    \n\n//# sourceURL=webpack:///./src/pages/intro/tick.scss?");

/***/ }),

/***/ "./src/pages/intro/tick.ts":
/*!*********************************!*\
  !*** ./src/pages/intro/tick.ts ***!
  \*********************************/
/*! exports provided: render, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony import */ var _the_tick_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./the_tick.jpg */ \"./src/pages/intro/the_tick.jpg\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"./src/components/index.ts\");\n/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/repeat */ \"./node_modules/lit-html/directives/repeat.js\");\n/* harmony import */ var _tick_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tick.scss */ \"./src/pages/intro/tick.scss\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\n\nconst gg = [\n    {\n        title: 'Timers',\n        secondary: lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `this phase executes callbacks scheduled by <code>setTimeout()</code> and <code>setInterval()</code>`\n    },\n    {\n        title: 'Pending callbacks',\n        secondary: lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `executes I/O callbacks deferred to the next loop iteration`\n    },\n    {\n        title: 'Idle & Prepare',\n        secondary: lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `only used internally`\n    },\n    {\n        title: 'Poll',\n        secondary: lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `retrieve new I/O events<br/> execute I/O related callbacks <i>except of close callbacks, timers and setImmediate</i><br/> Node will block here when appropriate`\n    },\n    {\n        title: 'Check',\n        secondary: lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `<code>setImmediate()</code> callbacks are invoked here</code>`\n    },\n    {\n        title: 'Close callbacks',\n        secondary: lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `some close callbacks, e.g. <code>socket.on('close', ...)</code>`\n    },\n];\nlet CodePageTick = class CodePageTick extends _components__WEBPACK_IMPORTED_MODULE_2__[\"PageElement\"] {\n    renderMain() {\n        return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `\n            <mdc-grid-cell>\n                <ul>\n                    ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_3__[\"repeat\"])(gg, item => item.title, this.renderItem.bind(this))}\n                </ul>\n            </mdc-grid-cell>\n        `;\n    }\n    renderItem(item, index) {\n        const className = index + 2 === this.step ? \"active\" : \"\";\n        return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `\n            <li class=\"${className}\">\n                <span class=\"title\">${item.title}</span>\n                <span class=\"secondary\">${item.secondary}</span>\n            </li>\n        `;\n    }\n    ;\n};\nCodePageTick.styles = _components__WEBPACK_IMPORTED_MODULE_2__[\"PageElement\"].styles.concat(_tick_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nCodePageTick = __decorate([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"customElement\"])('cwc-learn-page-code-tick')\n], CodePageTick);\nconst render = lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `\n    <cwc-learn-page-code-tick header=\"Tick\" steps=\"${gg.length + 1}\">\n        <img slot=\"header\" src=\"${_the_tick_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" height=\"150px\"/>\n    </cwc-learn-page-code-tick>\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n\n//# sourceURL=webpack:///./src/pages/intro/tick.ts?");

/***/ })

}]);