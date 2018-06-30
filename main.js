(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title > h1 {\r\n  font-size: 25px;\r\n  font-family: Aileron-ThinItalic;\r\n  background: -webkit-linear-gradient(#277b43, #41c36c);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  padding: 20px;\r\n  width: 150px;\r\n  margin: 20px;\r\n  border: 2px solid transparent;\r\n  -o-border-image: linear-gradient(to bottom, #277b43 0%, #41c36c 100%);\r\n     border-image: linear-gradient(to bottom, #277b43 0%, #41c36c 100%);\r\n  border-image-slice: 1;\r\n}\r\n\r\n.side-bar {\r\n  z-index: 100;\r\n  visibility: visible;\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 240px;\r\n  background: #fff;\r\n  box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n.wrapper {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n  background: url('/assets/img/dotSpaced.png') repeat;\r\n  background-color: #f0fff0;\r\n  background-repeat: round;\r\n  background-size: 40px;\r\n}\r\n\r\n.hamburger {\r\n  display: block;\r\n  float: right;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 60px;\r\n  height: 60px;\r\n  font-size: 0;\r\n  text-indent: -9999px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: none;\r\n  border: 0;\r\n}\r\n\r\n.hamburger span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 23px;\r\n  left: 20px;\r\n  right: 10px;\r\n  height: 6px;\r\n  background: #277b43;\r\n}\r\n\r\n.hamburger span::before,\r\n.hamburger span::after {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 6px;\r\n  background-color: #41c36c;\r\n  content: \"\";\r\n}\r\n\r\n.hamburger span::before {\r\n  top: -10px;\r\n}\r\n\r\n.hamburger span::after {\r\n  bottom: -10px;\r\n}\r\n\r\n.hamburger-container {\r\n  position: fixed;\r\n  z-index: 50;\r\n  left: 0;\r\n  justify-content: center;\r\n  background-color: #fff;\r\n  box-shadow: 0px 0px 10px black;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.menu-items > ul {\r\n  margin-top: 30px;\r\n}\r\n\r\n.menu-items > ul > li {\r\n  height: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.menu-items > ul > li > p{\r\n  color: #41c36c;\r\n  font-family: 'Aileron-Light';\r\n}\r\n\r\n.dot {\r\n  height: 5px;\r\n  width: 5px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  margin-bottom: 2px;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n  background-color: #277b43;\r\n}\r\n\r\n.inline {\r\n  display: inline-block;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.window {\r\n  position: relative;\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #277b43;\r\n}\r\n\r\n.window-header {\r\n  height: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.window-header > h3 {\r\n  font-size: 20px;\r\n  font-family: 'Aileron-ThinItalic';\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin: 20px;\r\n    height: calc(100% - 40px);\r\n    grid-template-columns: repeat(auto-fill, minmax(330px ,1fr));\r\n    grid-gap: 20px;\r\n    /*grid-template-rows: repeat(auto-fill, minmax(300px ,1fr));*/\r\n  }\r\n  .grid > div {\r\n    height: 450px;\r\n  }\r\n  .container {\r\n    margin-left: 240px;\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .grid {\r\n    height: default;\r\n    grid-gap: 20px;\r\n    height: calc(100% - 40px);\r\n    grid-template-columns: repeat(auto-fill, minmax(400px ,10fr));\r\n    grid-template-rows: repeat(auto-fill, minmax(300px ,800px));\r\n  }\r\n  .grid > div {\r\n    margin: 20px;\r\n    height: 300px;\r\n  }\r\n  .wrapper {\r\n    overflow-y: scroll;;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\"> \n <div [@slideInOut]=\"menuState\" class=\"side-bar\">\n    <span (click)=\"toggle()\">\n     <div class=\"title\">\n         <h1>UI/UX Demo</h1>\n     </div>\n     <hr>\n    </span>\n    <div class=\"menu-items\">\n        <ul>\n            <li><div class=\"dot inline \"></div><p class=\"inline\">Menu Item</p><div class=\"dot inline\"></div></li>\n            <li><div class=\"dot inline \"></div><p class=\"inline\">Menu Item</p><div class=\"dot inline\"></div></li>\n            <li><div class=\"dot inline \"></div><p class=\"inline\">Menu Item</p><div class=\"dot inline\"></div></li>\n            <li><div class=\"dot inline \"></div><p class=\"inline\">Menu Item</p><div class=\"dot inline\"></div></li>\n            <li><div class=\"dot inline \"></div><p class=\"inline\">Menu Item</p><div class=\"dot inline\"></div></li>\n            <li><div class=\"dot inline \"></div><p class=\"inline\">Menu Item</p><div class=\"dot inline\"></div></li>\n        </ul>\n    </div>\n </div>\n     <div class=\"hamburger-container\">\n         <button (click)=\"toggle()\" class=\"hamburger\">\n              <span>Toggle Menu</span>\n          </button>\n     </div>\n     <div  class=\"container\" [@removeMargin]=\"menuMargin\">\n      <div class=\"grid\">\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n          <div class=\"window\">\n              <div class=\"window-header\"><h3>Window</h3></div>\n              <hr>\n          </div>\n      </div>\n     </div>\n </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.title = 'app';
        this.menuState = 'in';
        this.menuMargin = 'in';
        window.onresize = function (e) {
            _this.ngZone.run(function () {
                if (window.innerWidth < 600) {
                    _this.menuMargin = 'out';
                }
            });
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 600) {
            this.menuState = 'out';
            this.menuMargin = 'out';
        }
    };
    AppComponent.prototype.toggle = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        if (window.innerWidth >= 600) {
            this.menuMargin = this.menuState;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('removeMargin', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        'margin-left': '240px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        'margin-left': '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\004HLF\Workspace\web\neurosheet-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map