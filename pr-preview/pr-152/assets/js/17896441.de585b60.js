"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8401],{

/***/ 6429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ theme_MDXComponents)
});

// NAMESPACE OBJECT: ./apps/docs/src/components/mvdsExports.ts
var mvdsExports_namespaceObject = {};
__webpack_require__.r(mvdsExports_namespaceObject);
__webpack_require__.d(mvdsExports_namespaceObject, {
  Accordion: () => (src/* Accordion */.nD),
  AccordionContent: () => (src/* AccordionContent */.ub),
  AccordionItem: () => (src/* AccordionItem */.As),
  AccordionTrigger: () => (src/* AccordionTrigger */.$m),
  Breadcrumbs: () => (breadcrumbs_src/* Breadcrumbs */.B),
  Button: () => (button_src/* Button */.$),
  Card: () => (card_src/* Card */.Z),
  Checkbox: () => (checkbox_src/* Checkbox */.S),
  CheckboxGroup: () => (checkbox_src/* CheckboxGroup */.$),
  FileUpload: () => (file_upload_src/* FileUpload */.e),
  Flex: () => (flex_src/* Flex */.s),
  FlexItem: () => (flex_src/* FlexItem */.Z),
  Grid: () => (grid_src/* Grid */.x),
  GridItem: () => (grid_src/* GridItem */.E),
  Item: () => (select_src/* Item */.q),
  Link: () => (link_src/* Link */.N),
  LinkButton: () => (link_button_src/* LinkButton */.z),
  Logo: () => (logo_src/* Logo */.g),
  MultiSelect: () => (multi_select_src/* MultiSelect */.K),
  Radio: () => (radio_src/* Radio */.s),
  RadioGroup: () => (radio_src/* RadioGroup */.z),
  SearchField: () => (search_field_src/* SearchField */.L),
  Select: () => (select_src/* Select */.l),
  Spinner: () => (spinner_src/* Spinner */.y),
  Tabs: () => (tabs_src/* Tabs */.t),
  TextArea: () => (textarea_src/* TextArea */.f),
  TextField: () => (textfield_src/* TextField */.A_),
  theme: () => (theme_src/* theme */.w4)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-live-codeblock/lib/theme/CodeBlock/index.js + 24 modules
var CodeBlock = __webpack_require__(247);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
var CodeInline = __webpack_require__(13230);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/fruits.ts
var fruits = __webpack_require__(46638);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/theme/MDXComponents/Code.js
function shouldBeInline(props){return(// empty code blocks have no props.children,
// see https://github.com/facebook/docusaurus/pull/9704
typeof props.children!=='undefined'&&react.Children.toArray(props.children).every(function(el){return typeof el==='string'&&!el.includes('\n');}));}function MDXCode(props){return shouldBeInline(props)?/*#__PURE__*/(0,jsx_runtime.jsx)(CodeInline/* default */.A,Object.assign({},props)):/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock/* default */.A,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
;// ./apps/docs/src/theme/MDXComponents/A.js
function MDXA(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({},props));}
;// ./apps/docs/src/theme/MDXComponents/Pre.js
function MDXPre(props){// With MDX 2, this element is only used for fenced code blocks
// It always receives a MDXComponents/Code as children
return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 3 modules
var Details = __webpack_require__(41622);
;// ./apps/docs/src/theme/MDXComponents/Details.js
function MDXDetails(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){return/*#__PURE__*/react.isValidElement(item)&&item.type==='summary';});var children=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.filter(function(item){return item!==summary;})});return/*#__PURE__*/(0,jsx_runtime.jsx)(Details/* default */.A,Object.assign({},props,{summary:summary,children:children}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
;// ./apps/docs/src/theme/MDXComponents/Heading.js
function MDXHeading(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./apps/docs/src/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"containsTaskList":"containsTaskList_kJf0"});
;// ./apps/docs/src/theme/MDXComponents/Ul/index.js
function transformUlClassName(className){// Fix https://github.com/facebook/docusaurus/issues/9098
if(typeof className==='undefined'){return undefined;}return (0,clsx/* default */.A)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
(className==null?void 0:className.includes('contains-task-list'))&&styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},props,{className:transformUlClassName(props.className)}));}
;// ./apps/docs/src/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Img_styles_module = ({"img":"img_DqHw"});
;// ./apps/docs/src/theme/MDXComponents/Img/index.js
function transformImgClassName(className){return (0,clsx/* default */.A)(className,Img_styles_module.img);}function MDXImg(props){return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/alt-text
(0,jsx_runtime.jsx)("img",Object.assign({loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(27293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-mermaid/lib/theme/Mermaid/index.js + 8 modules
var Mermaid = __webpack_require__(66406);
// EXTERNAL MODULE: ./packages/accordion/src/index.ts + 22 modules
var src = __webpack_require__(17986);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var button_src = __webpack_require__(81706);
// EXTERNAL MODULE: ./packages/checkbox/src/index.ts + 4 modules
var checkbox_src = __webpack_require__(61813);
// EXTERNAL MODULE: ./packages/file-upload/src/index.ts + 3 modules
var file_upload_src = __webpack_require__(45679);
// EXTERNAL MODULE: ./packages/logo/src/index.ts + 3 modules
var logo_src = __webpack_require__(2647);
// EXTERNAL MODULE: ./packages/radio/src/index.ts + 2 modules
var radio_src = __webpack_require__(34378);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var textfield_src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/breadcrumbs/src/index.ts + 2 modules
var breadcrumbs_src = __webpack_require__(65574);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 3 modules
var link_src = __webpack_require__(85560);
// EXTERNAL MODULE: ./packages/grid/src/index.ts + 4 modules
var grid_src = __webpack_require__(17172);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
// EXTERNAL MODULE: ./packages/spinner/src/index.ts + 2 modules
var spinner_src = __webpack_require__(75735);
// EXTERNAL MODULE: ./packages/card/src/index.ts + 3 modules
var card_src = __webpack_require__(70720);
// EXTERNAL MODULE: ./packages/link-button/src/index.ts + 3 modules
var link_button_src = __webpack_require__(9687);
// EXTERNAL MODULE: ./packages/search-field/src/index.ts + 2 modules
var search_field_src = __webpack_require__(91725);
// EXTERNAL MODULE: ./packages/select/src/index.ts + 2 modules
var select_src = __webpack_require__(67743);
// EXTERNAL MODULE: ./packages/tabs/src/index.ts + 2 modules
var tabs_src = __webpack_require__(4217);
// EXTERNAL MODULE: ./packages/textarea/src/index.ts + 2 modules
var textarea_src = __webpack_require__(26196);
// EXTERNAL MODULE: ./packages/theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(32976);
// EXTERNAL MODULE: ./packages/multi-select/src/index.ts + 5 modules
var multi_select_src = __webpack_require__(21464);
;// ./apps/docs/src/components/mvdsExports.ts

;// ./apps/docs/src/theme/MDXComponents/index.js
var MDXComponents={Head:Head/* default */.A,details:MDXDetails,Details:MDXDetails,// This is a fix to allow for importing of our custom components in any code block
// code: MDXCode,
code:function code(props){var children=props.children;var scope=Object.assign({},react,mvdsExports_namespaceObject);if(typeof children==='string'){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXCode,Object.assign({},props,{scope:scope}));}return children;},a:MDXA,pre:MDXPre,ul:MDXUl,img:MDXImg,h1:function h1(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h1"},props));},h2:function h2(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h2"},props));},h3:function h3(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h3"},props));},h4:function h4(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h4"},props));},h5:function h5(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h5"},props));},h6:function h6(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h6"},props));},admonition:Admonition/* default */.A,mermaid:Mermaid/* default */.A};/* harmony default export */ const theme_MDXComponents = (MDXComponents);

/***/ }),

/***/ 65574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ Breadcrumbs)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Breadcrumbs.mjs + 36 modules
var dist_Breadcrumbs = __webpack_require__(57214);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 3 modules
var src = __webpack_require__(85560);
;// ./packages/breadcrumbs/src/lib/Breadcrumbs.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Breadcrumbs_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","gray150":"#1f1f1f","container":"container_P3jL"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/breadcrumbs/src/lib/Breadcrumbs.tsx
var Breadcrumbs=function Breadcrumbs(_ref){var items=_ref.items;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumbs */.BI,{className:Breadcrumbs_module.container,children:items.map(function(item,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumb */.Qp,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Link */.N,{href:item.href,isDisabled:item.isDisabled,children:item.title})},item.title.toLocaleLowerCase()+index);})});};
;// ./packages/breadcrumbs/src/index.ts


/***/ }),

/***/ 70720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Card)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 3 modules
var src = __webpack_require__(85560);
;// ./packages/card/src/lib/Card.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Card_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","white":"#ffffff","gray20":"#e6e6e6","gray10":"#f2f2f2","gray150":"#1f1f1f","blue20":"#d5e5ed","black":"#000000","mediumWeight":"500","fastTransition":"250ms","card":"card_k6lA","content":"content_IA2f","heading":"heading_KjLb","image":"image_APT7","background":"background_SqGP","text":"text_v73H"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/card/src/lib/Card.tsx
'use client';var _excluded=["image","background","title","content","link","headingTag","customImageComponent"];/**
 * This component renders a card with optional image, title, content.
 */var Card=function Card(_ref){var image=_ref.image,background=_ref.background,title=_ref.title,content=_ref.content,link=_ref.link,_ref$headingTag=_ref.headingTag,HeadingTag=_ref$headingTag===void 0?'h1':_ref$headingTag,customImageComponent=_ref.customImageComponent,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(Card_module.card,background&&Card_module.background,rest.className)},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Card_module.content,children:[customImageComponent?customImageComponent:(image==null?void 0:image.source)&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:image.source,alt:image.description,className:Card_module.image}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeadingTag,{className:Card_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Card_module.text,children:content})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Link */.N,{href:link.href,target:link.target,standalone:true,stretched:true,children:link.title})]}));};
;// ./packages/card/src/lib/index.ts

;// ./packages/card/src/index.ts


/***/ }),

/***/ 61813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* reexport */ Checkbox),
  $: () => (/* reexport */ CheckboxGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Checkbox.mjs + 7 modules
var dist_Checkbox = __webpack_require__(92466);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
;// ./packages/checkbox/src/lib/Checkbox.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Checkbox_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","primaryBackground":"#143c50","blue80":"#5897b8","blue130":"#25607f","signalRed10":"#ffdfdf","signalRed100":"#e62323","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","signalRed130":"#b31b1b","white":"#ffffff","gray10":"#f2f2f2","gray40":"#cccccc","gray100":"#808080","gray50":"#bfbfbf","gray20":"#e6e6e6","regularWeight":"400","mediumWeight":"500","smBreakpoint":"(max-width: 767px)","borderSecondary":"#b3b3b3","wrap":"wrap_gmzk","checkboxInner":"checkboxInner_QnDn","checkbox":"checkbox_Uv4H","checkboxGroup":"checkboxGroup_uby9"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/checkbox/src/lib/Checkbox.tsx
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Checkbox/* Checkbox */.Sc,Object.assign({className:(0,clsx/* default */.A)(Checkbox_module.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Checkbox_module.checkboxInner,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,jsx_runtime.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
;// ./packages/checkbox/src/lib/CheckboxGroup.tsx
'use client';var CheckboxGroup_excluded=["label","description","errorMessage","showSelectAll","children"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,showSelectAll=_ref.showSelectAll,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,CheckboxGroup_excluded);var _React$useState=react.useState(),isAllSelected=_React$useState[0],setIsAllSelected=_React$useState[1];var ToogleAll=function ToogleAll(){// Get the current state of the checkbox group
var state=react.useContext(dist_Checkbox/* CheckboxGroupStateContext */.pf);// Retrieve all childern
var childValues=react.Children.toArray(children).filter(react.isValidElement).map(function(child){return child.props.value;});// Toogle all values
var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state.setValue([]);};//listen and change the select all accordingly
react.useEffect(function(){var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=state.value.length;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!state.value.includes('toggleAll')){state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state.value]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Checkbox/* CheckboxGroup */.$Q,Object.assign({className:Checkbox_module.checkboxGroup},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:Checkbox_module.wrap,children:[showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(ToogleAll,{}),children]})})}));};
;// ./packages/checkbox/src/lib/index.ts

;// ./packages/checkbox/src/index.ts


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
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var textfield_src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/file-upload/src/lib/FileUpload.tsx
'use client';var FileUpload=function FileUpload(_ref){var allowsMultiple=_ref.allowsMultiple,label=_ref.label,description=_ref.description,dropzone=_ref.dropzone;var _React$useState=react.useState(null),files=_React$useState[0],setFiles=_React$useState[1];var handleUpload=function handleUpload(files){setFiles(files!==null?Array.from(files):[]);// TODO: actually handle files?
};var handleDrop=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(e){var filePromises,resolvedFiles;return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:filePromises=e.items.filter(function(file){return file.kind==='file';}).map(function(file){return file.getFile();});_context.next=3;return Promise.all(filePromises);case 3:resolvedFiles=_context.sent;setFiles(resolvedFiles);case 5:case"end":return _context.stop();}},_callee);}));return function handleDrop(_x){return _ref2.apply(this,arguments);};}();if(dropzone)return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DropZone/* DropZone */.w,{onDrop:handleDrop,className:FileUpload_module.dropzone,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",style:{display:'block'},children:"Dra och sl\xE4pp en fil inuti det streckade omr\xE5det"})}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(textfield_src/* InputWrapper */.oi,{label:label,description:description,children:/*#__PURE__*/(0,jsx_runtime.jsx)(FileTrigger/* FileTrigger */.F,{allowsMultiple:allowsMultiple,onSelect:function onSelect(files){return handleUpload(files);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"secondary","aria-labelledby":"fileUpload",className:FileUpload_module.input,children:allowsMultiple?'Välj filer':'Välj fil'})})}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});};var FileList=function FileList(_ref3){var files=_ref3.files,setFiles=_ref3.setFiles;var handleRemove=function handleRemove(index){setFiles(files==null?void 0:files.filter(function(f,i){return i!==index;}));};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:FileUpload_module.list,children:files.map(function(file,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:FileUpload_module.box,children:[file.name,/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"icon",size:"small",onPress:function onPress(){return handleRemove(index);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})})]},index);})});};
;// ./packages/file-upload/src/lib/index.ts

;// ./packages/file-upload/src/index.ts


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
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","blue150":"#143c50","blue130":"#25607f","blue90":"#4289ad","display":"\"Inter\", sans-serif","desktopSize":"1rem","mediumWeight":"500","white":"#ffffff","gray50":"#bfbfbf","gray10":"#f2f2f2","gray20":"#e6e6e6","black":"#000000","medium":"undefined","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","smBreakpoint":"(max-width: 767px)","signalRed100":"#e62323","signalRed130":"#b31b1b","signalRed150":"#801313","linkButton":"linkButton_YIrq","secondary":"secondary_fWmT","tertiary":"tertiary_mRIr","danger":"danger_VEbs","iconLeft":"iconLeft_vyt7","icon":"icon_d8GV","fullwidth":"fullwidth_EeuX","button":"button_rUVC"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link-button/src/lib/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","iconPlacement"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,iconPlacement=_ref.iconPlacement,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* Link */.N,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,rest.className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,className:LinkButton_module.icon})]}));};
;// ./packages/link-button/src/lib/index.ts

;// ./packages/link-button/src/index.ts


/***/ }),

/***/ 2647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* reexport */ Logo)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/logo/src/lib/Logo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","red100":"#b90835","black":"#000000","gray130":"#5d5d5d","white":"#ffffff","logo":"logo_tYIG","primary":"primary_Y5gB","dark":"dark_ZLNv","small":"small_vjO9","background-primary":"background-primary_DO6_","background-dark":"background-dark_tFvn"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/logo/src/lib/Logo.tsx
var Logo=function Logo(_ref){var _ref$primary=_ref.primary,primary=_ref$primary===void 0?true:_ref$primary,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,background=_ref.background;var classNames=(0,clsx/* default */.A)(Logo_module.logo,primary?Logo_module.primary:Logo_module.dark,size==='small'&&Logo_module.small,background?primary?Logo_module['background-primary']:Logo_module['background-dark']:null);return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:'img',className:classNames,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 145.8 52.22",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Migrationsverkets logotyp"}),/*#__PURE__*/(0,jsx_runtime.jsx)("defs",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("clipPath",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0h145.8v52.22H0z"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{clipPath:"url(#mig-logo_svg__a)",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M127.44 28.21c-9.76-12.7-26.18-20.93-44.8-20.93-17.06 0-32.45 6.88-42.38 17.82a50.37 50.37 0 0 1 33.5-12.33c14.84 0 28.09 6 36.78 15.44Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M117.87 16.43C92.06-2 53.66 3.61 35.68 28.21h-16c20-32 69.23-38 98.15-11.78Z"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M15.32 48.47A1.72 1.72 0 0 1 14.7 47V35.82a1.64 1.64 0 0 1 .58-1.36H13l-5.19 10-5.93-10H0a1.46 1.46 0 0 1 .6 1.26V47.3a1.52 1.52 0 0 1-.6 1.17h2.5a1.56 1.56 0 0 1-.6-1.22V38.4l5.55 9.41 5.06-9.69v9a1.37 1.37 0 0 1-.51 1.35ZM21 48.47a1.51 1.51 0 0 1-.58-1.39v-8.36h-2.6c.49.24.64.75.64 1.52v6.83a1.49 1.49 0 0 1-.6 1.39zm-.55-13.4a1.05 1.05 0 1 0-1.05 1.05 1.05 1.05 0 0 0 1.05-1.05zm9.22 14.44c0 1-1.07 1.71-2.52 1.71-.77 0-2.22-.4-2.2-1.51a1.62 1.62 0 0 1 .77-1.3l2.56.06c.66 0 1.39.13 1.39 1zm-.81-7.45c0 1-.49 2.11-1.77 2.11s-1.92-1.58-1.92-2.73.66-2.05 1.71-2.05c1.56 0 2 1.64 2 2.67zm2.94-1.62a2.74 2.74 0 0 0-.49-1.24h-1.77a3.69 3.69 0 0 0-2.54-.76 3.35 3.35 0 0 0-3.65 3.37 3.23 3.23 0 0 0 1.71 3c-.56.49-1.81 1.28-1.81 2.11s1 1.3 1.81 1.43c-1.15.34-2.18 1.07-2.18 2.07 0 1.49 2.26 1.84 3.44 1.84 2 0 5.1-1 5.1-3.44 0-1.58-1.6-1.94-2.9-2-3.16-.08-3.28-.26-3.28-.73 0-.26.55-.88.72-1.05a7.6 7.6 0 0 0 .92.08c2.3 0 3.82-1.22 3.82-3.52a2.74 2.74 0 0 0-.38-1.45 1.41 1.41 0 0 1 .49-.06 1.74 1.74 0 0 1 1 .36zM39.11 40.75l-.3-2.13a1.92 1.92 0 0 0-.85-.19 2.76 2.76 0 0 0-2.33 1.79v-1.5h-2.57a1.58 1.58 0 0 1 .62 1.49V47a1.56 1.56 0 0 1-.58 1.49h3.07a1.63 1.63 0 0 1-.55-1.49v-5.57a2.06 2.06 0 0 1 1.86-1.35 2.59 2.59 0 0 1 1.62.68ZM45.43 46.49a2.52 2.52 0 0 1-1.79 1.11c-1 0-1.54-1-1.54-2a1.78 1.78 0 0 1 1.17-1.79l2.16-.81v3.52Zm2.5 2c-.49-.43-.56-.77-.56-1.64v-5.1c0-2.88-1.86-3.33-3.65-3.33a7.61 7.61 0 0 0-2.65.55 12.33 12.33 0 0 0-.53 2.18 4.23 4.23 0 0 1 3.12-1.79c1.54 0 1.77 1.07 1.77 2.22v.51l-2.88 1a3.16 3.16 0 0 0-2.45 3 2.57 2.57 0 0 0 2.8 2.71 3.36 3.36 0 0 0 2.52-1.22v.94ZM55.38 47.19a2.19 2.19 0 0 1-1.45.6c-1.13 0-1.39-1.28-1.39-2.16v-5.89h1.11a3.77 3.77 0 0 1 1.73.45l-.23-1.47h-2.61v-2.3a11.1 11.1 0 0 1-3.37 3.31h1.43v5.78c0 1.86.41 3.22 2.54 3.22a3.37 3.37 0 0 0 1.81-.47 5.35 5.35 0 0 0 .43-1.07ZM59.91 48.47a1.51 1.51 0 0 1-.58-1.39v-8.36h-2.59c.49.24.64.75.64 1.52v6.83a1.49 1.49 0 0 1-.6 1.39zm-.55-13.4a1.05 1.05 0 1 0-1.05 1.05 1.05 1.05 0 0 0 1.05-1.05zm10.18 9.37c0 1.66-.68 3.35-2.43 3.35-2.33 0-3.16-3.18-3.16-5 0-1.58.62-3.35 2.45-3.35 2.33 0 3.14 3.18 3.14 5zm2-.88c0-2.69-1.69-5.16-4.57-5.16a5 5 0 0 0-5 5.23c0 2.69 1.68 5.16 4.55 5.16a5 5 0 0 0 5-5.23zM82.52 48.47c-.36-.28-.58-.55-.58-1.45v-5.14c0-2.13-.51-3.44-2.84-3.44a4.55 4.55 0 0 0-3.1 1.47v-1.19h-2.59a1.38 1.38 0 0 1 .64 1.37v7c0 .77-.19 1.15-.62 1.41h3.12c-.3-.3-.57-.49-.57-1.52V41.2a3.57 3.57 0 0 1 2.41-1.62c1.32 0 1.6 1.32 1.6 2.35v5.17a1.43 1.43 0 0 1-.6 1.37ZM90.91 45.95c0-2.88-4.46-3.54-4.46-5.31 0-1 .92-1.28 1.75-1.28a2.94 2.94 0 0 1 2.28 1.05l-.09-1.54a6.73 6.73 0 0 0-2.2-.45c-1.88 0-3.5.83-3.5 2.47 0 3.09 4.52 3.5 4.52 5.55 0 1-.81 1.37-1.71 1.37a4.33 4.33 0 0 1-3.29-1.58v.13c0 .53 0 1.3.4 1.66a5 5 0 0 0 2.84.73c1.77 0 3.48-.81 3.48-2.8ZM101.6 38.72h-1.87c.17.13.15.73-.24 1.73l-2.43 6.16-2.45-6.14c-.34-.85-.41-1.51-.21-1.75h-2.69a7.41 7.41 0 0 1 1.07 2.18l3 7.57h1.71l3.07-7.79a5.36 5.36 0 0 1 1-2ZM108.59 42.92c-1.43.11-2.82.13-4.27.13 0-1 .38-3.69 2.22-3.69s2.05 2.24 2.05 3.56Zm2.05.87v-.3c0-2.5-.81-5.06-3.76-5.06s-4.65 2.64-4.65 5.36a4.64 4.64 0 0 0 4.67 5 6.49 6.49 0 0 0 2.79-.58 3.46 3.46 0 0 0 .77-1.66 5 5 0 0 1-3 1.09c-1.94 0-3.07-2.05-3.11-3.76l6.31-.06ZM118.53 40.75l-.3-2.13a1.92 1.92 0 0 0-.85-.19 2.76 2.76 0 0 0-2.38 1.8v-1.51h-2.56a1.58 1.58 0 0 1 .62 1.49V47a1.56 1.56 0 0 1-.58 1.49h3.07A1.63 1.63 0 0 1 115 47v-5.57a2.06 2.06 0 0 1 1.86-1.35 2.59 2.59 0 0 1 1.62.68zm11.54 7.76c-3-.49-3.26-5.27-6.14-5.27l3.43-3.65a8.37 8.37 0 0 1 1-.87H126c.19.19.17.51-.17.87l-3.46 3.69v-9.23h-2.58a1.45 1.45 0 0 1 .64 1.32v11.76a1.54 1.54 0 0 1-.6 1.34h3.07a1.59 1.59 0 0 1-.53-1.34v-3.35a2.26 2.26 0 0 1 1.07.34c1.68 1.07 2.54 4.07 3.48 4.5a7.44 7.44 0 0 0 1.49.13 4.38 4.38 0 0 0 1.64-.24zM136.51 42.92c-1.43.11-2.82.13-4.27.13 0-1 .38-3.69 2.22-3.69s2.05 2.24 2.05 3.56Zm2.05.87v-.3c0-2.5-.81-5.06-3.76-5.06s-4.65 2.64-4.65 5.36a4.64 4.64 0 0 0 4.67 5 6.49 6.49 0 0 0 2.79-.58 3.46 3.46 0 0 0 .77-1.66 5 5 0 0 1-3 1.09c-1.94 0-3.07-2.05-3.11-3.76l6.31-.06ZM145.8 47.19a2.19 2.19 0 0 1-1.45.6c-1.13 0-1.39-1.28-1.39-2.16v-5.89h1.11a3.77 3.77 0 0 1 1.73.45l-.23-1.47H143v-2.3a11.1 11.1 0 0 1-3.37 3.31H141v5.78c0 1.86.41 3.22 2.54 3.22a3.37 3.37 0 0 0 1.81-.47 5.32 5.32 0 0 0 .43-1.07Z"})]});};
;// ./packages/logo/src/lib/index.ts

;// ./packages/logo/src/index.ts


/***/ }),

/***/ 21464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* reexport */ MultiSelect)
});

;// ./packages/multi-select/src/lib/MultiSelect.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const MultiSelect_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray20":"#e6e6e6","backgroundSecondary":"#f2f2f2","button":"button_ICtj","multiSelect":"multiSelect_Eode","popover":"popover_jYDN","icon":"icon_D7C5","listBoxItem":"listBoxItem_c3_5"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 5 modules
var Popover = __webpack_require__(8119);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/GridList.mjs + 1 modules
var GridList = __webpack_require__(65379);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/checkbox/src/index.ts + 4 modules
var checkbox_src = __webpack_require__(61813);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/tag/src/lib/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray30":"#d9d9d9","gray20":"#e6e6e6","gray10":"#f2f2f2","backgroundSecondary":"#f2f2f2","button":"button_KL5r","tag":"tag_QfCn","dismissable":"dismissable_Ta3F","tagText":"tagText_tTSG","tagList":"tagList_CRsJ"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 37 modules
var dist_TagGroup = __webpack_require__(2790);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var button_src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/tag/src/lib/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(button_src/* Button */.$,{variant:"icon",size:"small",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};
;// ./packages/tag/src/index.ts

// EXTERNAL MODULE: ./node_modules/@react-stately/data/dist/useListData.mjs
var useListData = __webpack_require__(7424);
;// ./packages/multi-select/src/lib/MultiSelect.tsx
'use client';var MultiSelect=function MultiSelect(_ref){var label=_ref.label,description=_ref.description,items=_ref.items,onSelectionChange=_ref.onSelectionChange,selectedKeys=_ref.selectedKeys,defaultSelectedKeys=_ref.defaultSelectedKeys,isDisabled=_ref.isDisabled,isInvalid=_ref.isInvalid,errorMessage=_ref.errorMessage;var triggerRef=react.useRef(null);var _React$useState=react.useState(undefined),popoverWidth=_React$useState[0],setPopoverWidth=_React$useState[1];var list=(0,useListData/* useListData */.u)({initialItems:items,initialSelectedKeys:defaultSelectedKeys});react.useEffect(function(){var updatePopoverWidth=function updatePopoverWidth(){if(triggerRef.current){setPopoverWidth(triggerRef.current.offsetWidth-2);}};updatePopoverWidth();window.addEventListener('resize',updatePopoverWidth);return function(){window.removeEventListener('resize',updatePopoverWidth);};},[]);react.useEffect(function(){if(onSelectionChange)onSelectionChange(new Set(list.selectedKeys));},[list.selectedKeys,onSelectionChange]);react.useEffect(function(){if(selectedKeys)list.setSelectedKeys(new Set(selectedKeys));// eslint-disable-next-line react-hooks/exhaustive-deps
},[selectedKeys]);var tagList=list.selectedKeys==='all'?new Set(list.items.map(function(item){return item.id;})):list.selectedKeys;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:MultiSelect_module.multiSelect,"data-disabled":isDisabled,"data-invalid":isInvalid,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(utils/* Provider */.Kq,{values:[[// we should maybe add more here
// [LabelContext, {...labelProps, ref: labelRef}],
// [InputContext, {...inputProps, ref: inputOrTextAreaRef}],
// [TextAreaContext, {...inputProps, ref: inputOrTextAreaRef}],
// [TextContext, {
//   slots: {
//     description: descriptionProps,
//     errorMessage: errorMessageProps
//   }
// }],
FieldError/* FieldErrorContext */.C,{isInvalid:isInvalid?isInvalid:false,validationErrors:[],validationDetails:{customError:isInvalid?isInvalid:false,badInput:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valid:false,valueMissing:false}}]],children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:MultiSelect_module.button,ref:triggerRef,isDisabled:isDisabled,children:["V\xE4lj",/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:MultiSelect_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{className:MultiSelect_module.popover,style:{width:popoverWidth},offset:0,children:/*#__PURE__*/(0,jsx_runtime.jsx)(GridList/* GridList */.FK,{"aria-label":label,selectionMode:"multiple",selectedKeys:list.selectedKeys,onSelectionChange:list.setSelectedKeys,children:list.items.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsxs)(GridList/* GridListItem */.KP,{id:item.id,textValue:item.name,className:MultiSelect_module.listBoxItem,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_src/* Checkbox */.S,{slot:"selection"}),item.name]},item.id);})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup,{"aria-label":"Valda",onRemove:function onRemove(keys){var newSelectedKeys=new Set([].concat(list.selectedKeys).filter(function(key){return!keys.has(key);}));list.setSelectedKeys(newSelectedKeys);},children:Array.from(tagList).map(function(key){var item=list.getItem(key);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{id:item.id,textValue:item.name,isDisabled:isDisabled,dismissable:true,children:item.name},item.id);})})]})});};/* harmony default export */ const lib_MultiSelect = ((/* unused pure expression or super */ null && (MultiSelect)));
;// ./packages/multi-select/src/index.ts


/***/ }),

/***/ 34378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* reexport */ Radio),
  z: () => (/* reexport */ RadioGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/radio/src/lib/Radio.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Radio_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","inputLabel":"undefined","inputText":"#1f1f1f","black":"#000000","blue150":"#143c50","gray50":"#bfbfbf","gray60":"#b3b3b3","signalRed10":"#ffdfdf","signalRed100":"#e62323","medium":"undefined","gray150":"#1f1f1f","regular":"undefined","smBreakpoint":"(max-width: 767px)","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","mdBreakpoint":"(min-width: 768px)","borderSecondary":"#b3b3b3","radioGroup":"radioGroup_rXoc","wrap":"wrap_M_eK","radio":"radio_jFRQ"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RadioGroup.mjs + 4 modules
var dist_RadioGroup = __webpack_require__(96325);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/radio/src/lib/Radio.tsx
'use client';var _excluded=["label","description","errorMessage","children"];var RadioGroup=function RadioGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* RadioGroup */.z6,Object.assign({},props,{className:Radio_module.radioGroup,children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Group/* Group */.Y,{className:Radio_module.wrap,children:children})})}));};/**
 * Radio item
 * */var Radio=function Radio(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* Radio */.sx,Object.assign({className:Radio_module.radio},props));};
;// ./packages/radio/src/index.ts


/***/ }),

/***/ 91725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* reexport */ SearchField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SearchField.mjs + 37 modules
var dist_SearchField = __webpack_require__(91521);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var button_src = __webpack_require__(81706);
;// ./packages/search-field/src/lib/SearchField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchField_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","blue150":"#143c50","gray150":"#1f1f1f","container":"container_bTyD","inputContainer":"inputContainer_FEyv","icon":"icon_fL1_","clear":"clear_PAHR","input":"input_Mp7b"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/search-field/src/lib/SearchField.tsx
'use client';var _excluded=["placeholder","buttonText"];var SearchField=function SearchField(_ref){var placeholder=_ref.placeholder,buttonText=_ref.buttonText,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(false),hasInput=_React$useState[0],setHasInput=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_SearchField/* SearchField */.L,Object.assign({onInput:function onInput(){return setHasInput(true);},onClear:function onClear(){return setHasInput(false);},className:SearchField_module.container},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{hidden:true,children:placeholder}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.inputContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{size:20,className:SearchField_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{className:(0,clsx/* default */.A)(src/* TextFieldStyles */.Ql.input,SearchField_module.input),placeholder:placeholder}),hasInput&&/*#__PURE__*/(0,jsx_runtime.jsx)(button_src/* Button */.$,{variant:"icon",size:"small",className:SearchField_module.clear,children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(button_src/* Button */.$,{type:"submit",children:buttonText?buttonText:'Sök'})]}));};
;// ./packages/search-field/src/index.ts


/***/ }),

/***/ 67743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* reexport */ Item),
  l: () => (/* reexport */ Select_Select)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Select.mjs + 3 modules
var Select = __webpack_require__(77686);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 5 modules
var Popover = __webpack_require__(8119);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 5 modules
var ListBox = __webpack_require__(79046);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
;// ./packages/select/src/lib/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray20":"#e6e6e6","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","backgroundSecondary":"#f2f2f2","button":"button_XgNv","select":"select_GoPk","popover":"popover_Fgts","listBoxItem":"listBoxItem_yN3S","icon":"icon_X17X"});
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/select/src/lib/Select.tsx
'use client';var _excluded=["label","description","errorMessage","children","items"];function Select_Select(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Select/* Select */.l6,Object.assign({className:Select_module.select},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:Select_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* SelectValue */.yv,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,"aria-hidden":true})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{className:Select_module.popover,offset:0,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.qF,{items:items,children:children})})]}));}function Item(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBoxItem */.nh,Object.assign({className:Select_module.listBoxItem},props));}
;// ./packages/select/src/index.ts


/***/ }),

/***/ 75735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* reexport */ Spinner)
});

;// ./packages/spinner/src/lib/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","red100":"#b90835","blue150":"#143c50","container":"container_q2e8","spinner":"spinner_TRW8","rotating":"rotating_kCFF","dark":"dark_Z44f","vsHidden":"vsHidden_FrrE"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/spinner/src/lib/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,dark=_ref.dark;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Spinner_module.container,role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,dark&&Spinner_module.dark),size:small?16:32,strokeWidth:small?2:3,absoluteStrokeWidth:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Spinner_module.vsHidden,children:"Laddar, v\xE4nligen v\xE4nta."})]});};
;// ./packages/spinner/src/index.ts


/***/ }),

/***/ 4217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* reexport */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tabs.mjs + 6 modules
var dist_Tabs = __webpack_require__(63917);
;// ./packages/tabs/src/lib/Tabs.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tabs_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","gray50":"#bfbfbf","semiBoldWeight":"600","blue130":"#25607f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","container":"container_ic9e","list":"list_PXRa","listItem":"listItem_Uk_u","panel":"panel_wAym"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/tabs/src/lib/Tabs.tsx
'use client';// Define a type for children elements that can accept an id prop
var Tabs=function Tabs(_ref){var tabs=_ref.tabs,label=_ref.label,defaultSelected=_ref.defaultSelected,children=_ref.children;var childrenArray=react.Children.toArray(children);// Check if the number of children matches the number of tabs
if(childrenArray.length!==tabs.length){throw new Error("The number of children must match the number of tabs. Children: "+childrenArray.length+" Tabs: "+tabs.length);}// Create a map of tab titles to their corresponding content
var tabContentMap=childrenArray.reduce(function(acc,child,index){if(/*#__PURE__*/react.isValidElement(child)){var _tabs$index;var title=(_tabs$index=tabs[index])==null?void 0:_tabs$index.toLowerCase();if(title){acc[title]=/*#__PURE__*/(0,react.cloneElement)(child,{id:title});}}return acc;},{});return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Tabs/* Tabs */.tU,{orientation:"vertical",defaultSelectedKey:defaultSelected&&defaultSelected.toLowerCase(),className:Tabs_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* TabList */.wb,{"aria-label":label,className:Tabs_module.list,children:tabs.map(function(tab){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* Tab */.oz,{id:tab.toLowerCase(),className:Tabs_module.listItem,children:tab},tab);})}),tabs.map(function(tab){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* TabPanel */.Kp,{id:tab.toLowerCase(),className:Tabs_module.panel,children:tabContentMap[tab.toLowerCase()]},tab);})]});};
;// ./packages/tabs/src/index.ts


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
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textfield/src/lib/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),input=_React$useState[0],setInput=_React$useState[1];var _React$useState2=react.useState(true),isValid=_React$useState2[0],setIsValid=_React$useState2[1];var validateInput=function validateInput(value){if(validationType===undefined)return true;if(validationType==='ssn')setIsValid(ssnRegEx.test(value));if(validationType instanceof RegExp)setIsValid(new RegExp(validationType).test(value));};var handleInputBlur=function handleInputBlur(e){var value=e.target.value;validateInput(value);};var handleInputChange=function handleInputChange(e){setInput(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:TextField_module.inputField,isInvalid:validationType!==undefined?!isValid:props.isInvalid},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{type:props.type,className:TextField_module.input,onChange:handleInputChange,onBlur:handleInputBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:input})]})})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState3=react.useState(false),showPassword=_React$useState3[0],setShowPassword=_React$useState3[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:TextField_module.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');
;// ./packages/textfield/src/lib/index.ts

;// ./packages/textfield/src/index.ts


/***/ }),

/***/ 32976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  as: () => (/* reexport */ baseColors),
  w4: () => (/* reexport */ theme)
});

// UNUSED EXPORTS: accessibility, borderRadius, borderWidths, boxShadow, breakpoints, buttonColors, font, fontSizes, fontWeights, inputColor, midasColors, midasTransitions, signalColors

// NAMESPACE OBJECT: ./packages/theme/src/lib/tokens.ts
var tokens_namespaceObject = {};
__webpack_require__.r(tokens_namespaceObject);
__webpack_require__.d(tokens_namespaceObject, {
  accessibility: () => (accessibility),
  baseColors: () => (baseColors),
  borderRadius: () => (borderRadius),
  borderWidths: () => (borderWidths),
  boxShadow: () => (boxShadow),
  breakpoints: () => (breakpoints),
  buttonColors: () => (buttonColors),
  font: () => (font),
  fontSizes: () => (fontSizes),
  fontWeights: () => (fontWeights),
  inputColor: () => (inputColor),
  midasColors: () => (midasColors),
  midasTransitions: () => (midasTransitions),
  signalColors: () => (signalColors)
});

;// ./packages/theme/src/lib/tokens.ts
var baseColors={white:'#ffffff',black:'#000000',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray130:'#5d5d5d',gray150:'#1f1f1f',red10:'#f7e9e7',red20:'#f1d4d1',red30:'#e9beba',red40:'#e2a8a4',red50:'#d9918e',red60:'#d37a7a',red70:'#cc6467',red80:'#c54c56',red90:'#be3345',red100:'#b90835',red130:'#8b1327',red150:'#641018',blue10:'#eaf2f6',blue20:'#d5e5ed',blue30:'#c0d7e4',blue40:'#abcbdb',blue50:'#94bcd1',blue60:'#82b0c9',blue70:'#6ca3c0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue130:'#25607f',blue150:'#143c50'};var buttonColors={outline:'#303030',primaryBackground:baseColors['blue150'],primaryText:'#303030',primaryHover:baseColors['blue130'],primaryFocus:baseColors['black'],primaryActive:'#4289ae',secondaryBackground:baseColors['gray130'],secondaryText:baseColors['white'],secondaryHover:'#303030',secondaryActive:'#303030'};var inputColor={inputText:baseColors['gray150']};var signalColors={signalGreen10:'#d5f2d9',signalGreen100:'#008d3c',signalBlue10:baseColors['blue10'],signalBlue100:'#0066cc',signalYellow10:'#fff8e1',signalYellow100:'#f1c21b',signalRed10:'#ffdfdf',signalRed100:'#e62323',signalRed130:'#b31b1b',signalRed150:'#801313'};var borderRadius={sRadius:' 0.125rem',// 2px
mRadius:' 0.25rem'// 4px
};var borderWidths={xsWidth:' 0.0625rem',// 1px
sWidth:' 0.125rem',// 2px
mWidth:' 0.25rem'// 4px
};var fontWeights={lightWeight:'300',regularWeight:'400',mediumWeight:'500',semiBoldWeight:'600',boldWeight:'700',blackWeight:'900'};var fontSizes={desktopSize:'1rem',mobileSize:'1rem',largeSize:'1.5rem',inputNormalSize:'0.875rem',inputMessageSize:'0.75rem',inputLabelSize:'1rem',inputDescriptionSize:'0.875rem'};var midasColors={logoPrimary:baseColors['red100'],logoSecondary:baseColors['white'],textPrimary:baseColors['gray150'],textSecondary:baseColors['white'],textTertiary:baseColors['red100'],link:baseColors['blue130'],linkVisited:'#663366',backgroundPrimary:baseColors['white'],backgroundSecondary:baseColors['gray10'],backgroundFooter1:baseColors['red100'],backgroundFooter2:baseColors['red130'],backgroundInfo:baseColors['blue10'],backgroundImportant:signalColors['signalYellow10'],borderPrimary:baseColors['black'],borderSecondary:baseColors['gray60'],borderFocusOuter:baseColors['black'],borderFocusInner:baseColors['white'],iconPrimary:baseColors['black'],iconInverted:baseColors['white']};var midasTransitions={slowTransition:'500ms',normalTransition:'300ms',fastTransition:'250ms'};var breakpoints={smBreakpoint:'(max-width: 767px)',mdBreakpoint:'(min-width: 768px)',lgBreakpoint:'(min-width: 1200px)',xlBreakpoint:'(min-width: 1440px)'};var accessibility={forcedColorsMode:'(forced-colors: active)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var font={display:'"Inter", sans-serif'};var boxShadow={focus:'0 0 0 2px white, 0 0 0 4px black'};
;// ./packages/theme/src/lib/index.ts
var theme=Object.assign({},tokens_namespaceObject);
;// ./packages/theme/src/index.ts


/***/ })

}]);