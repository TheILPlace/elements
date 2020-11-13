(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Xl8Z:function(e,o,n){"use strict";n.r(o),n.d(o,"GettingStartedModule",function(){return b});var t=n("OtPg"),l=n("5iCu"),r=n("tyNb"),a=n("fXoL");let c=(()=>{class e{constructor(){this.codeExampleComponent=m,this.codeExampleModule=s,this.codeExampleAppModule=d,this.codeExampleSharedModule=p}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a.Eb({type:e,selectors:[["demo-getting-started"]],decls:84,vars:4,consts:[[1,"wrapper"],[3,"highlight"]],template:function(e,o){1&e&&(a.Qb(0,"div",0),a.Qb(1,"h1"),a.vc(2,"Getting started"),a.Pb(),a.Qb(3,"p"),a.vc(4," Start using Angular elements or any other web components in your applications by following these 5 steps... "),a.Pb(),a.Qb(5,"ol"),a.Qb(6,"li"),a.vc(7,"Install "),a.Qb(8,"code"),a.vc(9,"npm i @angular-extensions/elements"),a.Pb(),a.Pb(),a.Qb(10,"li"),a.vc(11," Add "),a.Qb(12,"code"),a.vc(13," import { LazyElementsModule } from '@angular-extensions/elements'; "),a.Pb(),a.Pb(),a.Qb(14,"li"),a.vc(15," Append "),a.Qb(16,"code"),a.vc(17,"LazyElementsModule"),a.Pb(),a.vc(18," to the "),a.Qb(19,"code"),a.vc(20,"imports: []"),a.Pb(),a.vc(21," of your "),a.Qb(22,"code"),a.vc(23,"AppModule"),a.Pb(),a.Pb(),a.Qb(24,"li"),a.vc(25," Add new "),a.Qb(26,"code"),a.vc(27,"schemas: []"),a.Pb(),a.vc(28," property with "),a.Qb(29,"code"),a.vc(30,"CUSTOM_ELEMENTS_SCHEMA"),a.Pb(),a.vc(31," value to "),a.Qb(32,"code"),a.vc(33,"@NgModule"),a.Pb(),a.vc(34," decorator of your "),a.Qb(35,"code"),a.vc(36,"AppModule"),a.Pb(),a.Pb(),a.Qb(37,"li"),a.vc(38," Use "),a.Qb(39,"code"),a.vc(40,"*axLazyElement"),a.Pb(),a.vc(41," directive on an element you wish to load and pass in the url of the element bundle "),a.Pb(),a.Pb(),a.Qb(42,"p"),a.vc(43,"That way we get..."),a.Pb(),a.Lb(44,"pre",1),a.Qb(45,"p"),a.vc(46," and can use "),a.Qb(47,"code"),a.vc(48,"*axLazyElement"),a.Pb(),a.vc(49," in the template of our component... "),a.Pb(),a.Lb(50,"pre",1),a.Qb(51,"h2"),a.vc(52,"Using in other (and lazy loaded) modules"),a.Pb(),a.Qb(53,"p"),a.vc(54," Any non-trivial Angular application will usually contain more than a single "),a.Qb(55,"code"),a.vc(56,"AppModule"),a.Pb(),a.vc(57,". "),a.Pb(),a.Qb(58,"p"),a.vc(59,"More so, some of these additional modules could be lazy loaded."),a.Pb(),a.Qb(60,"p"),a.vc(61," Any module which contains components which are using "),a.Qb(62,"code"),a.vc(63,"*axLazyElement"),a.Pb(),a.vc(64," directive has to have "),a.Qb(65,"code"),a.vc(66,"schemas: [CUSTOM_ELEMENTS_SCHEMA]"),a.Pb(),a.vc(67," in its "),a.Qb(68,"code"),a.vc(69,"@NgModule"),a.Pb(),a.vc(70," decorator configuration. Also the module has to either import "),a.Qb(71,"code"),a.vc(72,"LazyElementsModule"),a.Pb(),a.vc(73,". Let's have a look on the following example... "),a.Pb(),a.Lb(74,"pre",1),a.Qb(75,"p"),a.vc(76," Or import other module (most commonly "),a.Qb(77,"code"),a.vc(78,"SharedModule"),a.Pb(),a.vc(79,") which both imports and exports "),a.Qb(80,"code"),a.vc(81,"LazyElementsModule"),a.Pb(),a.vc(82,". "),a.Pb(),a.Lb(83,"pre",1),a.Pb()),2&e&&(a.zb(44),a.gc("highlight",o.codeExampleAppModule),a.zb(6),a.gc("highlight",o.codeExampleComponent),a.zb(24),a.gc("highlight",o.codeExampleModule),a.zb(9),a.gc("highlight",o.codeExampleSharedModule))},directives:[t.b],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),e})();const m="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <some-element *axLazyElement=\"elementUrl\"></some-element>\n  `\n})\nexport class FeatureComponent {\n  elementUrl = 'https://your-org.com/elements/some-element.js';\n}\n",s="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\nimport { FeatureComponent } from './feature-component';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]\n  declarations: [FeatureComponent]\n})\nexport class FeatureModule {}\n",d="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [BrowserModule, LazyElementsModule],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n",p="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  imports: [CommonModule, LazyElementsModule],\n  exports: [CommonModule, LazyElementsModule]\n})\nexport class SharedModule {}\n",i=[{path:"",component:c}];let u=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(o){return new(o||e)},imports:[[r.d.forChild(i)],r.d]}),e})(),b=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(o){return new(o||e)},imports:[[t.c,l.a,u]]}),e})()}}]);