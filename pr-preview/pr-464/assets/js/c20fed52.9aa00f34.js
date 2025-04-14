"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1680],{

/***/ 19049:
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
  metadata: () => (/* reexport */ site_docs_components_card_mdx_c20_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-card-mdx-c20.json
const site_docs_components_card_mdx_c20_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/card","title":"Card","description":"En card-komponent är en modulär enhet som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.","source":"@site/docs/components/card.mdx","sourceDirName":"components","slug":"/components/card","permalink":"/pr-preview/pr-464/components/card","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Card","description":"En card-komponent är en modulär enhet som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(12186);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(85523);
// EXTERNAL MODULE: ./packages/components/src/card/Card.tsx + 1 modules
var Card = __webpack_require__(26333);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 2 modules
var CodeBlock = __webpack_require__(634);
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









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Grid: Grid/* Grid */.x,
      GridItem: GridItem/* GridItem */.E,
      Card: Card/* Card */.Z
    },
    ...props,
    children: `<Grid fluid>
        {fruits.shuffled(3).map(fruit => (
          <GridItem col={4} key={fruit.value}>
            <Card
              title={fruit.name}
              content={fruit.description}
              image={{ source: fruit.image, description: fruit.description }}
              link={{href: '#', children: 'Läs mer om denna frukt'}}
              headingTag="h2"
            />
          </GridItem>
        ))}
      </Grid>`
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
      name: 'Card',
      friendlyName: 'Kort',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som är en yta med plats för information och åtgärder relaterat till ett specifikt ämne. Kort används primärt för att presentera innehåll på ett visuellt tilltalande sätt samt länka till innehållet."
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
        children: "import { Card } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
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

/***/ 26333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Card)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./packages/components/src/card/Card.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Card_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--border-strong":"light-dark(#171717, #f2f2f2)","--layer-02":"light-dark(#ffffff, #383838)","--layer-hover-02":"light-dark(#e6e6e6, #474747)","--layer-selected-02":"light-dark(#d9d9d9, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","--fast-transition":"250ms","--text-primary":"light-dark(#171717, #f2f2f2)","--blue-20":"#d5e5ed","card":"card_Ssoo","content":"content_nzWb","heading":"heading_H8AC","image":"image_Lcl4","text":"text_WJq5"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/card/Card.tsx
'use client';var _excluded=["image","title","content","link","headingTag","customImageComponent","customLinkComponent","className"];/**
 * This component renders a card with optional image, title, content.
 *
 * @see {@link https://designsystem.migrationsverket.se/components/card/}
 */var Card=function Card(_ref){var image=_ref.image,title=_ref.title,content=_ref.content,link=_ref.link,_ref$headingTag=_ref.headingTag,HeadingTag=_ref$headingTag===void 0?'h1':_ref$headingTag,customImageComponent=_ref.customImageComponent,CustomLinkComponent=_ref.customLinkComponent,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var contentId=react.useId();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(Card_module.card,className),"data-disabled":link==null?void 0:link.isDisabled},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Card_module.content,children:[customImageComponent?customImageComponent:(image==null?void 0:image.source)&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:image.source,alt:image.description,className:Card_module.image}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{id:contentId,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeadingTag,{className:Card_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Card_module.text,children:content})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,Object.assign({"aria-describedby":contentId},link,{standalone:true,stretched:true,as:CustomLinkComponent}))]}));};

/***/ }),

/***/ 12186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96708);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","fluid"];/**
 * Grid based on display: grid;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$fluid=_ref.fluid,fluid=_ref$fluid===void 0?false:_ref$fluid,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,fluid&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fluid,rest.className)},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.grid,children:children})}));};

/***/ }),

/***/ 85523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96708);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","col"];var GridItem=function GridItem(_ref){var children=_ref.children,col=_ref.col,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var colClass=col?"col-"+col:'';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[colClass],rest.className)},rest,{children:children}));};

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

/***/ 96708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1200px)","--breakpoint-xl":"(min-width: 1440px)","container":"container_uCKZ","grid":"grid_M0Fc","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-4":"col-4_Ovxr","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-4":"offset-4_L0XB","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv"});

/***/ })

}]);