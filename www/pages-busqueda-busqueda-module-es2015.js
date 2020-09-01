(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-busqueda-busqueda-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<div class=\"container\">\n\t\t<div class=\"container__search animate__animated animate__pulse\">\n\t\t\t<input class=\"container__search__input\" type=\"text\" placeholder=\"Buscar...\" name=\"search\"\n\t\t\t\t[(ngModel)]=\"query\" (keyup)=\"buscar()\">\n\t\t\t<span class=\"container__search__icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n\t\t</div>\n\n\t\t<div *ngFor=\"let categoria of dataShow\">\n\t\t\t<div class=\"container__categorias\" *ngIf=\"categoria.tiene\">\n\t\t\t\t<div class=\"container__categorias__title animate__animated animate__backInUp\">\n\t\t\t\t\t<div class=\"container__categorias__title__text\">\n\t\t\t\t\t\t{{categoria.nombre}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngFor=\"let subcategoria of categoria.subcategorias\">\n\t\t\t\t\t<div class=\"container__subcategorias\" *ngIf=\"subcategoria.productos.length > 0\">\n\t\t\t\t\t\t<div class=\"container__subcategorias__title animate__animated animate__backInUp\">\n\t\t\t\t\t\t\t{{subcategoria.nombre}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"container__cards\">\n\t\t\t\t\t\t\t<app-tarjetas [array]=\"subcategoria.productos\"></app-tarjetas>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n\n<app-tags></app-tags>");

/***/ }),

/***/ "./src/app/pages/busqueda/busqueda-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BusquedaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaPageRoutingModule", function() { return BusquedaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _busqueda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./busqueda.page */ "./src/app/pages/busqueda/busqueda.page.ts");




const routes = [
    {
        path: '',
        component: _busqueda_page__WEBPACK_IMPORTED_MODULE_3__["BusquedaPage"]
    }
];
let BusquedaPageRoutingModule = class BusquedaPageRoutingModule {
};
BusquedaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusquedaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.module.ts ***!
  \***************************************************/
/*! exports provided: BusquedaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaPageModule", function() { return BusquedaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _busqueda_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./busqueda-routing.module */ "./src/app/pages/busqueda/busqueda-routing.module.ts");
/* harmony import */ var _busqueda_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./busqueda.page */ "./src/app/pages/busqueda/busqueda.page.ts");








let BusquedaPageModule = class BusquedaPageModule {
};
BusquedaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _busqueda_routing_module__WEBPACK_IMPORTED_MODULE_6__["BusquedaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ],
        declarations: [_busqueda_page__WEBPACK_IMPORTED_MODULE_7__["BusquedaPage"]]
    })
], BusquedaPageModule);



/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  min-height: 100%;\n  width: 100%;\n  padding: 22% 0;\n}\n.container__search {\n  background: #f7d8dd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  box-shadow: 0px 0px 3px 1px var(--ion-color-primary);\n  padding: 4% 0;\n  width: 100%;\n  z-index: 10;\n  top: 0;\n}\n.container__search__input {\n  position: relative;\n  right: -20px;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  border: 1px solid var(--ion-color-primary);\n  box-shadow: 0px 0px 3px 1px var(--ion-color-primary);\n}\n.container__search__icon {\n  padding: 9px 12px;\n  color: var(--ion-color-light);\n  background-color: var(--ion-color-gray-light);\n  border: 1px solid var(--ion-color-gray-light);\n  border-radius: 20px;\n  position: relative;\n  right: 8px;\n}\n.container__categorias__title {\n  font-size: 3.8vh;\n  font-weight: bold;\n  padding: 0 4%;\n  margin-bottom: 2%;\n}\n.container__categorias__title__text {\n  background: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1% 5%;\n  position: relative;\n  left: -18px;\n  border-top-right-radius: 10px;\n  opacity: 0.8;\n  border-bottom-right-radius: 10px;\n}\n.container__subcategorias__title {\n  font-size: 2.5vh;\n  font-weight: bold;\n  padding: 0 4%;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2JzaXR5L1JlcG9zL090cm9zL0xvbGFTdG9yZS9zcmMvYXBwL3BhZ2VzL2J1c3F1ZWRhL2J1c3F1ZWRhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYnVzcXVlZGEvYnVzcXVlZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0RBQUE7QUNHWjtBRERRO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0daO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ1o7QURBWTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDRWhCO0FER1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9idXNxdWVkYS9idXNxdWVkYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIyJSAwO1xuICAgICZfX3NlYXJjaCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Q4ZGQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDQlIDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICAmX19pbnB1dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgICZfX2ljb24ge1xuICAgICAgICAgICAgcGFkZGluZzogOXB4IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICByaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2NhdGVnb3JpYXMge1xuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMuOHZoO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDQlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgICAgICAmX190ZXh0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMSUgNSU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19zdWJjYXRlZ29yaWFzIHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjV2aDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMCA0JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMiUgMDtcbn1cbi5jb250YWluZXJfX3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmN2Q4ZGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDQlIDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xufVxuLmNvbnRhaW5lcl9fc2VhcmNoX19pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0yMHB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5jb250YWluZXJfX3NlYXJjaF9faWNvbiB7XG4gIHBhZGRpbmc6IDlweCAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXktbGlnaHQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JheS1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDhweDtcbn1cbi5jb250YWluZXJfX2NhdGVnb3JpYXNfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzLjh2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgNCU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmNvbnRhaW5lcl9fY2F0ZWdvcmlhc19fdGl0bGVfX3RleHQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxJSA1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMThweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4uY29udGFpbmVyX19zdWJjYXRlZ29yaWFzX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDQlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.page.ts ***!
  \*************************************************/
/*! exports provided: BusquedaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaPage", function() { return BusquedaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/firebase.service */ "./src/app/services/firebase.service.ts");



let BusquedaPage = class BusquedaPage {
    constructor(firebaseSvc) {
        this.firebaseSvc = firebaseSvc;
        this.dataShow = [];
        this.data = [];
        this.productos = [];
        this.categorias = [];
        this.query = "";
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productos = yield this.firebaseSvc.obtenerPromise('productos');
            this.categorias = yield this.firebaseSvc.obtenerPromise('categorias');
            this.categorias.forEach(element => {
                const data = { nombre: element.nombre, subcategorias: element.subcategorias };
                data.subcategorias.forEach(sub => {
                    sub['productos'] = this.productos.filter(producto => producto.idunicoSubcategoria == sub.idunico);
                });
                this.data.push(data);
            });
        });
    }
    definirSub(categoria) {
        let dataReturn = [];
        let subcategoria;
        categoria.subcategorias.forEach(sub => {
            subcategoria = {
                nombre: sub.nombre,
                productos: sub.productos.filter(prod => {
                    return prod.nombre.toUpperCase().indexOf(this.query.toUpperCase()) >= 0;
                })
            };
            if (subcategoria.productos.length > 0) {
                dataReturn.push(subcategoria);
            }
        });
        return dataReturn;
    }
    buscar() {
        if (this.query == '') {
            this.dataShow = [];
        }
        else {
            this.dataShow = [];
            let data = [];
            this.data.forEach(cat => {
                let subcategoria = this.definirSub(cat);
                this.definirSub(cat);
                data.push({
                    nombre: cat.nombre,
                    subcategorias: subcategoria
                });
            });
            data.forEach((cat, index) => {
                cat.subcategorias.forEach((sub, index) => {
                    if (sub.productos.length > 0) {
                        cat['tiene'] = true;
                    }
                });
            });
            this.dataShow = data;
        }
    }
};
BusquedaPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
BusquedaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-busqueda',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./busqueda.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./busqueda.page.scss */ "./src/app/pages/busqueda/busqueda.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], BusquedaPage);



/***/ })

}]);
//# sourceMappingURL=pages-busqueda-busqueda-module-es2015.js.map