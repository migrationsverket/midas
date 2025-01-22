"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5320],{

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_fileupload_mdx_cdb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-fileupload-mdx-cdb.json
const site_docs_components_fileupload_mdx_cdb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/fileupload","title":"FileUpload","description":"Filuppladdning används när användaren behöver ladda upp en eller flera filer från det egen filsystemet.","source":"@site/docs/components/fileupload.mdx","sourceDirName":"components","slug":"/components/fileupload","permalink":"/pr-preview/pr-201/components/fileupload","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FileUpload","description":"Filuppladdning används när användaren behöver ladda upp en eller flera filer från det egen filsystemet.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/file-upload/src/index.ts + 3 modules
var src = __webpack_require__(45679);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(32705);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/fileupload.mdx


const frontMatter = {
	title: 'FileUpload',
	description: 'Filuppladdning används när användaren behöver ladda upp en eller flera filer från det egen filsystemet.',
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
      name: 'FileUpload',
      friendlyName: 'Filuppladdning',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/FileTrigger.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filuppladdning används när användaren behöver ladda upp en eller flera filer från det egen filsystemet."
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
            children: "npm install @midas-ds/fileupload\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/fileupload\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/fileupload\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { FileUpload } from '@midas-ds/fileupload'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        FileUpload: src/* FileUpload */.e
      },
      children: `<FileUpload allowsMultiple label={'Etikett'} description={'Beskrivning'}/>`
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

/***/ 45679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* reexport */ FileUpload)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90675);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DropZone.mjs + 41 modules
var DropZone = __webpack_require__(46090);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FileTrigger.mjs
var FileTrigger = __webpack_require__(77064);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./packages/file-upload/src/lib/FileUpload.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FileUpload_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","gray10":"#f2f2f2","gray90":"#8c8c8c","mediumWeight":"500","regularWeight":"400","box":"box_bSkU","list":"list_FZEM","container":"container_YgUg","label":"label_m4WB","text":"text__cO9","dropzone":"dropzone_yvPs","input":"input__Ncf"});
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var textfield_src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/file-upload/src/lib/FileUpload.tsx
'use client';var FileUpload=function FileUpload(_ref){var allowsMultiple=_ref.allowsMultiple,label=_ref.label,description=_ref.description,dropzone=_ref.dropzone;var _React$useState=react.useState(null),files=_React$useState[0],setFiles=_React$useState[1];var handleUpload=function handleUpload(files){setFiles(files!==null?Array.from(files):[]);// TODO: actually handle files?
};var handleDrop=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(e){var filePromises,resolvedFiles;return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:filePromises=e.items.filter(function(file){return file.kind==='file';}).map(function(file){return file.getFile();});_context.next=3;return Promise.all(filePromises);case 3:resolvedFiles=_context.sent;setFiles(resolvedFiles);case 5:case"end":return _context.stop();}},_callee);}));return function handleDrop(_x){return _ref2.apply(this,arguments);};}();if(dropzone)return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DropZone/* DropZone */.w,{onDrop:handleDrop,className:FileUpload_module.dropzone,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",style:{display:'block'},children:"Dra och sl\xE4pp en fil inuti det streckade omr\xE5det"})}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(textfield_src/* InputWrapper */.oi,{label:label,description:description,children:/*#__PURE__*/(0,jsx_runtime.jsx)(FileTrigger/* FileTrigger */.F,{allowsMultiple:allowsMultiple,onSelect:function onSelect(files){return handleUpload(files);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,{variant:"secondary","aria-labelledby":"fileUpload",className:FileUpload_module.input,children:allowsMultiple?'Välj filer':'Välj fil'})})}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});};var FileList=function FileList(_ref3){var files=_ref3.files,setFiles=_ref3.setFiles;var handleRemove=function handleRemove(index){setFiles(files==null?void 0:files.filter(function(f,i){return i!==index;}));};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:FileUpload_module.list,children:files.map(function(file,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:FileUpload_module.box,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:file.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,{variant:"icon",size:"small",onPress:function onPress(){return handleRemove(index);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})})]},index);})});};
;// ./packages/file-upload/src/lib/index.ts

;// ./packages/file-upload/src/index.ts


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

/***/ 83362:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $f1ab8c75478c6f73$export$cf75428e0b9ed1ea),
/* harmony export */   Y: () => (/* binding */ $f1ab8c75478c6f73$export$3351871ee4b288b8)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48084);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83908);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6660);
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


const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).forwardRef(({ children: children, ...props }, ref)=>{
    let isRegistered = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    let prevContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F));
    ref = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useObjectRef */ .U)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
    let context = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .v)(prevContext || {}, {
        ...props,
        ref: ref,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useSyncRef */ .w)(prevContext, ref);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isRegistered.current) {
            console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
});
function $f1ab8c75478c6f73$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
}



//# sourceMappingURL=PressResponder.module.js.map


/***/ }),

/***/ 44346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $ef06256079686ba0$export$f8aeda7b10753fa1)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
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

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}



//# sourceMappingURL=useDescription.module.js.map


/***/ }),

/***/ 87979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $5c3e21d68f1c4674$export$a966af930f325cab),
/* harmony export */   s: () => (/* binding */ $5c3e21d68f1c4674$export$439d29a4e110a164)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59461);




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


const $5c3e21d68f1c4674$var$styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
    let { style: style, isFocusable: isFocusable } = props;
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__/* .useFocusWithin */ .R)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$5c3e21d68f1c4674$var$styles,
            ...style
        };
        else return $5c3e21d68f1c4674$var$styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children, elementType: Element = 'div', isFocusable: isFocusable, style: style, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(Element, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(otherProps, visuallyHiddenProps), children);
}



//# sourceMappingURL=VisuallyHidden.module.js.map


/***/ }),

/***/ 71166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ $df39c1238ae2b5f3$exports)
});

;// ./node_modules/react-aria-components/dist/ar-AE.mjs
var $e038a7e7a6d81989$exports = {};
$e038a7e7a6d81989$exports = {
    "colorSwatchPicker": `\u{62A}\u{63A}\u{64A}\u{64A}\u{631}\u{627}\u{62A} \u{627}\u{644}\u{623}\u{644}\u{648}\u{627}\u{646}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{62D}\u{62F}\u{62F} \u{639}\u{646}\u{635}\u{631}\u{64B}\u{627}`,
    "tableResizer": `\u{623}\u{62F}\u{627}\u{629} \u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{62D}\u{62C}\u{645}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/react-aria-components/dist/bg-BG.mjs
var $0ec14741b0133644$exports = {};
$0ec14741b0133644$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{438} \u{43C}\u{43E}\u{441}\u{442}\u{440}\u{438}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}`,
    "tableResizer": `\u{41F}\u{440}\u{435}\u{43E}\u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/react-aria-components/dist/cs-CZ.mjs
var $642f7badf2405784$exports = {};
$642f7badf2405784$exports = {
    "colorSwatchPicker": `Vzorky barev`,
    "dropzoneLabel": `M\xedsto pro p\u{159}eta\u{17E}en\xed`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `Zm\u{11B}na velikosti`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/react-aria-components/dist/da-DK.mjs
var $30cee8d2535734ec$exports = {};
$30cee8d2535734ec$exports = {
    "colorSwatchPicker": `Farvepr\xf8ver`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe6lg et element`,
    "tableResizer": `St\xf8rrelses\xe6ndring`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/react-aria-components/dist/de-DE.mjs
var $c302d0504fca332a$exports = {};
$c302d0504fca332a$exports = {
    "colorSwatchPicker": `Farbfelder`,
    "dropzoneLabel": `Ablegebereich`,
    "selectPlaceholder": `Element w\xe4hlen`,
    "tableResizer": `Gr\xf6\xdfenanpassung`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/react-aria-components/dist/el-GR.mjs
var $0d0703f2bd7e421c$exports = {};
$0d0703f2bd7e421c$exports = {
    "colorSwatchPicker": `\u{3A7}\u{3C1}\u{3C9}\u{3BC}\u{3B1}\u{3C4}\u{3B9}\u{3BA}\u{3AC} \u{3B4}\u{3B5}\u{3AF}\u{3B3}\u{3BC}\u{3B1}\u{3C4}\u{3B1}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3BE}\u{3C4}\u{3B5} \u{3AD}\u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3C4}\u{3B9}\u{3BA}\u{3B5}\u{3AF}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "tableResizer": `\u{391}\u{3BB}\u{3BB}\u{3B1}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3B3}\u{3AD}\u{3B8}\u{3BF}\u{3C5}\u{3C2}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/react-aria-components/dist/en-US.mjs
var $cafa55beb2fc5ef3$exports = {};
$cafa55beb2fc5ef3$exports = {
    "selectPlaceholder": `Select an item`,
    "tableResizer": `Resizer`,
    "dropzoneLabel": `DropZone`,
    "colorSwatchPicker": `Color swatches`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/react-aria-components/dist/es-ES.mjs
var $18ac2ceede598103$exports = {};
$18ac2ceede598103$exports = {
    "colorSwatchPicker": `Muestras de colores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Seleccionar un art\xedculo`,
    "tableResizer": `Cambiador de tama\xf1o`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/react-aria-components/dist/et-EE.mjs
var $718705a15b8a633a$exports = {};
$718705a15b8a633a$exports = {
    "colorSwatchPicker": `V\xe4rvin\xe4idised`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valige \xfcksus`,
    "tableResizer": `Suuruse muutja`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/react-aria-components/dist/fi-FI.mjs
var $bf36dae9ecc81ce0$exports = {};
$bf36dae9ecc81ce0$exports = {
    "colorSwatchPicker": `V\xe4rimallit`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valitse kohde`,
    "tableResizer": `Koon muuttaja`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/react-aria-components/dist/fr-FR.mjs
var $0b4828edb010b855$exports = {};
$0b4828edb010b855$exports = {
    "colorSwatchPicker": `\xc9chantillons de couleurs`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `S\xe9lectionner un \xe9l\xe9ment`,
    "tableResizer": `Redimensionneur`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/react-aria-components/dist/he-IL.mjs
var $0030f210b040e540$exports = {};
$0030f210b040e540$exports = {
    "colorSwatchPicker": `\u{5D3}\u{5D5}\u{5D2}\u{5DE}\u{5D9}\u{5D5}\u{5EA} \u{5E6}\u{5D1}\u{5E2}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{5D1}\u{5D7}\u{5E8} \u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
    "tableResizer": `\u{5E9}\u{5D9}\u{5E0}\u{5D5}\u{5D9} \u{5D2}\u{5D5}\u{5D3}\u{5DC}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/react-aria-components/dist/hr-HR.mjs
var $1f0ebacf5a0c0fa1$exports = {};
$1f0ebacf5a0c0fa1$exports = {
    "colorSwatchPicker": `Uzorci boja`,
    "dropzoneLabel": `Zona spu\u{161}tanja`,
    "selectPlaceholder": `Odaberite stavku`,
    "tableResizer": `Promjena veli\u{10D}ine`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/react-aria-components/dist/hu-HU.mjs
var $3a706ba61f3d6bba$exports = {};
$3a706ba61f3d6bba$exports = {
    "colorSwatchPicker": `Sz\xednt\xe1rak`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe1lasszon ki egy elemet`,
    "tableResizer": `\xc1tm\xe9retez\u{151}`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/react-aria-components/dist/it-IT.mjs
var $0d17809e74607796$exports = {};
$0d17809e74607796$exports = {
    "colorSwatchPicker": `Campioni di colore`,
    "dropzoneLabel": `Zona di rilascio`,
    "selectPlaceholder": `Seleziona un elemento`,
    "tableResizer": `Ridimensionamento`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/react-aria-components/dist/ja-JP.mjs
var $65a71f9a56f1398f$exports = {};
$65a71f9a56f1398f$exports = {
    "colorSwatchPicker": `\u{30AB}\u{30E9}\u{30FC}\u{30B9}\u{30A6}\u{30A9}\u{30C3}\u{30C1}`,
    "dropzoneLabel": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BE}\u{30FC}\u{30F3}`,
    "selectPlaceholder": `\u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}`,
    "tableResizer": `\u{30B5}\u{30A4}\u{30BA}\u{5909}\u{66F4}\u{30C4}\u{30FC}\u{30EB}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/react-aria-components/dist/ko-KR.mjs
var $e5efad074a74abef$exports = {};
$e5efad074a74abef$exports = {
    "colorSwatchPicker": `\u{C0C9}\u{C0C1} \u{ACAC}\u{BCF8}`,
    "dropzoneLabel": `\u{B4DC}\u{B86D} \u{C601}\u{C5ED}`,
    "selectPlaceholder": `\u{D56D}\u{BAA9} \u{C120}\u{D0DD}`,
    "tableResizer": `\u{D06C}\u{AE30} \u{C870}\u{C815}\u{AE30}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/react-aria-components/dist/lt-LT.mjs
var $d70c2a849e55c607$exports = {};
$d70c2a849e55c607$exports = {
    "colorSwatchPicker": `Spalv\u{173} pavyzd\u{17E}iai`,
    "dropzoneLabel": `\u{201E}DropZone\u{201C}`,
    "selectPlaceholder": `Pasirinkite element\u{105}`,
    "tableResizer": `Dyd\u{17E}io keitiklis`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/react-aria-components/dist/lv-LV.mjs
var $009bbbb440d0e907$exports = {};
$009bbbb440d0e907$exports = {
    "colorSwatchPicker": `Kr\u{101}su paraugi`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izv\u{113}l\u{113}ties vienumu`,
    "tableResizer": `Izm\u{113}ra main\u{12B}t\u{101}js`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/react-aria-components/dist/nb-NO.mjs
var $9366fe642464ee83$exports = {};
$9366fe642464ee83$exports = {
    "colorSwatchPicker": `Fargekart`,
    "dropzoneLabel": `Droppsone`,
    "selectPlaceholder": `Velg et element`,
    "tableResizer": `St\xf8rrelsesendrer`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/react-aria-components/dist/nl-NL.mjs
var $62f9bc1f98ea21de$exports = {};
$62f9bc1f98ea21de$exports = {
    "colorSwatchPicker": `kleurstalen`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecteer een item`,
    "tableResizer": `Resizer`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/react-aria-components/dist/pl-PL.mjs
var $4ec2e5b6623b1b76$exports = {};
$4ec2e5b6623b1b76$exports = {
    "colorSwatchPicker": `Pr\xf3bki kolor\xf3w`,
    "dropzoneLabel": `Strefa upuszczania`,
    "selectPlaceholder": `Wybierz element`,
    "tableResizer": `Zmiana rozmiaru`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/react-aria-components/dist/pt-BR.mjs
var $e25098e26647cc04$exports = {};
$e25098e26647cc04$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/react-aria-components/dist/pt-PT.mjs
var $dd39c57d242c8156$exports = {};
$dd39c57d242c8156$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/react-aria-components/dist/ro-RO.mjs
var $3b4c1ba5afd57b35$exports = {};
$3b4c1ba5afd57b35$exports = {
    "colorSwatchPicker": `Specimene de culoare`,
    "dropzoneLabel": `Zon\u{103} de plasare`,
    "selectPlaceholder": `Selecta\u{21B}i un element`,
    "tableResizer": `Instrument de redimensionare`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/react-aria-components/dist/ru-RU.mjs
var $a455b2cda79eb746$exports = {};
$a455b2cda79eb746$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{44B}\u{435} \u{43E}\u{431}\u{440}\u{430}\u{437}\u{446}\u{44B}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{421}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{43E} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{44F} \u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{430}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/react-aria-components/dist/sk-SK.mjs
var $b983ca1383d5b960$exports = {};
$b983ca1383d5b960$exports = {
    "colorSwatchPicker": `Vzorkovn\xedky farieb`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `N\xe1stroj na zmenu ve\u{13E}kosti`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/react-aria-components/dist/sl-SI.mjs
var $32a515ef673b0655$exports = {};
$32a515ef673b0655$exports = {
    "colorSwatchPicker": `Barvne palete`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izberite element`,
    "tableResizer": `Spreminjanje velikosti`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/react-aria-components/dist/sr-SP.mjs
var $89434176ab35446b$exports = {};
$89434176ab35446b$exports = {
    "colorSwatchPicker": `Uzorci boje`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izaberite stavku`,
    "tableResizer": `Promena veli\u{10D}ine`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/react-aria-components/dist/sv-SE.mjs
var $727da781aca847f9$exports = {};
$727da781aca847f9$exports = {
    "colorSwatchPicker": `F\xe4rgrutor`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe4lj en artikel`,
    "tableResizer": `Storleks\xe4ndrare`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/react-aria-components/dist/tr-TR.mjs
var $fcd2d84b9a2d489c$exports = {};
$fcd2d84b9a2d489c$exports = {
    "colorSwatchPicker": `Renk \xf6rnekleri`,
    "dropzoneLabel": `B\u{131}rakma B\xf6lgesi`,
    "selectPlaceholder": `Bir \xf6\u{11F}e se\xe7in`,
    "tableResizer": `Yeniden boyutland\u{131}r\u{131}c\u{131}`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/react-aria-components/dist/uk-UA.mjs
var $2422ac328687ee23$exports = {};
$2422ac328687ee23$exports = {
    "colorSwatchPicker": `\u{417}\u{440}\u{430}\u{437}\u{43A}\u{438} \u{43A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{456}\u{432}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{438}\u{431}\u{435}\u{440}\u{456}\u{442}\u{44C} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{417}\u{430}\u{441}\u{456}\u{431} \u{437}\u{43C}\u{456}\u{43D}\u{435}\u{43D}\u{43D}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{440}\u{443}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/react-aria-components/dist/zh-CN.mjs
var $c9a532d1c973af61$exports = {};
$c9a532d1c973af61$exports = {
    "colorSwatchPicker": `\u{989C}\u{8272}\u{8272}\u{677F}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{533A}\u{57DF}`,
    "selectPlaceholder": `\u{9009}\u{62E9}\u{4E00}\u{4E2A}\u{9879}\u{76EE}`,
    "tableResizer": `\u{5C3A}\u{5BF8}\u{8C03}\u{6574}\u{5668}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/react-aria-components/dist/zh-TW.mjs
var $34de119f14549a4b$exports = {};
$34de119f14549a4b$exports = {
    "colorSwatchPicker": `\u{8272}\u{7968}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{5340}`,
    "selectPlaceholder": `\u{9078}\u{53D6}\u{9805}\u{76EE}`,
    "tableResizer": `\u{5927}\u{5C0F}\u{8ABF}\u{6574}\u{5668}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/react-aria-components/dist/intlStrings.mjs



































var $df39c1238ae2b5f3$exports = {};


































$df39c1238ae2b5f3$exports = {
    "ar-AE": $e038a7e7a6d81989$exports,
    "bg-BG": $0ec14741b0133644$exports,
    "cs-CZ": $642f7badf2405784$exports,
    "da-DK": $30cee8d2535734ec$exports,
    "de-DE": $c302d0504fca332a$exports,
    "el-GR": $0d0703f2bd7e421c$exports,
    "en-US": $cafa55beb2fc5ef3$exports,
    "es-ES": $18ac2ceede598103$exports,
    "et-EE": $718705a15b8a633a$exports,
    "fi-FI": $bf36dae9ecc81ce0$exports,
    "fr-FR": $0b4828edb010b855$exports,
    "he-IL": $0030f210b040e540$exports,
    "hr-HR": $1f0ebacf5a0c0fa1$exports,
    "hu-HU": $3a706ba61f3d6bba$exports,
    "it-IT": $0d17809e74607796$exports,
    "ja-JP": $65a71f9a56f1398f$exports,
    "ko-KR": $e5efad074a74abef$exports,
    "lt-LT": $d70c2a849e55c607$exports,
    "lv-LV": $009bbbb440d0e907$exports,
    "nb-NO": $9366fe642464ee83$exports,
    "nl-NL": $62f9bc1f98ea21de$exports,
    "pl-PL": $4ec2e5b6623b1b76$exports,
    "pt-BR": $e25098e26647cc04$exports,
    "pt-PT": $dd39c57d242c8156$exports,
    "ro-RO": $3b4c1ba5afd57b35$exports,
    "ru-RU": $a455b2cda79eb746$exports,
    "sk-SK": $b983ca1383d5b960$exports,
    "sl-SI": $32a515ef673b0655$exports,
    "sr-SP": $89434176ab35446b$exports,
    "sv-SE": $727da781aca847f9$exports,
    "tr-TR": $fcd2d84b9a2d489c$exports,
    "uk-UA": $2422ac328687ee23$exports,
    "zh-CN": $c9a532d1c973af61$exports,
    "zh-TW": $34de119f14549a4b$exports
};



//# sourceMappingURL=intlStrings.module.js.map


/***/ })

}]);