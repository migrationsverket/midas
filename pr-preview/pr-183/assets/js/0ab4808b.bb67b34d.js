(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1982],{

/***/ 61443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_link_button_mdx_0ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-link-button-mdx-0ab.json
const site_docs_components_link_button_mdx_0ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link-button","title":"LinkButton","description":"Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.","source":"@site/docs/components/link-button.mdx","sourceDirName":"components","slug":"/components/link-button","permalink":"/pr-preview/pr-183/components/link-button","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LinkButton","description":"Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx
var propsTable = __webpack_require__(91117);
// EXTERNAL MODULE: ./packages/link-button/src/index.ts + 3 modules
var src = __webpack_require__(9687);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./apps/docs/static/data/link.json
var data_link = __webpack_require__(29169);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/link-button.mdx


const frontMatter = {
	title: 'LinkButton',
	description: 'Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};












const toc = [{
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'LinkButton',
      info: data_link,
      friendlyName: 'Länkknapp',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/Link.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/link-button\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/link-button\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/link-button\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { LinkButton } from '@midas-ds/link-button'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        LinkButton: src/* LinkButton */.z
      },
      children: `<Flex>
  <FlexItem col={12}>
    <LinkButton href="#">Starta tjänst</LinkButton>
  </FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/buttons-and-links",
        children: "Knappar och länkar"
      })]
    }), "\n", (0,jsx_runtime.jsx)(getComponentMetaData/* ComponentFooter */.p, {
      info: data_link
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader),
/* harmony export */   p: () => (/* binding */ ComponentFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95093);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _midas_ds_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85560);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86025);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
var ComponentFooter=function ComponentFooter(_ref){var info=_ref.info,children=_ref.children;if(!info)return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{id:"dependencies",children:"Beroenden"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul",{style:{marginBottom:0},children:(info==null?void 0:info.dependencies)&&Object.keys(info.dependencies).map(function(k,i){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li",{children:k+"@"+info.dependencies[k]},'dep'+i);})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul",{children:(info==null?void 0:info.peerDependencies)&&Object.keys(info.peerDependencies).map(function(k,i){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li",{children:k+"@"+info.peerDependencies[k]},'dep'+i);})})]});};var ComponentHeader=function ComponentHeader(_ref2){var name=_ref2.name,info=_ref2.info,friendlyName=_ref2.friendlyName,overrideHeadlessLink=_ref2.overrideHeadlessLink;moment__WEBPACK_IMPORTED_MODULE_1___default().locale('sv');var storybookLink= false?0:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)("/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs");if(!info){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{display:'flex',justifyContent:'space-between'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:'badge badge--secondary',children:"Under utveckling"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{display:'flex',gap:'3px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a",{href:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img",{alt:"Static Badge",src:"https://img.shields.io/badge/React%20Aria-FF0000?style=for-the-badge&logo=adobe&logoColor=white"})})})]});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section",{style:{marginBottom:32,marginTop:-20},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{marginBottom:16},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{children:["Version: ",info.version]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+(0,lodash__WEBPACK_IMPORTED_MODULE_5__.kebabCase)(name)+"/CHANGELOG.md",target:"_blank",standalone:true,children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:storybookLink,standalone:true,children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",standalone:true,children:"Referens"})})]})]});};

/***/ }),

/***/ 91117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export PropTable */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
// import useDynamicImport from 'docusaurus-plugin-react-docgen-typescript'
var PropTable=function PropTable(_ref){var name=_ref.name;return null;var props=useDynamicImport(name);if(!props){return null;}return/*#__PURE__*/_jsx(_Fragment,{children:/*#__PURE__*/_jsxs("table",{children:[/*#__PURE__*/_jsx("thead",{children:/*#__PURE__*/_jsxs("tr",{children:[/*#__PURE__*/_jsx("th",{children:"Name"}),/*#__PURE__*/_jsx("th",{children:"Type"}),/*#__PURE__*/_jsx("th",{children:"Default Value"}),/*#__PURE__*/_jsx("th",{children:"Required"}),/*#__PURE__*/_jsx("th",{children:"Description"})]})}),/*#__PURE__*/_jsx("tbody",{children:Object.keys(props).map(function(key){var _props$key$type;return/*#__PURE__*/_jsxs("tr",{children:[/*#__PURE__*/_jsx("td",{children:/*#__PURE__*/_jsx("code",{children:key})}),/*#__PURE__*/_jsx("td",{children:/*#__PURE__*/_jsx("code",{children:(_props$key$type=props[key].type)==null?void 0:_props$key$type.name})}),/*#__PURE__*/_jsx("td",{children:props[key].defaultValue&&/*#__PURE__*/_jsx("code",{children:props[key].defaultValue.value})}),/*#__PURE__*/_jsx("td",{children:props[key].required?'Yes':'No'}),/*#__PURE__*/_jsx("td",{style:{width:'30%'},children:props[key].description})]},key);})})]})});};

/***/ }),

/***/ 9687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./packages/link-button/src/lib/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","blue150":"#143c50","blue130":"#25607f","blue90":"#4289ad","display":"\"Inter\", sans-serif","desktopSize":"1rem","mediumWeight":"500","white":"#ffffff","gray50":"#bfbfbf","gray10":"#f2f2f2","gray20":"#e6e6e6","black":"#000000","medium":"undefined","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","smBreakpoint":"(max-width: 767px)","signalRed100":"#e62323","signalRed130":"#b31b1b","signalRed150":"#801313","linkButton":"linkButton_YIrq","secondary":"secondary_fWmT","tertiary":"tertiary_mRIr","danger":"danger_VEbs","iconBtn":"iconBtn_JdYI","iconLeft":"iconLeft_vyt7","fullwidth":"fullwidth_EeuX","button":"button_rUVC"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link-button/src/lib/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(){if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:LinkButton_module.icon});if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{size:20,className:LinkButton_module.icon});return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,className:LinkButton_module.icon});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{})]}));};
;// ./packages/link-button/src/lib/index.ts

;// ./packages/link-button/src/index.ts


/***/ }),

/***/ 60250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);


//# sourceMappingURL=chevron-left.js.map


/***/ }),

/***/ 87677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);


//# sourceMappingURL=chevron-right.js.map


/***/ }),

/***/ 35358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 25177,
	"./af.js": 25177,
	"./ar": 61509,
	"./ar-dz": 41488,
	"./ar-dz.js": 41488,
	"./ar-kw": 58676,
	"./ar-kw.js": 58676,
	"./ar-ly": 42353,
	"./ar-ly.js": 42353,
	"./ar-ma": 24496,
	"./ar-ma.js": 24496,
	"./ar-ps": 6947,
	"./ar-ps.js": 6947,
	"./ar-sa": 82682,
	"./ar-sa.js": 82682,
	"./ar-tn": 89756,
	"./ar-tn.js": 89756,
	"./ar.js": 61509,
	"./az": 95533,
	"./az.js": 95533,
	"./be": 28959,
	"./be.js": 28959,
	"./bg": 47777,
	"./bg.js": 47777,
	"./bm": 54903,
	"./bm.js": 54903,
	"./bn": 61290,
	"./bn-bd": 17357,
	"./bn-bd.js": 17357,
	"./bn.js": 61290,
	"./bo": 31545,
	"./bo.js": 31545,
	"./br": 89089,
	"./br.js": 89089,
	"./bs": 44429,
	"./bs.js": 44429,
	"./ca": 7306,
	"./ca.js": 7306,
	"./cs": 56464,
	"./cs.js": 56464,
	"./cv": 73635,
	"./cv.js": 73635,
	"./cy": 64226,
	"./cy.js": 64226,
	"./da": 93601,
	"./da.js": 93601,
	"./de": 77853,
	"./de-at": 26111,
	"./de-at.js": 26111,
	"./de-ch": 54697,
	"./de-ch.js": 54697,
	"./de.js": 77853,
	"./dv": 60708,
	"./dv.js": 60708,
	"./el": 54691,
	"./el.js": 54691,
	"./en-au": 53872,
	"./en-au.js": 53872,
	"./en-ca": 28298,
	"./en-ca.js": 28298,
	"./en-gb": 56195,
	"./en-gb.js": 56195,
	"./en-ie": 66584,
	"./en-ie.js": 66584,
	"./en-il": 65543,
	"./en-il.js": 65543,
	"./en-in": 9033,
	"./en-in.js": 9033,
	"./en-nz": 79402,
	"./en-nz.js": 79402,
	"./en-sg": 43004,
	"./en-sg.js": 43004,
	"./eo": 32934,
	"./eo.js": 32934,
	"./es": 97650,
	"./es-do": 20838,
	"./es-do.js": 20838,
	"./es-mx": 17730,
	"./es-mx.js": 17730,
	"./es-us": 56575,
	"./es-us.js": 56575,
	"./es.js": 97650,
	"./et": 3035,
	"./et.js": 3035,
	"./eu": 3508,
	"./eu.js": 3508,
	"./fa": 119,
	"./fa.js": 119,
	"./fi": 90527,
	"./fi.js": 90527,
	"./fil": 95995,
	"./fil.js": 95995,
	"./fo": 52477,
	"./fo.js": 52477,
	"./fr": 85498,
	"./fr-ca": 26435,
	"./fr-ca.js": 26435,
	"./fr-ch": 37892,
	"./fr-ch.js": 37892,
	"./fr.js": 85498,
	"./fy": 37071,
	"./fy.js": 37071,
	"./ga": 41734,
	"./ga.js": 41734,
	"./gd": 70217,
	"./gd.js": 70217,
	"./gl": 77329,
	"./gl.js": 77329,
	"./gom-deva": 32124,
	"./gom-deva.js": 32124,
	"./gom-latn": 93383,
	"./gom-latn.js": 93383,
	"./gu": 95050,
	"./gu.js": 95050,
	"./he": 11713,
	"./he.js": 11713,
	"./hi": 43861,
	"./hi.js": 43861,
	"./hr": 26308,
	"./hr.js": 26308,
	"./hu": 90609,
	"./hu.js": 90609,
	"./hy-am": 17160,
	"./hy-am.js": 17160,
	"./id": 74063,
	"./id.js": 74063,
	"./is": 89374,
	"./is.js": 89374,
	"./it": 88383,
	"./it-ch": 21827,
	"./it-ch.js": 21827,
	"./it.js": 88383,
	"./ja": 23827,
	"./ja.js": 23827,
	"./jv": 89722,
	"./jv.js": 89722,
	"./ka": 41794,
	"./ka.js": 41794,
	"./kk": 27088,
	"./kk.js": 27088,
	"./km": 96870,
	"./km.js": 96870,
	"./kn": 84451,
	"./kn.js": 84451,
	"./ko": 63164,
	"./ko.js": 63164,
	"./ku": 98174,
	"./ku-kmr": 6181,
	"./ku-kmr.js": 6181,
	"./ku.js": 98174,
	"./ky": 78474,
	"./ky.js": 78474,
	"./lb": 79680,
	"./lb.js": 79680,
	"./lo": 15867,
	"./lo.js": 15867,
	"./lt": 45766,
	"./lt.js": 45766,
	"./lv": 69532,
	"./lv.js": 69532,
	"./me": 58076,
	"./me.js": 58076,
	"./mi": 41848,
	"./mi.js": 41848,
	"./mk": 30306,
	"./mk.js": 30306,
	"./ml": 73739,
	"./ml.js": 73739,
	"./mn": 99053,
	"./mn.js": 99053,
	"./mr": 86169,
	"./mr.js": 86169,
	"./ms": 73386,
	"./ms-my": 92297,
	"./ms-my.js": 92297,
	"./ms.js": 73386,
	"./mt": 77075,
	"./mt.js": 77075,
	"./my": 72264,
	"./my.js": 72264,
	"./nb": 22274,
	"./nb.js": 22274,
	"./ne": 8235,
	"./ne.js": 8235,
	"./nl": 92572,
	"./nl-be": 43784,
	"./nl-be.js": 43784,
	"./nl.js": 92572,
	"./nn": 54566,
	"./nn.js": 54566,
	"./oc-lnc": 69330,
	"./oc-lnc.js": 69330,
	"./pa-in": 29849,
	"./pa-in.js": 29849,
	"./pl": 94418,
	"./pl.js": 94418,
	"./pt": 79834,
	"./pt-br": 48303,
	"./pt-br.js": 48303,
	"./pt.js": 79834,
	"./ro": 24457,
	"./ro.js": 24457,
	"./ru": 82271,
	"./ru.js": 82271,
	"./sd": 1221,
	"./sd.js": 1221,
	"./se": 33478,
	"./se.js": 33478,
	"./si": 17538,
	"./si.js": 17538,
	"./sk": 5784,
	"./sk.js": 5784,
	"./sl": 46637,
	"./sl.js": 46637,
	"./sq": 86794,
	"./sq.js": 86794,
	"./sr": 45719,
	"./sr-cyrl": 3322,
	"./sr-cyrl.js": 3322,
	"./sr.js": 45719,
	"./ss": 56000,
	"./ss.js": 56000,
	"./sv": 41011,
	"./sv.js": 41011,
	"./sw": 40748,
	"./sw.js": 40748,
	"./ta": 11025,
	"./ta.js": 11025,
	"./te": 11885,
	"./te.js": 11885,
	"./tet": 28861,
	"./tet.js": 28861,
	"./tg": 86571,
	"./tg.js": 86571,
	"./th": 55802,
	"./th.js": 55802,
	"./tk": 59527,
	"./tk.js": 59527,
	"./tl-ph": 29231,
	"./tl-ph.js": 29231,
	"./tlh": 31052,
	"./tlh.js": 31052,
	"./tr": 85096,
	"./tr.js": 85096,
	"./tzl": 79846,
	"./tzl.js": 79846,
	"./tzm": 81765,
	"./tzm-latn": 97711,
	"./tzm-latn.js": 97711,
	"./tzm.js": 81765,
	"./ug-cn": 48414,
	"./ug-cn.js": 48414,
	"./uk": 16618,
	"./uk.js": 16618,
	"./ur": 57777,
	"./ur.js": 57777,
	"./uz": 57609,
	"./uz-latn": 72475,
	"./uz-latn.js": 72475,
	"./uz.js": 57609,
	"./vi": 21135,
	"./vi.js": 21135,
	"./x-pseudo": 64051,
	"./x-pseudo.js": 64051,
	"./yo": 82218,
	"./yo.js": 82218,
	"./zh-cn": 52648,
	"./zh-cn.js": 52648,
	"./zh-hk": 1632,
	"./zh-hk.js": 1632,
	"./zh-mo": 31541,
	"./zh-mo.js": 31541,
	"./zh-tw": 50304,
	"./zh-tw.js": 50304
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ }),

/***/ 29169:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"_id":"@midas-ds/link@1.1.0","_rev":"6-2ecc3a2a675cccbbfcfe044a598e2d5e","name":"@midas-ds/link","dist-tags":{"latest":"1.1.0"},"versions":["0.0.1","0.0.2","0.0.3","1.0.0","1.0.1","1.1.0"],"time":{"created":"2024-09-10T14:35:32.127Z","modified":"2024-11-15T14:05:36.749Z","0.0.1":"2024-09-10T14:35:32.368Z","0.0.2":"2024-09-12T12:34:14.036Z","0.0.3":"2024-10-07T12:16:39.947Z","1.0.0":"2024-10-18T13:40:24.933Z","1.0.1":"2024-10-24T13:26:06.785Z","1.1.0":"2024-11-15T14:05:36.540Z"},"bugs":{"url":"https://github.com/migrationsverket/midas/issues"},"homepage":"https://github.com/migrationsverket/midas#readme","repository":{"type":"git","url":"git+https://github.com/migrationsverket/midas.git"},"description":"```bash npm install @midas-ds/link ```","maintainers":["wilhelmconsid <wilhelm.hjelm@consid.se>"],"readmeFilename":"README.md","_contentLength":9646,"version":"1.1.0","main":"./index.js","types":"./index.d.ts","exports":{".":{"import":"./index.mjs","require":"./index.js","types":"./index.d.ts"}},"peerDependencies":{"react-aria-components":"^1.1.1","lucide-react":"^0.453.0"},"publishConfig":{"access":"public"},"gitHead":"ab5cd78ac08049bda4af96abc4842d7ec6a1091a","_nodeVersion":"20.11.1","_npmVersion":"10.2.4","dist":{"integrity":"sha512-Xerm0dDYYCOoU0AwHkExbWfp+rDSr33E1MqTerMAk+IHpy9eFVWtnJ1mcbwQk+XuksAv3xCr3eZXLI11ehgOpA==","shasum":"37abf514186df74278d8a0f6e2749aad3fade436","tarball":"https://registry.npmjs.org/@midas-ds/link/-/link-1.1.0.tgz","fileCount":8,"unpackedSize":81638,"signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEQCIEM3slQb7zEIDnA1ukOAjS73fkziVTwnknQgm9liKjLMAiAmsBCFHzNj7yEF+hyc4Z+T4XoF7bXKN4LOnlrSduLitg=="}]},"_npmUser":"wilhelmconsid <wilhelm.hjelm@consid.se>","directories":{},"_npmOperationalInternal":{"host":"s3://npm-registry-packages","tmp":"tmp/link_1.1.0_1731679536307_0.21069856884830407"},"_hasShrinkwrap":false}');

/***/ })

}]);