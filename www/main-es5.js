function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <!-- <app-tags></app-tags> -->\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/direcciones/direcciones.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/direcciones/direcciones.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDireccionesDireccionesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal\">\n\t<div class=\"modal__info\">\n\t\t<div class=\"modal__close\" (click)=\"show()\">\n\t\t\t<ion-icon name=\"close-circle-outline\"></ion-icon>\n\t\t</div>\n\t\t<div class=\"modal__info__content\">\n\t\t\t<div class=\"modal__info__content__title\">\n\t\t\t\tDirecciones guardadas\n\t\t\t</div>\n\t\t\t<div class=\"modal__info__agregar\" *ngIf=\"showAdd\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input [(ngModel)]=\"adress\" placeholder=\"Agregar direccion\"></ion-input>\n\t\t\t\t\t<ion-icon name=\"add-outline\" slot=\"end\" (click)=\"addAdress()\"></ion-icon>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t\t<div class=\"modal__info__content__text\">\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item *ngFor=\"let direccion of usuario.direcciones; let i = index\" (click)=\"selectAdress(direccion)\">\n\t\t\t\t\t\t<ion-label>{{direccion}}</ion-label>\n\t\t\t\t\t\t<ion-icon name=\"trash\" slot=\"end\" (click)=\"deleteAdress(i)\"></ion-icon>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tags/tags.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tags/tags.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTagsTagsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tabs\">\n\t<div class=\"tabs__tab\" routerLinkActive=\"linkActive\">\n\t\t<div class=\"tabs__tab\" [routerLink]=\"[ '/home' ]\">\n\t\t\t<ion-icon name=\"home-outline\"></ion-icon>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"tabs__tab\" routerLinkActive=\"linkActive\">\n\t\t<div class=\"tabs__tab\" [routerLink]=\"[ '/cart' ]\">\n\t\t\t<div class=\"tabs__tab__cart\" *ngIf=\"numProd>0\">\n\t\t\t\t{{numProd}}\n\t\t\t</div>\n\t\t\t<ion-icon name=\"cart-outline\"></ion-icon>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"tabs__tab\" routerLinkActive=\"linkActive\">\n\t\t<div class=\"tabs__tab\" >\n\t\t\t<ion-icon name=\"heart-outline\"></ion-icon>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"tabs__tab\" routerLinkActive=\"linkActive\">\n\t\t<div class=\"tabs__tab\" [routerLink]=\"[ '/perfil' ]\">\n\t\t\t<ion-icon name=\"person-outline\"></ion-icon>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'category',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-category-module */
        "pages-category-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/category/category.module */
        "./src/app/pages/category/category.module.ts")).then(function (m) {
          return m.CategoryPageModule;
        });
      }
    }, {
      path: 'product-detail/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-product-detail-product-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-product-detail-product-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/product-detail/product-detail.module */
        "./src/app/pages/product-detail/product-detail.module.ts")).then(function (m) {
          return m.ProductDetailPageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cart-cart-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-cart-cart-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cart/cart.module */
        "./src/app/pages/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      }
    }, {
      path: 'perfil',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-perfil-perfil-module */
        "pages-perfil-perfil-module").then(__webpack_require__.bind(null,
        /*! ./pages/perfil/perfil.module */
        "./src/app/pages/perfil/perfil.module.ts")).then(function (m) {
          return m.PerfilPageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _capacitor_core__WEBP, SplashScreen, StatusBar;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"], SplashScreen = _capacitor_core__WEBP.SplashScreen, StatusBar = _capacitor_core__WEBP.StatusBar;
                    _context.prev = 1;
                    _context.next = 4;
                    return SplashScreen.hide();

                  case 4:
                    _context.next = 6;
                    return StatusBar.setStyle({
                      style: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["StatusBarStyle"].Light
                    });

                  case 6:
                    if (this.platform.is('android')) {
                      StatusBar.setBackgroundColor({
                        color: '#CDCDCD'
                      });
                    }

                    _context.next = 12;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](1);
                    console.log('This is a normal Browser', _context.t0);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 9]]);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuth"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tags_tags_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tags/tags.component */
    "./src/app/components/tags/tags.component.ts");
    /* harmony import */


    var _direcciones_direcciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./direcciones/direcciones.component */
    "./src/app/components/direcciones/direcciones.component.ts");

    var components = [_tags_tags_component__WEBPACK_IMPORTED_MODULE_6__["TagsComponent"], _direcciones_direcciones_component__WEBPACK_IMPORTED_MODULE_7__["DireccionesComponent"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: components,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
      exports: [components]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/direcciones/direcciones.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/direcciones/direcciones.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDireccionesDireccionesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  min-height: 100%;\n  width: 100%;\n  border: 1px black solid;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0px;\n}\n.modal__close {\n  position: relative;\n  color: black;\n  display: flex;\n  justify-content: flex-end;\n  top: -3vh;\n  right: -3vh;\n  font-size: 4vh;\n}\n.modal__info {\n  background: white;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  height: 35vh;\n  z-index: 100;\n  box-shadow: 0 0px 5px 0px var(--ion-color-medium);\n  padding: 3%;\n}\n.modal__info__agregar {\n  color: black;\n}\n.modal__info__agregar > ion-item {\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  --highlight-color-valid: var(--ion-color-primary);\n}\n.modal__info__content {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n  top: -3vh;\n}\n.modal__info__content__title {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n}\n.modal__info__content__text {\n  overflow: scroll;\n  height: 18vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2JzaXR5L1JlcG9zL090cm9zL0xvbGFTdG9yZS9zcmMvYXBwL2NvbXBvbmVudHMvZGlyZWNjaW9uZXMvZGlyZWNjaW9uZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyZWNjaW9uZXMvZGlyZWNjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDRyxRQUFBO0FDQ0o7QURBQztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VGO0FEQUM7RUFDQyxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtBQ0VGO0FEREU7RUFDQyxZQUFBO0FDR0g7QURGRztFQUNDLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpREFBQTtBQ0lKO0FEREU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0dIO0FERkc7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkc7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlyZWNjaW9uZXMvZGlyZWNjaW9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRtaW4taGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG5cdGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNSk7XG5cdHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcblx0Jl9fY2xvc2Uge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRjb2xvcjogYmxhY2s7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdHRvcDogLTN2aDtcblx0XHRyaWdodDogLTN2aDtcblx0XHRmb250LXNpemU6IDR2aDtcblx0fVxuXHQmX19pbmZvIHtcblx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRoZWlnaHQ6IDM1dmg7XG5cdFx0ei1pbmRleDogMTAwO1xuXHRcdGJveC1zaGFkb3c6IDAgMHB4IDVweCAwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cdFx0cGFkZGluZzogMyU7XG5cdFx0Jl9fYWdyZWdhciB7XG5cdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHQ+IGlvbi1pdGVtIHtcblx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0XHRcdC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCZfX2NvbnRlbnQge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdHRvcDogLTN2aDtcblx0XHRcdCZfX3RpdGxlIHtcblx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0Jl9fdGV4dCB7XG5cdFx0XHRcdG92ZXJmbG93OiBzY3JvbGw7XG5cdFx0XHRcdGhlaWdodDogMTh2aDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xufVxuLm1vZGFsX19jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB0b3A6IC0zdmg7XG4gIHJpZ2h0OiAtM3ZoO1xuICBmb250LXNpemU6IDR2aDtcbn1cbi5tb2RhbF9faW5mbyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDM1dmg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAwcHggNXB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZzogMyU7XG59XG4ubW9kYWxfX2luZm9fX2FncmVnYXIge1xuICBjb2xvcjogYmxhY2s7XG59XG4ubW9kYWxfX2luZm9fX2FncmVnYXIgPiBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1vZGFsX19pbmZvX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAtM3ZoO1xufVxuLm1vZGFsX19pbmZvX19jb250ZW50X190aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tb2RhbF9faW5mb19fY29udGVudF9fdGV4dCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGhlaWdodDogMTh2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/direcciones/direcciones.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/direcciones/direcciones.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DireccionesComponent */

  /***/
  function srcAppComponentsDireccionesDireccionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DireccionesComponent", function () {
      return DireccionesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DireccionesComponent = /*#__PURE__*/function () {
      function DireccionesComponent(firebaseSvc) {
        _classCallCheck(this, DireccionesComponent);

        this.firebaseSvc = firebaseSvc;
        this.showModal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.direccionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.adress = "";
      }

      _createClass(DireccionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show() {
          this.showModal.emit(false);
        }
      }, {
        key: "selectAdress",
        value: function selectAdress(adress) {
          this.direccionSelected.emit(adress);
          this.showModal.emit(false);
        }
      }, {
        key: "addAdress",
        value: function addAdress() {
          if (this.adress != "") {
            this.usuario.direcciones.unshift(this.adress);
            this.adress = "";
          }
        }
      }, {
        key: "deleteAdress",
        value: function deleteAdress(i) {
          this.usuario.direcciones.splice(i, 1);
        }
      }]);

      return DireccionesComponent;
    }();

    DireccionesComponent.ctorParameters = function () {
      return [{
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DireccionesComponent.prototype, "usuario", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DireccionesComponent.prototype, "showAdd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DireccionesComponent.prototype, "showModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DireccionesComponent.prototype, "direccionSelected", void 0);
    DireccionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-direcciones',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./direcciones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/direcciones/direcciones.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./direcciones.component.scss */
      "./src/app/components/direcciones/direcciones.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])], DireccionesComponent);
    /***/
  },

  /***/
  "./src/app/components/tags/tags.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/tags/tags.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTagsTagsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tabs {\n  background: var(--ion-color-light);\n  color: black;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.16), 0 -3px 8px rgba(0, 0, 0, 0.23);\n  position: fixed;\n  width: 100%;\n  height: 50px;\n  bottom: 0px;\n  display: flex;\n  justify-content: space-evenly;\n}\n.tabs__tab {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  position: relative;\n}\n.tabs__tab > h4 {\n  margin: 0;\n  padding: 0;\n  font-size: 2vh;\n}\n.tabs__tab > ion-icon {\n  font-size: 3.5vh;\n}\n.tabs__tab__cart {\n  position: absolute;\n  background: var(--ion-color-danger);\n  border-radius: 50%;\n  top: 0px;\n  right: 30%;\n  width: 19px;\n  height: 19px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: var(--ion-color-light);\n  font-weight: bold;\n}\n.tabs :active {\n  background-color: #ecc6d1;\n  border-radius: 20px 20px 10% 10%;\n  transition-property: all;\n  transition-duration: 0.2s;\n}\n.linkActive ion-icon {\n  color: #ff278b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2JzaXR5L1JlcG9zL090cm9zL0xvbGFTdG9yZS9zcmMvYXBwL2NvbXBvbmVudHMvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RhZ3MvdGFncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwRUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNDRDtBREFDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUNFRjtBRERFO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDR0g7QURERTtFQUNDLGdCQUFBO0FDR0g7QURERTtFQUNDLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDR0g7QURBQztFQUNDLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FDRUY7QURHQztFQUNDLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXHRjb2xvcjogYmxhY2s7XG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuXHRib3gtc2hhZG93OiAwIC0zcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgLTNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA1MHB4O1xuXHRib3R0b206IDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdCZfX3RhYiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0ZmxleDogMTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0PiBoNCB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0Zm9udC1zaXplOiAydmg7XG5cdFx0fVxuXHRcdD4gaW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAzLjV2aDtcblx0XHR9XG5cdFx0Jl9fY2FydHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRyaWdodDogMzAlO1xuXHRcdFx0d2lkdGg6IDE5cHg7XG5cdFx0XHRoZWlnaHQ6IDE5cHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR9XG5cdH1cblx0OmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VjYzZkMTtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTAlIDEwJTtcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGwgO1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cdH1cbn1cblxuLmxpbmtBY3RpdmUge1xuXHRpb24taWNvbiB7XG5cdFx0Y29sb3I6ICNmZjI3OGI7XG5cdH1cbn1cblxuXG4iLCIudGFicyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAtM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi50YWJzX190YWIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50YWJzX190YWIgPiBoNCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAydmg7XG59XG4udGFic19fdGFiID4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDMuNXZoO1xufVxuLnRhYnNfX3RhYl9fY2FydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAzMCU7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50YWJzIDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNjNmQxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTAlIDEwJTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4ubGlua0FjdGl2ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmYyNzhiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/tags/tags.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/tags/tags.component.ts ***!
    \***************************************************/

  /*! exports provided: TagsComponent */

  /***/
  function srcAppComponentsTagsTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagsComponent", function () {
      return TagsComponent;
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


    var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services/state.service */
    "./src/app/services/state.service.ts");

    var TagsComponent = /*#__PURE__*/function () {
      function TagsComponent(router, state) {
        _classCallCheck(this, TagsComponent);

        this.router = router;
        this.state = state;
        this.numProd = 0;
      }

      _createClass(TagsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.state.getObservable().subscribe(function (data) {
            if (data.pedido) {
              _this.numProd = data.pedido.length;
            }
          });
          var pedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));

          if (pedido) {
            this.numProd = pedido.length;
          } else {
            this.numProd = 0;
          }
        }
      }]);

      return TagsComponent;
    }();

    TagsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateApp"]
      }];
    };

    TagsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tags',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tags.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tags/tags.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tags.component.scss */
      "./src/app/components/tags/tags.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateApp"]])], TagsComponent);
    /***/
  },

  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService(db) {
        _classCallCheck(this, FirebaseService);

        this.db = db;
      }

      _createClass(FirebaseService, [{
        key: "obtener",
        value: function obtener(tabla, show) {
          this.itemsCollection = this.db.collection(tabla);
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "obtenerPromise",
        value: function obtenerPromise(tabla, show) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var returnData, data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    returnData = [];
                    _context2.next = 3;
                    return this.db.collection(tabla).get().toPromise();

                  case 3:
                    data = _context2.sent;
                    data.forEach(function (info) {
                      var d = info.data();
                      d["id"] = info.id;
                      console.log(info.id);
                      console.log(info.data());
                      returnData.push(d);
                    });
                    return _context2.abrupt("return", returnData);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "obtenerId",
        value: function obtenerId(tabla, id, show) {
          this.itemsCollection = this.db.collection(tabla, function (ref) {
            return ref.where('id', '==', id);
          });
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "obtenerUniqueId",
        value: function obtenerUniqueId(tabla, id) {
          this.itemsCollection = this.db.collection(tabla, function (ref) {
            return ref.where('idunico', '==', id);
          });
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "obtenerProductoCategoria",
        value: function obtenerProductoCategoria(categoria) {
          this.itemsCollection = this.db.collection('productos', function (ref) {
            return ref.where('idunicoCategoria', '==', categoria);
          });
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "obtenerLogin",
        value: function obtenerLogin(user, pass) {
          this.itemsCollection = this.db.collection('usuarios', function (ref) {
            return ref.where('user', '==', user).where('pass', '==', pass);
          });
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "obtenerChat",
        value: function obtenerChat(id) {
          this.itemsCollection = this.db.collection('chat', function (ref) {
            return ref.where('uniqueId', '==', id);
          });
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "obtenerChatReceptor",
        value: function obtenerChatReceptor(idReceptor) {
          this.itemsCollection = this.db.collection('chat', function (ref) {
            return ref.where('receptor', '==', idReceptor);
          });
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "obtenerChatEmisor",
        value: function obtenerChatEmisor(idEmisor) {
          this.itemsCollection = this.db.collection('chat', function (ref) {
            return ref.where('emisor', '==', idEmisor);
          });
          return this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map(function (d) {
              var retorno = d.payload.doc.data();
              retorno['id'] = d.payload.doc.id;
              return retorno;
            });
          }));
        }
      }, {
        key: "guardarDatos",
        value: function guardarDatos(tabla, data) {
          this.itemsCollection = this.db.collection(tabla);
          return this.itemsCollection.add(JSON.parse(JSON.stringify(data))).then(function (resp) {
            return resp.id;
          })["catch"](function () {
            return false;
          });
        }
      }, {
        key: "actualizarDatos",
        value: function actualizarDatos(tabla, data, id) {
          this.itemsCollection = this.db.collection(tabla);
          return this.itemsCollection.doc(id).update(JSON.parse(JSON.stringify(data))).then(function () {
            return true;
          })["catch"](function () {
            return false;
          });
        }
      }, {
        key: "eliminarDatos",
        value: function eliminarDatos(tabla, id) {
          this.itemsCollection = this.db.collection(tabla);
          this.itemsCollection.doc(id)["delete"]().then(function () {
            return true;
          })["catch"](function () {
            return false;
          });
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], FirebaseService);
    /***/
  },

  /***/
  "./src/app/services/state.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/state.service.ts ***!
    \*******************************************/

  /*! exports provided: StateApp */

  /***/
  function srcAppServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateApp", function () {
      return StateApp;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StateApp = /*#__PURE__*/function () {
      function StateApp() {
        _classCallCheck(this, StateApp);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.data = {
          state: []
        };
        this.data['state'] = [];
      }

      _createClass(StateApp, [{
        key: "getObservable",
        value: function getObservable() {
          return this.subject.asObservable();
        }
      }, {
        key: "setData",
        value: function setData(value) {
          var _this2 = this;

          var keyValue = Object.keys(value);
          keyValue.forEach(function (key) {
            _this2.data['state'][key] = value[key];
          });
          this.subject.next(this.data['state']);
        }
      }]);

      return StateApp;
    }();

    StateApp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StateApp);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        /* Produccion */

        /* apiKey: "AIzaSyBQSEIiRZQWcgPCV39Ngww-_DKdYcnYXwg",
        authDomain: "lolastore-b2e58.firebaseapp.com",
        databaseURL: "https://lolastore-b2e58.firebaseio.com",
        projectId: "lolastore-b2e58",
        storageBucket: "lolastore-b2e58.appspot.com",
        messagingSenderId: "357212241401",
        appId: "1:357212241401:web:e8e6537269a7c24ac95128",
        measurementId: "G-BQXKMF2VXQ" */

        /* Pruebas */
        apiKey: "AIzaSyCJ2Gjh6uJFn0ggUgaDTgUNXMgaBgmhaTY",
        authDomain: "lolastoretest.firebaseapp.com",
        databaseURL: "https://lolastoretest.firebaseio.com",
        projectId: "lolastoretest",
        storageBucket: "lolastoretest.appspot.com",
        messagingSenderId: "655798731689",
        appId: "1:655798731689:web:95133b238f7e42b4527ab8"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jobsity/Repos/Otros/LolaStore/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map