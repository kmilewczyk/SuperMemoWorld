"use strict";(self.webpackChunkSuperMemoWorld=self.webpackChunkSuperMemoWorld||[]).push([[352],{4352:(Q,p,r)=>{r.r(p),r.d(p,{CartsModule:()=>R});var l=r(9808),e=r(4893),C=r(7691),c=r(1777);const h="400ms cubic-bezier(0.4,0.0,0.2,1)",v=[(0,c.oB)({height:0,visibility:"hidden"}),(0,c.jt)(h,(0,c.oB)({height:"*",visibility:"visible"}))],A=[(0,c.oB)({height:"*",visibility:"visible"}),(0,c.jt)(h,(0,c.oB)({height:0,visibility:"hidden"}))];let _=(()=>{class s{constructor(t,i,o){this._el=t,this._renderer=i,this.collapsed=new e.vpe,this.collapses=new e.vpe,this.expanded=new e.vpe,this.expands=new e.vpe,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=o.build(A),this._factoryExpandAnimation=o.build(v)}set display(t){this._display=t,"none"!==t?this.isAnimated?this.toggle():this.show():this.hide()}set collapse(t){this.collapseNewValue=t,(!this._player||this._isAnimationDone)&&(this.isExpanded=t,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(t,i){if(!t||!this._stylesLoaded)return a=>a();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const o=i===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.destroy(),this._player=o.create(this._el.nativeElement),this._player.play(),a=>{var d;return null===(d=this._player)||void 0===d?void 0:d.onDone(a)}}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(c._j))},s.\u0275dir=e.lG2({type:s,selectors:[["","collapse",""]],hostVars:9,hostBindings:function(t,i){2&t&&(e.uIk("aria-hidden",i.isCollapsed),e.ekj("collapse",i.isCollapse)("in",i.isExpanded)("show",i.isExpanded)("collapsing",i.isCollapsing))},inputs:{display:"display",isAnimated:"isAnimated",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]}),s})(),y=(()=>{class s{static forRoot(){return{ngModule:s,providers:[]}}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({}),s})();const O=["*"],b=function(s){return{"text-muted":s}};function x(s,n){if(1&s&&(e.TgZ(0,"button",7),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.Q6J("ngClass",e.VKq(2,b,t.isDisabled)),e.xp6(1),e.hij(" ",t.heading," ")}}const Z=[[["","accordion-heading",""]],"*"],M=["[accordion-heading]","*"];let T=(()=>{class s{constructor(){this.closeOthers=!1,this.isAnimated=!1}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),u=(()=>{class s{constructor(t){this.isAnimated=!1,this.closeOthers=!1,this.groups=[],Object.assign(this,t)}closeOtherPanels(t){!this.closeOthers||this.groups.forEach(i=>{i!==t&&(i.isOpen=!1)})}addGroup(t){t.isAnimated=this.isAnimated,this.groups.push(t)}removeGroup(t){const i=this.groups.indexOf(t);-1!==i&&this.groups.splice(i,1)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(T))},s.\u0275cmp=e.Xpm({type:s,selectors:[["accordion"]],hostAttrs:["role","tablist",1,"panel-group",2,"display","block"],hostVars:1,hostBindings:function(t,i){2&t&&e.uIk("aria-multiselectable",i.closeOthers)},inputs:{isAnimated:"isAnimated",closeOthers:"closeOthers"},ngContentSelectors:O,decls:1,vars:0,template:function(t,i){1&t&&(e.F$t(),e.Hsn(0))},encapsulation:2}),s})(),D=(()=>{class s{constructor(t){this.isAnimated=!1,this.panelClass="panel-default",this.isDisabled=!1,this.isOpenChange=new e.vpe,this._isOpen=!1,this.accordion=t}get isOpen(){return this._isOpen}set isOpen(t){t!==this.isOpen&&(t&&this.accordion.closeOtherPanels(this),this._isOpen=t,Promise.resolve(null).then(()=>{this.isOpenChange.emit(t)}))}get isBs3(){return(0,C.XA)()}ngOnInit(){this.accordion.addGroup(this)}ngOnDestroy(){this.accordion.removeGroup(this)}toggleOpen(){this.isDisabled||(this.isOpen=!this.isOpen)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u))},s.\u0275cmp=e.Xpm({type:s,selectors:[["accordion-group"],["accordion-panel"]],hostAttrs:[1,"panel",2,"display","block"],hostVars:2,hostBindings:function(t,i){2&t&&e.ekj("panel-open",i.isOpen)},inputs:{heading:"heading",panelClass:"panelClass",isDisabled:"isDisabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:M,decls:9,vars:6,consts:[[1,"panel","card",3,"ngClass"],["role","tab",1,"panel-heading","card-header",3,"ngClass","click"],[1,"panel-title"],["role","button",1,"accordion-toggle"],["class","btn btn-link","type","button",3,"ngClass",4,"ngIf"],["role","tabpanel",1,"panel-collapse","collapse",3,"collapse","isAnimated"],[1,"panel-body","card-block","card-body"],["type","button",1,"btn","btn-link",3,"ngClass"]],template:function(t,i){1&t&&(e.F$t(Z),e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.NdJ("click",function(){return i.toggleOpen()}),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.YNc(4,x,2,4,"button",4),e.Hsn(5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.Hsn(8,1),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("ngClass",i.panelClass),e.xp6(1),e.Q6J("ngClass",i.isDisabled?"panel-disabled":"panel-enabled"),e.xp6(2),e.uIk("aria-expanded",i.isOpen),e.xp6(1),e.Q6J("ngIf",i.heading),e.xp6(2),e.Q6J("collapse",!i.isOpen)("isAnimated",i.isAnimated))},directives:[l.mk,l.O5,_],styles:["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]}),s})(),E=(()=>{class s{static forRoot(){return{ngModule:s,providers:[]}}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[l.ez,y]]}),s})();var g=r(7656);class N{static fromUserGetResult(n){return{email:n.email,firstname:n.name.firstname,lastname:n.name.lastname}}}var f=r(4128),m=r(4004),P=r(2340),w=r(520);let I=(()=>{class s{constructor(t){this.http=t,this.baseUrl=P.N.baseUrl}loadCarts(){return(0,f.D)({cartsResult:this.http.get(this.baseUrl+"carts"),usersResult:this.http.get(this.baseUrl+"users")}).pipe((0,m.U)(({cartsResult:t,usersResult:i})=>{let o=[...t];for(let a of o){let d=i[a.userId];if(d){let Y=N.fromUserGetResult(d);a.user=Y}}return o}))}loadProducts(t){let i=Object.fromEntries(t.map(o=>[o,this.http.get(this.baseUrl+"products/"+o)]));return(0,f.D)(i).pipe((0,m.U)(o=>o))}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(w.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var S=r(8264);function F(s,n){1&s&&e._UZ(0,"app-overlay")}function j(s,n){1&s&&e._UZ(0,"app-overlay")}function U(s,n){if(1&s&&(e.TgZ(0,"div"),e.TgZ(1,"h5",10),e._uU(2),e.qZA(),e.TgZ(3,"div",11),e.TgZ(4,"ul"),e.TgZ(5,"li"),e._uU(6),e.qZA(),e.TgZ(7,"li"),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.title),e.xp6(4),e.hij(" Cena: ",t.price," "),e.xp6(2),e.hij(" Liczba: ",t.quantity," ")}}function q(s,n){if(1&s&&(e.TgZ(0,"div",9),e.YNc(1,j,1,0,"app-overlay",2),e.YNc(2,U,9,3,"div",2),e.qZA()),2&s){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf",!t),e.xp6(1),e.Q6J("ngIf",t)}}function B(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"accordion-group",4),e.NdJ("isOpenChange",function(){const a=e.CHM(t).index;return e.oxw().onIsOpenChange(a)}),e.TgZ(1,"div",5),e.TgZ(2,"h1"),e._uU(3),e.ALo(4,"titlecase"),e.ALo(5,"titlecase"),e.qZA(),e.TgZ(6,"h5"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.qZA(),e.TgZ(9,"div",6),e.TgZ(10,"div",7),e.YNc(11,q,3,2,"div",8),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=n.$implicit,i=n.index,o=e.oxw();e.xp6(3),e.AsE(" ",e.lcZ(4,4,t.user.firstname)," ",e.lcZ(5,6,t.user.lastname)," "),e.xp6(4),e.Oqu(e.xi3(8,8,t.date,"shortDate")),e.xp6(4),e.Q6J("ngForOf",o.products(i))}}const k=[{path:"",component:(()=>{class s{constructor(t){this.cartService=t,this.carts=[],this.loadedProducts={},this.loadingCarts=!1}ngOnInit(){this.loadingCarts=!0,this.cartService.loadCarts().subscribe(t=>{this.carts=t,this.loadingCarts=!1},t=>{this.loadingCarts=!1})}onIsOpenChange(t){const o=this.carts[t].products.map(a=>a.productId).filter(a=>!(a in this.loadedProducts));o.length>0&&this.cartService.loadProducts(o).subscribe(a=>{this.loadedProducts=Object.assign(Object.assign({},this.loadedProducts),a)})}products(t){return this.carts[t].products.map(i=>{let o=this.loadedProducts[i.productId];if(o)return Object.assign(Object.assign({},o),{quantity:i.quantity})})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(I))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-carts"]],decls:5,vars:2,consts:[[1,"text-primary","display-3","mb-4",2,"font-weight","bold"],[2,"position","relative","min-height","300px"],[4,"ngIf"],[3,"isOpenChange",4,"ngFor","ngForOf"],[3,"isOpenChange"],["accordion-heading","",1,"d-flex","flex-row","align-items-center","p-2",2,"justify-content","space-between"],[1,"p-3",2,"position","relative","min-height","10rem"],[1,"row"],["class","card col-sm-4 col-lg-3","style","min-height: 100px;",4,"ngFor","ngForOf"],[1,"card","col-sm-4","col-lg-3",2,"min-height","100px"],[1,"card-title"],[1,"card-body"]],template:function(t,i){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Koszyki u\u017cytkownik\xf3w"),e.qZA(),e.TgZ(2,"accordion",1),e.YNc(3,F,1,0,"app-overlay",2),e.YNc(4,B,12,11,"accordion-group",3),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",i.loadingCarts),e.xp6(1),e.Q6J("ngForOf",i.carts))},directives:[u,l.O5,S.B,l.sg,D],pipes:[l.rS,l.uU],styles:[".card-body[_ngcontent-%COMP%]{padding:0}"]}),s})()}];let J=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[g.Bz.forChild(k)],g.Bz]}),s})();var L=r(4466);let R=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[l.ez,J,E,L.m]]}),s})()}}]);