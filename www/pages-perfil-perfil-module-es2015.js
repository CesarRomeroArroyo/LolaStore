(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<div class=\"container\">\n\t\t<div class=\"container__title\">\n\t\t\tDatos personales\n\t\t</div>\n\n\t\t<div class=\"container__form\">\n\t\t\t<ion-input class=\"input\" placeholder=\"Nombre\" [(ngModel)]=\"usuario.nombre\"></ion-input>\n\t\t\t<ion-input class=\"input\" placeholder=\"Email\" [(ngModel)]=\"usuario.email\"></ion-input>\n\t\t\t<ion-input class=\"input\" placeholder=\"Cedula\" [(ngModel)]=\"usuario.cedula\"></ion-input>\n\t\t\t<ion-input class=\"input\" placeholder=\"Telefono\" [(ngModel)]=\"usuario.contacto\"></ion-input>\n\t\t\t<ion-select class=\"input\" value=\"brown\" okText=\"Seleccionar\" cancelText=\"Cerrar\"\n\t\t\t\tplaceholder=\"Seleccionar Ciudad\" [(ngModel)]=\"usuario.ciudad\">\n\t\t\t\t<ion-select-option [value]=\"city\" *ngFor=\"let city of cities\">{{city}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t\t<ion-input [readonly]=\"true\" class=\"input direccion\" placeholder=\"Direccion\" [(ngModel)]=\"usuario.direccion\"\n\t\t\t\t(click)=\"showModal = !showModal\"></ion-input>\n\t\t</div>\n\n\t\t<div class=\"container__button\">\n\t\t\t<ion-button color=\"light\" shape=\"round\" expand=\"block\" *ngIf=\"!usuario.idunico\" (click)=\"save()\">Guardar datos</ion-button>\n\t\t\t<ion-button color=\"light\" shape=\"round\" expand=\"block\" *ngIf=\"usuario.idunico\" (click)=\"updateData()\">Actualizar datos</ion-button>\n\t\t</div>\n\t</div>\n</ion-content>\n\n<app-direcciones class=\"modal animate__animated animate__fadeIn animate__faster\" [showAdd]=\"true\" [usuario]=\"usuario\" (showModal)=\"closeModal($event)\" (direccionSelected)=\"selecAdress($event)\" *ngIf=\"showModal\"></app-direcciones>\n<app-tags></app-tags>");

/***/ }),

/***/ "./src/app/pages/perfil/perfil-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/pages/perfil/perfil-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_7__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100%;\n  padding: 8%;\n}\n.container__title {\n  font-weight: bold;\n  border-bottom: 2px var(--ion-color-medium) solid;\n  color: var(--ion-color-medium);\n  padding: 2% 0px;\n}\n.container__form {\n  width: 100%;\n  padding: 4%;\n  margin-top: 5%;\n}\n.container__form > ion-input,\n.container__form ion-select {\n  background: white;\n  border: none;\n  box-shadow: 0px 0px 3px 1px var(--ion-color-primary);\n  margin-bottom: 5%;\n}\n.container__form > ion-select {\n  --placeholder-opacity: 0.5;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n.container__button {\n  width: 100%;\n}\n.modal {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2JzaXR5L1JlcG9zL090cm9zL0xvbGFTdG9yZS9zcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VSO0FERFE7O0VBRUksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSxpQkFBQTtBQ0daO0FERFE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNHWjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4JTtcbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkgc29saWQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgcGFkZGluZzogMiUgMHB4O1xuICAgIH1cbiAgICAmX19mb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDQlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgPiBpb24taW5wdXQsXG4gICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIH1cbiAgICAgICAgPiBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4JTtcbn1cbi5jb250YWluZXJfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSBzb2xpZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nOiAyJSAwcHg7XG59XG4uY29udGFpbmVyX19mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDQlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jb250YWluZXJfX2Zvcm0gPiBpb24taW5wdXQsXG4uY29udGFpbmVyX19mb3JtIGlvbi1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5jb250YWluZXJfX2Zvcm0gPiBpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbn1cbi5jb250YWluZXJfX2J1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_unique_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/unique.service */ "./src/app/services/unique.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");





let PerfilPage = class PerfilPage {
    constructor(firebaseSvc, uniqueid, toastController) {
        this.firebaseSvc = firebaseSvc;
        this.uniqueid = uniqueid;
        this.toastController = toastController;
        this.cities = [];
        this.usuario = {
            nombre: '',
            ciudad: '',
            cedula: '',
            contacto: '',
            direccion: '',
            direcciones: [],
            email: '',
        };
        this.showModal = false;
        this.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.getCities();
    }
    getCities() {
        this.firebaseSvc.obtener("ciudades").subscribe((resp) => {
            this.cities = resp[0].ciudades;
            if (JSON.parse(localStorage.getItem("APP_USER"))) {
                this.usuario = JSON.parse(localStorage.getItem("APP_USER"));
            }
        });
    }
    selecAdress(e) {
        this.usuario.direccion = e;
    }
    closeModal(e) {
        this.showModal = e;
    }
    presentToast(message, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: color,
            });
            toast.present();
        });
    }
    validation() {
        if (this.usuario.nombre != "" && this.usuario.email != "" && this.usuario.cedula != "" && this.usuario.contacto != "" && this.usuario.ciudad != "" && this.usuario.direccion != "") {
            return true;
        }
        else {
            return false;
        }
    }
    save() {
        console.log(this.usuario);
        if (this.validation()) {
            this.usuario.idunico = this.uniqueid.uniqueId();
            this.usuario.estado = 1;
            this.firebaseSvc.guardarDatos("clientes", this.usuario).then((resp) => {
                this.usuario.id = resp.toString();
                localStorage.setItem("APP_USER", JSON.stringify(this.usuario));
                this.presentToast("Datos almacenados correctamente");
            });
        }
        else {
            this.presentToast("¡Por favor verifique los campos!");
        }
    }
    updateData() {
        if (this.validation()) {
            this.firebaseSvc.actualizarDatos("clientes", this.usuario, this.usuario.id).then((resp) => {
                localStorage.setItem("APP_USER", JSON.stringify(this.usuario));
                this.presentToast("Datos actualizados correctamente");
            });
        }
        else {
            this.presentToast("¡Por favor verifique los campos!");
        }
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _services_unique_service__WEBPACK_IMPORTED_MODULE_1__["UniqueService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/pages/perfil/perfil.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _services_unique_service__WEBPACK_IMPORTED_MODULE_1__["UniqueService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=pages-perfil-perfil-module-es2015.js.map