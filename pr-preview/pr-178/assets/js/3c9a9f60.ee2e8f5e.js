"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2488],{

/***/ 74082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_buttons_and_links_mdx_3c9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-buttons-and-links-mdx-3c9.json
const site_docs_design_patterns_buttons_and_links_mdx_3c9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/buttons-and-links","title":"Knappar och länkar","description":"Detta mönster är till för beskriva i vilka situationer Knapp, Länkknapp och Länk ska användas","source":"@site/docs/design-patterns/buttons-and-links.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/buttons-and-links","permalink":"/pr-preview/pr-178/design-patterns/buttons-and-links","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
// EXTERNAL MODULE: ./packages/link-button/src/index.ts + 3 modules
var link_button_src = __webpack_require__(9687);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 3 modules
var link_src = __webpack_require__(85560);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/design-patterns/buttons-and-links.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Knappar och länkar';

const assets = {

};








const toc = [{
  "value": "Knappar",
  "id": "knappar",
  "level": 2
}, {
  "value": "Länkar",
  "id": "länkar",
  "level": 2
}, {
  "value": "Länkknapp",
  "id": "länkknapp",
  "level": 3
}, {
  "value": "Fristående länk",
  "id": "fristående-länk",
  "level": 3
}, {
  "value": "Länk",
  "id": "länk",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "knappar-och-länkar",
        children: "Knappar och länkar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta mönster är till för beskriva i vilka situationer Knapp, Länkknapp och Länk ska användas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knappar",
      children: "Knappar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knappar används för att initiera en aktivitet. När användaren interagerar med en knapp händer något på sidan.\nExempel på situationer där det är lämpligt med en knapp:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När ett formulär ska skickas in."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "För att initiera en sökning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "För att öppna en modal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        Button: src/* Button */.$n
      },
      children: `<Flex>
<FlexItem col="auto">
<Button onPress={() => { alert('Du tryckte på knappen och här är din popup');}}>Visa en popup</Button>
</FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "länkar",
      children: "Länkar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Länkar används för att ta användaren till en ny sida eller en annan del av en sida/applikation. På en webbsida eller i en webbapplikation syns detta som en ny URL."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länkknapp",
      children: "Länkknapp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Länkknappen är tekniskt en länk men visuellt lik en knapp. Den används vid navigering när det behövs en tydligare visuell signal till användaren att välja länken, än vad en vanlig länk ger.\nAnvändaren ska uppfatta att en handling utförs. Exempel på situationer där det är lämpligt med en länkknapp:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vid navigering inom en applikation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Som en startpunkt, t.ex. en länk från webben till en e-tjänst"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        LinkButton: link_button_src/* LinkButton */.z
      },
      children: `<Flex>
<FlexItem col="auto">
<LinkButton href="/components/link-button">Till sidan för Länkknapp</LinkButton>
</FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fristående-länk",
      children: "Fristående länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fristående länk är en variant av länk som används när en länk ligger utanför ett textstycke."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        Link: link_src/* Link */.N
      },
      children: `<Flex>
<FlexItem col="auto">
<Link standalone href="/components/link">Läs mer om länkar</Link>
</FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länk",
      children: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Länk används när länken är i ett textstycke."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        Link: link_src/* Link */.N
      },
      children: `<Flex>
<FlexItem col="auto">
Designsystemet har två olika varianter av <Link href="/components/link">länkar</Link>.  
</FlexItem>
</Flex>`
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

/***/ 9687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link-button/src/lib/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(){if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:LinkButton_module.icon});if(rest.target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,{size:20,className:LinkButton_module.icon});if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{size:20,className:LinkButton_module.icon});return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,className:LinkButton_module.icon});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{})]}));};
;// ./packages/link-button/src/lib/index.ts

;// ./packages/link-button/src/index.ts


/***/ }),

/***/ 60250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SquareArrowOutUpRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const SquareArrowOutUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("SquareArrowOutUpRight", [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
  ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
]);


//# sourceMappingURL=square-arrow-out-up-right.js.map


/***/ })

}]);