function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favoritos-favoritos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favoritos/favoritos.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favoritos/favoritos.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFavoritosFavoritosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n\t<div class=\"container\" >\n\t\t<div class=\"container__header\">\n\t\t\tTus Favoritos\n\t\t</div>\n\t\t<div *ngFor=\"let categoria of dataShow\">\n\t\t\t<div class=\"container__categorias\" *ngIf=\"categoria.tiene\">\n\t\t\t\t<div class=\"container__categorias__title \">\n\t\t\t\t\t<div class=\"container__categorias__title__text\">\n\t\t\t\t\t\t{{categoria.nombre}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngFor=\"let subcategoria of categoria.subcategorias\">\n\t\t\t\t\t<div class=\"container__subcategorias\" *ngIf=\"subcategoria.productos.length > 0\">\n\t\t\t\t\t\t<div class=\"container__subcategorias__title \">\n\t\t\t\t\t\t\t{{subcategoria.nombre}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"container__cards\">\n\t\t\t\t\t\t\t<app-tarjetas [array]=\"subcategoria.productos\"></app-tarjetas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      </div>      \n    </div>\n    <div class=\"container__noproductos\" *ngIf=\"user?.favoritos.length == 0\">\n      <ion-icon name=\"heart-outline\"></ion-icon>      \n      No tienes Favoritos aun\n    </div>\n    <div class=\"container__footer\">&nbsp;<br><br></div>\n  </div>\n</ion-content>\n\n<app-tags></app-tags>";
    /***/
  },

  /***/
  "./src/app/pages/favoritos/favoritos-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/favoritos/favoritos-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: FavoritosPageRoutingModule */

  /***/
  function srcAppPagesFavoritosFavoritosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritosPageRoutingModule", function () {
      return FavoritosPageRoutingModule;
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


    var _favoritos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favoritos.page */
    "./src/app/pages/favoritos/favoritos.page.ts");

    var routes = [{
      path: '',
      component: _favoritos_page__WEBPACK_IMPORTED_MODULE_3__["FavoritosPage"]
    }];

    var FavoritosPageRoutingModule = function FavoritosPageRoutingModule() {
      _classCallCheck(this, FavoritosPageRoutingModule);
    };

    FavoritosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavoritosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/favoritos/favoritos.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/favoritos/favoritos.module.ts ***!
    \*****************************************************/

  /*! exports provided: FavoritosPageModule */

  /***/
  function srcAppPagesFavoritosFavoritosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritosPageModule", function () {
      return FavoritosPageModule;
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


    var _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favoritos-routing.module */
    "./src/app/pages/favoritos/favoritos-routing.module.ts");
    /* harmony import */


    var _favoritos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favoritos.page */
    "./src/app/pages/favoritos/favoritos.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @components/components.module */
    "./src/app/components/components.module.ts");

    var FavoritosPageModule = function FavoritosPageModule() {
      _classCallCheck(this, FavoritosPageModule);
    };

    FavoritosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritosPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_favoritos_page__WEBPACK_IMPORTED_MODULE_6__["FavoritosPage"]]
    })], FavoritosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/favoritos/favoritos.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/favoritos/favoritos.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFavoritosFavoritosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.container__header {\n  position: relative;\n  margin-bottom: 5%;\n  height: 6%;\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  border-bottom: 2px var(--ion-color-medium) solid;\n  color: var(--ion-color-medium);\n  margin: 12px 16px 16px 16px;\n}\n.container__footer {\n  height: 55px;\n}\n.container__noproductos {\n  width: 100%;\n  height: 100%;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.container__noproductos ion-icon {\n  font-size: 70px;\n}\n.container__categorias {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.container__categorias__title {\n  font-size: 3.8vh;\n  font-weight: bold;\n  padding: 0 4%;\n  margin-bottom: 2%;\n}\n.container__categorias__title__text {\n  background: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1% 5%;\n  position: relative;\n  left: -18px;\n  border-top-right-radius: 10px;\n  opacity: 0.8;\n  border-bottom-right-radius: 10px;\n}\n.container__subcategorias__title {\n  font-size: 2.5vh;\n  font-weight: bold;\n  padding: 0 4%;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2JzaXR5L1JlcG9zL090cm9zL0xvbGFTdG9yZS9zcmMvYXBwL3BhZ2VzL2Zhdm9yaXRvcy9mYXZvcml0b3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvcml0b3MvZmF2b3JpdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNFUjtBRERRO0VBQ0ksZUFBQTtBQ0daO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRVI7QUREUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNHWjtBREZZO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNJaEI7QURDUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRvcy9mYXZvcml0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgaGVpZ2h0OiA2JTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSBzb2xpZDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBtYXJnaW46IDEycHggMTZweCAxNnB4IDE2cHg7IFxuICAgIH1cbiAgICAmX19mb290ZXIge1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgfVxuICAgICZfX25vcHJvZHVjdG9ze1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19jYXRlZ29yaWFzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMuOHZoO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDQlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgICAgICAmX190ZXh0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMSUgNSU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19zdWJjYXRlZ29yaWFzIHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjV2aDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMCA0JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXJfX2hlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGhlaWdodDogNiU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItYm90dG9tOiAycHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkgc29saWQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luOiAxMnB4IDE2cHggMTZweCAxNnB4O1xufVxuLmNvbnRhaW5lcl9fZm9vdGVyIHtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuLmNvbnRhaW5lcl9fbm9wcm9kdWN0b3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhaW5lcl9fbm9wcm9kdWN0b3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDcwcHg7XG59XG4uY29udGFpbmVyX19jYXRlZ29yaWFzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lcl9fY2F0ZWdvcmlhc19fdGl0bGUge1xuICBmb250LXNpemU6IDMuOHZoO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMCA0JTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4uY29udGFpbmVyX19jYXRlZ29yaWFzX190aXRsZV9fdGV4dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDElIDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMC44O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5jb250YWluZXJfX3N1YmNhdGVnb3JpYXNfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyLjV2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgNCU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/favoritos/favoritos.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/favoritos/favoritos.page.ts ***!
    \***************************************************/

  /*! exports provided: FavoritosPage */

  /***/
  function srcAppPagesFavoritosFavoritosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritosPage", function () {
      return FavoritosPage;
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


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var FavoritosPage = /*#__PURE__*/function () {
      function FavoritosPage(firebaseSvc) {
        _classCallCheck(this, FavoritosPage);

        this.firebaseSvc = firebaseSvc;
        this.dataShow = [];
        this.data = [];
        this.productos = [];
        this.categorias = [];
        this.query = "";
      }

      _createClass(FavoritosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var usuario;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    usuario = JSON.parse(localStorage.getItem("APP_USER"));
                    this.firebaseSvc.obtenerUniqueId("clientes", usuario.idunico).subscribe(function (user) {
                      _this.user = {};
                      _this.user = user[0];

                      _this.init();
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "init",
        value: function init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.data = [];
                    this.dataShow = [];
                    this.productos = [];

                    if (this.user['favoritos']) {
                      this.productos = this.user.favoritos;
                    }

                    _context2.next = 6;
                    return this.firebaseSvc.obtenerPromise('categorias');

                  case 6:
                    this.categorias = _context2.sent;
                    this.categorias.forEach(function (element) {
                      var data = {
                        nombre: element.nombre,
                        subcategorias: element.subcategorias
                      };
                      data.subcategorias.forEach(function (sub) {
                        sub['productos'] = _this2.productos.filter(function (producto) {
                          return producto.idunicoSubcategoria == sub.idunico;
                        });
                      });

                      _this2.data.push(data);
                    });
                    this.buscar();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "definirSub",
        value: function definirSub(categoria) {
          var dataReturn = [];
          this.data = [];
          var subcategoria = {
            nombre: '',
            productos: []
          };
          categoria.subcategorias.forEach(function (sub) {
            subcategoria = {
              nombre: sub.nombre,
              productos: sub.productos
            };

            if (subcategoria.productos.length > 0) {
              dataReturn.push(subcategoria);
            }
          });
          return dataReturn;
        }
      }, {
        key: "buscar",
        value: function buscar() {
          var _this3 = this;

          this.dataShow = [];
          var data = [];
          this.data.forEach(function (cat) {
            var subcategoria = _this3.definirSub(cat);

            _this3.definirSub(cat);

            data.push({
              nombre: cat.nombre,
              subcategorias: subcategoria
            });
          });
          data.forEach(function (cat, index) {
            cat.subcategorias.forEach(function (sub, index) {
              if (sub.productos.length > 0) {
                cat['tiene'] = true;
              }
            });
          });
          console.log(data);
          this.dataShow = data;
        }
      }]);

      return FavoritosPage;
    }();

    FavoritosPage.ctorParameters = function () {
      return [{
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }];
    };

    FavoritosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favoritos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./favoritos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favoritos/favoritos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./favoritos.page.scss */
      "./src/app/pages/favoritos/favoritos.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])], FavoritosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-favoritos-favoritos-module-es5.js.map