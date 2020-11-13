(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fgBp:function(e,n,t){"use strict";t.r(n),t.d(n,"ChangeDetectionModule",function(){return h});var o=t("OtPg"),i=t("5iCu"),a=t("tyNb"),r=t("fXoL");let s=(()=>{class e{constructor(){this.codeExampleShareNgZone=c}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["demo-change-detection"]],decls:49,vars:1,consts:[[1,"wrapper"],[3,"highlight"],["href","https://github.com/angular/angular/issues/31870","target","_blank"]],template:function(e,n){1&e&&(r.Qb(0,"div",0),r.Qb(1,"h1"),r.vc(2,"Change detection"),r.Pb(),r.Qb(3,"p"),r.vc(4," In this section we're going to curate and discuss various change detection related issues and lessons learned when using Angular Elements. "),r.Pb(),r.Qb(5,"h2"),r.vc(6," RxJs stream runs in a wrong (parent / outer) zone.js [Angular Elements] "),r.Pb(),r.Qb(7,"h3"),r.vc(8,"Description"),r.Pb(),r.Qb(9,"p"),r.vc(10," This issue happens when using "),r.Qb(11,"code"),r.vc(12,"@angular/element"),r.Pb(),r.vc(13," inside of a parent Angular application. The parent application and element will NOT run in the same zone. This will lead to problems with change detection inside of the element when the "),r.Qb(14,"code"),r.vc(15,"rxjs"),r.Pb(),r.vc(16," stream was triggered by the change of the "),r.Qb(17,"code"),r.vc(18,"@Input() prop"),r.Pb(),r.vc(19," originating in the parent application. "),r.Pb(),r.Qb(20,"p"),r.vc(21," The stream will run in parent zone (instead of element zone) so any async operation (like backend request or using "),r.Qb(22,"code"),r.vc(23,"debounceTime()"),r.Pb(),r.vc(24," operator) will not trigger change detection of the element so the stream data will not be rendered... "),r.Pb(),r.Qb(25,"h3"),r.vc(26,"Solution"),r.Pb(),r.Qb(27,"ol"),r.Qb(28,"li"),r.vc(29," Do NOT use "),r.Qb(30,"code"),r.vc(31,"zone.js"),r.Pb(),r.vc(32," in your Angular element and trigger change detection manually "),r.Pb(),r.Qb(33,"li"),r.vc(34," Use single (parent) "),r.Qb(35,"code"),r.vc(36,"NgZone"),r.Pb(),r.vc(37," also for both the application and the element. "),r.Lb(38,"pre",1),r.Pb(),r.Qb(39,"li"),r.vc(40," Use "),r.Qb(41,"code"),r.vc(42,"import 'zone.js/dist/zone-patch-rxjs';"),r.Pb(),r.vc(43," in your Angular element. This will fix it BUT if the parent application (or ANY other lib used by the parent application) already has this import then the one in the element will be ignored and hence not solving the problem. "),r.Pb(),r.Pb(),r.Qb(44,"p"),r.vc(45," Check out detailed description of the "),r.Qb(46,"a",2),r.vc(47,"issue"),r.Pb(),r.vc(48," and some of the proposed solutions... "),r.Pb(),r.Pb()),2&e&&(r.zb(38),r.gc("highlight",n.codeExampleShareNgZone))},directives:[o.b],styles:["h2[_ngcontent-%COMP%]{margin:40px 0 10px}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-weight:700}h3[_ngcontent-%COMP%]{margin:20px 0 5px}ol[_ngcontent-%COMP%]{margin:0 0 20px}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),e})();const c="// in parent app (app.module.ts)\nexport class AppModule {\n  constructor(private ngZone: NgZone) {\n    (window as any).ngZone = this.ngZone // store ngZone reference on the window object\n  }\n}\n\n// in element (main.ts)\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule, { ngZone: (window as any).ngZone }) // use parent ngZone\n",l=[{path:"",component:s}];let p=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(n){return new(n||e)},imports:[[a.d.forChild(l)],a.d]}),e})(),h=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(n){return new(n||e)},imports:[[o.c,i.a,p]]}),e})()}}]);