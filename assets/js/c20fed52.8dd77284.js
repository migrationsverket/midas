"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1680],{

/***/ 13407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_card_mdx_c20_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-card-mdx-c20.json
const site_docs_components_card_mdx_c20_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/card","title":"Card","description":"En card-komponent är en modulär enhet som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.","source":"@site/docs/components/card.mdx","sourceDirName":"components","slug":"/components/card","permalink":"/components/card","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Card","description":"En card-komponent är en modulär enhet som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(4928);
// EXTERNAL MODULE: ./packages/grid/src/index.ts + 4 modules
var src = __webpack_require__(17172);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(32705);
// EXTERNAL MODULE: ./packages/card/src/index.ts + 3 modules
var card_src = __webpack_require__(70720);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/card.mdx


const frontMatter = {
	title: 'Card',
	description: 'En card-komponent är en modulär enhet som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.',
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
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Card',
      friendlyName: 'Kort',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kortkomponenten är en yta med plats för information och åtgärder relaterat till ett specifikt ämne. Kort används primärt för att presentera innehåll på ett visuellt tilltalande sätt."
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
            children: "npm install @midas-ds/card\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/card\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/card\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Card } from '@midas-ds/card'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Grid: src/* Grid */.x,
        GridItem: src/* GridItem */.E,
        Card: card_src/* Card */.Z
      },
      children: `<Grid>
{fruits.shuffled(3).map(fruit => (
  <GridItem col={4} key={fruit.value}>
    <Card
      title={fruit.name}
      content={fruit.description}
      image={{ source: fruit.image, description: fruit.description }}
      link={{href: '#', title: 'Läs mer om denna frukt'}}
    />
  </GridItem>
))}
</Grid>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Card"
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

/***/ 70720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Card)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 2 modules
var src = __webpack_require__(10515);
;// ./packages/card/src/lib/Card.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Card_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","white":"#ffffff","gray20":"#e6e6e6","gray10":"#f2f2f2","gray150":"#1f1f1f","blue20":"#d5e5ed","black":"#000000","mediumWeight":"500","fastTransition":"250ms","card":"card_k6lA","content":"content_IA2f","heading":"heading_KjLb","image":"image_APT7","background":"background_SqGP","text":"text_v73H"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/card/src/lib/Card.tsx
'use client';var _excluded=["image","background","title","content","link","headingTag","customImageComponent","customLinkComponent"];/**
 * This component renders a card with optional image, title, content.
 */var Card=function Card(_ref){var image=_ref.image,background=_ref.background,title=_ref.title,content=_ref.content,link=_ref.link,_ref$headingTag=_ref.headingTag,HeadingTag=_ref$headingTag===void 0?'h1':_ref$headingTag,customImageComponent=_ref.customImageComponent,CustomLinkComponent=_ref.customLinkComponent,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(Card_module.card,background&&Card_module.background,rest.className)},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Card_module.content,children:[customImageComponent?customImageComponent:(image==null?void 0:image.source)&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:image.source,alt:image.description,className:Card_module.image}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeadingTag,{className:Card_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Card_module.text,children:content})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Link */.N,Object.assign({},link,{standalone:true,stretched:true,as:CustomLinkComponent}))]}));};
;// ./packages/card/src/lib/index.ts

;// ./packages/card/src/index.ts


/***/ }),

/***/ 17172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* reexport */ Grid),
  E: () => (/* reexport */ GridItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/grid/src/lib/Grid.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Grid_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","mdBreakpoint":"(min-width: 768px)","lgBreakpoint":"(min-width: 1200px)","xlBreakpoint":"(min-width: 1440px)","container":"container_lmBC","grid":"grid_mI9C","fluid":"fluid_KIzx","col":"col_kaYV","col-1":"col-1_Y6p8","col-2":"col-2_lCuZ","col-3":"col-3_tBWx","col-4":"col-4_gBWu","col-5":"col-5_sq5b","col-6":"col-6_FKf3","col-7":"col-7_Aug2","col-8":"col-8_enZy","col-9":"col-9_y37e","col-10":"col-10_LlVF","col-11":"col-11_rc_R","col-12":"col-12_svqf","offset-1":"offset-1_GJj8","offset-2":"offset-2_M090","offset-3":"offset-3_B_Bj","offset-4":"offset-4_uBLN","offset-5":"offset-5_zJ4M","offset-6":"offset-6_C6Yz","offset-7":"offset-7_LlzJ","offset-8":"offset-8_Gxmr","offset-9":"offset-9_ZbLa","offset-10":"offset-10_Z5yB","offset-11":"offset-11__W4d"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/grid/src/lib/Grid.tsx
var _excluded=["children","fluid"];/**
 * Grid baserat på display: grid;
 * Använder grid-template för att bygga rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.
 */var Grid=function Grid(_ref){var children=_ref.children,fluid=_ref.fluid,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Grid_module.container,fluid&&Grid_module.fluid,rest.className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Grid_module.grid,children:children})}));};
;// ./packages/grid/src/lib/GridItem.tsx
var GridItem_excluded=["children","col"];var GridItem=function GridItem(_ref){var children=_ref.children,col=_ref.col,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,GridItem_excluded);// Convert numeric values to string if necessary
var colClass=col?"col-"+col:'';return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Grid_module.col,Grid_module[colClass],rest.className)},rest,{children:children}));};
;// ./packages/grid/src/lib/index.ts

;// ./packages/grid/src/index.ts


/***/ }),

/***/ 10515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* reexport */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/link/src/lib/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","blue130":"#25607f","blue150":"#143c50","gray150":"#1f1f1f","gray50":"#bfbfbf","mediumWeight":"500","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","regularWeight":"400","linkVisited":"#663366","black":"#000000","link":"link_Db78","icon":"icon_uCwm","standalone":"standalone_ptM8","stretched":"stretched_fWsF"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link/src/lib/Link.tsx
'use client';var _excluded=["children","standalone","stretched","icon","className","as"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,stretched=_ref.stretched,IconComponent=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,!standalone&&IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:Link_module.icon}),standalone&&/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{size:20,className:Link_module.icon})]})}));};
;// ./packages/link/src/index.ts


/***/ }),

/***/ 48635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);


//# sourceMappingURL=arrow-right.js.map


/***/ })

}]);