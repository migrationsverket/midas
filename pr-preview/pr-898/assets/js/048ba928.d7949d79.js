"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9765],{

/***/ 22298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"text":"text_ysZI","code":"code_BaOa","display1":"display1_tOb_","image":"image_HbCB","lightImage":"lightImage_bVF2","darkImage":"darkImage_Zjxi"});

/***/ }),

/***/ 56636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./packages/components/src/link-button/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as","size"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(_ref2){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref2),_ref2));if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));if(rest.target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,Object.assign({},rest));if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_left/* default */.A,Object.assign({},rest));return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,Object.assign({},rest));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,size==='medium'&&LinkButton_module.medium,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:LinkButton_module.icon})]}));};

/***/ }),

/***/ 68379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_designer_mdx_048_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-designer-mdx-048.json
const site_docs_get_started_designer_mdx_048_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/designer","title":"Designa med Midas","description":"UI-kit","source":"@site/docs/get-started/designer.mdx","sourceDirName":"get-started","slug":"/get-started/designer","permalink":"/pr-preview/pr-898/get-started/designer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Designa med Midas","sidebar_label":"Designa","sidebar_position":4,"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 1 modules
var LinkButton = __webpack_require__(56636);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var exports_useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./apps/docs/src/css/index.module.css
var index_module = __webpack_require__(22298);
;// ./apps/docs/src/components/ThemedImage.tsx
/* eslint-disable @nx/enforce-module-boundaries */function ThemedImage(_ref){var imageSrc=_ref.imageSrc,imageSrcDark=_ref.imageSrcDark;var imgSrc=useBaseUrl(imageSrc);var imgSrcDark=useBaseUrl(imageSrcDark);return/*#__PURE__*/_jsxs(_Fragment,{children:[/*#__PURE__*/_jsx("img",{className:""+styles.lightImage,src:imgSrc,alt:""}),/*#__PURE__*/_jsx("img",{className:""+styles.darkImage,src:imgSrcDark,alt:""})]});}
;// ./apps/docs/docs/get-started/designer.mdx


const frontMatter = {
	title: 'Designa med Midas',
	sidebar_label: 'Designa',
	sidebar_position: 4,
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "UI-kit",
  "id": "ui-kit",
  "level": 2
}, {
  "value": "Bryta loss komponenter",
  "id": "bryta-loss-komponenter",
  "level": 3
}, {
  "value": "Skapa egna komponenter",
  "id": "skapa-egna-komponenter",
  "level": 3
}, {
  "value": "Storybook",
  "id": "storybook",
  "level": 2
}, {
  "value": "Rapportera buggar eller förslag till nya features",
  "id": "rapportera-buggar-eller-förslag-till-nya-features",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "ui-kit",
      children: "UI-kit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.figma.com/design/Zc41jDwx13L2bVECCQlsfN/MIDAS-UI-Kit?m=auto&node-id=0-1&t=ZgUPPphkbF15QIWU-1",
        children: "Vårt UI-kit till Figma"
      }), " innehåller komponenter och mönster som vi använder för att designa våra produkter och tjänster. Komponenterna i våra UI-kit är en spegling av hur komponenterna ser ut i komponentbiblioteket och vi använder så ofta som möjligt samma namn på variants som props i komponenterna."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Personuppgifter i skisser och prototyper",
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Vi får inte lagra några personuppgifter, tex namn eller personnummer i våra skisser. Vi använder därför alltid fiktiv data om vi behöver visa personuppgifter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bryta-loss-komponenter",
      children: "Bryta loss komponenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om en komponent inte beter sig som du vill eller inte på något annat sätt inte passar kan det vara lockande att bryta loss den och sen ändra den på egen hand. Men det gör att komponenten tappar den sin koppling till Main component och då får den inga uppdateringar i framtiden. Dessutom får designsystemsteamet får inte veta hur du vill använda komponenten.\nKontakta hellre designsystemteamet och beskriv hur du vill att det ska funka. Då kan vi diskutera om detta är något som vi ska implementera eller om det finns ett redan etablerat sätt att lösa problemet."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skapa-egna-komponenter",
      children: "Skapa egna komponenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Försök att undvika att skapa egna komponenter för att lösa designproblem. Börja istället med att försöka lösa problemet genom att kombinera ihop befintliga komponenter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I de fall där designproblemet kräver en unik lösning som inte går att skapa med befintliga komponenter, följ dessa riktlinjer:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basera så mycket som möligt av utseendet på en befintlig komponent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Våra komponenter har raka kanter och inga rundade hörn."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd befintliga semantiska tokens så långt det går"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Den blå färgen används huvudsakligen för interaktiva element, inte som dekoration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storybook",
      children: "Storybook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du vill testa hur komponenterna beter sig i olika situationer kan du göra det på Storybook. Storybook är en interaktiv miljö för våra UI-komponenter. Här kan du se alla komponenter i vårt bibliotek, testa dem i\nolika varianter och se hur de beter sig. Det finns en länk till Storybook i headern på varje komponentsida."
    }), "\n", (0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z, {
      variant: "tertiary",
      target: "\\_blank",
      href: 'https://designsystem.migrationsverket.se/storybook/',
      children: 'Storybook'
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rapportera-buggar-eller-förslag-till-nya-features",
      children: "Rapportera buggar eller förslag till nya features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hittat en bugg eller förbättringsmöjlighet? Kontakta MIDAS-teamet via alla de normala kontaktvägarna. Alla synpunkter är välkomna!"
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

/***/ 90232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-left", __iconNode);


//# sourceMappingURL=arrow-left.js.map


/***/ })

}]);