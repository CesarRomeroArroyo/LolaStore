(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Edbd:function(t,i,o){"use strict";o.r(i),o.d(i,"BusquedaPageModule",(function(){return v}));var n=o("ofXK"),e=o("3Pt+"),r=o("j1ZV"),a=o("TEn/"),c=o("tyNb"),s=o("mrSG"),d=o("Z2Br"),b=o("fXoL"),p=o("+MCx"),u=o("vAwx");function h(t,i){if(1&t&&(b.Ob(0,"div",11),b.Ob(1,"div",12),b.pc(2),b.Nb(),b.Ob(3,"div",13),b.Mb(4,"app-tarjetas",14),b.Nb(),b.Nb()),2&t){const t=b.Yb().$implicit;b.Ab(2),b.rc(" ",t.nombre," "),b.Ab(2),b.ec("array",t.productos)}}function _(t,i){if(1&t&&(b.Ob(0,"div"),b.oc(1,h,5,2,"div",10),b.Nb()),2&t){const t=i.$implicit;b.Ab(1),b.ec("ngIf",t.productos.length>0)}}function g(t,i){if(1&t&&(b.Ob(0,"div",7),b.Ob(1,"div",8),b.Ob(2,"div",9),b.pc(3),b.Nb(),b.Nb(),b.oc(4,_,2,1,"div",5),b.Nb()),2&t){const t=b.Yb().$implicit;b.Ab(3),b.rc(" ",t.nombre," "),b.Ab(1),b.ec("ngForOf",t.subcategorias)}}function f(t,i){if(1&t&&(b.Ob(0,"div"),b.oc(1,g,5,2,"div",6),b.Nb()),2&t){const t=i.$implicit;b.Ab(1),b.ec("ngIf",t.tiene)}}const l=[{path:"",component:(()=>{class t{constructor(t){this.firebaseSvc=t,this.dataShow=[],this.data=[],this.productos=[],this.categorias=[],this.query=""}ngOnInit(){this.init()}init(){return Object(s.a)(this,void 0,void 0,(function*(){this.productos=yield this.firebaseSvc.obtenerPromise("productos"),this.categorias=yield this.firebaseSvc.obtenerPromise("categorias"),this.categorias.forEach(t=>{const i={nombre:t.nombre,subcategorias:t.subcategorias};i.subcategorias.forEach(t=>{t.productos=this.productos.filter(i=>i.idunicoSubcategoria==t.idunico)}),this.data.push(i)})}))}definirSub(t){let i,o=[];return t.subcategorias.forEach(t=>{i={nombre:t.nombre,productos:t.productos.filter(t=>t.nombre.toUpperCase().indexOf(this.query.toUpperCase())>=0)},i.productos.length>0&&o.push(i)}),o}buscar(){if(""==this.query)this.dataShow=[];else{this.dataShow=[];let t=[];this.data.forEach(i=>{let o=this.definirSub(i);this.definirSub(i),t.push({nombre:i.nombre,subcategorias:o})}),t.forEach((t,i)=>{t.subcategorias.forEach((i,o)=>{i.productos.length>0&&(t.tiene=!0)})}),this.dataShow=t}}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(d.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-busqueda"]],decls:8,vars:2,consts:[[1,"container"],[1,"container__search","animate__animated","animate__pulse"],["type","text","placeholder","Buscar...","name","search",1,"container__search__input",3,"ngModel","ngModelChange","keyup"],[1,"container__search__icon"],["aria-hidden","true",1,"fa","fa-search"],[4,"ngFor","ngForOf"],["class","container__categorias",4,"ngIf"],[1,"container__categorias"],[1,"container__categorias__title","animate__animated","animate__backInUp"],[1,"container__categorias__title__text"],["class","container__subcategorias",4,"ngIf"],[1,"container__subcategorias"],[1,"container__subcategorias__title","animate__animated","animate__backInUp"],[1,"container__cards"],[3,"array"]],template:function(t,i){1&t&&(b.Ob(0,"ion-content"),b.Ob(1,"div",0),b.Ob(2,"div",1),b.Ob(3,"input",2),b.Wb("ngModelChange",(function(t){return i.query=t}))("keyup",(function(){return i.buscar()})),b.Nb(),b.Ob(4,"span",3),b.Mb(5,"i",4),b.Nb(),b.Nb(),b.oc(6,f,2,1,"div",5),b.Nb(),b.Nb(),b.Mb(7,"app-tags")),2&t&&(b.Ab(3),b.ec("ngModel",i.query),b.Ab(3),b.ec("ngForOf",i.dataShow))},directives:[a.c,e.a,e.d,e.e,n.k,p.a,n.l,u.a],styles:[".container[_ngcontent-%COMP%]{min-height:100%;width:100%;padding:22% 0}.container__search[_ngcontent-%COMP%]{background:#f7d8dd;display:flex;justify-content:center;align-items:center;position:fixed;box-shadow:0 0 3px 1px var(--ion-color-primary);padding:4% 0;width:100%;z-index:10;top:0}.container__search__input[_ngcontent-%COMP%]{position:relative;right:-20px;padding:6px 12px;line-height:1.42857143;border:1px solid #ccc;border-radius:20px;border:1px solid var(--ion-color-primary);box-shadow:0 0 3px 1px var(--ion-color-primary)}.container__search__icon[_ngcontent-%COMP%]{padding:9px 12px;color:var(--ion-color-light);background-color:var(--ion-color-gray-light);border:1px solid var(--ion-color-gray-light);border-radius:20px;position:relative;right:8px}.container__categorias__title[_ngcontent-%COMP%]{font-size:3.8vh;font-weight:700;padding:0 4%;margin-bottom:2%}.container__categorias__title__text[_ngcontent-%COMP%]{background:#fff;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1% 5%;position:relative;left:-18px;border-top-right-radius:10px;opacity:.8;border-bottom-right-radius:10px}.container__subcategorias__title[_ngcontent-%COMP%]{font-size:2.5vh;font-weight:700;padding:0 4%;margin-bottom:2%}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(i){return new(i||t)},imports:[[c.j.forChild(l)],c.j]}),t})(),v=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(i){return new(i||t)},imports:[[n.b,e.b,a.n,m,r.a]]}),t})()}}]);