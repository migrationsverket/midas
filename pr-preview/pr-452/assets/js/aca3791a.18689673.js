"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6253],{

/***/ 24819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Example: () => (/* binding */ Example),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_breadcrumbs_mdx_aca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-breadcrumbs-mdx-aca.json
const site_docs_components_breadcrumbs_mdx_aca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/breadcrumbs","title":"Breadcrumbs","description":"Brödsmulor används för att visa användaren vart hen är i ett djupt navigationsträd.","source":"@site/docs/components/breadcrumbs.mdx","sourceDirName":"components","slug":"/components/breadcrumbs","permalink":"/pr-preview/pr-452/components/breadcrumbs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Breadcrumbs","description":"Brödsmulor används för att visa användaren vart hen är i ett djupt navigationsträd.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 141 modules
var propsTable = __webpack_require__(55468);
// EXTERNAL MODULE: ./packages/components/src/breadcrumbs/Breadcrumbs.tsx + 1 modules
var Breadcrumbs = __webpack_require__(11743);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 2 modules
var CodeBlock = __webpack_require__(634);
;// ./apps/docs/docs/components/breadcrumbs.mdx


const frontMatter = {
	title: 'Breadcrumbs',
	description: 'Brödsmulor används för att visa användaren vart hen är i ett djupt navigationsträd.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Breadcrumbs: Breadcrumbs/* Breadcrumbs */.B
    },
    ...props,
    children: `<Breadcrumbs items={fruits.shuffled().map(fruit => {return {href: fruit.value, title: fruit.name}})} />`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
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
      name: 'Breadcrumbs',
      friendlyName: 'Brödsmulor'
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som används för att visa användaren var den är i ett djupt navigationsträd."
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideCode: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Breadcrumbs } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Breadcrumbs"
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

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(40797);
// EXTERNAL MODULE: ./node_modules/react-live/dist/index.mjs + 58 modules
var dist = __webpack_require__(86850);
;// ./apps/docs/src/components/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"playgroundEditor":"playgroundEditor_hiaS","borderBottom":"borderBottom_SKni","playgroundPreview":"playgroundPreview_d6Ft","previewToolbar":"previewToolbar_oyyr"});
;// ./apps/docs/src/components/examples/fruits.ts
var fruits=[{name:'Ananas',description:'Tropisk frukt med taggigt skal',value:'ananas',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/320px-Pineapple_and_cross_section.jpg'},{name:'Apelsin',description:'Citrusfrukt med orange skal',value:'apelsin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg'},{name:'Aprikos',description:'Stenfrukt med orange färg',value:'aprikos',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/320px-Apricot_and_cross_section.jpg'},{name:'Avokado',description:'Grönsaksfrukt med krämig konsistens',value:'avokado',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Avocado_IMGP1082.jpg/320px-Avocado_IMGP1082.jpg'},{name:'Banan',description:'Långsmal frukt med gult skal',value:'banan',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/320px-Banana-Single.jpg'},{name:'Björnbär',description:'Små svarta bär',value:'bjornbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg/320px-Blackberries_%28Rubus_fruticosus%29.jpg'},{name:'Blåbär',description:'Små blå bär',value:'blabar',image:'https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg'},{name:'Carambola',description:'Stjärnformad exotisk frukt',value:'carambola',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Averrhoa_carambola_ARS_k5735-7.jpg/160px-Averrhoa_carambola_ARS_k5735-7.jpg'},{name:'Citron',description:'Citrusfrukt med gult skal',value:'citron',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/320px-Lemon.jpg'},{name:'Clementin',description:'Liten citrusfrukt med löst skal',value:'clementin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Oh_my_darling.jpg/320px-Oh_my_darling.jpg'},{name:'Drakfrukt',description:'Exotisk frukt med rött skal',value:'drakfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/294px-Pitaya_cross_section_ed2.jpg'},{name:'Granatäpple',description:'Frukt med många kärnor',value:'granatapple',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg/320px-Pomegranate_fruit_-_whole_and_piece_with_arils.jpg'},{name:'Grapefrukt',description:'Stor citrusfrukt med rosa eller gult kött',value:'grapefrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/320px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg'},{name:'Hallon',description:'Röda bär som växer på buskar',value:'hallon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/320px-Raspberries_%28Rubus_idaeus%29.jpg'},{name:'Jordgubbe',description:'Röda bär med frön på utsidan',value:'jordgubbe',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Strawberries.jpg/320px-Strawberries.jpg'},{name:'Kiwi',description:'Frukt med hårig brun skal och grönt kött',value:'kiwi',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/320px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg'},{name:'Kokosnöt',description:'Stor nöt med hårt skal',value:'kokosnot',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coconuts_-_single_and_cracked_open.jpg/320px-Coconuts_-_single_and_cracked_open.jpg'},{name:'Körsbär',description:'Små röda stenfrukter',value:'korsbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/320px-Cherry_Stella444.jpg'},{name:'Lime',description:'Liten grön citrusfrukt',value:'lime',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Citrus_×aurantiifolia927505341.jpg/320px-Citrus_×aurantiifolia927505341.jpg'},{name:'Litchi',description:'Liten frukt med tunt rosa skal',value:'litchi',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lychee_fruits_and_seed.jpg/320px-Lychee_fruits_and_seed.jpg'},{name:'Mandarin',description:'Liten orange citrusfrukt',value:'mandarin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/320px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg'},{name:'Mango',description:'Söt exotisk frukt med stor kärna',value:'mango',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mango_-_single.jpg/320px-Mango_-_single.jpg'},{name:'Melon',description:'Stor frukt med saftigt kött',value:'melon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Muskmelon.jpg/320px-Muskmelon.jpg'},{name:'Nektarin',description:'Slät variant av persika',value:'nektarin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg'},{name:'Papaya',description:'Exotisk frukt med orange kött',value:'papaya',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Papaya_cross_section_BNC.jpg/320px-Papaya_cross_section_BNC.jpg'},{name:'Passionsfrukt',description:'Frukt med många kärnor och syrligt kött',value:'passionsfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Passion_fruits_-_whole_and_halved.jpg/320px-Passion_fruits_-_whole_and_halved.jpg'},{name:'Persika',description:'Mjuk stenfrukt med ludet skal',value:'persika',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg'},{name:'Physalis',description:'Liten frukt som växer i pappershölje',value:'physalis',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Physalis_peruviana_calix_open_close-up.jpg/300px-Physalis_peruviana_calix_open_close-up.jpg'},{name:'Plommon',description:'Söt eller syrlig stenfrukt',value:'plommon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bluebyrd_plum.jpg/167px-Bluebyrd_plum.jpg'},{name:'Päron',description:'Avlång frukt med smal midja',value:'paron',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/393px-Pears.jpg'},{name:'Rambutan',description:'Exotisk frukt med hårig skal',value:'rambutan',image:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Rambutan_Fruit.jpg'},{name:'Röda vinbär',description:'Små röda bär i klasar',value:'roda vinbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hjulsta_koloni_2010h.jpg/256px-Hjulsta_koloni_2010h.jpg'},{name:'Sharon',description:'Persikoliknande frukt med fast kött',value:'sharon',image:'https://upload.wikimedia.org/wikipedia/commons/9/95/Diospyros_kaki_-_persimmon_at_Paro_during_LGFC_-_Bhutan_2019_%283%29.jpg'},{name:'Stjärnfrukt',description:'Stjärnformad frukt med syrligt kött',value:'stjarnfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Carambola_Starfruit.jpg/320px-Carambola_Starfruit.jpg'},{name:'Svarta vinbär',description:'Små svarta bär i klasar',value:'svarta vinbar',image:'https://upload.wikimedia.org/wikipedia/commons/1/17/Blackcurrants2.jpg'},{name:'Vattenmelon',description:'Stor frukt med rött, saftigt kött',value:'vattenmelon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Water_melon_2015.jpg/320px-Water_melon_2015.jpg'},{name:'Vindruvor',description:'Små gröna eller blå frukter i klasar',value:'vindruvor',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Thompson_seedless_grapes.JPG/320px-Thompson_seedless_grapes.JPG'},{name:'Äpple',description:'Rund frukt med kärnhus',value:'apple',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg'}];
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(3348);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(57389);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/CodeBlock/CodeBlock.tsx
var _excluded=["children","transformCode","hideCode","hideExample"];// eslint-disable-next-line
Array.prototype.shuffled=function(count){if(count===void 0){count=5;}var result=this.sort(function(){return Math.random()-Math.random();}).slice(0,count);return count===1?result[0]:result;};var columns=[{name:'Namn',id:'name',isRowHeader:true},{name:'Beskrivning',id:'desc'}];var rows=fruits.shuffled(7).map(function(fruit){return{id:fruit.value,name:fruit.name,desc:fruit.description};});var Playground=function Playground(_ref){var children=_ref.children,transformCode=_ref.transformCode,hideCode=_ref.hideCode,hideExample=_ref.hideExample,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var theme=usePrismTheme();var _React$useState=react.useState(false),isOpen=_React$useState[0],setIsOpen=_React$useState[1];var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;var _React$useState2=react.useState(colorMode),previewColorMode=_React$useState2[0],setPreviewColorMode=_React$useState2[1];react.useEffect(function(){setPreviewColorMode(colorMode);},[colorMode]);var scope=Object.assign({columns:columns,rows:rows,fruits:fruits},props.scope,{isOpen:isOpen,setIsOpen:setIsOpen});var Toolbar=function Toolbar(){react.useEffect(function(){var observer=new MutationObserver(function(){var popover=document.querySelector('[class*="popover_"], [class*="overlay_"], [class*="Popover"], [class*="tooltip_"]');if(popover)popover.style.colorScheme=previewColorMode;});observer.observe(document.body,{childList:true,subtree:true});return function(){return observer.disconnect();};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.previewToolbar,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"toggle_vylO colorModeToggle_DEke",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"clean-btn toggleButton_gllP",onClick:function onClick(){return setPreviewColorMode(previewColorMode==='light'?'dark':'light');},children:previewColorMode==='dark'?/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",color:"white",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"})}):/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"})})})})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* LiveProvider */.Q,Object.assign({code:children.replace(/\n$/,''),transformCode:transformCode||function(code){return code+";";},theme:theme},props,{scope:scope,children:[!hideExample&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.playgroundPreview,style:{colorScheme:previewColorMode},"data-theme":previewColorMode,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Toolbar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LivePreview */.pA,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LiveError */.p1,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.playgroundEditor,!hideCode&&styles_module.borderBottom),children:!hideCode&&/*#__PURE__*/(0,jsx_runtime.jsx)(Accordion/* Accordion */.n,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"example",title:"Exempelkod",children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LiveEditor */.w,{})})})})]}));};/* harmony default export */ const CodeBlock = (Playground);/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme=function usePrismTheme(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),siteConfig=_useDocusaurusContext.siteConfig;var _useColorMode2=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode2.colorMode;var docusaurusPrismThemes=siteConfig.themeConfig.prism;var prismTheme=colorMode==='light'?docusaurusPrismThemes.theme:docusaurusPrismThemes.darkTheme;return prismTheme;};

/***/ }),

/***/ 11743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Breadcrumbs)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Breadcrumbs.mjs + 36 modules
var dist_Breadcrumbs = __webpack_require__(57214);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./packages/components/src/breadcrumbs/Breadcrumbs.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Breadcrumbs_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","container":"container_QqG_"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/breadcrumbs/Breadcrumbs.tsx
var Breadcrumbs=function Breadcrumbs(_ref){var items=_ref.items;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumbs */.BI,{className:Breadcrumbs_module.container,children:items.map(function(item,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumb */.Qp,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,{href:item.href,isDisabled:item.isDisabled,children:item.title})},item.title.toLocaleLowerCase()+index);})});};

/***/ }),

/***/ 78815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/link/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #4289ad)","--link-hover":"light-dark(#143c50, #5897b8)","--link-pressed":"light-dark(#171717, #82b0c9)","--link-visited":"light-dark(#954b95, #b46ab4)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","--z-index-base":"1","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link/Link.tsx
'use client';var _excluded=["children","standalone","stretched","icon","className","as"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,stretched=_ref.stretched,IconComponent=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,!standalone&&IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:Link_module.icon}),standalone&&/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{size:20,className:Link_module.icon})]})}));};

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


/***/ }),

/***/ 92122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $5b160d28a433310d$export$c17fa47878dc55b6)
/* harmony export */ });
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $5b160d28a433310d$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $5b160d28a433310d$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $5b160d28a433310d$var$cachedGlobalStrings = undefined;
class $5b160d28a433310d$export$c17fa47878dc55b6 {
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $5b160d28a433310d$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === 'undefined') return null;
        let locale = window[$5b160d28a433310d$var$localeSymbol];
        if ($5b160d28a433310d$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$5b160d28a433310d$var$stringsSymbol];
            if (!globalStrings) return null;
            $5b160d28a433310d$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$5b160d28a433310d$var$cachedGlobalStrings[pkg] = new $5b160d28a433310d$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $5b160d28a433310d$var$cachedGlobalStrings === null || $5b160d28a433310d$var$cachedGlobalStrings === void 0 ? void 0 : $5b160d28a433310d$var$cachedGlobalStrings[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
}
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $5b160d28a433310d$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}



//# sourceMappingURL=LocalizedStringDictionary.module.js.map


/***/ }),

/***/ 57612:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $6db58dc88e78b024$export$2f817fcdc4b89ae0)
/* harmony export */ });
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6db58dc88e78b024$var$pluralRulesCache = new Map();
const $6db58dc88e78b024$var$numberFormatCache = new Map();
class $6db58dc88e78b024$export$2f817fcdc4b89ae0 {
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $6db58dc88e78b024$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
}



//# sourceMappingURL=LocalizedStringFormatter.module.js.map


/***/ }),

/***/ 29571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ $fca6afa0e843324b$export$87b761675e8eaa10),
/* harmony export */   o: () => (/* binding */ $fca6afa0e843324b$export$f12b703ca79dfbb1)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39892);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92122);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, _context_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLocale */ .Y)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_3__/* .LocalizedStringFormatter */ .J)(locale, dictionary), [
        locale,
        dictionary
    ]);
}



//# sourceMappingURL=useLocalizedStringFormatter.module.js.map


/***/ }),

/***/ 57214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Qp: () => (/* binding */ $778035c5624f61e7$export$dabcc1ec9dd9d1cc),
  BI: () => (/* binding */ $778035c5624f61e7$export$2dc68d50d56fbbd)
});

// UNUSED EXPORTS: BreadcrumbsContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./node_modules/@react-aria/breadcrumbs/dist/ar-AE.mjs
var $b91590b2dc47de39$exports = {};
$b91590b2dc47de39$exports = {
    "breadcrumbs": `\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{648}\u{627}\u{62C}\u{647}\u{629}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/bg-BG.mjs
var $55b0693b2cf3fe91$exports = {};
$55b0693b2cf3fe91$exports = {
    "breadcrumbs": `\u{422}\u{440}\u{43E}\u{445}\u{438} \u{445}\u{43B}\u{44F}\u{431}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/cs-CZ.mjs
var $6ec1ed7729e948cc$exports = {};
$6ec1ed7729e948cc$exports = {
    "breadcrumbs": `Popis cesty`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/da-DK.mjs
var $5a41bb2baa6861e4$exports = {};
$5a41bb2baa6861e4$exports = {
    "breadcrumbs": `Br\xf8dkrummer`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/de-DE.mjs
var $f28bbea439e87eca$exports = {};
$f28bbea439e87eca$exports = {
    "breadcrumbs": `Breadcrumbs`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/el-GR.mjs
var $b3eca51cb720961a$exports = {};
$b3eca51cb720961a$exports = {
    "breadcrumbs": `\u{3A0}\u{3BB}\u{3BF}\u{3B7}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2} breadcrumb`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/en-US.mjs
var $0b39b205118db415$exports = {};
$0b39b205118db415$exports = {
    "breadcrumbs": `Breadcrumbs`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/es-ES.mjs
var $f467c0ee7bfb0950$exports = {};
$f467c0ee7bfb0950$exports = {
    "breadcrumbs": `Migas de pan`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/et-EE.mjs
var $ab711d2ffb4cdf3d$exports = {};
$ab711d2ffb4cdf3d$exports = {
    "breadcrumbs": `Lingiread`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/fi-FI.mjs
var $b63105d663e6f9d5$exports = {};
$b63105d663e6f9d5$exports = {
    "breadcrumbs": `Navigointilinkit`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/fr-FR.mjs
var $9d2ed7be7fcdc2a1$exports = {};
$9d2ed7be7fcdc2a1$exports = {
    "breadcrumbs": `Chemin de navigation`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/he-IL.mjs
var $c5704294d85c7b5d$exports = {};
$c5704294d85c7b5d$exports = {
    "breadcrumbs": `\u{5E9}\u{5D1}\u{5D9}\u{5DC}\u{5D9} \u{5E0}\u{5D9}\u{5D5}\u{5D5}\u{5D8}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/hr-HR.mjs
var $20c975671d6bbc63$exports = {};
$20c975671d6bbc63$exports = {
    "breadcrumbs": `Navigacijski putovi`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/hu-HU.mjs
var $2569ca3917233115$exports = {};
$2569ca3917233115$exports = {
    "breadcrumbs": `Morzsamen\xfc`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/it-IT.mjs
var $caa152f7f8e96c85$exports = {};
$caa152f7f8e96c85$exports = {
    "breadcrumbs": `Breadcrumb`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ja-JP.mjs
var $cbc6af0cc98fad10$exports = {};
$cbc6af0cc98fad10$exports = {
    "breadcrumbs": `\u{30D1}\u{30F3}\u{304F}\u{305A}\u{30EA}\u{30B9}\u{30C8}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ko-KR.mjs
var $ad9be5d332b4d607$exports = {};
$ad9be5d332b4d607$exports = {
    "breadcrumbs": `\u{D0D0}\u{C0C9} \u{D45C}\u{C2DC}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/lt-LT.mjs
var $659de19a00ff9617$exports = {};
$659de19a00ff9617$exports = {
    "breadcrumbs": `Nar\u{161}ymo kelias`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/lv-LV.mjs
var $173e9fb4d14fe309$exports = {};
$173e9fb4d14fe309$exports = {
    "breadcrumbs": `Atpaka\u{13C}ce\u{13C}i`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/nb-NO.mjs
var $d8e2640a066567a9$exports = {};
$d8e2640a066567a9$exports = {
    "breadcrumbs": `Navigasjonsstier`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/nl-NL.mjs
var $d71fd764236c0d12$exports = {};
$d71fd764236c0d12$exports = {
    "breadcrumbs": `Broodkruimels`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/pl-PL.mjs
var $f4ad3faf9f4aaec6$exports = {};
$f4ad3faf9f4aaec6$exports = {
    "breadcrumbs": `Struktura nawigacyjna`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/pt-BR.mjs
var $9703be9d55d8e9c2$exports = {};
$9703be9d55d8e9c2$exports = {
    "breadcrumbs": `Caminho detalhado`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/pt-PT.mjs
var $7e23baec8a14f309$exports = {};
$7e23baec8a14f309$exports = {
    "breadcrumbs": `Categorias`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ro-RO.mjs
var $568f95594049d56e$exports = {};
$568f95594049d56e$exports = {
    "breadcrumbs": `Miez de p\xe2ine`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ru-RU.mjs
var $625df06cecc70764$exports = {};
$625df06cecc70764$exports = {
    "breadcrumbs": `\u{41D}\u{430}\u{432}\u{438}\u{433}\u{430}\u{446}\u{438}\u{44F}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sk-SK.mjs
var $b5a67525f3a2f594$exports = {};
$b5a67525f3a2f594$exports = {
    "breadcrumbs": `Naviga\u{10D}n\xe9 prvky Breadcrumbs`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sl-SI.mjs
var $16125922964febca$exports = {};
$16125922964febca$exports = {
    "breadcrumbs": `Drobtine`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sr-SP.mjs
var $de104bf355206bcf$exports = {};
$de104bf355206bcf$exports = {
    "breadcrumbs": `Putanje navigacije`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sv-SE.mjs
var $d5ab76bcbadc9c07$exports = {};
$d5ab76bcbadc9c07$exports = {
    "breadcrumbs": `S\xf6kv\xe4gar`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/tr-TR.mjs
var $a6a1af5968159b55$exports = {};
$a6a1af5968159b55$exports = {
    "breadcrumbs": `\u{130}\xe7erik haritalar\u{131}`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/uk-UA.mjs
var $5204a30f0d17ffec$exports = {};
$5204a30f0d17ffec$exports = {
    "breadcrumbs": `\u{41D}\u{430}\u{432}\u{456}\u{433}\u{430}\u{446}\u{456}\u{439}\u{43D}\u{430} \u{441}\u{442}\u{435}\u{436}\u{43A}\u{430}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/zh-CN.mjs
var $8d15e736e12d3dfd$exports = {};
$8d15e736e12d3dfd$exports = {
    "breadcrumbs": `\u{5BFC}\u{822A}\u{680F}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/zh-TW.mjs
var $f8c49dd804b75140$exports = {};
$f8c49dd804b75140$exports = {
    "breadcrumbs": `\u{5C0E}\u{89BD}\u{5217}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/intlStrings.mjs



































var $8229b34715874f89$exports = {};


































$8229b34715874f89$exports = {
    "ar-AE": $b91590b2dc47de39$exports,
    "bg-BG": $55b0693b2cf3fe91$exports,
    "cs-CZ": $6ec1ed7729e948cc$exports,
    "da-DK": $5a41bb2baa6861e4$exports,
    "de-DE": $f28bbea439e87eca$exports,
    "el-GR": $b3eca51cb720961a$exports,
    "en-US": $0b39b205118db415$exports,
    "es-ES": $f467c0ee7bfb0950$exports,
    "et-EE": $ab711d2ffb4cdf3d$exports,
    "fi-FI": $b63105d663e6f9d5$exports,
    "fr-FR": $9d2ed7be7fcdc2a1$exports,
    "he-IL": $c5704294d85c7b5d$exports,
    "hr-HR": $20c975671d6bbc63$exports,
    "hu-HU": $2569ca3917233115$exports,
    "it-IT": $caa152f7f8e96c85$exports,
    "ja-JP": $cbc6af0cc98fad10$exports,
    "ko-KR": $ad9be5d332b4d607$exports,
    "lt-LT": $659de19a00ff9617$exports,
    "lv-LV": $173e9fb4d14fe309$exports,
    "nb-NO": $d8e2640a066567a9$exports,
    "nl-NL": $d71fd764236c0d12$exports,
    "pl-PL": $f4ad3faf9f4aaec6$exports,
    "pt-BR": $9703be9d55d8e9c2$exports,
    "pt-PT": $7e23baec8a14f309$exports,
    "ro-RO": $568f95594049d56e$exports,
    "ru-RU": $625df06cecc70764$exports,
    "sk-SK": $b5a67525f3a2f594$exports,
    "sl-SI": $16125922964febca$exports,
    "sr-SP": $de104bf355206bcf$exports,
    "sv-SE": $d5ab76bcbadc9c07$exports,
    "tr-TR": $a6a1af5968159b55$exports,
    "uk-UA": $5204a30f0d17ffec$exports,
    "zh-CN": $8d15e736e12d3dfd$exports,
    "zh-TW": $f8c49dd804b75140$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
;// ./node_modules/@react-aria/breadcrumbs/dist/useBreadcrumbs.mjs





function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $848231d7a2b3998e$export$8cefe241bd876ca0(props) {
    let { 'aria-label': ariaLabel, ...otherProps } = props;
    let strings = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($8229b34715874f89$exports))), '@react-aria/breadcrumbs');
    return {
        navProps: {
            ...(0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
                labelable: true
            }),
            'aria-label': ariaLabel || strings.format('breadcrumbs')
        }
    };
}



//# sourceMappingURL=useBreadcrumbs.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/Breadcrumbs.mjs








/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $778035c5624f61e7$export$65596d3621b0a4a0 = /*#__PURE__*/ (0, react.createContext)(null);
const $778035c5624f61e7$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, react.forwardRef)(function Breadcrumbs(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $778035c5624f61e7$export$65596d3621b0a4a0);
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { navProps: navProps } = (0, $848231d7a2b3998e$export$8cefe241bd876ca0)(props);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>{
        var _props_className;
        return /*#__PURE__*/ (0, react).createElement("ol", {
            ref: ref,
            ...navProps,
            slot: props.slot || undefined,
            style: props.style,
            className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-Breadcrumbs'
        }, /*#__PURE__*/ (0, react).createElement($778035c5624f61e7$export$65596d3621b0a4a0.Provider, {
            value: props
        }, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
            collection: collection
        })));
    });
});
const $778035c5624f61e7$export$dabcc1ec9dd9d1cc = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)('item', function Breadcrumb(props, ref, node) {
    // Recreating useBreadcrumbItem because we want to use composition instead of having the link builtin.
    let isCurrent = node.nextKey == null;
    let { isDisabled: isDisabled, onAction: onAction } = (0, utils/* useSlottedContext */.CC)($778035c5624f61e7$export$65596d3621b0a4a0);
    let linkProps = {
        'aria-current': isCurrent ? 'page' : null,
        isDisabled: isDisabled || isCurrent,
        onPress: ()=>onAction === null || onAction === void 0 ? void 0 : onAction(node.key)
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...node.props,
        children: node.rendered,
        values: {
            isDisabled: isDisabled || isCurrent,
            isCurrent: isCurrent
        },
        defaultClassName: 'react-aria-Breadcrumb'
    });
    return /*#__PURE__*/ (0, react).createElement("li", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...renderProps,
        ref: ref,
        "data-disabled": isDisabled || isCurrent || undefined,
        "data-current": isCurrent || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, Link/* LinkContext */.s).Provider, {
        value: linkProps
    }, renderProps.children));
});



//# sourceMappingURL=Breadcrumbs.module.js.map


/***/ })

}]);