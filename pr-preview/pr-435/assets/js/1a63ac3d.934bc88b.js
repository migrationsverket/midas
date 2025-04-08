"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[645],{

/***/ 13912:
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
  metadata: () => (/* reexport */ site_docs_components_tabs_mdx_1a6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-tabs-mdx-1a6.json
const site_docs_components_tabs_mdx_1a6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/tabs","title":"Tabs","description":"Fördela information över flertalet tabbar.","source":"@site/docs/components/tabs.mdx","sourceDirName":"components","slug":"/components/tabs","permalink":"/pr-preview/pr-435/components/tabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tabs","description":"Fördela information över flertalet tabbar.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 2 modules
var CodeBlock = __webpack_require__(634);
// EXTERNAL MODULE: ./packages/components/src/tabs/Tabs.tsx + 1 modules
var tabs_Tabs = __webpack_require__(71383);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
;// ./apps/docs/docs/components/tabs.mdx


const frontMatter = {
	title: 'Tabs',
	description: 'Fördela information över flertalet tabbar.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      MidasTabs: tabs_Tabs/* Tabs */.t,
      Button: Button/* Button */.$,
      Text: Text/* Text */.E
    },
    ...props,
    children: `<MidasTabs
          defaultSelected="Viktigt att veta"
          label="Följ processen"
          tabs={['Frukter', 'Bär', 'Fruktförband av stenfrukter'] as const}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur
            maxime dicta omnis aliquam quas doloremque cumque repellendus iure.
            Eveniet reprehenderit sapiente quidem culpa nam? Vel?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur
            maxime dicta omnis aliquam quas doloremque cumque repellendus iure.
            Eveniet reprehenderit sapiente quidem culpa nam? Vel?
          </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur
          maxime dicta omnis aliquam quas doloremque cumque repellendus iure.
          Eveniet reprehenderit sapiente quidem culpa nam? Vel?
        </Text>
      </MidasTabs>`
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
      name: 'Tabs',
      friendlyName: 'Flikar'
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent för att segmentera information. Används för att minska informationsmängden som direkt presenteras för användaren."
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
        children: "import { Tabs } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Tabs"
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

/***/ 71383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tabs.mjs + 7 modules
var dist_Tabs = __webpack_require__(19511);
;// ./packages/components/src/tabs/Tabs.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tabs_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--border-subtle":"light-dark(#bfbfbf, #383838)","--border-brand":"light-dark(#143c50, #143c50)","--focus":"0 0 0 2px white, 0 0 0 4px black","--breakpoint-sm":"(max-width: 767px)","container":"container_eqN_","list":"list_hLP_","listItem":"listItem_P0Ws","panel":"panel_Geh5"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tabs/Tabs.tsx
'use client';// Define a type for children elements that can accept an id prop
var Tabs=function Tabs(_ref){var tabs=_ref.tabs,label=_ref.label,defaultSelected=_ref.defaultSelected,children=_ref.children;var childrenArray=react.Children.toArray(children);// Check if the number of children matches the number of tabs
if(childrenArray.length!==tabs.length){throw new Error("The number of children must match the number of tabs. Children: "+childrenArray.length+" Tabs: "+tabs.length);}// Create a map of tab titles to their corresponding content
var tabContentMap=childrenArray.reduce(function(acc,child,index){if(/*#__PURE__*/react.isValidElement(child)){var _tabs$index;var title=(_tabs$index=tabs[index])==null?void 0:_tabs$index.toLowerCase();if(title){acc[title]=/*#__PURE__*/react.cloneElement(child,{id:title});}}return acc;},{});return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Tabs/* Tabs */.tU,{orientation:"vertical",defaultSelectedKey:defaultSelected&&defaultSelected.toLowerCase(),className:Tabs_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* TabList */.wb,{"aria-label":label,className:Tabs_module.list,children:tabs.map(function(tab){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* Tab */.oz,{id:tab.toLowerCase(),className:Tabs_module.listItem,children:tab},tab);})}),tabs.map(function(tab){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* TabPanel */.Kp,{id:tab.toLowerCase(),className:Tabs_module.panel,children:tabContentMap[tab.toLowerCase()]},tab);})]});};

/***/ }),

/***/ 93361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--size-03":"1rem","--line-height-02":"1.125rem","--line-height-03":"1.25rem","--line-height-04":"1.375rem","--line-height-05":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 12152:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $83013635b024ae3d$export$eac1895992b9f3d6)
/* harmony export */ });
/* harmony import */ var _FocusScope_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13560);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
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


function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
    let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, _FocusScope_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getFocusableTreeWalker */ .N$)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    'tabIndex',
                    'disabled'
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}



//# sourceMappingURL=useHasTabbableChild.module.js.map


/***/ }),

/***/ 7471:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $a02d57049d202695$export$d085fb9e920b5ca7)
/* harmony export */ });
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
 */ class $a02d57049d202695$export$d085fb9e920b5ca7 {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        var _node_prevKey;
        return node ? (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        var _node_nextKey;
        return node ? (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
    }
    constructor(nodes){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        var _last_key;
        this.lastKey = (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
    }
}



//# sourceMappingURL=ListCollection.module.js.map


/***/ }),

/***/ 46655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ $e72dd72e1c76a225$export$ba9d38c0f1bf2b36),
/* harmony export */   p: () => (/* binding */ $e72dd72e1c76a225$export$2f645645f7bca764)
/* harmony export */ });
/* harmony import */ var _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7471);
/* harmony import */ var _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73837);
/* harmony import */ var _react_stately_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60632);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13796);





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



function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
    let { filter: filter, layoutDelegate: layoutDelegate } = props;
    let selectionState = (0, _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__/* .useMultipleSelectionState */ .R)(props);
    let disabledKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nodes)=>filter ? new (0, _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ListCollection */ .J)(filter(nodes)) : new (0, _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ListCollection */ .J)(nodes), [
        filter
    ]);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_3__/* .useCollection */ .G)(props, factory, context);
    let selectionManager = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _react_stately_selection__WEBPACK_IMPORTED_MODULE_4__/* .SelectionManager */ .Y)(collection, selectionState, {
            layoutDelegate: layoutDelegate
        }), [
        collection,
        selectionState,
        layoutDelegate
    ]);
    $e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager
    };
}
function $e72dd72e1c76a225$export$ba9d38c0f1bf2b36(state, filter) {
    let collection = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>filter ? state.collection.UNSTABLE_filter(filter) : state.collection, [
        state.collection,
        filter
    ]);
    let selectionManager = state.selectionManager.withCollection(collection);
    $e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        selectionManager: selectionManager,
        disabledKeys: state.disabledKeys
    };
}
function $e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager) {
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
            const startItem = cachedCollection.current.getItem(selectionManager.focusedKey);
            const cachedItemNodes = [
                ...cachedCollection.current.getKeys()
            ].map((key)=>{
                const itemNode = cachedCollection.current.getItem(key);
                return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === 'item' ? itemNode : null;
            }).filter((node)=>node !== null);
            const itemNodes = [
                ...collection.getKeys()
            ].map((key)=>{
                const itemNode = collection.getItem(key);
                return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === 'item' ? itemNode : null;
            }).filter((node)=>node !== null);
            var _cachedItemNodes_length, _itemNodes_length;
            const diff = ((_cachedItemNodes_length = cachedItemNodes === null || cachedItemNodes === void 0 ? void 0 : cachedItemNodes.length) !== null && _cachedItemNodes_length !== void 0 ? _cachedItemNodes_length : 0) - ((_itemNodes_length = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length !== void 0 ? _itemNodes_length : 0);
            var _startItem_index, _startItem_index1, _itemNodes_length1;
            let index = Math.min(diff > 1 ? Math.max(((_startItem_index = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index !== void 0 ? _startItem_index : 0) - diff + 1, 0) : (_startItem_index1 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index1 !== void 0 ? _startItem_index1 : 0, ((_itemNodes_length1 = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length1 !== void 0 ? _itemNodes_length1 : 0) - 1);
            let newNode = null;
            let isReverseSearching = false;
            while(index >= 0){
                if (!selectionManager.isDisabled(itemNodes[index].key)) {
                    newNode = itemNodes[index];
                    break;
                }
                // Find next, not disabled item.
                if (index < itemNodes.length - 1 && !isReverseSearching) index++;
                else {
                    isReverseSearching = true;
                    var _startItem_index2, _startItem_index3;
                    if (index > ((_startItem_index2 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index2 !== void 0 ? _startItem_index2 : 0)) index = (_startItem_index3 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index3 !== void 0 ? _startItem_index3 : 0;
                    index--;
                }
            }
            selectionManager.setFocusedKey(newNode ? newNode.key : null);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager
    ]);
}



//# sourceMappingURL=useListState.module.js.map


/***/ }),

/***/ 319:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ $a0d645289fe9b86b$export$e7f05e985daf4b5f)
/* harmony export */ });
/* harmony import */ var _useListState_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46655);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




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


function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
    var _props_defaultSelectedKey;
    let [selectedKey, setSelectedKey] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection, disabledKeys: disabledKeys, selectionManager: selectionManager } = (0, _useListState_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useListState */ .p)({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            var _keys_values_next_value;
            let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
}



//# sourceMappingURL=useSingleSelectListState.module.js.map


/***/ }),

/***/ 27279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $514c0188e459b4c0$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $514c0188e459b4c0$export$9afb8bc826b033ea)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
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

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: ElementType = 'span', ...domProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.module.js.map


/***/ })

}]);