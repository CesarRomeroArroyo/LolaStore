function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoryCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n\t<div class=\"container\">\n\t\t<div class=\"container__header\">\n\t\t\t<div class=\"container__header__back\" (click)=\"irAtras()\">\n\t\t\t\t<ion-icon name=\"chevron-back-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"container__header__search\">\n\t\t\t\t<ion-icon name=\"search-outline\" (click)=\"search = !search\"></ion-icon>\n\t\t\t\t<ion-input #buscarText class=\"container__header__search__input animate__animated animate__fadeIn\"\n\t\t\t\t\tplaceholder=\"Buscar...\" *ngIf=\"search\" (keyup)=\"buscar(buscarText.value)\"></ion-input>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"container__img\" *ngIf=\"category\">\n\t\t\t<img src=\"{{category.foto}}\" alt=\"\">\n\t\t\t<div class=\"container__img__nombre\">\n\t\t\t\t{{category.nombre}}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container__categories\" *ngIf=\"category\">\n\t\t\t<div class=\"container__categories__category\">\n\t\t\t\t<div class=\"container__categories__category__option\" [ngClass]=\"{'subselected': categorySel=='all'}\"\n\t\t\t\t\t(click)=\"selectCategory('all')\">\n\t\t\t\t\tTODAS\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container__categories__category__option\" *ngFor=\"let cat of productos\"\n\t\t\t\t\t[ngClass]=\"{'subselected': categorySel!='all' && cat.nombre == categorySel.nombre}\"\n\t\t\t\t\t(click)=\"selectCategory(cat)\">\n\t\t\t\t\t{{cat.nombre}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container__products\" *ngIf=\"category\">\n\t\t\t<div class=\"container__products__product\" *ngFor=\"let producto of dataShow\">\n\t\t\t\t<div class=\"container__products__product__title\" *ngIf=\"producto.productos.length > 0\">\n\t\t\t\t\t{{producto.nombre}}\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"container__products__product__list\" *ngIf=\"producto.productos.length > 0\">\n\t\t\t\t\t<div class=\"container__products__product__list__item\" *ngFor=\"let prod of producto.productos\">\n\t\t\t\t\t\t<div class=\"container__products__product__list__item__like\">\n\t\t\t\t\t\t\t<div class=\"container__products__product__list__item__like__container\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"container__products__product__list__item__img\" *ngIf=\"!prod.fotos\">\n\t\t\t\t\t\t\t<img src=\"{{prod.url}}\" alt=\"\" (click)=\"goToDetail(prod)\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"container__products__product__list__item__img\" *ngIf=\"prod.fotos\">\n\t\t\t\t\t\t\t<img src=\"{{prod.urls[0]}}\" alt=\"\" (click)=\"goToDetail(prod)\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"container__products__product__list__item__title\">\n\t\t\t\t\t\t\t{{prod.nombre}}\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"container__products__product__list__item__price\">\n\t\t\t\t\t\t\t{{prod.precio | currency: 'USD':true:'2.0'}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n\n<app-tags></app-tags>";
    /***/
  },

  /***/
  "./src/app/pages/category/category-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/category/category-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CategoryPageRoutingModule */

  /***/
  function srcAppPagesCategoryCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function () {
      return CategoryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category.page */
    "./src/app/pages/category/category.page.ts");

    var routes = [{
      path: '',
      component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }];

    var CategoryPageRoutingModule = function CategoryPageRoutingModule() {
      _classCallCheck(this, CategoryPageRoutingModule);
    };

    CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/category/category.module.ts ***!
    \***************************************************/

  /*! exports provided: CategoryPageModule */

  /***/
  function srcAppPagesCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function () {
      return CategoryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-routing.module */
    "./src/app/pages/category/category-routing.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _category_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./category.page */
    "./src/app/pages/category/category.page.ts");

    var CategoryPageModule = function CategoryPageModule() {
      _classCallCheck(this, CategoryPageModule);
    };

    CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_category_page__WEBPACK_IMPORTED_MODULE_7__["CategoryPage"]]
    })], CategoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/category/category.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoryCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.container__header {\n  width: 100%;\n  height: 45px;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 16px 0px 16px;\n  position: relative;\n  font-size: 20px;\n}\n.container__header__back {\n  display: flex;\n  align-items: center;\n}\n.container__header__search {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 90%;\n}\n.container__header__search__input {\n  background-color: var(--ion-color-light);\n  border-radius: 20px;\n  margin: 0;\n  font-size: 14px;\n  height: 25px;\n  margin-right: 2%;\n  padding-left: 10px !important;\n}\n.container__img {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  height: 300px;\n}\n.container__img__nombre {\n  position: absolute;\n  bottom: 30px;\n  left: 0px;\n  font-weight: bolder;\n  background-color: rgba(255, 255, 255, 0.8);\n  width: 70%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  padding-left: 10px;\n  justify-content: center;\n  font-size: 25px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.container__img img {\n  width: 100%;\n}\n.container__categories {\n  width: 100%;\n  display: flex;\n  height: 44px;\n  margin-top: 20px;\n  position: relative;\n}\n.container__categories__category {\n  width: 95%;\n  display: flex;\n  overflow: scroll;\n  padding-bottom: 3px;\n  margin-left: 5px;\n}\n.container__categories__category__option {\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 7px 20px;\n  margin: 0px 5px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  font-weight: bolder;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.container__products {\n  width: 100%;\n  height: auto;\n  padding: 0px 16px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin-bottom: 63px;\n}\n.container__products__product__title {\n  font-weight: bold;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.container__products__product__list {\n  width: 100%;\n  overflow-x: unset;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.container__products__product__list__item {\n  background-color: white;\n  width: 43%;\n  height: 240px;\n  border-radius: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  padding: 10px 9px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.container__products__product__list__item__like {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.container__products__product__list__item__like__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(197, 199, 198, 0.2);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  font-size: 12px;\n  color: #c5c7c6;\n}\n.container__products__product__list__item__img {\n  width: 100%;\n  height: 60%;\n  display: flex;\n  justify-content: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.container__products__product__list__item__img img {\n  width: 80%;\n}\n.container__products__product__list__item__title {\n  font-size: 12px;\n  font-weight: bold;\n}\n.container__products__product__list__item__price {\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\nion-content {\n  --ion-background-color: linear-gradient(to bottom, #f7d8dd, #f4d2d9, #f0cdd5, #edc7d1, #e9c2ce);\n}\n.subselected {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2JzaXR5L1JlcG9zL090cm9zL0xvbGFTdG9yZS9zcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ1I7QURBUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0VaO0FEQVE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNFWjtBRERZO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNHaEI7QURDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDUjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0FDRVo7QURBUTtFQUNJLFdBQUE7QUNFWjtBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQVE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VaO0FERFk7RUFDSSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RUFBQTtBQ0doQjtBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDaEI7QURDWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NoQjtBREFnQjtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdFQUFBO0FDRXBCO0FERG9CO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0d4QjtBREZ3QjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUNHNUI7QURBb0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0V4QjtBRER3QjtFQUNJLFVBQUE7QUNHNUI7QURBb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFeEI7QURBb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRXhCO0FETUE7RUFDSSwrRkFBQTtBQ0hKO0FETUE7RUFDSSxrQ0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTZweCAwcHggMTZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICZfX2JhY2sge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJl9fc2VhcmNoIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICZfX2lucHV0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19pbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgJl9fbm9tYnJlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAwLjgpO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19jYXRlZ29yaWVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmX19jYXRlZ29yeSB7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICZfX29wdGlvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC40KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICZfX3Byb2R1Y3RzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjNweDtcbiAgICAgICAgJl9fcHJvZHVjdCB7XG4gICAgICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fbGlzdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDlweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgICAgICAgICAgICAmX19saWtlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2M1YzdjNiwgJGFscGhhOiAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29sb3I6ICNmNmQ3ZGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjNWM3YzY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJl9faW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJl9fcHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y3ZDhkZCwgI2Y0ZDJkOSwgI2YwY2RkNSwgI2VkYzdkMSwgI2U5YzJjZSk7XG59XG5cbi5zdWJzZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyX19oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHggMTZweCAwcHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyX19oZWFkZXJfX2JhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lcl9faGVhZGVyX19zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG59XG4uY29udGFpbmVyX19oZWFkZXJfX3NlYXJjaF9faW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXJfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRhaW5lcl9faW1nX19ub21icmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cbi5jb250YWluZXJfX2ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXJfX2NhdGVnb3JpZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyX19jYXRlZ29yaWVzX19jYXRlZ29yeSB7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyX19jYXRlZ29yaWVzX19jYXRlZ29yeV9fb3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4uY29udGFpbmVyX19wcm9kdWN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDYzcHg7XG59XG4uY29udGFpbmVyX19wcm9kdWN0c19fcHJvZHVjdF9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb250YWluZXJfX3Byb2R1Y3RzX19wcm9kdWN0X19saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IHVuc2V0O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyX19wcm9kdWN0c19fcHJvZHVjdF9fbGlzdF9faXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDI0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggOXB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4uY29udGFpbmVyX19wcm9kdWN0c19fcHJvZHVjdF9fbGlzdF9faXRlbV9fbGlrZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNvbnRhaW5lcl9fcHJvZHVjdHNfX3Byb2R1Y3RfX2xpc3RfX2l0ZW1fX2xpa2VfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMTk5LCAxOTgsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2M1YzdjNjtcbn1cbi5jb250YWluZXJfX3Byb2R1Y3RzX19wcm9kdWN0X19saXN0X19pdGVtX19pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb250YWluZXJfX3Byb2R1Y3RzX19wcm9kdWN0X19saXN0X19pdGVtX19pbWcgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5jb250YWluZXJfX3Byb2R1Y3RzX19wcm9kdWN0X19saXN0X19pdGVtX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyX19wcm9kdWN0c19fcHJvZHVjdF9fbGlzdF9faXRlbV9fcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjdkOGRkLCAjZjRkMmQ5LCAjZjBjZGQ1LCAjZWRjN2QxLCAjZTljMmNlKTtcbn1cblxuLnN1YnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/category/category.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/category/category.page.ts ***!
    \*************************************************/

  /*! exports provided: CategoryPage */

  /***/
  function srcAppPagesCategoryCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
      return CategoryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CategoryPage = /*#__PURE__*/function () {
      function CategoryPage(firebase, state, router) {
        _classCallCheck(this, CategoryPage);

        this.firebase = firebase;
        this.state = state;
        this.router = router;
        this.productosCategoria = [];
        this.productos = [];
        this.productosSeleccionados = [];
        this.search = false;
        this.dataShow = [];
      }

      _createClass(CategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.categorySel = 'all';
          this.state.getObservable().subscribe(function (data) {
            _this.firebase.obtenerUniqueId("categorias", data.idcategoria).subscribe(function (cat) {
              _this.category = cat[0];

              _this.firebase.obtenerProductoCategoria(_this.category.idunico).subscribe(function (prod) {
                _this.productosCategoria = prod;

                _this.ordenarProductosSubCategoria();
              });
            });
          });
        }
      }, {
        key: "ordenarProductosSubCategoria",
        value: function ordenarProductosSubCategoria() {
          var _this2 = this;

          this.category.subcategorias.forEach(function (sub) {
            var producto = {
              nombre: sub.nombre,
              productos: []
            };
            producto.productos = _this2.productosCategoria.filter(function (prod) {
              return prod.idunicoSubcategoria == sub.idunico;
            });

            _this2.productos.push(producto); // console.log(this.productos);

          });
          this.productosSeleccionados = this.productos;
          this.dataShow = this.productos;
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(cat) {
          console.log(cat);
          this.categorySel = cat;

          if (cat == 'all') {
            this.productosSeleccionados = this.productos;
            this.dataShow = this.productosSeleccionados;
          } else {
            this.productosSeleccionados = [cat];
            this.dataShow = this.productosSeleccionados;
          }
        }
      }, {
        key: "irAtras",
        value: function irAtras() {
          this.router.navigate(['home']);
        }
      }, {
        key: "buscar",
        value: function buscar(query) {
          if (query == '') {
            this.dataShow = this.productosSeleccionados;
            console.log(this.dataShow);
            return;
          } else {
            var data = [];
            query = query.toUpperCase();
            this.productosSeleccionados.forEach(function (element) {
              data.push({
                nombre: element.nombre,
                productos: element.productos.filter(function (prod) {
                  return prod.nombre.toUpperCase().indexOf(query.toUpperCase()) >= 0;
                })
              });
            });
            this.dataShow = data;
          }
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(producto) {
          this.router.navigate(['/product-detail', producto.idunico]);
        }
      }]);

      return CategoryPage;
    }();

    CategoryPage.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateApp"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./category.page.scss */
      "./src/app/pages/category/category.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], src_app_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateApp"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], CategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-category-category-module-es5.js.map