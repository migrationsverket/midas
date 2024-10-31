(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5320],{

/***/ 96863:
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
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

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
// EXTERNAL MODULE: ./packages/file-upload/src/index.ts + 3 modules
var src = __webpack_require__(45679);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
;// ./apps/docs/static/data/file-upload.json
const file_upload_namespaceObject = /*#__PURE__*/JSON.parse('{"_id":"@midas-ds/file-upload@1.0.1","_rev":"5-bc51b0ed64f188c3c10ddd545a60f9bc","name":"@midas-ds/file-upload","dist-tags":{"latest":"1.0.1"},"versions":["0.3.19","0.3.20","0.3.22","1.0.0","1.0.1","1.0.2"],"time":{"created":"2024-09-10T14:36:46.893Z","modified":"2024-10-24T13:26:47.406Z","0.3.19":"2024-09-10T14:36:47.146Z","0.3.20":"2024-09-12T12:21:00.654Z","0.3.22":"2024-10-07T12:12:28.880Z","1.0.0":"2024-10-18T13:40:44.514Z","1.0.2":"2024-10-22T14:09:13.890Z","1.0.1":"2024-10-24T13:26:47.217Z"},"bugs":{"url":"https://github.com/migrationsverket/midas/issues"},"homepage":"https://github.com/migrationsverket/midas#readme","repository":{"type":"git","url":"git+https://github.com/migrationsverket/midas.git"},"description":"```bash npm i @midas-ds/file-upload ```","maintainers":["wilhelmconsid <wilhelm.hjelm@consid.se>"],"readmeFilename":"README.md","_contentLength":11038,"version":"1.0.1","main":"./index.js","types":"./index.d.ts","exports":{".":{"import":"./index.mjs","require":"./index.js","types":"./index.d.ts"}},"dependencies":{"@midas-ds/button":"1.0.2","react-aria-components":"^1.0.0-rc.0","lucide-react":"^0.453.0","@midas-ds/textfield":"1.0.1"},"peerDependencies":{"react":"^18.2.0"},"gitHead":"660173f9a53a45cd053cc3ee2523dc3bcc65d9fa","publishConfig":{"access":"public"},"_nodeVersion":"20.11.1","_npmVersion":"10.2.4","dist":{"integrity":"sha512-jmzzJUc6wtQk5AxgcMXdIl71yDd1D1nWjgX265+cDYR/DJtttuPuyFTyzSJ2/59hPQuF60Ln+QLBM9OoE+aojQ==","shasum":"6a09bd56ec186202b9bfe291b77e937f121094e7","tarball":"https://registry.npmjs.org/@midas-ds/file-upload/-/file-upload-1.0.1.tgz","fileCount":9,"unpackedSize":334980,"signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEQCIGFkYC3f2lRpbiFRzBD+XLG8m+J7DOKky7fgNwktlqpNAiBC6y0KUg3xZzqzwRbx8Q4KZih3o2gaH4/PZ7ZteJNf3g=="}]},"_npmUser":"wilhelmconsid <wilhelm.hjelm@consid.se>","directories":{},"_npmOperationalInternal":{"host":"s3://npm-registry-packages","tmp":"tmp/file-upload_1.0.1_1729776407047_0.08844715414406434"},"_hasShrinkwrap":false}');
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/fileupload.mdx


const frontMatter = {
	title: 'FileUpload',
	description: 'Filuppladdning används när användaren behöver ladda upp en eller flera filer från det egen filsystemet.',
	tags: [
		'form'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "components/fileupload",
  "title": "FileUpload",
  "description": "Filuppladdning används när användaren behöver ladda upp en eller flera filer från det egen filsystemet.",
  "source": "@site/docs/components/fileupload.mdx",
  "sourceDirName": "components",
  "slug": "/components/fileupload",
  "permalink": "/pr-preview/pr-121/components/fileupload",
  "draft": false,
  "unlisted": false,
  "tags": [
    {
      "inline": true,
      "label": "form",
      "permalink": "/pr-preview/pr-121/tags/form"
    }
  ],
  "version": "current",
  "frontMatter": {
    "title": "FileUpload",
    "description": "Filuppladdning används när användaren behöver ladda upp en eller flera filer från det egen filsystemet.",
    "tags": [
      "form"
    ]
  },
  "sidebar": "sideBar",
  "previous": {
    "title": "DatePicker",
    "permalink": "/pr-preview/pr-121/components/date-picker"
  },
  "next": {
    "title": "Flex",
    "permalink": "/pr-preview/pr-121/components/flex"
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
  "value": "Beroenden",
  "id": "beroenden",
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
      info: file_upload_namespaceObject,
      friendlyName: 'Filuppladdning',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/FileTrigger.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduktion",
      children: "Introduktion"
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
        children: "import { FileUpload } from '@midas-ds/fileupload';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        FileUpload: src/* FileUpload */.e
      },
      children: `<FileUpload allowsMultiple label={'Etikett'} description={'Beskrivning'}/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beroenden",
      children: "Beroenden"
    }), "\n", (0,jsx_runtime.jsx)(getComponentMetaData/* ComponentFooter */.p, {
      info: file_upload_namespaceObject
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
/* harmony import */ var _midas_ds_link_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9687);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86954);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57157);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81950);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var ComponentFooter=function ComponentFooter(_ref){var info=_ref.info,children=_ref.children;if(!info||!info.dependencies)return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul",{children:Object.keys(info.dependencies).map(function(k,i){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:k+"@"+info.dependencies[k]},'dep'+i);})});};var ComponentHeader=function ComponentHeader(_ref2){var name=_ref2.name,info=_ref2.info,friendlyName=_ref2.friendlyName,overrideHeadlessLink=_ref2.overrideHeadlessLink;moment__WEBPACK_IMPORTED_MODULE_1___default().locale('sv');if(!info){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:'flex',justifyContent:'space-between'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:'badge badge--secondary',children:"Under utveckling"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{display:'flex',gap:'3px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:"Static Badge",src:"https://img.shields.io/badge/React%20Aria-FF0000?style=for-the-badge&logo=adobe&logoColor=white"})})})]});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section",{style:{marginBottom:32,marginTop:-20},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{marginBottom:16},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,{fluid:true,className:"button-row",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{children:["Version: ",info.version]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_2__/* .LinkButton */ .z,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+name.toLowerCase()+"/CHANGELOG.md",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_2__/* .LinkButton */ .z,{href:"https://designsystem.migrationsverket.se/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_2__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,children:"Referens"})})]})]});};

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

/***/ 45679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var textfield_src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/file-upload/src/lib/FileUpload.tsx
'use client';var FileUpload=function FileUpload(_ref){var allowsMultiple=_ref.allowsMultiple,label=_ref.label,description=_ref.description,dropzone=_ref.dropzone;var _React$useState=react.useState(null),files=_React$useState[0],setFiles=_React$useState[1];var handleUpload=function handleUpload(files){setFiles(files!==null?Array.from(files):[]);// TODO: actually handle files?
};var handleDrop=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(e){var filePromises,resolvedFiles;return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:filePromises=e.items.filter(function(file){return file.kind==='file';}).map(function(file){return file.getFile();});_context.next=3;return Promise.all(filePromises);case 3:resolvedFiles=_context.sent;setFiles(resolvedFiles);case 5:case"end":return _context.stop();}},_callee);}));return function handleDrop(_x){return _ref2.apply(this,arguments);};}();if(dropzone)return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DropZone/* DropZone */.w,{onDrop:handleDrop,className:FileUpload_module.dropzone,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",style:{display:'block'},children:"Dra och sl\xE4pp en fil inuti det streckade omr\xE5det"})}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(textfield_src/* InputWrapper */.oi,{label:label,description:description,children:/*#__PURE__*/(0,jsx_runtime.jsx)(FileTrigger/* FileTrigger */.F,{allowsMultiple:allowsMultiple,onSelect:function onSelect(files){return handleUpload(files);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"secondary","aria-labelledby":"fileUpload",className:FileUpload_module.input,children:allowsMultiple?'Välj filer':'Välj fil'})})}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});};var FileList=function FileList(_ref3){var files=_ref3.files,setFiles=_ref3.setFiles;var handleRemove=function handleRemove(index){setFiles(files==null?void 0:files.filter(function(f,i){return i!==index;}));};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:FileUpload_module.list,children:files.map(function(file,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:FileUpload_module.box,children:[file.name,/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return handleRemove(index);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{height:16,width:16})})]},index);})});};
;// ./packages/file-upload/src/lib/index.ts

;// ./packages/file-upload/src/index.ts


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
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","desktopSize":"1rem","mediumWeight":"500","blue150":"#143c50","blue130":"#25607f","blue90":"#4289ad","link":"link_I1s0","fullwidth":"fullwidth_EeuX"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link-button/src/lib/LinkButton.tsx
'use client';var _excluded=["variant","fullwidth","size","icon","iconSize","iconPlacement"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'primary':_ref$variant,fullwidth=_ref.fullwidth,size=_ref.size,IconComponent=_ref.icon,iconSize=_ref.iconSize,iconPlacement=_ref.iconPlacement,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var effectiveIconSize=size==='small'?14:iconSize||16;/**Default size if not specified */return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,Object.assign({className:(0,clsx/* default */.A)(src/* ButtonStyles */.t.button,variant==='primary'&&src/* ButtonStyles */.t.primary,variant==='secondary'&&src/* ButtonStyles */.t.secondary,variant==='tertiary'&&src/* ButtonStyles */.t.tertiary,variant==='danger'&&src/* ButtonStyles */.t.danger,variant==='icon'&&src/* ButtonStyles */.t.iconBtn,fullwidth&&LinkButton_module.fullwidth,size==='small'&&src/* ButtonStyles */.t.small,iconPlacement==='right'?src/* ButtonStyles */.t.iconRight:src/* ButtonStyles */.t.iconLeft,LinkButton_module.link,rest.className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:effectiveIconSize}),rest.children]})}));};
;// ./packages/link-button/src/lib/index.ts

;// ./packages/link-button/src/index.ts


/***/ }),

/***/ 42619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oi: () => (/* reexport */ InputWrapper),
  A_: () => (/* reexport */ TextField),
  Ql: () => (/* reexport */ TextField_module)
});

// UNUSED EXPORTS: ssnRegEx

;// ./packages/textfield/src/lib/TextField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextField_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","inputField":"inputField_kJaH","inputWrapper":"inputWrapper_RfiT","label":"label_Pxyb","text":"text_CvV8","fieldError":"fieldError_kz46","passwordText":"passwordText_Gtww","input":"input_B57n","wrap":"wrap_g1RZ","passwordButton":"passwordButton_bCY3"});
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textfield/src/lib/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),input=_React$useState[0],setInput=_React$useState[1];var _React$useState2=react.useState(true),isValid=_React$useState2[0],setIsValid=_React$useState2[1];var validateInput=function validateInput(value){if(validationType===undefined)return true;if(validationType==='ssn')setIsValid(ssnRegEx.test(value));if(validationType instanceof RegExp)setIsValid(new RegExp(validationType).test(value));};var handleInputBlur=function handleInputBlur(e){var value=e.target.value;validateInput(value);};var handleInputChange=function handleInputChange(e){setInput(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:TextField_module.inputField,isInvalid:validationType!==undefined?!isValid:props.isInvalid},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{type:props.type,className:TextField_module.input,onChange:handleInputChange,onBlur:handleInputBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:input})]})})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState3=react.useState(false),showPassword=_React$useState3[0],setShowPassword=_React$useState3[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:TextField_module.fieldError,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(triangle_alert/* default */.A,{width:16,height:16}),errorMessage]})}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');
;// ./packages/textfield/src/lib/index.ts

;// ./packages/textfield/src/index.ts


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

/***/ })

}]);