(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{dXMJ:function(e,n,t){"use strict";t.r(n),t.d(n,"FaqModule",function(){return u});var o=t("5iCu"),a=t("tyNb"),s=t("fXoL"),i=t("7EHt"),l=t("ofXK");function r(e,n){if(1&e&&(s.Qb(0,"mat-expansion-panel"),s.Qb(1,"mat-expansion-panel-header"),s.Qb(2,"mat-panel-title"),s.Lb(3,"span",2),s.Pb(),s.Pb(),s.Lb(4,"p",2),s.Pb()),2&e){const e=n.$implicit;s.zb(3),s.gc("innerHTML",e.question,s.lc),s.zb(1),s.gc("innerHTML",e.answer,s.lc)}}let d=(()=>{class e{constructor(){this.faq=c}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["demo-faq"]],decls:5,vars:1,consts:[[1,"wrapper"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(e,n){1&e&&(s.Qb(0,"div",0),s.Qb(1,"h1"),s.vc(2,"Frequently asked questions"),s.Pb(),s.Qb(3,"mat-accordion"),s.tc(4,r,5,2,"mat-expansion-panel",1),s.Pb(),s.Pb()),2&e&&(s.zb(4),s.gc("ngForOf",n.faq))},directives:[i.a,l.j,i.c,i.d,i.e],styles:["h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}mat-panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.mat-expanded[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:25px}.responsive[_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%], .responsive   [_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding-top:20px!important;padding-bottom:20px!important}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),e})();const c=[{question:"When does the <code>*axLazyElement</code> directive trigger download of the element bundle (or module)",answer:"The element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... <br>\n       <ul>\n        <li>Angular component uses element in its template</li>\n        <li>\n          Angular component uses element in its template conditionally\n          (<code>*ngIf</code>, <code>*ngFor</code>, ...) and the condition was\n          fulfilled\n        </li>\n        <li>\n          User navigated to an Angular component which uses element in its template\n          (can be both eagerly or lazily loaded routes)\n        </li>\n      </ul>\n      "},{question:"What will happen if I use same element multiple times in single template?",answer:"The element bundle will be downloaded only once! The library takes care of this situation by maintaining registry of downloaded / downloading elements and every new occurence will be checked against that  registry..."},{question:'When do we need to use <code>*axLazyElement="module: true"</code> flag?',answer:'Some web components libraries might be distributed using ES modules, for example if we look at <a href="https://unpkg.com/@material/mwc-button@0.18.0/mwc-button.js?module" target="_blank">@material/mwc-button</a> we will see that it imports additional things like <code>@material/mwc-base</code> using import statement in its implementation. This means it will need to download multiple files compared to a single bundle when using Angular elements. To make this work, library has to generate <code>\t&#60;script type="module"></code> instead of just plain <code>\t&#60;script></code> tag.'},{question:"Angular elements / web components / custom elements / what?",answer:'In the docs, we often use phrase "Angular elements (or any other web component)" but this may sound a bit vague without previous insight into the topic... <br><br>The web standard is in fact called "Web Components" and it uses <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank">Custom Elements API</a> to create and use web components which are <strong>new custom, reusable, encapsulated HTML tags</strong> to use in web pages and web apps.<br><br>Angular Elements wraps Angular components using <code>HTMLElement</code> APIs and then uses Custom Elements API, more precisely the <code>customElements.define(\'some-element\', SomeComponentElement)</code> syntax to register it for the use in the web page.'},{question:"How to prevent multiple downloads of same elements bundle when used in the multiple apps / elements?",answer:"\n    It is possible to override the <code>LAZY_ELEMENTS_REGISTRY</code> token and provide your own implementation of the registry which should implement <code>LazyElementsRegistry</code> interface. Such an overridden registry then could store the value globally (for example on the <code>window</code>). That way every instance of lazy elements library can work with this shared state and prevent multiple downloads of some element bundle in case it was already loaded by other library instance before.\n    "}],m=[{path:"",component:d}];let p=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(n){return new(n||e)},imports:[[a.d.forChild(m)],a.d]}),e})(),u=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(n){return new(n||e)},imports:[[o.a,p]]}),e})()}}]);