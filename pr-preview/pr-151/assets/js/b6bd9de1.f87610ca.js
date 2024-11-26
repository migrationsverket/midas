"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3172],{

/***/ 21911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_14_mdx_b6b_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_14_mdx_b6b_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94281);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19365);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29511);
/* harmony import */ var _midas_ds_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16771);
/* harmony import */ var _midas_ds_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63918);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93294);
/* harmony import */ var _midas_ds_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26196);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80697);


const frontMatter = {
	title: 'Release 14',
	description: '.',
	slug: 'release-14',
	tags: [
		'releaser'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};

/*truncate*/











const toc = [{
  "value": "Ny komponent: Modal",
  "id": "ny-komponent-modal",
  "level": 2
}, {
  "value": "Ikoner på Button",
  "id": "ikoner-på-button",
  "level": 2
}, {
  "value": "Mindre justeringar",
  "id": "mindre-justeringar",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Nedan är en sammanfattning av nyheterna i release 14."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ny-komponent-modal",
      children: "Ny komponent: Modal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Modalen öppnar en ruta ovanför gränssnittet som användaren måste interagera med innan den kan gå vidare. Modalen har flera användningsområden, t.ex. för att förtydliga konsekvenserna av ett val i gränssnittet eller presentera mer information. Läs mer på komponentsidan för ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/components/modal",
        children: "Modal"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      groupId: "npm2yarn",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/modal\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "yarn",
        label: "Yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/modal\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/modal\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Button: _midas_ds_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n,
        Modal: _midas_ds_modal__WEBPACK_IMPORTED_MODULE_5__/* .Modal */ .a,
        Flex: _midas_ds_flex__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s,
        FlexItem: _midas_ds_flex__WEBPACK_IMPORTED_MODULE_7__/* .FlexItem */ .Z
      },
      children: `<>
  <Button onPress={setIsOpen}>Radera frukter</Button>
  <Modal id="modal" title="Vill du radera alla frukter?" isOpen={isOpen} onOpenChange={setIsOpen}>
      <p>Är du säker? De går inte att återskapa.</p>
      <Flex fluid={true}>
          <FlexItem col='auto'>
              <Button onPress={() => setIsOpen(false)} variant="danger">Radera frukter</Button>
          </FlexItem>
          <FlexItem>
              <Button
                  onPress={() => setIsOpen(false)}
                  variant='secondary'
              >
                  Avbryt
              </Button>
          </FlexItem>
      </Flex>
  </Modal>

</>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ikoner-på-button",
      children: "Ikoner på Button"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Button kan nu acceptera ikoner som prop. Ikonen läggs till via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "icon"
      }), ".\nDu kan välja vilken sida av texten ikonen ska vara på med ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "iconPlacement"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Plus: lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
        Button: _midas_ds_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n
      },
      children: `<Button
  icon={Plus}
  variant='tertiary'
  iconPlacement="right"
>
  Lägg till rad
</Button>
`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "mindre-justeringar",
      children: "Mindre justeringar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Varningsmeddelanden på samtliga inputfält är ny röda för tydlighetens skull."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["InfoBanner beter sig nu som en vanlig ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<div>"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "LinkButton har nu samma egenskaper som Button"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 19365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){var children=_ref.children,hidden=_ref.hidden,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden:hidden,children:children});}

/***/ }),

/***/ 11470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(23104);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(57485);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(31682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(60867);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){var props=comp.props;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){var _React$Children$toArr,_React$Children$toArr2;return(_React$Children$toArr=(_React$Children$toArr2=react.Children.toArray(children).filter(function(child){return child!=='\n';}).map(function(child){if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");}))==null?void 0:_React$Children$toArr2.filter(Boolean))!=null?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(function(_ref){var _ref$props=_ref.props,value=_ref$props.value,label=_ref$props.label,attributes=_ref$props.attributes,isDefault=_ref$props["default"];return{value:value,label:label,attributes:attributes,"default":isDefault};});}function ensureNoDuplicateValue(values){var dup=(0,jsUtils/* duplicates */.XI)(values,function(a,b){return a.value===b.value;});if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(function(a){return a.value;}).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){var valuesProp=props.values,children=props.children;return (0,react.useMemo)(function(){var values=valuesProp!=null?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){var value=_ref2.value,tabValues=_ref2.tabValues;return tabValues.some(function(a){return a.value===value;});}function getInitialStateValue(_ref3){var _tabValues$find;var defaultValue=_ref3.defaultValue,tabValues=_ref3.tabValues;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues:tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(function(a){return a.value;}).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}var defaultTabValue=(_tabValues$find=tabValues.find(function(tabValue){return tabValue["default"];}))!=null?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){var _ref4$queryString=_ref4.queryString,queryString=_ref4$queryString===void 0?false:_ref4$queryString,groupId=_ref4.groupId;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!=null?groupId:null;}function useTabQueryString(_ref5){var _ref5$queryString=_ref5.queryString,queryString=_ref5$queryString===void 0?false:_ref5$queryString,groupId=_ref5.groupId;var history=(0,react_router/* useHistory */.W6)();var key=getQueryStringKey({queryString:queryString,groupId:groupId});var value=(0,historyUtils/* useQueryStringValue */.aZ)(key);var setValue=(0,react.useCallback)(function(newValue){if(!key){return;// no-op
}var searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){var groupId=_ref6.groupId;var key=getStorageKey(groupId);var _useStorageSlot=(0,storageUtils/* useStorageSlot */.Dv)(key),value=_useStorageSlot[0],storageSlot=_useStorageSlot[1];var setValue=(0,react.useCallback)(function(newValue){if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){var defaultValue=props.defaultValue,_props$queryString=props.queryString,queryString=_props$queryString===void 0?false:_props$queryString,groupId=props.groupId;var tabValues=useTabValues(props);var _useState=(0,react.useState)(function(){return getInitialStateValue({defaultValue:defaultValue,tabValues:tabValues});}),selectedValue=_useState[0],setSelectedValue=_useState[1];var _useTabQueryString=useTabQueryString({queryString:queryString,groupId:groupId}),queryStringValue=_useTabQueryString[0],setQueryString=_useTabQueryString[1];var _useTabStorage=useTabStorage({groupId:groupId}),storageValue=_useTabStorage[0],setStorageValue=_useTabStorage[1];// We sync valid querystring/storage value to state on change + hydration
var valueToSync=function(){var value=queryStringValue!=null?queryStringValue:storageValue;if(!isValidValue({value:value,tabValues:tabValues})){return null;}return value;}();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(function(){if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);var selectValue=(0,react.useCallback)(function(newValue){if(!isValidValue({value:newValue,tabValues:tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue:selectedValue,selectValue:selectValue,tabValues:tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){var className=_ref.className,block=_ref.block,selectedValue=_ref.selectedValue,selectValue=_ref.selectValue,tabValues=_ref.tabValues;var tabRefs=[];var _useScrollPositionBlo=(0,scrollUtils/* useScrollPositionBlocker */.a_)(),blockElementScrollPositionUntilNextRender=_useScrollPositionBlo.blockElementScrollPositionUntilNextRender;var handleTabChange=function handleTabChange(event){var newTab=event.currentTarget;var newTabIndex=tabRefs.indexOf(newTab);var newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};var handleKeydown=function handleKeydown(event){var _focusElement;var focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;var nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!=null?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;var prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!=null?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)==null||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(function(_ref2){var value=_ref2.value,label=_ref2.label,attributes=_ref2.attributes;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:function ref(tabControl){return tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes==null?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!=null?label:value}),value);})});}function TabContent(_ref3){var lazy=_ref3.lazy,children=_ref3.children,selectedValue=_ref3.selectedValue;var childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){var selectedTabItem=childTabs.find(function(tabItem){return tabItem.props.value===selectedValue;});if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map(function(tabItem,i){return/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue});})});}function TabsComponent(props){var tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,Object.assign({},tabs,props)),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,Object.assign({},tabs,props))]});}function Tabs(props){var isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,Object.assign({},props,{children:sanitizeTabsChildren(props.children)}),String(isBrowser));}

/***/ }),

/***/ 16771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ Modal)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/modal/src/lib/Modal.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Modal_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","white":"#ffffff","gray10":"#f2f2f2","modal":"modal_oR1A","modalHeader":"modalHeader_StAp","modalBody":"modalBody_C0aM","modalHeading":"modalHeading_flMZ"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/modal/src/lib/Modal.tsx
'use client';var _excluded=["id","isOpen","onOpenChange","children","title","className"];var Modal=function Modal(_ref){var id=_ref.id,isOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,children=_ref.children,title=_ref.title,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);react.useEffect(function(){if(isOpen){var _ref$current;(_ref$current=ref.current)==null||_ref$current.showModal();}else{var _ref$current2;(_ref$current2=ref.current)==null||_ref$current2.close();}},[isOpen]);var handleClose=function handleClose(){var _ref$current3;(_ref$current3=ref.current)==null||_ref$current3.close();onOpenChange(false);};var headingId=id+'_heading';return/*#__PURE__*/(0,jsx_runtime.jsxs)("dialog",Object.assign({id:id,ref:ref,onCancel:function onCancel(){return onOpenChange(false);},className:(0,clsx/* default */.A)(Modal_module.modal,className),"aria-labelledby":headingId},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Modal_module.modalHeader,children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,{onPress:function onPress(){return handleClose();},variant:"tertiary",icon:x/* default */.A,iconPlacement:"right",children:"St\xE4ng"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Modal_module.modalBody,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:Modal_module.modalHeading,id:headingId,children:title}),children]})]}));};
;// ./packages/modal/src/index.ts


/***/ }),

/***/ 26196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* reexport */ TextArea)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/textarea/src/lib/TextArea.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextArea_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","smBreakpoint":"(max-width: 767px)","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","blue100":"#2e7ca5","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","textArea":"textArea_tiIs","count":"count_OzSk"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextArea.mjs
var dist_TextArea = __webpack_require__(43660);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textarea/src/lib/TextArea.tsx
'use client';var _excluded=["label","description","rows","maxCharacters","errorMessage","showCounter"];var TextArea=function TextArea(_ref){var label=_ref.label,description=_ref.description,rows=_ref.rows,maxCharacters=_ref.maxCharacters,errorMessage=_ref.errorMessage,showCounter=_ref.showCounter,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),value=_React$useState[0],setValue=_React$useState[1];var _React$useState2=react.useState(false),hasExceededMaxCharacters=_React$useState2[0],setHasExceededMaxCharacters=_React$useState2[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);if(maxCharacters){setHasExceededMaxCharacters(newValue.length>maxCharacters);}};var Count=function Count(){if(maxCharacters){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:TextArea_module.count,children:[value.length," / ",maxCharacters]});}if(showCounter){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:TextArea_module.count,children:value.length});}return null;};var getErrorMessage=function getErrorMessage(maxCharacters){if(hasExceededMaxCharacters){return value.length-maxCharacters+" tecken f\xF6r mycket";}return errorMessage;};return/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,Object.assign({className:src/* TextFieldStyles */.Ql.inputField},props,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* InputWrapper */.oi,Object.assign({label:label,description:description,errorMessage:getErrorMessage(maxCharacters||0),isInvalid:hasExceededMaxCharacters||props.isInvalid},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Count,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextArea/* TextArea */.f,{className:TextArea_module.textArea,rows:rows,onFocus:handleChange,onChange:handleChange})]}))}));};
;// ./packages/textarea/src/index.ts


/***/ }),

/***/ 42619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oi: () => (/* reexport */ InputWrapper),
  A_: () => (/* reexport */ TextField),
  Ql: () => (/* reexport */ TextField_module)
});

// UNUSED EXPORTS: ssnRegEx

;// ./packages/textfield/src/lib/TextField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextField_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_kJaH","inputWrapper":"inputWrapper_RfiT","label":"label_Pxyb","text":"text_CvV8","fieldError":"fieldError_kz46","passwordText":"passwordText_Gtww","input":"input_B57n","wrap":"wrap_g1RZ","passwordButton":"passwordButton_bCY3"});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var dist_TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textfield/src/lib/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),input=_React$useState[0],setInput=_React$useState[1];var _React$useState2=react.useState(true),isValid=_React$useState2[0],setIsValid=_React$useState2[1];var validateInput=function validateInput(value){if(validationType===undefined)return true;if(validationType==='ssn')setIsValid(ssnRegEx.test(value));if(validationType instanceof RegExp)setIsValid(new RegExp(validationType).test(value));};var handleInputBlur=function handleInputBlur(e){var value=e.target.value;validateInput(value);};var handleInputChange=function handleInputChange(e){setInput(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:TextField_module.inputField,isInvalid:validationType!==undefined?!isValid:props.isInvalid},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{type:props.type,className:TextField_module.input,onChange:handleInputChange,onBlur:handleInputBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:input})]})})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState3=react.useState(false),showPassword=_React$useState3[0],setShowPassword=_React$useState3[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:TextField_module.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');
;// ./packages/textfield/src/lib/index.ts

;// ./packages/textfield/src/index.ts


/***/ }),

/***/ 80697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);


//# sourceMappingURL=plus.js.map


/***/ }),

/***/ 48697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ 94281:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-151/blog/release-14","source":"@site/blog/release14.mdx","title":"Release 14","description":".","date":"2024-10-31T15:22:12.000Z","tags":[{"inline":true,"label":"releaser","permalink":"/pr-preview/pr-151/blog/tags/releaser"}],"readingTime":1.17,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 14","description":".","slug":"release-14","tags":["releaser"]},"unlisted":false,"prevItem":{"title":"Release 15","permalink":"/pr-preview/pr-151/blog/release-15"},"nextItem":{"title":"Release 13","permalink":"/pr-preview/pr-151/blog/release-13"}}');

/***/ })

}]);