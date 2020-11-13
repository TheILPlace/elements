!function(){function e(e,b){if(!(e instanceof b))throw new TypeError("Cannot call a class as a function")}function b(e,b){for(var t=0;t<b.length;t++){var o=b[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/FlH":function(t,o,c){"use strict";c.r(o),c.d(o,"ApiModule",function(){return s});var n,a,i,d=c("5iCu"),l=c("tyNb"),r=c("fXoL"),P=c("Wp6s"),Q=[{path:"",component:(n=function(){function t(){e(this,t)}var o,c,n;return o=t,(c=[{key:"ngOnInit",value:function(){}}])&&b(o.prototype,c),n&&b(o,n),t}(),n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Eb({type:n,selectors:[["demo-api"]],decls:836,vars:0,consts:[["color","accent"],["href","https://github.com/systemjs/systemjs","target","_blank"],["routerLink","../../../examples/testing"]],template:function(e,b){if(1&e){r.Qb(0,"h1"),r.vc(1,"API"),r.Pb(),r.Qb(2,"section"),r.Qb(3,"h2"),r.vc(4,"LazyElementDirective"),r.Pb(),r.Qb(5,"code",0),r.vc(6,"Directive"),r.Pb(),r.Lb(7,"br"),r.Qb(8,"p"),r.vc(9," A structural directive which lazy loads desired Angular element (or any other webcomponent) "),r.Pb(),r.Qb(10,"mat-card"),r.Qb(11,"table"),r.Qb(12,"thead"),r.Qb(13,"th"),r.vc(14,"Property"),r.Pb(),r.Qb(15,"th"),r.vc(16,"Description"),r.Pb(),r.Pb(),r.Qb(17,"tbody"),r.Qb(18,"tr"),r.Qb(19,"td"),r.Qb(20,"pre"),r.vc(21,"selector"),r.Pb(),r.Pb(),r.Qb(22,"td"),r.Qb(23,"p"),r.vc(24," The selector is "),r.Qb(25,"code"),r.vc(26,"axLazyElement"),r.Pb(),r.vc(27," which should be used with "),r.Qb(28,"code"),r.vc(29,"*"),r.Pb(),r.vc(30," as in "),r.Qb(31,"code"),r.vc(32,"*axLazyElement"),r.Pb(),r.vc(33," because it is a structural directive. "),r.Pb(),r.Pb(),r.Pb(),r.Qb(34,"tr"),r.Qb(35,"td"),r.Qb(36,"pre"),r.vc(37,"@Input('axLazyElement')\nurl: string;"),r.Pb(),r.Pb(),r.Qb(38,"td"),r.Qb(39,"p"),r.vc(40," The url of the element bundle (or module). This is the main property which corresponds to the main directive selector. "),r.Pb(),r.Qb(41,"ul"),r.Qb(42,"li"),r.vc(43," Inline string value - "),r.Qb(44,"code"),r.vc(45,"<some-element *axLazyElement=\"'https://elements.com/some-element'\"></some-element>"),r.Pb(),r.Pb(),r.Qb(46,"li"),r.vc(47," Component property reference - "),r.Qb(48,"code"),r.vc(49,'<some-element *axLazyElement="url"></some-element>'),r.Pb(),r.Pb(),r.Qb(50,"code",0),r.vc(51,"Pre-configurable"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(52,"tr"),r.Qb(53,"td"),r.Qb(54,"pre"),r.vc(55,"@Input('axLazyElementLoadingTemplate')\nloadingTemplateRef: TemplateRef<any>;"),r.Pb(),r.Pb(),r.Qb(56,"td"),r.Qb(57,"p"),r.vc(58," Reference to Angular template which will be displayed before the element bundle (or module) was loaded. To show loader we can create following template "),r.Qb(59,"code"),r.vc(60,"<ng-template #loading>Loading...</ng-template>"),r.Pb(),r.vc(61," and then we have to reference it "),r.Qb(62,"code"),r.vc(63,'<some-element *axLazyElement="url; loadingTemplate: loading"></some-element>'),r.Pb(),r.Pb(),r.Qb(64,"code",0),r.vc(65,"Optional"),r.Pb(),r.vc(66,"\xa0"),r.Qb(67,"code",0),r.vc(68,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(69,"tr"),r.Qb(70,"td"),r.Qb(71,"pre"),r.vc(72,"@Input('axLazyElementErrorTemplate')\nerrorTemplateRef: TemplateRef<any>;"),r.Pb(),r.Pb(),r.Qb(73,"td"),r.Qb(74,"p"),r.vc(75," Reference to Angular template which will be hich will be displayed before the element bundle (or module) loading failed. To show error message we can create following template "),r.Qb(76,"code"),r.vc(77,"<ng-template #error>Loading failed...</ng-template>"),r.Pb(),r.vc(78," and then we have to reference it "),r.Qb(79,"code"),r.vc(80,'<some-element *axLazyElement="url; errorTemplate: error"></some-element>'),r.Pb(),r.Pb(),r.Qb(81,"code",0),r.vc(82,"Optional"),r.Pb(),r.vc(83,"\xa0"),r.Qb(84,"code",0),r.vc(85,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(86,"tr"),r.Qb(87,"td"),r.Qb(88,"pre"),r.vc(89,"@Input('axLazyElementModule')\nisModule: boolean;"),r.Pb(),r.Pb(),r.Qb(90,"td"),r.Qb(91,"p"),r.vc(92," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),r.Qb(93,"code"),r.vc(94,"<script>"),r.Pb(),r.vc(95," tag which will get "),r.Qb(96,"code"),r.vc(97,'type="module"'),r.Pb(),r.vc(98," in case this flag was set to true. The flag can be set using "),r.Qb(99,"code"),r.vc(100,'<some-element *axLazyElement="url; module: true"></some-element>'),r.Pb(),r.Pb(),r.Qb(101,"code",0),r.vc(102,"Optional"),r.Pb(),r.vc(103,"\xa0"),r.Qb(104,"code",0),r.vc(105,"Default: false"),r.Pb(),r.Qb(106,"code",0),r.vc(107,"Pre-configurable"),r.Pb(),r.Pb(),r.Pb(),r.Qb(108,"tr"),r.Qb(109,"td"),r.Qb(110,"pre"),r.vc(111,"@Input('axLazyElementImportMap')\nimportMap: boolean;"),r.Pb(),r.Pb(),r.Qb(112,"td"),r.Qb(113,"p"),r.vc(114," Flag that specifies if the element url should be resolved using import maps. If set to true an instance of "),r.Qb(115,"a",1),r.vc(116,"SystemJS"),r.Pb(),r.vc(117," needs to exist in the application. "),r.Qb(118,"code"),r.vc(119,"System.resolve"),r.Pb(),r.vc(120," is used in order to find the correct URL to load the bundle file containing the element definition. The flag can be set using "),r.Qb(121,"code"),r.vc(122,'<some-element *axLazyElement="url; importMap: true"></some-element>'),r.Pb(),r.Pb(),r.Qb(123,"code",0),r.vc(124,"Optional"),r.Pb(),r.vc(125,"\xa0"),r.Qb(126,"code",0),r.vc(127,"Default: false"),r.Pb(),r.Qb(128,"code",0),r.vc(129,"Pre-configurable"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(130,"mat-card"),r.Qb(131,"table"),r.Qb(132,"thead"),r.Qb(133,"th"),r.vc(134,"Function"),r.Pb(),r.Qb(135,"th"),r.vc(136,"Description"),r.Pb(),r.Pb(),r.Qb(137,"tbody"),r.Qb(138,"tr"),r.Qb(139,"td"),r.Qb(140,"pre"),r.vc(141,"destroyEmbeddedView()"),r.Pb(),r.Pb(),r.Qb(142,"td"),r.Qb(143,"p"),r.vc(144," The "),r.Qb(145,"code"),r.vc(146,"destroyEmbeddedView"),r.Pb(),r.vc(147," is a public method which can be called by parent component to destroy element's embedded view on demand. "),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(148,"section"),r.Qb(149,"h2"),r.vc(150,"LazyElementModule"),r.Pb(),r.Qb(151,"code",0),r.vc(152,"Module"),r.Pb(),r.Lb(153,"br"),r.Qb(154,"p"),r.vc(155," An Angular module which exports "),r.Qb(156,"code"),r.vc(157,"*axLazyElement"),r.Pb(),r.vc(158," and "),r.Qb(159,"code"),r.vc(160,"*axLazyElementDynamic"),r.Pb(),r.vc(161," directives so it has to be imported in other Angular modules which want to use these directives in the templates of their components. Module can be also pre-configured using "),r.Qb(162,"code"),r.vc(163,"forRoot()"),r.Pb(),r.vc(164," and "),r.Qb(165,"code"),r.vc(166,"forFeature()"),r.Pb(),r.vc(167," static methods. "),r.Pb(),r.Qb(168,"mat-card"),r.Qb(169,"table"),r.Qb(170,"thead"),r.Qb(171,"th"),r.vc(172,"Function"),r.Pb(),r.Qb(173,"th"),r.vc(174,"Description"),r.Pb(),r.Pb(),r.Qb(175,"tbody"),r.Qb(176,"tr"),r.Qb(177,"td"),r.Qb(178,"pre"),r.vc(179,"forRoot(options: LazyElementModuleRootOptions)"),r.Pb(),r.Pb(),r.Qb(180,"td"),r.Qb(181,"p"),r.vc(182," The "),r.Qb(183,"code"),r.vc(184,"forRoot()"),r.Pb(),r.vc(185," static method which accepts options of "),r.Qb(186,"code"),r.vc(187,"LazyElementModuleRootOptions"),r.Pb(),r.vc(188," type "),r.Lb(189,"br"),r.Qb(190,"code",0),r.vc(191,"Optional"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(192,"tr"),r.Qb(193,"td"),r.Qb(194,"pre"),r.vc(195,"forFeature(options: LazyElementModuleOptions)"),r.Pb(),r.Pb(),r.Qb(196,"td"),r.Qb(197,"p"),r.vc(198," The "),r.Qb(199,"code"),r.vc(200,"forFeature()"),r.Pb(),r.vc(201," static method which accepts options of "),r.Qb(202,"code"),r.vc(203,"LazyElementModuleOptions"),r.Pb(),r.vc(204," type "),r.Lb(205,"br"),r.Qb(206,"code",0),r.vc(207,"Optional"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(208,"section"),r.Qb(209,"h2"),r.vc(210,"LazyElementModuleRootOptions"),r.Pb(),r.Qb(211,"code",0),r.vc(212,"Interface"),r.Pb(),r.Lb(213,"br"),r.Qb(214,"p"),r.vc(215," Type of an option object that can be passed to static "),r.Qb(216,"code"),r.vc(217,"forRoot()"),r.Pb(),r.vc(218," method of "),r.Qb(219,"code"),r.vc(220,"LazyElementModule"),r.Pb(),r.vc(221,". "),r.Pb(),r.Qb(222,"mat-card"),r.Qb(223,"table"),r.Qb(224,"thead"),r.Qb(225,"th"),r.vc(226,"Property"),r.Pb(),r.Qb(227,"th"),r.vc(228,"Description"),r.Pb(),r.Pb(),r.Qb(229,"tbody"),r.Qb(230,"tr"),r.Qb(231,"td"),r.Qb(232,"pre"),r.vc(233,"elementConfigs: ElementConfig[]"),r.Pb(),r.Pb(),r.Qb(234,"td"),r.Qb(235,"p"),r.vc(236," Optional array of "),r.Qb(237,"code"),r.vc(238,"ElementConfig"),r.Pb(),r.vc(239,"... "),r.Lb(240,"br"),r.Qb(241,"code",0),r.vc(242,"Optional"),r.Pb(),r.vc(243,"\xa0"),r.Qb(244,"code",0),r.vc(245,"Default: []"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(246,"tr"),r.Qb(247,"td"),r.Qb(248,"pre"),r.vc(249,"rootOptions: LazyElementRootOptions"),r.Pb(),r.Pb(),r.Qb(250,"td"),r.Qb(251,"p"),r.vc(252," Optional object of "),r.Qb(253,"code"),r.vc(254,"LazyElementRootOptions"),r.Pb(),r.vc(255,"... "),r.Lb(256,"br"),r.Qb(257,"code",0),r.vc(258,"Optional"),r.Pb(),r.vc(259,"\xa0"),r.Qb(260,"code",0),r.vc(261,"Default: { }"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(262,"section"),r.Qb(263,"h2"),r.vc(264,"LazyElementRootOptions"),r.Pb(),r.Qb(265,"code",0),r.vc(266,"Interface"),r.Pb(),r.Lb(267,"br"),r.Qb(268,"p"),r.vc(269," Type of an option object that can be passed as the "),r.Qb(270,"code"),r.vc(271,"rootOptions"),r.Pb(),r.vc(272," of the "),r.Qb(273,"code"),r.vc(274,"LazyElementModuleRootOptions"),r.Pb(),r.vc(275," into the "),r.Qb(276,"code"),r.vc(277,"forRoot()"),r.Pb(),r.vc(278," method of "),r.Qb(279,"code"),r.vc(280,"LazyElementModule"),r.Pb(),r.vc(281,". These options will be applied to every element loaded using "),r.Qb(282,"code"),r.vc(283,"*axLazyElement"),r.Pb(),r.vc(284," or "),r.Qb(285,"code"),r.vc(286,"*axLazyElementDynamic"),r.Pb(),r.vc(287," directives. These options can be overridden by the element configuration in "),r.Qb(288,"code"),r.vc(289,"forFeature()"),r.Pb(),r.vc(290," and lastly by the inline configuration of "),r.Qb(291,"code"),r.vc(292,"*axLazyElement"),r.Pb(),r.vc(293," directive. "),r.Pb(),r.Qb(294,"mat-card"),r.Qb(295,"table"),r.Qb(296,"thead"),r.Qb(297,"th"),r.vc(298,"Property"),r.Pb(),r.Qb(299,"th"),r.vc(300,"Description"),r.Pb(),r.Pb(),r.Qb(301,"tbody"),r.Qb(302,"tr"),r.Qb(303,"td"),r.Qb(304,"pre"),r.vc(305,"loadingComponent: Type<any>"),r.Pb(),r.Pb(),r.Qb(306,"td"),r.Qb(307,"p"),r.vc(308," Component class to be displayed during element loading (similar to "),r.Qb(309,"code"),r.vc(310,"loadingTemplate"),r.Pb(),r.vc(311," that can be specified inline in the template, eg "),r.Qb(312,"code"),r.vc(313,'*axLazyElement="url; loadingTemplate: loading;"'),r.Pb(),r.vc(314,") "),r.Pb(),r.Qb(315,"code",0),r.vc(316,"Optional"),r.Pb(),r.vc(317,"\xa0"),r.Qb(318,"code",0),r.vc(319,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(320,"tr"),r.Qb(321,"td"),r.Qb(322,"pre"),r.vc(323,"errorComponent: Type<any>"),r.Pb(),r.Pb(),r.Qb(324,"td"),r.Qb(325,"p"),r.vc(326," Component class to be displayed after element loading failed (similar to "),r.Qb(327,"code"),r.vc(328,"errorTemplate"),r.Pb(),r.vc(329," that can be specified inline in the template, eg "),r.Qb(330,"code"),r.vc(331,'*axLazyElement="url; errorTemplate: error;"'),r.Pb(),r.vc(332,") "),r.Pb(),r.Qb(333,"code",0),r.vc(334,"Optional"),r.Pb(),r.vc(335,"\xa0"),r.Qb(336,"code",0),r.vc(337,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(338,"tr"),r.Qb(339,"td"),r.Qb(340,"pre"),r.vc(341,"isModule: boolean"),r.Pb(),r.Pb(),r.Qb(342,"td"),r.Qb(343,"p"),r.vc(344," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),r.Qb(345,"code"),r.vc(346,"<script>"),r.Pb(),r.vc(347," tag which will get "),r.Qb(348,"code"),r.vc(349,'type="module"'),r.Pb(),r.vc(350," in case this flag was set to true. "),r.Pb(),r.Qb(351,"code",0),r.vc(352,"Optional"),r.Pb(),r.vc(353,"\xa0"),r.Qb(354,"code",0),r.vc(355,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(356,"tr"),r.Qb(357,"td"),r.Qb(358,"pre"),r.vc(359,"importMap: boolean"),r.Pb(),r.Pb(),r.Qb(360,"td"),r.Qb(361,"p"),r.vc(362," Flag that specifies if the element url should be resolved using import maps. If set to true an instance of "),r.Qb(363,"a",1),r.vc(364,"SystemJS"),r.Pb(),r.vc(365," needs to exist in the application. "),r.Qb(366,"code"),r.vc(367,"System.resolve"),r.Pb(),r.vc(368," is used in order to find the correct URL to load the bundle file containing the element definition. "),r.Pb(),r.Qb(369,"code",0),r.vc(370,"Optional"),r.Pb(),r.vc(371,"\xa0"),r.Qb(372,"code",0),r.vc(373,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(374,"tr"),r.Qb(375,"td"),r.Qb(376,"pre"),r.vc(377,"preload: boolean"),r.Pb(),r.Pb(),r.Qb(378,"td"),r.Qb(379,"p"),r.vc(380," Flag that specifies if the all the modules should be preloaded "),r.Pb(),r.Qb(381,"code",0),r.vc(382,"Optional"),r.Pb(),r.vc(383,"\xa0"),r.Qb(384,"code",0),r.vc(385,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(386,"tr"),r.Qb(387,"td"),r.Qb(388,"pre"),r.vc(389,"hooksConfig: HooksConfig"),r.Pb(),r.Pb(),r.Qb(390,"td"),r.Qb(391,"p"),r.vc(392," Global hooks configuration for all elements. Any loaded element will run hooks configured here unless some of them were overriden in "),r.Qb(393,"code"),r.vc(394,"ElementConfig"),r.Pb(),r.vc(395,". "),r.Pb(),r.Qb(396,"code",0),r.vc(397,"Optional"),r.Pb(),r.vc(398,"\xa0"),r.Qb(399,"code",0),r.vc(400,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(401,"section"),r.Qb(402,"h2"),r.vc(403,"LazyElementModuleOptions"),r.Pb(),r.Qb(404,"code",0),r.vc(405,"Interface"),r.Pb(),r.Lb(406,"br"),r.Qb(407,"p"),r.vc(408," Type of an option object that can be passed to static "),r.Qb(409,"code"),r.vc(410,"forFeature()"),r.Pb(),r.vc(411," method of "),r.Qb(412,"code"),r.vc(413,"LazyElementModule"),r.Pb(),r.vc(414,". "),r.Pb(),r.Qb(415,"mat-card"),r.Qb(416,"table"),r.Qb(417,"thead"),r.Qb(418,"th"),r.vc(419,"Property"),r.Pb(),r.Qb(420,"th"),r.vc(421,"Description"),r.Pb(),r.Pb(),r.Qb(422,"tbody"),r.Qb(423,"tr"),r.Qb(424,"td"),r.Qb(425,"pre"),r.vc(426,"elementConfigs: ElementConfig[]"),r.Pb(),r.Pb(),r.Qb(427,"td"),r.Qb(428,"p"),r.vc(429," Optional array of "),r.Qb(430,"code"),r.vc(431,"ElementConfig"),r.Pb(),r.vc(432,"... "),r.Lb(433,"br"),r.Qb(434,"code",0),r.vc(435,"Optional"),r.Pb(),r.vc(436,"\xa0"),r.Qb(437,"code",0),r.vc(438,"Default: []"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(439,"section"),r.Qb(440,"h2"),r.vc(441,"ElementConfig"),r.Pb(),r.Qb(442,"code",0),r.vc(443,"Interface"),r.Pb(),r.Lb(444,"br"),r.Qb(445,"p"),r.vc(446," The element config used to pre-configure "),r.Qb(447,"code"),r.vc(448,"LazyElementModule"),r.Pb(),r.vc(449," so that we do not have to specify url (and other supported options) inline inside of the "),r.Qb(450,"code"),r.vc(451,"*axLazyElement"),r.Pb(),r.vc(452," and "),r.Qb(453,"code"),r.vc(454,"*axLazyElementDynamic"),r.Pb(),r.vc(455," directives. The configs are matched to particular elements by the tag. The elements are still loaded lazily even though they are preconfigured in the module during application startup... "),r.Pb(),r.Qb(456,"mat-card"),r.Qb(457,"table"),r.Qb(458,"thead"),r.Qb(459,"th"),r.vc(460,"Property"),r.Pb(),r.Qb(461,"th"),r.vc(462,"Description"),r.Pb(),r.Pb(),r.Qb(463,"tbody"),r.Qb(464,"tr"),r.Qb(465,"td"),r.Qb(466,"pre"),r.vc(467,"tag: string"),r.Pb(),r.Pb(),r.Qb(468,"td"),r.Qb(469,"p"),r.vc(470,"Tag of an element (eg: "),r.Qb(471,"code"),r.vc(472,"some-element"),r.Pb(),r.vc(473,")"),r.Pb(),r.Pb(),r.Pb(),r.Qb(474,"tr"),r.Qb(475,"td"),r.Qb(476,"pre"),r.vc(477,"url: string"),r.Pb(),r.Pb(),r.Qb(478,"td"),r.Qb(479,"p"),r.vc(480," The url of an element bundle or ES module (eg: "),r.Qb(481,"code"),r.vc(482,"https://my-org.com/elements/some-element.js"),r.Pb(),r.vc(483,") "),r.Pb(),r.Pb(),r.Pb(),r.Qb(484,"tr"),r.Qb(485,"td"),r.Qb(486,"pre"),r.vc(487,"isModule: boolean"),r.Pb(),r.Pb(),r.Qb(488,"td"),r.Qb(489,"p"),r.vc(490," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),r.Qb(491,"code"),r.vc(492,"<script>"),r.Pb(),r.vc(493," tag which will get "),r.Qb(494,"code"),r.vc(495,'type="module"'),r.Pb(),r.vc(496," in case this flag was set to true. "),r.Pb(),r.Qb(497,"code",0),r.vc(498,"Optional"),r.Pb(),r.vc(499,"\xa0"),r.Qb(500,"code",0),r.vc(501,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(502,"tr"),r.Qb(503,"td"),r.Qb(504,"pre"),r.vc(505,"importMap: boolean"),r.Pb(),r.Pb(),r.Qb(506,"td"),r.Qb(507,"p"),r.vc(508," Flag that specifies if the element url should be resolved using import maps. If set to true an instance of "),r.Qb(509,"a",1),r.vc(510,"SystemJS"),r.Pb(),r.vc(511," needs to exist in the application. "),r.Qb(512,"code"),r.vc(513,"System.resolve"),r.Pb(),r.vc(514," is used in order to find the correct URL to load the bundle file containing the element definition. "),r.Pb(),r.Qb(515,"code",0),r.vc(516,"Optional"),r.Pb(),r.vc(517,"\xa0"),r.Qb(518,"code",0),r.vc(519,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(520,"tr"),r.Qb(521,"td"),r.Qb(522,"pre"),r.vc(523,"loadingComponent: Type<any>"),r.Pb(),r.Pb(),r.Qb(524,"td"),r.Qb(525,"p"),r.vc(526," Component class to be displayed during element loading (similar to "),r.Qb(527,"code"),r.vc(528,"loadingTemplate"),r.Pb();r.vc(529," that can be specified inline in the template, eg "),r.Qb(530,"code"),r.vc(531,'*axLazyElement="url; loadingTemplate: loading;"'),r.Pb(),r.vc(532,") "),r.Pb(),r.Qb(533,"code",0),r.vc(534,"Optional"),r.Pb(),r.vc(535,"\xa0"),r.Qb(536,"code",0),r.vc(537,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(538,"tr"),r.Qb(539,"td"),r.Qb(540,"pre"),r.vc(541,"errorComponent: Type<any>"),r.Pb(),r.Pb(),r.Qb(542,"td"),r.Qb(543,"p"),r.vc(544," Component class to be displayed after element loading failed (similar to "),r.Qb(545,"code"),r.vc(546,"errorTemplate"),r.Pb(),r.vc(547," that can be specified inline in the template, eg "),r.Qb(548,"code"),r.vc(549,'*axLazyElement="url; errorTemplate: error;"'),r.Pb(),r.vc(550,") "),r.Pb(),r.Qb(551,"code",0),r.vc(552,"Optional"),r.Pb(),r.vc(553,"\xa0"),r.Qb(554,"code",0),r.vc(555,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(556,"tr"),r.Qb(557,"td"),r.Qb(558,"pre"),r.vc(559,"preload: boolean"),r.Pb(),r.Pb(),r.Qb(560,"td"),r.Qb(561,"p"),r.vc(562,"Flag that specifies if the element is preloaded."),r.Pb(),r.Qb(563,"code",0),r.vc(564,"Optional"),r.Pb(),r.vc(565,"\xa0"),r.Qb(566,"code",0),r.vc(567,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(568,"tr"),r.Qb(569,"td"),r.Qb(570,"pre"),r.vc(571,"hooks: HooksConfig"),r.Pb(),r.Pb(),r.Qb(572,"td"),r.Qb(573,"p"),r.vc(574," Hooks configuration for the element. Any hook specified here will overwrite corresponding root hook for the element. See "),r.Qb(575,"code"),r.vc(576,"HooksConfig"),r.Pb(),r.vc(577,". "),r.Pb(),r.Qb(578,"code",0),r.vc(579,"Optional"),r.Pb(),r.vc(580,"\xa0"),r.Qb(581,"code",0),r.vc(582,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(583,"section"),r.Qb(584,"h2"),r.vc(585,"HooksConfig"),r.Pb(),r.Qb(586,"code",0),r.vc(587,"Interface"),r.Pb(),r.Lb(588,"br"),r.Qb(589,"p"),r.vc(590," Hooks for running custom logic as part of the element's lifecycle. See "),r.Qb(591,"code"),r.vc(592,"ElementConfig"),r.Pb(),r.vc(593," and "),r.Qb(594,"code"),r.vc(595,"LazyElementRootOptions"),r.Pb(),r.vc(596,". "),r.Pb(),r.Qb(597,"mat-card"),r.Qb(598,"table"),r.Qb(599,"thead"),r.Qb(600,"th"),r.vc(601,"Property"),r.Pb(),r.Qb(602,"th"),r.vc(603,"Description"),r.Pb(),r.Pb(),r.Qb(604,"tbody"),r.Qb(605,"tr"),r.Qb(606,"td"),r.Qb(607,"pre"),r.vc(608,"beforeLoad: Hook"),r.Pb(),r.Pb(),r.Qb(609,"td"),r.Qb(610,"p"),r.vc(611," This hook will run before the browser starts the element's download. If the provided hook returns a "),r.Qb(612,"code"),r.vc(613,"Promise"),r.Pb(),r.vc(614," the element's download will be postponed until the Promise is resolved. "),r.Pb(),r.Qb(615,"code",0),r.vc(616,"Optional"),r.Pb(),r.vc(617,"\xa0"),r.Qb(618,"code",0),r.vc(619,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Qb(620,"tr"),r.Qb(621,"td"),r.Qb(622,"pre"),r.vc(623,"afterLoad: Hook"),r.Pb(),r.Pb(),r.Qb(624,"td"),r.Qb(625,"p"),r.vc(626," This hook will run after the element's download has been completed. If the provided hook returns a "),r.Qb(627,"code"),r.vc(628,"Promise"),r.Pb(),r.vc(629," the element's insertion into the corresponding Angular's view will be postponed until the Promise is resolved. "),r.Pb(),r.Qb(630,"code",0),r.vc(631,"Optional"),r.Pb(),r.vc(632,"\xa0"),r.Qb(633,"code",0),r.vc(634,"Default: undefined"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(635,"section"),r.Qb(636,"h2"),r.vc(637,"Hook"),r.Pb(),r.Qb(638,"code",0),r.vc(639,"Type"),r.Pb(),r.Lb(640,"br"),r.Qb(641,"p"),r.vc(642,"Hook that can be run as part of "),r.Qb(643,"code"),r.vc(644,"HooksConfig"),r.Pb(),r.vc(645,"."),r.Pb(),r.Qb(646,"mat-card"),r.Qb(647,"table"),r.Qb(648,"thead"),r.Qb(649,"th"),r.vc(650,"Value"),r.Pb(),r.Qb(651,"th"),r.vc(652,"Description"),r.Pb(),r.Pb(),r.Qb(653,"tbody"),r.Qb(654,"tr"),r.Qb(655,"td"),r.Qb(656,"pre"),r.vc(657,"(tag: string) => Promise<void> \u2758 <void>"),r.Pb(),r.Pb(),r.Qb(658,"td"),r.Qb(659,"p"),r.vc(660," Provided function will be called at the appropriate time in the element's lifecycle. If the function returns a "),r.Qb(661,"code"),r.vc(662,"Promise"),r.Pb(),r.vc(663," the library will wait for its' resolution before proceeding. "),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(664,"section"),r.Qb(665,"h2"),r.vc(666,"LazyElementsLoaderService"),r.Pb(),r.Qb(667,"code",0),r.vc(668,"Service"),r.Pb(),r.Lb(669,"br"),r.Qb(670,"p"),r.vc(671," A service used for loading the Angular element (or any other webcomponent) "),r.Pb(),r.Qb(672,"mat-card"),r.Qb(673,"table"),r.Qb(674,"thead"),r.Qb(675,"th"),r.vc(676,"Method"),r.Pb(),r.Qb(677,"th"),r.vc(678,"Description"),r.Pb(),r.Pb(),r.Qb(679,"tbody"),r.Qb(680,"tr"),r.Qb(681,"td"),r.Qb(682,"pre"),r.vc(683,"preload(tags? : string[]): void"),r.Pb(),r.Pb(),r.Qb(684,"td"),r.Qb(685,"p"),r.vc(686," Preloads the specified tags which are preconfigured using "),r.Qb(687,"code"),r.vc(688,"forRoot"),r.Pb(),r.vc(689," and "),r.Qb(690,"code"),r.vc(691,"forFeature"),r.Pb(),r.vc(692,". If "),r.Qb(693,"code"),r.vc(694,"tags"),r.Pb(),r.vc(695," is "),r.Qb(696,"code"),r.vc(697,"undefined|null"),r.Pb(),r.vc(698," preload all the configured tags. "),r.Lb(699,"br"),r.vc(700," Parameters: "),r.Lb(701,"br"),r.vc(702," tags "),r.Qb(703,"code",0),r.vc(704,"Optional"),r.Pb(),r.vc(705,"\xa0"),r.Qb(706,"code",0),r.vc(707,"Default: undefined"),r.Pb(),r.Lb(708,"br"),r.vc(709," returns: "),r.Qb(710,"code",0),r.vc(711,"void"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(712,"section"),r.Qb(713,"h2"),r.vc(714,"LAZY_ELEMENTS_REGISTRY"),r.Pb(),r.Qb(715,"code",0),r.vc(716,"Token"),r.Pb(),r.Lb(717,"br"),r.Qb(718,"p"),r.vc(719," A token used to override default lazy elements registry which is used to prevent multiple downloads of the same element Javascript bundle... "),r.Pb(),r.Qb(720,"mat-card"),r.Qb(721,"table"),r.Qb(722,"thead"),r.Qb(723,"th"),r.vc(724,"Value"),r.Pb(),r.Qb(725,"th"),r.vc(726,"Description"),r.Pb(),r.Pb(),r.Qb(727,"tbody"),r.Qb(728,"tr"),r.Qb(729,"td"),r.Qb(730,"pre"),r.vc(731,"{\n  provide: LAZY_ELEMENTS_REGISTRY,\n  useClass: YourRegistryImplementation\n}"),r.Pb(),r.Pb(),r.Qb(732,"td"),r.Qb(733,"p"),r.vc(734," Overrides default lazy elements registry implementation which can be useful when using library in the multiple apps (or elements) on a single page to prevent multiple downloads of the same element Javascript bundle. The new implementation has to implement "),r.Qb(735,"code"),r.vc(736,"LazyElementsRegistry"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(737,"section"),r.Qb(738,"h2"),r.vc(739,"LazyElementsRegistry"),r.Pb(),r.Qb(740,"code",0),r.vc(741,"Interface"),r.Pb(),r.Lb(742,"br"),r.Qb(743,"p"),r.vc(744," An interface which has to be implemented by custom lazy elements registry. The default lazy element registry used by the library out of the box is "),r.Qb(745,"code"),r.vc(746,"Map<string, Promise<void>"),r.Pb(),r.Pb(),r.Qb(747,"mat-card"),r.Qb(748,"table"),r.Qb(749,"thead"),r.Qb(750,"th"),r.vc(751,"Property"),r.Pb(),r.Qb(752,"th"),r.vc(753,"Description"),r.Pb(),r.Pb(),r.Qb(754,"tbody"),r.Qb(755,"tr"),r.Qb(756,"td"),r.Qb(757,"pre"),r.vc(758,"get: (url: string) => Promise<void>"),r.Pb(),r.Pb(),r.Qb(759,"td"),r.Qb(760,"p"),r.vc(761," Retrieve loading state ("),r.Qb(762,"code"),r.vc(763,"Promise"),r.Pb(),r.vc(764,") of an element bundle identified by the "),r.Qb(765,"code"),r.vc(766,"url"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(767,"tr"),r.Qb(768,"td"),r.Qb(769,"pre"),r.vc(770,"set: (url: string, notifier: Promise<void>) => void"),r.Pb(),r.Pb(),r.Qb(771,"td"),r.Qb(772,"p"),r.vc(773," Store loading state ("),r.Qb(774,"code"),r.vc(775,"Promise"),r.Pb(),r.vc(776,") of an element bundle identified by the "),r.Qb(777,"code"),r.vc(778,"url"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(779,"tr"),r.Qb(780,"td"),r.Qb(781,"pre"),r.vc(782,"has: (url: string) => boolean"),r.Pb(),r.Pb(),r.Qb(783,"td"),r.Qb(784,"p"),r.vc(785," Check if registry already contains loading state ("),r.Qb(786,"code"),r.vc(787,"Promise"),r.Pb(),r.vc(788,") of an element bundle identified by the "),r.Qb(789,"code"),r.vc(790,"url"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(791,"section"),r.Qb(792,"h2"),r.vc(793,"LazyElementTestingModule"),r.Pb(),r.Qb(794,"code",0),r.vc(795,"Module"),r.Pb(),r.Qb(796,"code"),r.vc(797,"@angular-extensions/elements/testing"),r.Pb(),r.Lb(798,"br"),r.Qb(799,"p"),r.vc(800," The testing module is used in Angular unit-tests to help mock lazy-loaded elements with mock components provided by the test. Check out how to use it in the "),r.Qb(801,"a",2),r.vc(802,"testing example"),r.Pb(),r.vc(803,". "),r.Pb(),r.Qb(804,"mat-card"),r.Qb(805,"table"),r.Qb(806,"thead"),r.Qb(807,"th"),r.vc(808,"Declarable"),r.Pb(),r.Qb(809,"th"),r.vc(810,"Description"),r.Pb(),r.Pb(),r.Qb(811,"tbody"),r.Qb(812,"tr"),r.Qb(813,"td"),r.Qb(814,"pre"),r.vc(815,"LazyElementTestingDirective "),r.Qb(816,"code"),r.vc(817,"*axLazyElement"),r.Pb(),r.Pb(),r.Pb(),r.Qb(818,"td"),r.Qb(819,"p"),r.vc(820," Overrides default behavior of "),r.Qb(821,"code"),r.vc(822,"*axLazyElement"),r.Pb(),r.vc(823," by displaying element immediately without trying to lazy load it, display loading or error... "),r.Pb(),r.Pb(),r.Pb(),r.Qb(824,"tr"),r.Qb(825,"td"),r.Qb(826,"pre"),r.vc(827,"LazyElementDynamicTestingDirective "),r.Qb(828,"code"),r.vc(829,"*axLazyElementDynamic"),r.Pb(),r.Pb(),r.Pb(),r.Qb(830,"td"),r.Qb(831,"p"),r.vc(832," Overrides default behavior of "),r.Qb(833,"code"),r.vc(834,"*axLazyElementDynamic"),r.Pb(),r.vc(835," by displaying element immediately without trying to lazy load it, display loading or error... "),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()}},directives:[P.a,l.c],styles:["h2[_ngcontent-%COMP%]{display:inline-block;font-weight:700;margin:0 10px 10px 0}mat-card[_ngcontent-%COMP%]{padding:0;margin-bottom:80px;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:15px 20px}table[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{opacity:.8}"]}),n)}],v=((i=function b(){e(this,b)}).\u0275mod=r.Ib({type:i}),i.\u0275inj=r.Hb({factory:function(e){return new(e||i)},imports:[[l.d.forChild(Q)],l.d]}),i),s=((a=function b(){e(this,b)}).\u0275mod=r.Ib({type:a}),a.\u0275inj=r.Hb({factory:function(e){return new(e||a)},imports:[[d.a,v]]}),a)}}])}();