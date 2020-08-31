function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){o=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function asyncGeneratorStep(t,e,n,r,i,a,o){try{var s=t[a](o),l=s.value}catch(h){return void n(h)}s.done?e(l):Promise.resolve(l).then(r,i)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){asyncGeneratorStep(a,r,i,o,s,"next",t)}function s(t){asyncGeneratorStep(a,r,i,o,s,"throw",t)}o(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"8Mb5":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_virtual_scroll",(function(){return s}));var r=n("0JRi"),i=function(t,e){var n=a(t,e);return n&&t.ownerDocument?t.ownerDocument.importNode(n.content,!0).children[0]:null},a=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},o=function(t,e,n,r,i,a,o,s,l,h,c,u){for(var f=[],d=u+c,p=c;p<d;p++){var v=t[p];if(i){var g=i(v,p,t);null!=g&&f.push({i:h++,type:"header",value:g,index:p,height:n?n(g,p):o,reads:n?0:2,visible:!!n})}if(f.push({i:h++,type:"item",value:v,index:p,height:e?e(v,p):l,reads:e?0:2,visible:!!e}),a){var m=a(v,p,t);null!=m&&f.push({i:h++,type:"footer",value:m,index:p,height:r?r(m,p):s,reads:r?0:2,visible:!!r})}}return f},s=function(){function t(e){var n=this;_classCallCheck(this,t),Object(r.l)(this,e),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){n.updateVirtualScroll()}}var e,n,a;return _createClass(t,[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.el.closest("ion-content"))){t.next=10;break}return t.next=4,e.getScrollElement();case 4:this.scrollEl=t.sent,this.contentEl=e,this.calcCells(),this.updateState(),t.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,n){var r=e.find((function(e){return"item"===e.type&&e.index===t}));return r?n[r.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var n,r,i,a,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:-1,this.items){t.next=3;break}return t.abrupt("return");case 3:r=-1===n?this.items.length-e:n,i=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,e),a=o(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,i,e,r),this.cells=function(t,e,n){if(0===n&&e.length>=t.length)return e;for(var r=0;r<e.length;r++)t[r+n]=e[r];return t}(this.cells,a,i),this.lastItemLen=this.items.length,this.indexDirty=Math.max(e-1,0),this.scheduleUpdate();case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"checkEnd",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(r.h)(this.readVS.bind(this)),Object(r.n)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,n=0,r=this.el;r&&r!==t;)n+=r.offsetTop,r=r.parentElement;this.viewportOffset=n,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var t,e,n=this.indexDirty,a=(t=this.currentScrollTop-this.viewportOffset,e=this.viewportHeight,{top:Math.max(t-100,0),bottom:t+e+100}),o=this.getHeightIndex(),s=function(t,e,n){for(var r=e.top,i=e.bottom,a=0;a<t.length&&!(t[a]>r);a++);for(var o=Math.max(a-2-1,0);a<t.length&&!(t[a]>=i);a++);return{offset:o,length:Math.min(a+2,t.length)-o}}(o,a);(function(t,e,n){return t<=n.offset+n.length||e.offset!==n.offset||e.length!==n.length})(n,this.range,s)&&(this.range=s,function(t,e,n,r){var i,a=_createForOfIteratorHelper(t);try{for(a.s();!(i=a.n()).done;){var o=i.value;o.change=0,o.d=!0}}catch(v){a.e(v)}finally{a.f()}for(var s=[],l=r.offset+r.length,h=function(r){var i=n[r],a=t.find((function(t){return t.d&&t.cell===i}));if(a){var o=e[r];o!==a.top&&(a.top=o,a.change=1),a.d=!1}else s.push(i)},c=r.offset;c<l;c++)h(c);for(var u=t.filter((function(t){return t.d})),f=function(){var n=p[d],r=u.find((function(t){return t.d&&t.cell.type===n.type})),i=n.i;r?(r.d=!1,r.change=2,r.cell=n,r.top=e[i]):t.push({d:!1,cell:n,visible:!0,change:2,top:e[i]})},d=0,p=s;d<p.length;d++)f();t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,o,this.cells,s),this.nodeRender?function(t,e,n,r){for(var a,o=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),s=o.length,l=0;l<n.length;l++){var h=n[l],c=h.cell;if(2===h.change){if(l<s)e(a=o[l],c,l);else{var u=i(t,c.type);(a=e(u,c,l)||u).classList.add("virtual-item"),t.appendChild(a)}a.$ionCell=c}else a=o[l];0!==h.change&&(a.style.transform="translate3d(0,".concat(h.top,"px,0)"));var f=c.visible;h.visible!==f&&(f?a.classList.remove("virtual-loading"):a.classList.add("virtual-loading"),h.visible=f),c.reads>0&&(r(c,a),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(r.k)(this))}},{key:"updateCellHeight",value:function(t,e){var n=this,r=function(){if(e.$ionCell===t){var r=window.getComputedStyle(e),i=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));n.setCellHeight(t,i)}};e&&e.componentOnReady?e.componentOnReady().then(r):r()}},{key:"setCellHeight",value:function(t,e){var n=t.i;t===this.cells[n]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,n),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=o(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var n=new Uint32Array(e);return n.set(t),n}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,n){for(var r=t[n],i=n;i<t.length;i++)t[i]=r,r+=e[i].height;return r}(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var n=this.scrollEl;n&&(this.isEnabled=t,n.addEventListener("scroll",this.onScroll),this.rmEvent=function(){n.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,n=e.type,r=e.value,i=e.index;switch(n){case"item":return this.renderItem(r,i);case"header":return this.renderHeader(r,i);case"footer":return this.renderFooter(r,i)}}},{key:"render",value:function(){var t=this;return Object(r.j)(r.b,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&Object(r.j)(l,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))}},{key:"el",get:function(){return Object(r.g)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}]),t}(),l=function(t,e,n){var r=t.dom;return n.map(e,(function(t,e){var n=r[e],i=t.vattrs||{},a=i.class||"";return a+="virtual-item ",n.visible||(a+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},i),{class:a,style:Object.assign(Object.assign({},i.style),{transform:"translate3d(0,".concat(n.top,"px,0)")})})})}))};s.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);