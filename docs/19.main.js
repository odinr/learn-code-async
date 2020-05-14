(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/examples/tick.ts":
/*!******************************!*\
  !*** ./src/examples/tick.ts ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\n    constructor() {\n        this._cycle = 0;\n        this._state = \"foo\";\n    }\n    get state() { return this._state; }\n    set state(value) {\n        if (value === this._state)\n            return;\n        setTimeout(() => {\n            this._state = value;\n            this.render();\n        }, 0);\n    }\n    render() {\n        const cycle = ++this._cycle;\n        this.log(cycle);\n        this.state = \"bar\";\n        this.log(cycle);\n        setTimeout(() => this.log(cycle), 0);\n    }\n    log(cycle) {\n        console.log(this.state, `Itteration ${cycle}`);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/examples/tick.ts?");

/***/ })

}]);