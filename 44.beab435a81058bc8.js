"use strict";(self.webpackChunkSuperMemoWorld=self.webpackChunkSuperMemoWorld||[]).push([[44],{2044:(z,p,a)=>{a.r(p),a.d(p,{ProductsModule:()=>q});var c=a(9808),t=a(4893),f=a(7691);function x(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"li",7),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw(2).selectSlide(r)}),t.qZA()}2&i&&t.ekj("active",!0===l.$implicit.active)}function I(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"ol",5),t.YNc(2,x,1,2,"li",6),t.qZA(),t.BQk()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.indicatorsSlides())}}function C(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw(2).selectSlide(r)}),t.qZA()}if(2&i){const e=l.$implicit,s=l.index,n=t.oxw(2);t.ekj("active",!0===e.active),t.uIk("data-bs-target","#"+n.currentId)("data-bs-slide-to",s)}}function b(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"div",5),t.YNc(2,C,1,4,"button",8),t.qZA(),t.BQk()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.indicatorsSlides())}}function y(i,l){1&i&&(t.TgZ(0,"span",13),t._uU(1,"Previous"),t.qZA())}function k(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"a",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().previousSlide()}),t._UZ(1,"span",11),t.YNc(2,y,2,0,"span",12),t.qZA()}if(2&i){const e=t.oxw();t.ekj("disabled",e.checkDisabledClass("prev")),t.uIk("data-bs-target","#"+e.currentId),t.xp6(2),t.Q6J("ngIf",e.isBs4)}}function P(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().nextSlide()}),t._UZ(1,"span",15),t.TgZ(2,"span",13),t._uU(3,"Next"),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.ekj("disabled",e.checkDisabledClass("next")),t.uIk("data-bs-target","#"+e.currentId)}}const T=function(i){return{display:i}},g=["*"];let w=(()=>{class i{constructor(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var d=(()=>{return(i=d||(d={}))[i.UNKNOWN=0]="UNKNOWN",i[i.NEXT=1]="NEXT",i[i.PREV=2]="PREV",d;var i})();let F=1,m=(()=>{class i{constructor(e,s){this.ngZone=s,this.noWrap=!1,this.noPause=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1,this.isAnimated=!1,this.activeSlideChange=new t.vpe(!1),this.slideRangeChange=new t.vpe,this.startFromIndex=0,this._interval=5e3,this._slides=new f.Su,this._currentVisibleSlidesIndex=0,this.isPlaying=!1,this.destroyed=!1,this.currentId=0,this.getActive=n=>n.active,this.makeSlidesConsistent=n=>{n.forEach((r,h)=>r.item.order=h)},Object.assign(this,e),this.currentId=F++}set activeSlide(e){this.multilist||(function V(i){return"number"==typeof i||"[object Number]"===Object.prototype.toString.call(i)}(e)&&(this.customActiveSlide=e),this._slides.length&&e!==this._currentActiveSlide&&this._select(e))}get activeSlide(){return this._currentActiveSlide||0}get interval(){return this._interval}set interval(e){this._interval=e,this.restartTimer()}get slides(){return this._slides.toArray()}get isFirstSlideVisible(){const e=this.getVisibleIndexes();return!(!e||e instanceof Array&&!e.length)&&e.includes(0)}get isLastSlideVisible(){const e=this.getVisibleIndexes();return!(!e||e instanceof Array&&!e.length)&&e.includes(this._slides.length-1)}get isBs4(){return!(0,f.XA)()}get _bsVer(){return(0,f.Wl)()}ngAfterViewInit(){setTimeout(()=>{this.singleSlideOffset&&(this.indicatorsByChunk=!1),this.multilist&&(this._chunkedSlides=function O(i,l){const e=[],s=Math.ceil(i.length/l);let n=0;for(;n<s;){const r=i.splice(0,n===s-1&&l<i.length?i.length:l);e.push(r),n++}return e}(this.mapSlidesAndIndexes(),this.itemsPerSlide),this.selectInitialSlides()),this.customActiveSlide&&!this.multilist&&this._select(this.customActiveSlide)},0)}ngOnDestroy(){this.destroyed=!0}addSlide(e){this._slides.add(e),this.multilist&&this._slides.length<=this.itemsPerSlide&&(e.active=!0),!this.multilist&&this.isAnimated&&(e.isAnimated=!0),!this.multilist&&1===this._slides.length&&(this._currentActiveSlide=void 0,this.customActiveSlide||(this.activeSlide=0),this.play()),this.multilist&&this._slides.length>this.itemsPerSlide&&this.play()}removeSlide(e){const s=this._slides.indexOf(e);if(this._currentActiveSlide===s){let n;this._slides.length>1&&(n=this.isLast(s)?this.noWrap?s-1:0:s),this._slides.remove(s),setTimeout(()=>{this._select(n)},0)}else{this._slides.remove(s);const n=this.getCurrentSlideIndex();setTimeout(()=>{this._currentActiveSlide=n,this.activeSlideChange.emit(this._currentActiveSlide)},0)}}nextSlideFromInterval(e=!1){this.move(d.NEXT,e)}nextSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(d.NEXT,e)}previousSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(d.PREV,e)}getFirstVisibleIndex(){return this.slides.findIndex(this.getActive)}getLastVisibleIndex(){return function A(i,l){let e=i.length;for(;e--;)if(l(i[e],e,i))return e;return-1}(this.slides,this.getActive)}move(e,s=!1){const n=this.getFirstVisibleIndex(),r=this.getLastVisibleIndex();this.noWrap&&(e===d.NEXT&&this.isLast(r)||e===d.PREV&&0===n)||(this.multilist?this.moveMultilist(e):this.activeSlide=this.findNextSlideIndex(e,s)||0)}keydownPress(e){if(13===e.keyCode||"Enter"===e.key||32===e.keyCode||"Space"===e.key)return this.nextSlide(),void e.preventDefault();37!==e.keyCode&&"LeftArrow"!==e.key?39!==e.keyCode&&"RightArrow"!==e.key||this.nextSlide():this.previousSlide()}onMouseLeave(){this.pauseOnFocus||this.play()}onMouseUp(){this.pauseOnFocus||this.play()}pauseFocusIn(){this.pauseOnFocus&&(this.isPlaying=!1,this.resetTimer())}pauseFocusOut(){this.play()}selectSlide(e){this.isPlaying&&this.restartTimer(),this.multilist?this.selectSlideRange(this.indicatorsByChunk?e*this.itemsPerSlide:e):this.activeSlide=this.indicatorsByChunk?e*this.itemsPerSlide:e}play(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())}pause(){this.noPause||(this.isPlaying=!1,this.resetTimer())}getCurrentSlideIndex(){return this._slides.findIndex(this.getActive)}isLast(e){return e+1>=this._slides.length}isFirst(e){return 0===e}indicatorsSlides(){return this.slides.filter((e,s)=>!this.indicatorsByChunk||s%this.itemsPerSlide==0)}selectInitialSlides(){const e=this.startFromIndex<=this._slides.length?this.startFromIndex:0;if(this.hideSlides(),this.singleSlideOffset){if(this._slidesWithIndexes=this.mapSlidesAndIndexes(),this._slides.length-e<this.itemsPerSlide){const s=this._slidesWithIndexes.slice(0,e);this._slidesWithIndexes=[...this._slidesWithIndexes,...s].slice(s.length).slice(0,this.itemsPerSlide)}else this._slidesWithIndexes=this._slidesWithIndexes.slice(e,e+this.itemsPerSlide);this._slidesWithIndexes.forEach(s=>s.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}findNextSlideIndex(e,s){let n=0;if(s||!this.isLast(this.activeSlide)||e===d.PREV||!this.noWrap){switch(e){case d.NEXT:if(void 0===this._currentActiveSlide){n=0;break}if(!this.isLast(this._currentActiveSlide)){n=this._currentActiveSlide+1;break}n=!s&&this.noWrap?this._currentActiveSlide:0;break;case d.PREV:if(void 0===this._currentActiveSlide){n=0;break}if(this._currentActiveSlide>0){n=this._currentActiveSlide-1;break}if(!s&&this.noWrap){n=this._currentActiveSlide;break}n=this._slides.length-1;break;default:throw new Error("Unknown direction")}return n}}mapSlidesAndIndexes(){return this.slides.slice().map((e,s)=>({index:s,item:e}))}selectSlideRange(e){if(!this.isIndexInRange(e)){if(this.hideSlides(),this.singleSlideOffset){const s=this.isIndexOnTheEdges(e)?e:e-this.itemsPerSlide+1,n=this.isIndexOnTheEdges(e)?e+this.itemsPerSlide:e+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(s,n),this.makeSlidesConsistent(this._slidesWithIndexes),this._slidesWithIndexes.forEach(r=>r.item.active=!0)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}}selectRangeByNestedIndex(e){if(!this._chunkedSlides)return;const s=this._chunkedSlides.map((n,r)=>({index:r,list:n})).find(n=>void 0!==n.list.find(r=>r.index===e));!s||(this._currentVisibleSlidesIndex=s.index,this._chunkedSlides[s.index].forEach(n=>{n.item.active=!0}))}isIndexOnTheEdges(e){return e+1-this.itemsPerSlide<=0||e+this.itemsPerSlide<=this._slides.length}isIndexInRange(e){return this.singleSlideOffset&&this._slidesWithIndexes?this._slidesWithIndexes.map(n=>n.index).indexOf(e)>=0:e<=this.getLastVisibleIndex()&&e>=this.getFirstVisibleIndex()}hideSlides(){this.slides.forEach(e=>e.active=!1)}isVisibleSlideListLast(){return!!this._chunkedSlides&&this._currentVisibleSlidesIndex===this._chunkedSlides.length-1}isVisibleSlideListFirst(){return 0===this._currentVisibleSlidesIndex}moveSliderByOneItem(e){let s,n,r,h,u;if(this.noWrap){s=this.getFirstVisibleIndex(),n=this.getLastVisibleIndex(),r=e===d.NEXT?s:n,h=e!==d.NEXT?s-1:this.isLast(n)?0:n+1;const o=this._slides.get(r);o&&(o.active=!1);const v=this._slides.get(h);v&&(v.active=!0);const S=this.mapSlidesAndIndexes().filter(H=>H.item.active);return this.makeSlidesConsistent(S),this.singleSlideOffset&&(this._slidesWithIndexes=S),void this.slideRangeChange.emit(this.getVisibleIndexes())}if(this._slidesWithIndexes&&this._slidesWithIndexes[0]){if(s=this._slidesWithIndexes[0].index,n=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index,e===d.NEXT){this._slidesWithIndexes.shift(),u=this.isLast(n)?0:n+1;const o=this._slides.get(u);o&&this._slidesWithIndexes.push({index:u,item:o})}else{this._slidesWithIndexes.pop(),u=this.isFirst(s)?this._slides.length-1:s-1;const o=this._slides.get(u);o&&(this._slidesWithIndexes=[{index:u,item:o},...this._slidesWithIndexes])}this.hideSlides(),this._slidesWithIndexes.forEach(o=>o.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes),this.slideRangeChange.emit(this._slidesWithIndexes.map(o=>o.index))}}moveMultilist(e){this.singleSlideOffset?this.moveSliderByOneItem(e):(this.hideSlides(),this._currentVisibleSlidesIndex=this.noWrap?e===d.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1:e===d.NEXT?this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1:this.isVisibleSlideListFirst()?this._chunkedSlides?this._chunkedSlides.length-1:0:this._currentVisibleSlidesIndex-1,this._chunkedSlides&&this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(s=>s.item.active=!0),this.slideRangeChange.emit(this.getVisibleIndexes()))}getVisibleIndexes(){return!this.singleSlideOffset&&this._chunkedSlides?this._chunkedSlides[this._currentVisibleSlidesIndex].map(e=>e.index):this._slidesWithIndexes?this._slidesWithIndexes.map(e=>e.index):void 0}_select(e){if(isNaN(e))return void this.pause();if(!this.multilist&&void 0!==this._currentActiveSlide){const n=this._slides.get(this._currentActiveSlide);void 0!==n&&(n.active=!1)}const s=this._slides.get(e);void 0!==s&&(this._currentActiveSlide=e,s.active=!0,this.activeSlide=e,this.activeSlideChange.emit(e))}restartTimer(){this.resetTimer();const e=+this.interval;!isNaN(e)&&e>0&&(this.currentInterval=this.ngZone.runOutsideAngular(()=>window.setInterval(()=>{const s=+this.interval;this.ngZone.run(()=>{this.isPlaying&&!isNaN(this.interval)&&s>0&&this.slides.length?this.nextSlideFromInterval():this.pause()})},e)))}get multilist(){return this.itemsPerSlide>1}resetTimer(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)}checkDisabledClass(e){return"prev"===e?0===this.activeSlide&&this.noWrap&&!this.multilist||this.isFirstSlideVisible&&this.noWrap&&this.multilist:this.isLast(this.activeSlide)&&this.noWrap&&!this.multilist||this.isLastSlideVisible&&this.noWrap&&this.multilist}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(w),t.Y36(t.R0b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["carousel"]],inputs:{noWrap:"noWrap",noPause:"noPause",showIndicators:"showIndicators",pauseOnFocus:"pauseOnFocus",indicatorsByChunk:"indicatorsByChunk",itemsPerSlide:"itemsPerSlide",singleSlideOffset:"singleSlideOffset",isAnimated:"isAnimated",activeSlide:"activeSlide",startFromIndex:"startFromIndex",interval:"interval"},outputs:{activeSlideChange:"activeSlideChange",slideRangeChange:"slideRangeChange"},ngContentSelectors:g,decls:7,vars:8,consts:[["tabindex","0",1,"carousel","slide",3,"id","mouseenter","mouseleave","mouseup","keydown","focusin","focusout"],[4,"ngIf"],[1,"carousel-inner",3,"ngStyle"],["class","left carousel-control carousel-control-prev","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],["class","right carousel-control carousel-control-next","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],[1,"carousel-indicators"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],["type","button","aria-current","true",3,"active","click",4,"ngFor","ngForOf"],["type","button","aria-current","true",3,"click"],["tabindex","0","role","button",1,"left","carousel-control","carousel-control-prev",3,"click"],["aria-hidden","true",1,"icon-prev","carousel-control-prev-icon"],["class","sr-only visually-hidden",4,"ngIf"],[1,"sr-only","visually-hidden"],["tabindex","0","role","button",1,"right","carousel-control","carousel-control-next",3,"click"],["aria-hidden","true",1,"icon-next","carousel-control-next-icon"]],template:function(e,s){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("mouseenter",function(){return s.pause()})("mouseleave",function(){return s.onMouseLeave()})("mouseup",function(){return s.onMouseUp()})("keydown",function(r){return s.keydownPress(r)})("focusin",function(){return s.pauseFocusIn()})("focusout",function(){return s.pauseFocusOut()}),t.YNc(1,I,3,1,"ng-container",1),t.YNc(2,b,3,1,"ng-container",1),t.TgZ(3,"div",2),t.Hsn(4),t.qZA(),t.YNc(5,k,3,4,"a",3),t.YNc(6,P,4,3,"a",4),t.qZA()),2&e&&(t.Q6J("id",s.currentId),t.xp6(1),t.Q6J("ngIf",!s._bsVer.isBs5&&s.showIndicators&&s.slides.length>1),t.xp6(1),t.Q6J("ngIf",s._bsVer.isBs5&&s.showIndicators&&s.slides.length>1),t.xp6(1),t.Q6J("ngStyle",t.VKq(6,T,s.multilist?"flex":"block")),t.xp6(2),t.Q6J("ngIf",s.slides.length>1),t.xp6(1),t.Q6J("ngIf",s.slides.length>1))},directives:[c.O5,c.sg,c.PC],encapsulation:2}),i})(),W=(()=>{class i{constructor(e){this.active=!1,this.itemWidth="100%",this.order=0,this.isAnimated=!1,this.addClass=!0,this.multilist=!1,this.carousel=e}ngOnInit(){var e;this.carousel.addSlide(this),this.itemWidth=100/this.carousel.itemsPerSlide+"%",this.multilist=(null===(e=this.carousel)||void 0===e?void 0:e.itemsPerSlide)>1}ngOnDestroy(){this.carousel.removeSlide(this)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m))},i.\u0275cmp=t.Xpm({type:i,selectors:[["slide"]],hostVars:15,hostBindings:function(e,s){2&e&&(t.uIk("aria-hidden",!s.active),t.Udp("width",s.itemWidth)("order",s.order),t.ekj("multilist-margin",s.multilist)("active",s.active)("carousel-animation",s.isAnimated)("item",s.addClass)("carousel-item",s.addClass))},inputs:{active:"active"},ngContentSelectors:g,decls:2,vars:2,consts:[[1,"item"]],template:function(e,s){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&e&&t.ekj("active",s.active)},styles:[".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"]}),i})(),N=(()=>{class i{static forRoot(){return{ngModule:i,providers:[]}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez]]}),i})();var _=a(7656);class Z{}var M=a(4004),E=a(2340),L=a(520);let B=(()=>{class i{constructor(e){this.http=e,this.baseUrl=E.N.baseUrl+"products"}getOverview(e){return this.http.get(this.baseUrl+"?limit="+e)}getDetails(e){return this.http.get(this.baseUrl+"/"+e).pipe((0,M.U)(s=>{if(s&&Object.keys(Z).every(n=>n in s))return Object.assign({},s);throw new Error("API Error")}))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(L.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var R=a(8264);function J(i,l){1&i&&t._UZ(0,"app-overlay")}function D(i,l){if(1&i&&t._UZ(0,"img",9),2&i){const e=t.oxw().$implicit,s=t.oxw();t.s9C("src",null==s.productDetail[e.id]?null:s.productDetail[e.id].image,t.LSH)}}function U(i,l){if(1&i&&(t.TgZ(0,"slide"),t.YNc(1,D,1,1,"img",8),t.qZA()),2&i){const e=l.$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngIf",s.productDetail[e.id])}}function Y(i,l){if(1&i&&(t.TgZ(0,"div"),t.TgZ(1,"h2",10),t._uU(2),t.qZA(),t.TgZ(3,"p",11),t._uU(4),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Oqu(null==e.productDetail[e.activeProductId]?null:e.productDetail[e.activeProductId].title),t.xp6(2),t.Oqu(null==e.productDetail[e.activeProductId]?null:e.productDetail[e.activeProductId].description)}}const j=[{path:"",component:(()=>{class i{constructor(e,s){this.productService=e,this.cdr=s,this.productOverview=[],this.productDetail={},this.productLoading=!1}ngOnInit(){this.productLoading=!0,this.productService.getOverview(3).subscribe(e=>{this.productOverview=e,this.productLoading=!1})}onSlideChange(e){const s=this.productOverview[e].id;this.activeProductId=s.toString(),!this.productDetail[s]&&(this.productLoading=!0,this.activeProductId=void 0,this.cdr.detectChanges(),this.productService.getDetails(s).subscribe(n=>{this.productDetail[s.toString()]=n,this.productLoading=!1,this.activeProductId=s.toString(),this.cdr.detectChanges()}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(B),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-products"]],decls:10,vars:5,consts:[[1,"row"],[1,"col-lg-10","mx-auto","text-center"],[1,"display-3","text-primary","mb-4","bg-light",2,"font-weight","bold"],[1,"px-5","py-2","card","bg-dark","text-white","col-md-8","col-lg-6","mx-auto",2,"position","relative","min-height","550px","background-color","rgba(150, 150, 150, 0.1)"],[4,"ngIf"],[1,"p-0",3,"hidden","interval","activeSlideChange"],[4,"ngFor","ngForOf"],[1,"card-body"],["alt","first slide","class","border card-img-top img-fluid",3,"src",4,"ngIf"],["alt","first slide",1,"border","card-img-top","img-fluid",3,"src"],[1,"card-title"],[1,"card-text"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3,"Przejrzyj nasz\u0105 ofert\u0119!"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,J,1,0,"app-overlay",4),t.TgZ(6,"carousel",5),t.NdJ("activeSlideChange",function(r){return s.onSlideChange(r)}),t.YNc(7,U,2,1,"slide",6),t.qZA(),t.TgZ(8,"div",7),t.YNc(9,Y,5,2,"div",4),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",s.productLoading),t.xp6(1),t.Q6J("hidden",s.productLoading)("interval",0),t.xp6(1),t.Q6J("ngForOf",s.productOverview),t.xp6(2),t.Q6J("ngIf",s.activeProductId))},directives:[c.O5,R.B,m,c.sg,W],styles:[""]}),i})()}];let Q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.Bz.forChild(j)],_.Bz]}),i})();var X=a(4466);let q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,Q,N,X.m]]}),i})()}}]);