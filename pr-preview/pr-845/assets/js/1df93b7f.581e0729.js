"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4583],{

/***/ 41008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Startpage)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 81 modules
var Layout = __webpack_require__(93372);
// EXTERNAL MODULE: ./packages/components/src/button/ButtonGroup.tsx + 1 modules
var ButtonGroup = __webpack_require__(49764);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 1 modules
var LinkButton = __webpack_require__(56636);
;// ./apps/docs/src/css/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"text":"text_ysZI","code":"code_BaOa","display1":"display1_tOb_","image":"image_HbCB","lightImage":"lightImage_bVF2","darkImage":"darkImage_Zjxi"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 27 modules
var CodeBlock = __webpack_require__(83457);
// EXTERNAL MODULE: ./apps/docs/src/components/icons/index.ts + 2 modules
var icons = __webpack_require__(75575);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/pages/index.tsx
function Startpage(){var baseUrl=useBaseUrl/* default */.Ay;var storybookUrl= false?0:baseUrl('/storybook');return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:"Migrationsverkets designsystem",description:"Midas \xE4r Migrationsverkets designsystem f\xF6r att skapa anv\xE4ndarv\xE4nliga, tillg\xE4ngliga och enhetliga tj\xE4nster och produkter. Det inneh\xE5ller designkomponenter, kod och riktlinjer som underl\xE4ttar utveckling och design.",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container container--fullscreen",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row row--no-gutters",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--6 textColumn",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:index_module.text,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:index_module.display1,children:"Midas"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Midas \xE4r Migrationsverkets designsystem f\xF6r att skapa anv\xE4ndarv\xE4nliga, tillg\xE4ngliga och enhetliga tj\xE4nster och produkter. Det inneh\xE5ller designkomponenter, kod och riktlinjer som underl\xE4ttar utveckling och design."}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e,{"aria-label":"L\xE4nkar",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{as:Link/* default */.A,to:"/get-started/install",children:"Kom ig\xE5ng"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{variant:"secondary",as:Link/* default */.A,to:"/components/accordion",children:"Komponenter"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(LinkButton/* LinkButton */.z,{variant:"tertiary",href:storybookUrl,icon:icons/* EmptyIcon */.F,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(icons/* StorybookIcon */.q,{size:24,color:'#FF4785'}),"Storybook"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock/* default */.A,{className:index_module.code,children:"npm install @midas-ds/components"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--6",children:/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderImage,{})})]})})});}function HeaderImage(){var imgSrc=(0,useBaseUrl/* default */.Ay)('/img/HeroImage.png');var imgSrcDark=(0,useBaseUrl/* default */.Ay)('/img/HeroImageDark.png');return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:index_module.image+" "+index_module.lightImage,src:imgSrc,alt:""}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:index_module.image+" "+index_module.darkImage,src:imgSrcDark,alt:""})]});}

/***/ }),

/***/ 49764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ButtonGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/button/ButtonGroup.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ButtonGroup_module = ({"buttonGroup":"buttonGroup_mVqm"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/button/ButtonGroup.tsx
var _excluded=["children","className","aria-label"];/**
 * Group several buttons together.
 *
 * @interface React.HTMLAttributes<HTMLDivElement>
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var ButtonGroup=function ButtonGroup(_ref){var children=_ref.children,className=_ref.className,ariaLabel=_ref['aria-label'],rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({role:"group","aria-label":ariaLabel,className:(0,clsx/* default */.A)(ButtonGroup_module.buttonGroup,className)},rest,{children:children}));};

/***/ }),

/***/ 75575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/icons/Storybook.tsx
var _excluded=["color","size"];var StorybookIcon=/* @__PURE__ */react.forwardRef(function(_ref,forwardedRef){var _ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"-31.5 0 319 319",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000",width:size,height:size,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("defs",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",id:"path-1",children:' '}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("mask",{id:"mask-2",fill:"white",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{href:"#path-1",children:" "}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{fill:color,"fill-rule":"nonzero",href:"#path-1",children:' '}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",fill:"#FFFFFF","fill-rule":"nonzero",mask:"url(#mask-2)",children:' '}),' ']}),' ']})]});});
;// ./apps/docs/src/components/icons/Empty.tsx
var EmptyIcon=function EmptyIcon(){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:0,width:0});};
;// ./apps/docs/src/components/icons/index.ts


/***/ })

}]);