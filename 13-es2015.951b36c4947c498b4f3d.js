(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{O0m9:function(e,t,n){"use strict";n.r(t),n.d(t,"HowItWorksModule",function(){return u});var o=n("tyNb"),a=n("OtPg"),r=n("5iCu"),i=n("fXoL");let c=(()=>{class e{constructor(){this.codeExampleComponent=l,this.codeExampleComponentBinding=d,this.codeExampleComponentLazy=s}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["demo-how-it-works"]],decls:175,vars:3,consts:[[1,"wrapper"],["routerLink","../../use-cases"],["href","https://angular.io/guide/elements","target","_blank"],["href","https://github.com/manfredsteyer/ngx-build-plus#readme","target","_blank"],[1,"large"],[3,"highlight"]],template:function(e,t){1&e&&(i.Qb(0,"div",0),i.Qb(1,"h1"),i.vc(2,"How it works"),i.Pb(),i.Qb(3,"p"),i.vc(4," The "),i.Qb(5,"code"),i.vc(6,"*axLazyElement"),i.Pb(),i.vc(7," directive is used to load any Angular element (or any other web component) and display it in the standard Angular component template. "),i.Pb(),i.Qb(8,"blockquote"),i.vc(9," In case you are wondering about when this approach might be useful please check out "),i.Qb(10,"a",1),i.vc(11,"use cases"),i.Pb(),i.vc(12," page to learn more... "),i.Pb(),i.Qb(13,"h2"),i.vc(14,"Angular elements"),i.Pb(),i.Qb(15,"blockquote"),i.vc(16," Angular elements are Angular components packaged as custom elements (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way - "),i.Qb(17,"a",2),i.vc(18,"Official Angular Docs"),i.Pb(),i.Pb(),i.Qb(19,"p"),i.vc(20," As written in the official Angular documentation, Angular elements "),i.Qb(21,"code"),i.vc(22,"@angular/elements"),i.Pb(),i.vc(23," provide us with a way to convert standard Angular components to custom elements (web components) which then can be consumed as standard built-in HTML elements from the point of view of the consumer application. "),i.Pb(),i.Qb(24,"p"),i.vc(25," The elements can be built with the help of Angular CLI and "),i.Qb(26,"code"),i.vc(27,"ngx-build-plus"),i.Pb(),i.Qb(28,"a",3),i.vc(29,"library"),i.Pb(),i.vc(30," into single a bundle. Having a single bundle file makes it very convenient to consume custom Angular element in the consumer app! "),i.Pb(),i.Qb(31,"h2"),i.vc(32," Standard way of using Angular elements (and other web components) in Angular applications "),i.Pb(),i.Qb(33,"p"),i.vc(34," Let's say we have created an Angular element, for example "),i.Qb(35,"code"),i.vc(36,"<your-org-customer-editor></your-org-customer-editor>"),i.Pb(),i.vc(37," and built and packaged it into a single bundle file "),i.Qb(38,"code"),i.vc(39,"your-org-customer-editor.js"),i.Pb(),i.vc(40,". "),i.Pb(),i.Qb(41,"p"),i.vc(42," Usually we would have to include "),i.Qb(43,"code"),i.vc(44,'<script src="path/to/your-org-customer-editor.js"><\/script>'),i.Pb(),i.vc(45," in our "),i.Qb(46,"code"),i.vc(47,"index.html"),i.Pb(),i.vc(48," so that we can be sure that the element loads before it was used in the template of some component of our consumer app. "),i.Pb(),i.Qb(49,"p"),i.vc(50," This approach has "),i.Qb(51,"strong"),i.vc(52,"one main disadvantage"),i.Pb(),i.vc(53,', which is that it increases initial javascript payload that needs to be downloaded, parsed and executed... Initial payload hurts even more if we\'re dealing with "sub-application" style Angular elements which can be considerably more complex compared to single components like button or card. '),i.Pb(),i.Qb(54,"p"),i.vc(55," Initial loading time can make huge impact on overall success of many kind of applications and represents the main reason for existence of this library which enables us to "),i.Qb(56,"strong"),i.vc(57,"lazy load Angular elements"),i.Pb(),i.vc(58," with ease and highest possible granularity! "),i.Pb(),i.Qb(59,"h2"),i.vc(60," Much Better Way of using Angular elements (and other web components) "),i.Pb(),i.Qb(61,"p"),i.vc(62," Wouldn't it be better if we could use our elements in the same way as any other HTML element while postpone their loading from some backend until the very last moment possible? "),i.Pb(),i.Qb(63,"p"),i.vc(64," More so, wouldn't it be great if this happened automatically without the need to manually trigger some kind of loading of the necessary bundle? "),i.Pb(),i.Qb(65,"blockquote",4),i.vc(66," What if all these things could be achieved by using simple structural directive "),i.Qb(67,"code"),i.vc(68,"*axLazyElement"),i.Pb(),i.vc(69,"? "),i.Pb(),i.Lb(70,"pre",5),i.Qb(71,"p"),i.vc(72," The "),i.Qb(73,"code"),i.vc(74,"*axLazyElement"),i.Pb(),i.vc(75," is a structural directive which means it will "),i.Qb(76,"strong"),i.vc(77,"remove"),i.Pb(),i.vc(78," the element on which it was added from the DOM by default. This is very useful because we DO NOT want to render element before it was actually loaded from the backend! The directive will then trigger loading of the bundle and the render element once the loading was finished. "),i.Pb(),i.Qb(79,"h2"),i.vc(80,"Using standard Angular template binding"),i.Pb(),i.Qb(81,"p"),i.vc(82," Another great thing about using this approach is that we can use standard Angular template binding syntax like "),i.Qb(83,"code"),i.vc(84,'[customerId]="customerId"'),i.Pb(),i.vc(85," and "),i.Qb(86,"code"),i.vc(87,'(customerDataChange)="handleCustomerDataChange($event)"'),i.Pb(),i.vc(88," to pass in data and react to events. It works just as expected even though the element is lazy loaded! "),i.Pb(),i.Lb(89,"pre",5),i.Qb(90,"h2"),i.vc(91,"Seamless lazy loading"),i.Pb(),i.Qb(92,"p"),i.vc(93," As mentioned above, our goal is to lazy load element to improve application startup time by decreasing size of javascript which has to be downloaded initially. "),i.Pb(),i.Qb(94,"p"),i.vc(95," Lazy loading with "),i.Qb(96,"code"),i.vc(97,"*axLazyElements"),i.Pb(),i.vc(98," happens automatically whenever the element is rendered in the template of some Angular component. Consider the following example... "),i.Pb(),i.Lb(99,"pre",5),i.Qb(100,"p"),i.vc(101," We're using "),i.Qb(102,"code"),i.vc(103,'<your-org-customer-editor *axLazyElement="url"></your-org-customer-editor>'),i.Pb(),i.vc(104," in the components template but it will not trigger element loading just yet. As we may notice, the element is wrapped in the "),i.Qb(105,"code"),i.vc(106,"<ng-container></ng-container>"),i.Pb(),i.vc(107," which uses "),i.Qb(108,"code"),i.vc(109,"*ngIf"),i.Pb(),i.vc(110," directive so our element is not rendered until we click the button... "),i.Pb(),i.Qb(111,"blockquote",4),i.vc(112," The loading of the element will be triggered only after we have clicked the button and rendered it in the component template "),i.Pb(),i.Qb(113,"p"),i.vc(114," To summarize, the element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... "),i.Pb(),i.Qb(115,"ul"),i.Qb(116,"li"),i.vc(117,"Angular component uses element in its template"),i.Pb(),i.Qb(118,"li"),i.vc(119," Angular component uses element in its template conditionally ("),i.Qb(120,"code"),i.vc(121,"*ngIf"),i.Pb(),i.vc(122,", "),i.Qb(123,"code"),i.vc(124,"*ngFor"),i.Pb(),i.vc(125,", ...) and the condition was fulfilled "),i.Pb(),i.Qb(126,"li"),i.vc(127," User navigated to an Angular component which uses element in its template (can be both eagerly or lazily loaded routes) "),i.Pb(),i.Pb(),i.Qb(128,"blockquote"),i.vc(129," This also means that if we used element in a component that is displayed straight from application startup, we would also trigger loading of the element bundle immediately so it will "),i.Qb(130,"strong"),i.vc(131,"NOT be lazy"),i.Pb(),i.vc(132," in that case "),i.Pb(),i.Qb(133,"h2"),i.vc(134,"In-depth overview of loading mechanism"),i.Pb(),i.Qb(135,"p"),i.vc(136," Loading starts only once we want to display an Angular component which renders given element in its template. After that the loading goes through the following process "),i.Pb(),i.Qb(137,"ol"),i.Qb(138,"li"),i.vc(139," Check if we provided reference to "),i.Qb(140,"code"),i.vc(141,"loading"),i.Pb(),i.vc(142," template ("),i.Qb(143,"code"),i.vc(144,"<ng-template #loading>Loading ...</ng-template>"),i.Pb(),i.vc(145,") and display it in place of the element... "),i.Pb(),i.Qb(146,"li"),i.vc(147,"Check if element was already loaded in the past"),i.Pb(),i.Qb(148,"li"),i.vc(149,"\u2705 If yes, remove loading template and render given element instead"),i.Pb(),i.Qb(150,"li"),i.vc(151," \u2b07\ufe0f If no, create a "),i.Qb(152,"code"),i.vc(153,"<script>"),i.Pb(),i.vc(154," tag with "),i.Qb(155,"code"),i.vc(156,"src = url"),i.Pb(),i.vc(157," and handler for the "),i.Qb(158,"code"),i.vc(159,"onload"),i.Pb(),i.vc(160," and "),i.Qb(161,"code"),i.vc(162,"onerror"),i.Pb(),i.vc(163," events to notify directive when element was loaded or failed to load "),i.Pb(),i.Qb(164,"li"),i.vc(165,"Append "),i.Qb(166,"code"),i.vc(167,"<script>"),i.Pb(),i.vc(168," to the document body"),i.Pb(),i.Qb(169,"li"),i.vc(170,"Once loaded, notify directive about the outcome"),i.Pb(),i.Qb(171,"li"),i.vc(172," \u2705 Remove loading template and render given element when loading was successful "),i.Pb(),i.Qb(173,"li"),i.vc(174," \u274c Remove loading template and render error template (if provided) when loading was not successful "),i.Pb(),i.Pb(),i.Pb()),2&e&&(i.zb(70),i.gc("highlight",t.codeExampleComponent),i.zb(19),i.gc("highlight",t.codeExampleComponentBinding),i.zb(10),i.gc("highlight",t.codeExampleComponentLazy))},directives:[o.c,a.b],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),e})();const l="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <your-org-customer-editor *axLazyElement=\"url\"></your-org-customer-editor>\n  `\n})\nexport class FeatureComponent {\n  url = 'path/to/your-org-customer-editor.js';\n}\n",s="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <ng-container *ngIf=\"showEditor\">\n      <your-org-customer-editor *axLazyElement=\"url\"></your-org-customer-editor>\n    </ng-container>\n    <button (click)=\"toggleShowEditor()\">Edit customer</button>\n  `\n})\nexport class FeatureComponent {\n  showEditor = false;\n\n  url = 'path/to/your-org-customer-editor.js';\n\n  toggleShowEditor() {\n    this.showEditor = !showEditor;\n  }\n}\n",d="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <your-org-customer-editor *axLazyElement=\"url\"\n      [customerId]=\"customerId\"\n      (customerDataChange)=\"handleCustomerDataChange($event)\">\n    </your-org-customer-editor>\n  `\n})\nexport class FeatureComponent {\n  url = 'path/to/your-org-customer-editor.js';\n\n  customerId = 'C-123-456';\n\n  handleCustomerDataChange(change) {\n    // handle change ...\n  }\n}\n",b=[{path:"",component:c}];let m=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[o.d.forChild(b)],o.d]}),e})(),u=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[o.d,a.c,r.a,m]]}),e})()}}]);