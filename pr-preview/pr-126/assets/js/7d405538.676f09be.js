(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6505],{

/***/ 89785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19365);
/* harmony import */ var _site_src_components_propsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91117);
/* harmony import */ var _site_src_components_getComponentMetaData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13225);
/* harmony import */ var _site_static_data_link_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29169);
/* harmony import */ var _midas_ds_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10515);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29511);


const frontMatter = {
	title: 'Link',
	tags: [],
	description: 'Komponent som skapar en länk'
};
const contentTitle = undefined;
const metadata = {
  "id": "components/link",
  "title": "Link",
  "description": "Komponent som skapar en länk",
  "source": "@site/docs/components/link.mdx",
  "sourceDirName": "components",
  "slug": "/components/link",
  "permalink": "/pr-preview/pr-126/components/link",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "title": "Link",
    "tags": [],
    "description": "Komponent som skapar en länk"
  },
  "sidebar": "sideBar",
  "previous": {
    "title": "LinkButton",
    "permalink": "/pr-preview/pr-126/components/link-button"
  },
  "next": {
    "title": "Logo",
    "permalink": "/pr-preview/pr-126/components/logo"
  }
};
const assets = {

};










const toc = [{
  "value": "Introduktion",
  "id": "introduktion",
  "level": 2
}, {
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Fristående",
  "id": "fristående",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Val av komponent",
  "id": "val-av-komponent",
  "level": 3
}, {
  "value": "Beroenden",
  "id": "beroenden",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_8__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_getComponentMetaData__WEBPACK_IMPORTED_MODULE_4__/* .ComponentHeader */ .B, {
      name: 'Link',
      info: _site_static_data_link_json__WEBPACK_IMPORTED_MODULE_5__,
      friendlyName: 'Länk'
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "introduktion",
      children: "Introduktion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Komponenten Link skapar en länk som kan vara i ett textstycke eller fristående."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      groupId: "npm2yarn",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/link\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "yarn",
        label: "Yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/link\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/link\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link } from '@midas-ds/link'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      scope: {
        Link: _midas_ds_link__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N
      },
      children: `<p>Designsystemet utvecklas ständigt, <Link href="/blog">vilket du kan läsa mer om här i vår releasefeed.</Link> Varannan vecka kommer det ett nytt släpp med buggfixar, nya komponenter eller nya funktioner på befintliga komponenter.</p>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "fristående",
      children: "Fristående"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "standalone"
      }), " för att använda komponenten som en fristående länk under t.ex ett textblock."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      scope: {
        Link: _midas_ds_link__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N
      },
      children: `<>
  <p>Designsystemet utvecklas ständigt. Varannan vecka kommer det ett nytt släpp med buggfixar, nya komponenter eller nya funktioner på befintliga komponenter.</p>
  <Link 
      standalone 
      href="/blog"
  >
      Läs mer om designsystemets nyheter
  </Link>
</>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart TD;\n    A[Vad är syftet?]:::primary\n    A-->|Handling| B[Använd Button]\n    A -->|Navigering| C[Är länken i ett textstycke?]:::primary\n    C--> |Ja| D[Använd Link]:::primary\n    C-->|Nej| E[Använd LinkButton]"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "beroenden",
      children: "Beroenden"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_getComponentMetaData__WEBPACK_IMPORTED_MODULE_4__/* .ComponentFooter */ .p, {
      info: _site_static_data_link_json__WEBPACK_IMPORTED_MODULE_5__
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_8__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 29511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(71765);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./node_modules/react-live/dist/index.mjs + 58 modules
var react_live_dist = __webpack_require__(86850);
;// ./apps/docs/src/components/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"playgroundEditor":"playgroundEditor_hiaS","playgroundPreview":"playgroundPreview_d6Ft"});
// EXTERNAL MODULE: ./apps/docs/src/components/examples/fruits.ts
var fruits = __webpack_require__(46638);
// EXTERNAL MODULE: ./packages/accordion/src/index.ts + 22 modules
var src = __webpack_require__(17986);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/CodeBlock/CodeBlock.tsx
var _excluded=["children","transformCode"];Array.prototype.shuffled=function(count){if(count===void 0){count=5;}var result=this.sort(function(){return Math.random()-Math.random();}).slice(0,count);return count===1?result[0]:result;};var columns=[{name:'Namn',id:'name',isRowHeader:true},{name:'Beskrivning',id:'desc'}];var rows=fruits/* fruits */.g.shuffled(7).map(function(fruit){return{id:fruit.value,name:fruit.name,desc:fruit.description};});function Playground(_ref){var children=_ref.children,transformCode=_ref.transformCode,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var theme=usePrismTheme();var scope=Object.assign({columns:columns,rows:rows,fruits:fruits/* fruits */.g},props.scope);return/*#__PURE__*/(0,jsx_runtime.jsxs)(react_live_dist/* LiveProvider */.Q,Object.assign({code:children.replace(/\n$/,''),transformCode:transformCode||function(code){return code+";";},theme:theme},props,{scope:scope,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.playgroundPreview,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react_live_dist/* LivePreview */.pA,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(react_live_dist/* LiveError */.p1,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.playgroundEditor,children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Accordion */.nD,{headingTag:"h3",type:"multiple",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"example",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Exempelkod"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_live_dist/* LiveEditor */.w,{})})]})})})]}));}/* harmony default export */ const CodeBlock = (Playground);/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme=function usePrismTheme(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig.themeConfig.prism,prism=_useDocusaurusContext2===void 0?{}:_useDocusaurusContext2;var prismTheme=dist/* themes */.Zj.github;return prismTheme;};

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
/* harmony import */ var _midas_ds_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10515);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var ComponentFooter=function ComponentFooter(_ref){var info=_ref.info,children=_ref.children;if(!info||!info.dependencies)return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul",{children:Object.keys(info.dependencies).map(function(k,i){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:k+"@"+info.dependencies[k]},'dep'+i);})});};var ComponentHeader=function ComponentHeader(_ref2){var name=_ref2.name,info=_ref2.info,friendlyName=_ref2.friendlyName,overrideHeadlessLink=_ref2.overrideHeadlessLink;moment__WEBPACK_IMPORTED_MODULE_1___default().locale('sv');if(!info){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:'flex',justifyContent:'space-between'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:'badge badge--secondary',children:"Under utveckling"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{display:'flex',gap:'3px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:"Static Badge",src:"https://img.shields.io/badge/React%20Aria-FF0000?style=for-the-badge&logo=adobe&logoColor=white"})})})]});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section",{style:{marginBottom:32,marginTop:-20},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{marginBottom:16},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{children:["Version: ",info.version]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+name.toLowerCase()+"/CHANGELOG.md",target:"_blank",standalone:true,children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:"https://designsystem.migrationsverket.se/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs",standalone:true,children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",standalone:true,children:"Referens"})})]})]});};

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

/***/ 10515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* reexport */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/link/src/lib/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","blue130":"#25607f","blue150":"#143c50","gray150":"#1f1f1f","gray50":"#bfbfbf","mediumWeight":"500","regularWeight":"400","black":"#000000","link":"link_Db78","standalone":"standalone_ptM8"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link/src/lib/Link.tsx
'use client';var _excluded=["children","standalone","icon"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,IconComponent=_ref.icon,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Link/* Link */.N,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,rest.className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:Link_module.icon}),standalone&&/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{size:20})]})}));};
;// ./packages/link/src/index.ts


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
module.exports = /*#__PURE__*/JSON.parse('{"_id":"@midas-ds/link@1.0.1","_rev":"5-661948ec38b5e8f7cd5ecabb3d70debb","name":"@midas-ds/link","dist-tags":{"latest":"1.0.1"},"versions":["0.0.1","0.0.2","0.0.3","1.0.0","1.0.1"],"time":{"created":"2024-09-10T14:35:32.127Z","modified":"2024-10-24T13:26:06.988Z","0.0.1":"2024-09-10T14:35:32.368Z","0.0.2":"2024-09-12T12:34:14.036Z","0.0.3":"2024-10-07T12:16:39.947Z","1.0.0":"2024-10-18T13:40:24.933Z","1.0.1":"2024-10-24T13:26:06.785Z"},"bugs":{"url":"https://github.com/migrationsverket/midas/issues"},"homepage":"https://github.com/migrationsverket/midas#readme","repository":{"type":"git","url":"git+https://github.com/migrationsverket/midas.git"},"description":"This library was generated with [Nx](https://nx.dev).","maintainers":["wilhelmconsid <wilhelm.hjelm@consid.se>"],"readmeFilename":"README.md","_contentLength":8200,"version":"1.0.1","main":"./index.js","types":"./index.d.ts","exports":{".":{"import":"./index.mjs","require":"./index.js","types":"./index.d.ts"}},"peerDependencies":{"react-aria-components":"^1.1.1"},"publishConfig":{"access":"public"},"gitHead":"ead3133f0643b7915ada3e7ccd2a21764ae1323f","_nodeVersion":"20.11.1","_npmVersion":"10.2.4","dist":{"integrity":"sha512-t2/aa4fgURXKaz9lPDEsjh4xjBNfkmPx0Zyt8d1OSKjbIUuKrcJPT53g0ZPbBezHqRL2EmZOsy6+cRSME9gFGA==","shasum":"b7134ce15a0c6ed603715f158a7a9773b48c1290","tarball":"https://registry.npmjs.org/@midas-ds/link/-/link-1.0.1.tgz","fileCount":8,"unpackedSize":73998,"signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEUCIBa4+IoWCBpQ4GALTDCehu0zd7CYZC9wC0xhpapZbH3WAiEAqZbSgmFyCCLfWwJgnW7apz0N14HWKY6glQopGab14GE="}]},"_npmUser":"wilhelmconsid <wilhelm.hjelm@consid.se>","directories":{},"_npmOperationalInternal":{"host":"s3://npm-registry-packages","tmp":"tmp/link_1.0.1_1729776366512_0.31716055566122625"},"_hasShrinkwrap":false}');

/***/ })

}]);