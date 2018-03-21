webpackJsonp([5],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor__ = __webpack_require__(363);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return __WEBPACK_IMPORTED_MODULE_0__editor__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_base_component_react_wrapper__ = __webpack_require__(364);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



var Editor = (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Editor.prototype.componentDidMount = function () {
        var domNode = __WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"](this);
        var _a = this.props, children = _a.children, widgetRef = _a.widgetRef, props = __rest(_a, ["children", "widgetRef"]);
        this.widgetInstance = new kendo.ui.Editor(domNode, props);
        _super.prototype.componentDidMount.call(this);
    };
    Editor.prototype.componentWillReceiveProps = function (nextProps) {
        var children = nextProps.children, widgetRef = nextProps.widgetRef, props = __rest(nextProps, ["children", "widgetRef"]);
        this.widgetInstance.setOptions(props);
        this.widgetInstance.value(props.value);
    };
    Editor.prototype.render = function () {
        return (this.props.children || __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", null));
    };
    return Editor;
}(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_base_component_react_wrapper__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Editor);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/// <reference types="@progress/kendo-ui" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var KendoBaseComponent = (function (_super) {
    __extends(KendoBaseComponent, _super);
    function KendoBaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KendoBaseComponent.prototype.componentDidMount = function () {
        this.exposeWidget();
        this.overrideDestroy();
    };
    KendoBaseComponent.prototype.componentWillUnmount = function () {
        if (!this.destroyed) {
            this.widgetDestroy.call(this.widgetInstance);
        }
        this.exposeWidget();
    };
    KendoBaseComponent.prototype.exposeWidget = function () {
        if (this.props.widgetRef && typeof this.props.widgetRef === 'function') {
            this.props.widgetRef(this.widgetInstance);
        }
    };
    KendoBaseComponent.prototype.overrideDestroy = function () {
        var _this = this;
        this.widgetDestroy = this.widgetInstance.destroy;
        this.widgetInstance.destroy = function () {
            _this.destroyed = !_this.destroyed;
            _this.widgetDestroy.call(_this.widgetInstance);
        };
    };
    return KendoBaseComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (KendoBaseComponent);
//# sourceMappingURL=index.js.map

/***/ })

});