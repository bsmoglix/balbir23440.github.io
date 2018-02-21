webpackJsonp(["lazy.module"],{

/***/ "../../../../../src/app/lazy-child/lazy-child.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-child/lazy-child.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  lazy-child works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/lazy-child/lazy-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyChildComponent = /** @class */ (function () {
    function LazyChildComponent() {
    }
    LazyChildComponent.prototype.ngOnInit = function () {
    };
    LazyChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lazy-child',
            template: __webpack_require__("../../../../../src/app/lazy-child/lazy-child.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-child/lazy-child.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LazyChildComponent);
    return LazyChildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lazy-parent/lazy-parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-parent/lazy-parent.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let name of ['Foo', 'Bar', 'Baz']\">\n  <p>Hi, my name is {{name}}. I'm a lazy child component.</p>\n\n  <lazy-child></lazy-child>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/lazy-parent/lazy-parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyParentComponent = /** @class */ (function () {
    function LazyParentComponent() {
    }
    LazyParentComponent.prototype.ngOnInit = function () {
    };
    LazyParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lazy-parent',
            template: __webpack_require__("../../../../../src/app/lazy-parent/lazy-parent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-parent/lazy-parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LazyParentComponent);
    return LazyParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lazy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazy_parent_lazy_parent_component__ = __webpack_require__("../../../../../src/app/lazy-parent/lazy-parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_child_lazy_child_component__ = __webpack_require__("../../../../../src/app/lazy-child/lazy-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'load-me', component: __WEBPACK_IMPORTED_MODULE_2__lazy_parent_lazy_parent_component__["a" /* LazyParentComponent */] }
];
var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    LazyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lazy_parent_lazy_parent_component__["a" /* LazyParentComponent */],
                __WEBPACK_IMPORTED_MODULE_3__lazy_child_lazy_child_component__["a" /* LazyChildComponent */]
            ]
        })
    ], LazyModule);
    return LazyModule;
}());



/***/ })

});
//# sourceMappingURL=lazy.module.chunk.js.map