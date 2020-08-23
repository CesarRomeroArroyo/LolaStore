(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\t<div class=\"container\">\n\t\t<div class=\"container__header\">\n\t\t\t<div class=\"container__header__search\">\n\t\t\t\t<ion-icon name=\"search-outline\"></ion-icon>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"container__image\">\n\t\t\t<img src=\"../../assets/logo.png\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"container__categories\" *ngIf=\"categorias\">\n\t\t\t<div (click)=\"irDetalle(cat)\"\n\t\t\t\t[ngClass]=\"{'fondo1': cat.fondo=='fondo1','fondo2': cat.fondo=='fondo2','fondo3': cat.fondo=='fondo3' }\"\n\t\t\t\t*ngFor=\"let cat of categorias;let index=index;\">\n\t\t\t\t<div class=\"container__categories__img\">\n\t\t\t\t\t<img src=\"{{cat.foto}}\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"container__categories__text\">\n\t\t\t\t\t{{cat.nombre}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n\n<app-tags></app-tags>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.container__header {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px 16px 0px 16px;\n  z-index: 999;\n  background: #e5e1de;\n  position: fixed;\n  font-size: 20px;\n}\n.container__image {\n  height: 170px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  z-index: 99;\n  background: #e5e1de;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.container__image img {\n  width: 170px;\n  height: 170px;\n}\n.container__categories {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  top: 160px;\n  margin-bottom: 55px;\n}\n.container__categories__img img {\n  width: 90%;\n}\n.container__categories__text {\n  font-size: 14px;\n  position: absolute;\n  bottom: 20px;\n}\n.fondo1 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to bottom, #f7d8dd, #f4d2d9, #f0cdd5, #edc7d1, #e9c2ce);\n  width: 50%;\n  height: 250px;\n  text-align: center;\n  padding: 8px;\n  font-weight: bold;\n  position: relative;\n  color: white;\n}\n.fondo1 img {\n  width: 170px;\n  height: 170px;\n}\n.fondo2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to bottom, #ffffff, #f9fafa, #f3f4f5, #edefef, #e7eae9);\n  width: 50%;\n  height: 250px;\n  text-align: center;\n  padding: 8px;\n  font-weight: bold;\n  position: relative;\n}\n.fondo2 img {\n  width: 170px;\n  height: 170px;\n}\n.fondo3 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  width: 50%;\n  height: 250px;\n  text-align: center;\n  padding: 8px;\n  font-weight: bold;\n  position: relative;\n  color: #ccb3aa;\n}\n.fondo3 img {\n  width: 170px;\n  height: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2JzaXR5L1JlcG9zL090cm9zL0xvbGFTdG9yZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdFQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDR047QURBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRUo7QURBTTtFQUNFLFVBQUE7QUNFUjtBRENJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NOO0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUZBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDREY7QURFRTtFQUNFLFlBQUE7RUFDRSxhQUFBO0FDQU47QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtRkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FEQ0U7RUFDRSxZQUFBO0VBQ0UsYUFBQTtBQ0NOO0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDRSxhQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJl9faGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHggMHB4IDE2cHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJhY2tncm91bmQ6ICNlNWUxZGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAmX19pbWFnZXtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQ6ICNlNWUxZGU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICB9XG4gIH1cbiAgJl9fY2F0ZWdvcmllc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgICZfX2ltZ3tcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6ICA5MCU7XG4gICAgICB9XG4gICAgfVxuICAgICZfX3RleHR7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mb25kbzF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjdkOGRkLCAjZjRkMmQ5LCAjZjBjZGQ1LCAjZWRjN2QxLCAjZTljMmNlKTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaW1ne1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICAgIGhlaWdodDogMTcwcHg7XG4gIH1cbn1cbi5mb25kbzJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmLCAjZjlmYWZhLCAjZjNmNGY1LCAjZWRlZmVmLCAjZTdlYWU5KTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGltZ3tcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgICBoZWlnaHQ6IDE3MHB4O1xuICB9XG59XG4uZm9uZG8ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjY2NiM2FhO1xuICBpbWd7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgfVxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lcl9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAwcHggMTZweDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjZTVlMWRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXJfX2ltYWdlIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiAjZTVlMWRlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLmNvbnRhaW5lcl9faW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xufVxuLmNvbnRhaW5lcl9fY2F0ZWdvcmllcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cbi5jb250YWluZXJfX2NhdGVnb3JpZXNfX2ltZyBpbWcge1xuICB3aWR0aDogOTAlO1xufVxuLmNvbnRhaW5lcl9fY2F0ZWdvcmllc19fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG59XG5cbi5mb25kbzEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y3ZDhkZCwgI2Y0ZDJkOSwgI2YwY2RkNSwgI2VkYzdkMSwgI2U5YzJjZSk7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9uZG8xIGltZyB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLmZvbmRvMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmLCAjZjlmYWZhLCAjZjNmNGY1LCAjZWRlZmVmLCAjZTdlYWU5KTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9uZG8yIGltZyB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLmZvbmRvMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNjY2IzYWE7XG59XG4uZm9uZG8zIGltZyB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");





let HomePage = class HomePage {
    constructor(firebase, router, state) {
        this.firebase = firebase;
        this.router = router;
        this.state = state;
        this.iter = 1;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categorias = yield this.firebase.obtenerPromise("categorias");
        });
    }
    obtenerColor(index) {
        // console.log(index);
        if (index % 2 == 0) {
            return 2;
        }
        else {
            if (index % 3 == 0) {
                return 3;
            }
            return 1;
        }
    }
    irDetalle(cat) {
        this.state.setData({ idcategoria: cat.idunico });
        this.router.navigate(['category']);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateApp"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateApp"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map