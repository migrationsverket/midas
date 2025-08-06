(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1028],{

/***/ 18426:
/***/ ((module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }),

/***/ 21028:
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
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(95293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
;// ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */function usePrismTheme(){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),prism=_useThemeConfig.prism;var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;var lightModeTheme=prism.theme;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=colorMode==='dark'?darkModeTheme:lightModeTheme;return prismTheme;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js + 1 modules
var wrapRegExp = __webpack_require__(3909);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(18426);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 3 modules
var reactUtils = __webpack_require__(33590);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var codeBlockTitleRegex=/*#__PURE__*/(0,wrapRegExp/* default */.A)(/title=(["'])(.*?)\1/,{quote:1,title:2});var metastringLinesRangeRegex=/*#__PURE__*/(0,wrapRegExp/* default */.A)(/\{([\d,-]+)\}/,{range:1});// Supported types of highlight comments
var popularCommentPatterns={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},bash:{start:'#',end:''},html:{start:'<!--',end:'-->'}};var commentPatterns=Object.assign({},popularCommentPatterns,{// shallow copy is sufficient
// minor comment styles
lua:{start:'--',end:''},wasm:{start:'\\;\\;',end:''},tex:{start:'%',end:''},vb:{start:"['‘’]",end:''},vbnet:{start:"(?:_\\s*)?['‘’]",end:''},// Visual Studio 2019 or later
rem:{start:'[Rr][Ee][Mm]\\b',end:''},f90:{start:'!',end:''},// Free format only
ml:{start:'\\(\\*',end:'\\*\\)'},cobol:{start:'\\*>',end:''}// Free format only
});var popularCommentTypes=Object.keys(popularCommentPatterns);function getCommentPattern(languages,magicCommentDirectives){// To be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){var _commentPatterns$lang=commentPatterns[lang],start=_commentPatterns$lang.start,end=_commentPatterns$lang.end;return"(?:"+start+"\\s*("+magicCommentDirectives.flatMap(function(d){var _d$block,_d$block2;return[d.line,(_d$block=d.block)==null?void 0:_d$block.start,(_d$block2=d.block)==null?void 0:_d$block2.end].filter(Boolean);}).join('|')+")\\s*"+end+")";}).join('|');// White space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");}/**
 * Select comment styles based on language
 */function getAllMagicCommentDirectiveStyles(lang,magicCommentDirectives){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getCommentPattern(['js','jsBlock'],magicCommentDirectives);case'jsx':case'tsx':return getCommentPattern(['js','jsBlock','jsx'],magicCommentDirectives);case'html':return getCommentPattern(['js','jsBlock','html'],magicCommentDirectives);case'python':case'py':case'bash':return getCommentPattern(['bash'],magicCommentDirectives);case'markdown':case'md':// Text uses HTML, front matter uses bash
return getCommentPattern(['html','jsx','bash'],magicCommentDirectives);case'tex':case'latex':case'matlab':return getCommentPattern(['tex'],magicCommentDirectives);case'lua':case'haskell':return getCommentPattern(['lua'],magicCommentDirectives);case'sql':return getCommentPattern(['lua','jsBlock'],magicCommentDirectives);case'wasm':return getCommentPattern(['wasm'],magicCommentDirectives);case'vb':case'vba':case'visual-basic':return getCommentPattern(['vb','rem'],magicCommentDirectives);case'vbnet':return getCommentPattern(['vbnet','rem'],magicCommentDirectives);case'batch':return getCommentPattern(['rem'],magicCommentDirectives);case'basic':// https://github.com/PrismJS/prism/blob/master/components/prism-basic.js#L3
return getCommentPattern(['rem','f90'],magicCommentDirectives);case'fsharp':return getCommentPattern(['js','ml'],magicCommentDirectives);case'ocaml':case'sml':return getCommentPattern(['ml'],magicCommentDirectives);case'fortran':return getCommentPattern(['f90'],magicCommentDirectives);case'cobol':return getCommentPattern(['cobol'],magicCommentDirectives);default:// All popular comment types
return getCommentPattern(popularCommentTypes,magicCommentDirectives);}}function parseCodeBlockTitle(metastring){var _metastring$match$gro,_metastring$match;return(_metastring$match$gro=metastring==null||(_metastring$match=metastring.match(codeBlockTitleRegex))==null?void 0:_metastring$match.groups.title)!=null?_metastring$match$gro:'';}function getMetaLineNumbersStart(metastring){var showLineNumbersMeta=metastring==null?void 0:metastring.split(' ').find(function(str){return str.startsWith('showLineNumbers');});if(showLineNumbersMeta){if(showLineNumbersMeta.startsWith('showLineNumbers=')){var value=showLineNumbersMeta.replace('showLineNumbers=','');return parseInt(value,10);}return 1;}return undefined;}function getLineNumbersStart(_ref){var showLineNumbers=_ref.showLineNumbers,metastring=_ref.metastring;var defaultStart=1;if(typeof showLineNumbers==='boolean'){return showLineNumbers?defaultStart:undefined;}if(typeof showLineNumbers==='number'){return showLineNumbers;}return getMetaLineNumbersStart(metastring);}// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring){return Boolean(metastring==null?void 0:metastring.includes('showLineNumbers'));}function parseCodeLinesFromMetastring(code,_ref2){var metastring=_ref2.metastring,magicComments=_ref2.magicComments;// Highlighted lines specified in props: don't parse the content
if(metastring&&metastringLinesRangeRegex.test(metastring)){var linesRange=metastring.match(metastringLinesRangeRegex).groups.range;if(magicComments.length===0){throw new Error("A highlight range has been given in code block's metastring (``` "+metastring+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");}var metastringRangeClassName=magicComments[0].className;var lines=parse_numeric_range_default()(linesRange).filter(function(n){return n>0;}).map(function(n){return[n-1,[metastringRangeClassName]];});return{lineClassNames:Object.fromEntries(lines),code:code};}return null;}function parseCodeLinesFromContent(code,params){var language=params.language,magicComments=params.magicComments;if(language===undefined){return{lineClassNames:{},code:code};}var directiveRegex=getAllMagicCommentDirectiveStyles(language,magicComments);// Go through line by line
var lines=code.split(/\r?\n/);var blocks=Object.fromEntries(magicComments.map(function(d){return[d.className,{start:0,range:''}];}));var lineToClassName=Object.fromEntries(magicComments.filter(function(d){return d.line;}).map(function(_ref3){var className=_ref3.className,line=_ref3.line;return[line,className];}));var blockStartToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref4){var className=_ref4.className,block=_ref4.block;return[block.start,className];}));var blockEndToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref5){var className=_ref5.className,block=_ref5.block;return[block.end,className];}));for(var lineNumber=0;lineNumber<lines.length;){var line=lines[lineNumber];var match=line.match(directiveRegex);if(!match){// Lines without directives are unchanged
lineNumber+=1;continue;}var directive=match.slice(1).find(function(item){return item!==undefined;});if(lineToClassName[directive]){blocks[lineToClassName[directive]].range+=lineNumber+",";}else if(blockStartToClassName[directive]){blocks[blockStartToClassName[directive]].start=lineNumber;}else if(blockEndToClassName[directive]){blocks[blockEndToClassName[directive]].range+=blocks[blockEndToClassName[directive]].start+"-"+(lineNumber-1)+",";}lines.splice(lineNumber,1);}var lineClassNames={};Object.entries(blocks).forEach(function(_ref6){var className=_ref6[0],range=_ref6[1].range;parse_numeric_range_default()(range).forEach(function(l){var _lineClassNames$l;(_lineClassNames$l=lineClassNames[l])!=null?_lineClassNames$l:lineClassNames[l]=[];lineClassNames[l].push(className);});});return{code:lines.join('\n'),lineClassNames:lineClassNames};}/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */function parseLines(code,params){var _parseCodeLinesFromMe;// Historical behavior: we remove last line break
var newCode=code.replace(/\r?\n$/,'');// Historical behavior: we try one strategy after the other
// we don't support mixing metastring ranges + magic comments
return(_parseCodeLinesFromMe=parseCodeLinesFromMetastring(newCode,Object.assign({},params)))!=null?_parseCodeLinesFromMe:parseCodeLinesFromContent(newCode,Object.assign({},params));}/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */function parseClassNameLanguage(className){if(!className){return undefined;}var languageClassName=className.split(' ').find(function(str){return str.startsWith('language-');});return languageClassName==null?void 0:languageClassName.replace(/language-/,'');}// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language){return language==null?void 0:language.toLowerCase();}function getLanguage(params){var _normalizeLanguage,_ref7,_params$language;return(_normalizeLanguage=normalizeLanguage((_ref7=(_params$language=params.language)!=null?_params$language:parseClassNameLanguage(params.className))!=null?_ref7:params.defaultLanguage))!=null?_normalizeLanguage:'text';// There's always a language, required by Prism;
}/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */function ensureLanguageClassName(_ref8){var className=_ref8.className,language=_ref8.language;return (0,clsx/* default */.A)(className,language&&!(className!=null&&className.includes("language-"+language))&&"language-"+language);}function createCodeBlockMetadata(params){var language=getLanguage({language:params.language,defaultLanguage:params.defaultLanguage,className:params.className});var _parseLines=parseLines(params.code,{metastring:params.metastring,magicComments:params.magicComments,language:language}),lineClassNames=_parseLines.lineClassNames,code=_parseLines.code;var className=ensureLanguageClassName({className:params.className,language:language});var title=parseCodeBlockTitle(params.metastring)||params.title;var lineNumbersStart=getLineNumbersStart({showLineNumbers:params.showLineNumbers,metastring:params.metastring});return{codeInput:params.code,code:code,className:className,language:language,title:title,lineNumbersStart:lineNumbersStart,lineClassNames:lineClassNames};}function getPrismCssVariables(prismTheme){var mapping={color:'--prism-color',backgroundColor:'--prism-background-color'};var properties={};Object.entries(prismTheme.plain).forEach(function(_ref9){var key=_ref9[0],value=_ref9[1];var varName=mapping[key];if(varName&&typeof value==='string'){properties[varName]=value;}});return properties;}var CodeBlockContext=/*#__PURE__*/(0,react.createContext)(null);function CodeBlockContextProvider(_ref0){var metadata=_ref0.metadata,wordWrap=_ref0.wordWrap,children=_ref0.children;// Should we optimize this in 2 contexts?
// Unlike metadata, wordWrap is stateful and likely to trigger re-renders
var value=(0,react.useMemo)(function(){return{metadata:metadata,wordWrap:wordWrap};},[metadata,wordWrap]);return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContext.Provider,{value:value,children:children});}function useCodeBlockContext(){var value=(0,react.useContext)(CodeBlockContext);if(value===null){throw new reactUtils/* ReactContextError */.dV('CodeBlockContextProvider');}return value;}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
var _excluded=["as"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockContainer(_ref){var As=_ref.as,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var prismTheme=usePrismTheme();var prismCssVariables=getPrismCssVariables(prismTheme);return/*#__PURE__*/(0,jsx_runtime.jsx)(As// Polymorphic components are hard to type, without `oneOf` generics
,Object.assign({},props,{style:prismCssVariables,className:(0,clsx/* default */.A)(props.className,styles_module.codeBlockContainer,ThemeClassNames/* ThemeClassNames */.G.common.codeBlock)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO Docusaurus v4: move this component at the root?
// This component only handles a rare edge-case: <pre><MyComp/></pre> in MDX
// <pre> tags in markdown map to CodeBlocks. They may contain JSX children.
// When children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContainer,{as:"pre",tabIndex:0,className:(0,clsx/* default */.A)(Content_styles_module.codeBlockStandalone,'thin-scrollbar',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{className:Content_styles_module.codeBlockLines,children:children})});}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultOptions={attributes:true,characterData:true,childList:true,subtree:true};function useMutationObserver(target,callback,options){if(options===void 0){options=DefaultOptions;}var stableCallback=(0,reactUtils/* useEvent */._q)(callback);// MutationObserver options are not nested much
// so this should be to memo options in 99%
// TODO handle options.attributeFilter array
var stableOptions=(0,reactUtils/* useShallowMemoObject */.Be)(options);(0,react.useEffect)(function(){var observer=new MutationObserver(stableCallback);if(target){observer.observe(target,stableOptions);}return function(){return observer.disconnect();};},[target,stableCallback,stableOptions]);}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js
// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef,callback){var _useState=(0,react.useState)(),hiddenTabElement=_useState[0],setHiddenTabElement=_useState[1];var updateHiddenTabElement=(0,react.useCallback)(function(){var _codeBlockRef$current;// No need to observe non-hidden tabs
// + we want to force a re-render when a tab becomes visible
setHiddenTabElement((_codeBlockRef$current=codeBlockRef.current)==null?void 0:_codeBlockRef$current.closest('[role=tabpanel][hidden]'));},[codeBlockRef,setHiddenTabElement]);(0,react.useEffect)(function(){updateHiddenTabElement();},[updateHiddenTabElement]);useMutationObserver(hiddenTabElement,function(mutations){mutations.forEach(function(mutation){if(mutation.type==='attributes'&&mutation.attributeName==='hidden'){callback();updateHiddenTabElement();}});},{attributes:true,characterData:false,childList:false,subtree:false});}function useCodeWordWrap(){var _useState2=(0,react.useState)(false),isEnabled=_useState2[0],setIsEnabled=_useState2[1];var _useState3=(0,react.useState)(false),isCodeScrollable=_useState3[0],setIsCodeScrollable=_useState3[1];var codeBlockRef=(0,react.useRef)(null);var toggle=(0,react.useCallback)(function(){var codeElement=codeBlockRef.current.querySelector('code');if(isEnabled){codeElement.removeAttribute('style');}else{codeElement.style.whiteSpace='pre-wrap';// When code wrap is enabled, we want to avoid a scrollbar in any case
// Ensure that very very long words/strings/tokens still wrap
codeElement.style.overflowWrap='anywhere';}setIsEnabled(function(value){return!value;});},[codeBlockRef,isEnabled]);var updateCodeIsScrollable=(0,react.useCallback)(function(){var _codeBlockRef$current2=codeBlockRef.current,scrollWidth=_codeBlockRef$current2.scrollWidth,clientWidth=_codeBlockRef$current2.clientWidth;var isScrollable=scrollWidth>clientWidth||codeBlockRef.current.querySelector('code').hasAttribute('style');setIsCodeScrollable(isScrollable);},[codeBlockRef]);useTabBecameVisibleCallback(codeBlockRef,updateCodeIsScrollable);(0,react.useEffect)(function(){updateCodeIsScrollable();},[isEnabled,updateCodeIsScrollable]);(0,react.useEffect)(function(){window.addEventListener('resize',updateCodeIsScrollable,{passive:true});return function(){window.removeEventListener('resize',updateCodeIsScrollable);};},[updateCodeIsScrollable]);return{codeBlockRef:codeBlockRef,isEnabled:isEnabled,isCodeScrollable:isCodeScrollable,toggle:toggle};}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Just a pass-through component that users can swizzle and customize
function CodeBlockTitle(_ref){var children=_ref.children;return children;}
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(71765);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/Token/index.js
var Token_excluded=["line","token"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Pass-through components that users can swizzle and customize
function CodeBlockLineToken(_ref){var line=_ref.line,token=_ref.token,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Token_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},props));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Line_styles_module = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Replaces '\n' by ''
// Historical code, not sure why we even need this :/
function fixLineBreak(line){var singleLineBreakToken=line.length===1&&line[0].content==='\n'?line[0]:undefined;if(singleLineBreakToken){return[Object.assign({},singleLineBreakToken,{content:''})];}return line;}function CodeBlockLine(_ref){var lineProp=_ref.line,classNames=_ref.classNames,showLineNumbers=_ref.showLineNumbers,getLineProps=_ref.getLineProps,getTokenProps=_ref.getTokenProps;var line=fixLineBreak(lineProp);var lineProps=getLineProps({line:line,className:(0,clsx/* default */.A)(classNames,showLineNumbers&&Line_styles_module.codeLine)});var lineTokens=line.map(function(token,key){var tokenProps=getTokenProps({token:token});return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLineToken,Object.assign({},tokenProps,{line:line,token:token,children:tokenProps.children}),key);});return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",Object.assign({},lineProps,{children:[showLineNumbers?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Line_styles_module.codeLineNumber}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Line_styles_module.codeLineContent,children:lineTokens})]}):lineTokens,/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})]}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO Docusaurus v4: remove useless forwardRef
var Pre=/*#__PURE__*/react.forwardRef(function(props,ref){return/*#__PURE__*/(0,jsx_runtime.jsx)("pre",Object.assign({ref:ref/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */,tabIndex:0},props,{className:(0,clsx/* default */.A)(props.className,Content_styles_module.codeBlock,'thin-scrollbar')}));});function Code(props){var _useCodeBlockContext=useCodeBlockContext(),metadata=_useCodeBlockContext.metadata;return/*#__PURE__*/(0,jsx_runtime.jsx)("code",Object.assign({},props,{className:(0,clsx/* default */.A)(props.className,Content_styles_module.codeBlockLines,metadata.lineNumbersStart!==undefined&&Content_styles_module.codeBlockLinesWithNumbering),style:Object.assign({},props.style,{counterReset:metadata.lineNumbersStart===undefined?undefined:"line-count "+(metadata.lineNumbersStart-1)})}));}function CodeBlockContent(_ref){var classNameProp=_ref.className;var _useCodeBlockContext2=useCodeBlockContext(),metadata=_useCodeBlockContext2.metadata,wordWrap=_useCodeBlockContext2.wordWrap;var prismTheme=usePrismTheme();var code=metadata.code,language=metadata.language,lineNumbersStart=metadata.lineNumbersStart,lineClassNames=metadata.lineClassNames;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Highlight */.f4,{theme:prismTheme,code:code,language:language,children:function children(_ref2){var className=_ref2.className,style=_ref2.style,lines=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return/*#__PURE__*/(0,jsx_runtime.jsx)(Pre,{ref:wordWrap.codeBlockRef,className:(0,clsx/* default */.A)(classNameProp,className),style:style,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Code,{children:lines.map(function(line,i){return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLine,{line:line,getLineProps:getLineProps,getTokenProps:getTokenProps,classNames:lineClassNames[i],showLineNumbers:lineNumbersStart!==undefined},i);})})});}});}
;// ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly(_ref){var children=_ref.children,fallback=_ref.fallback;var isBrowser=(0,useIsBrowser/* default */.A)();if(isBrowser){if(typeof children!=='function'&&"production"==='development')// removed by dead control flow
{}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children==null?void 0:children()});}return fallback!=null?fallback:null;}
;// ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(text,_temp){var _ref=_temp===void 0?{}:_temp,_ref$target=_ref.target,target=_ref$target===void 0?document.body:_ref$target;if(typeof text!=='string'){throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof text+"`.");}var element=document.createElement('textarea');var previouslyFocusedElement=document.activeElement;element.value=text;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
var selection=document.getSelection();var originalRange=selection.rangeCount>0&&selection.getRangeAt(0);target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=text.length;var isSuccess=false;try{isSuccess=document.execCommand('copy');}catch(_unused){}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/Button/index.js
var Button_excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockButton(_ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Button_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("button",Object.assign({type:"button"},props,{className:(0,clsx/* default */.A)('clean-btn',className)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Copy/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconCopy(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Success/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconSuccess(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_Vdqa","copyButtonIcons":"copyButtonIcons_IEyt","copyButtonIcon":"copyButtonIcon_TrPX","copyButtonSuccessIcon":"copyButtonSuccessIcon_cVMy"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function title(){return (0,Translate/* translate */.T)({id:'theme.CodeBlock.copy',message:'Copy',description:'The copy button label on code blocks'});}function ariaLabel(isCopied){return isCopied?(0,Translate/* translate */.T)({id:'theme.CodeBlock.copied',message:'Copied',description:'The copied button label on code blocks'}):(0,Translate/* translate */.T)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'});}function useCopyButton(){var _useCodeBlockContext=useCodeBlockContext(),code=_useCodeBlockContext.metadata.code;var _useState=(0,react.useState)(false),isCopied=_useState[0],setIsCopied=_useState[1];var copyTimeout=(0,react.useRef)(undefined);var copyCode=(0,react.useCallback)(function(){copyTextToClipboard(code);setIsCopied(true);copyTimeout.current=window.setTimeout(function(){setIsCopied(false);},1000);},[code]);(0,react.useEffect)(function(){return function(){return window.clearTimeout(copyTimeout.current);};},[]);return{copyCode:copyCode,isCopied:isCopied};}function CopyButton(_ref){var className=_ref.className;var _useCopyButton=useCopyButton(),copyCode=_useCopyButton.copyCode,isCopied=_useCopyButton.isCopied;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButton,{"aria-label":ariaLabel(isCopied),title:title(),className:(0,clsx/* default */.A)(className,CopyButton_styles_module.copyButton,isCopied&&CopyButton_styles_module.copyButtonCopied),onClick:copyCode,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:CopyButton_styles_module.copyButtonIcons,"aria-hidden":"true",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconCopy,{className:CopyButton_styles_module.copyButtonIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconSuccess,{className:CopyButton_styles_module.copyButtonSuccessIcon})]})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/WordWrap/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconWordWrap(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_b1P5","wordWrapButtonEnabled":"wordWrapButtonEnabled_uzNF"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function WordWrapButton(_ref){var className=_ref.className;var _useCodeBlockContext=useCodeBlockContext(),wordWrap=_useCodeBlockContext.wordWrap;var canShowButton=wordWrap.isEnabled||wordWrap.isCodeScrollable;if(!canShowButton){return false;}var title=(0,Translate/* translate */.T)({id:'theme.CodeBlock.wordWrapToggle',message:'Toggle word wrap',description:'The title attribute for toggle word wrapping button of code block lines'});return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButton,{onClick:function onClick(){return wordWrap.toggle();},className:(0,clsx/* default */.A)(className,wordWrap.isEnabled&&WordWrapButton_styles_module.wordWrapButtonEnabled),"aria-label":title,title:title,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconWordWrap,{className:WordWrapButton_styles_module.wordWrapButtonIcon,"aria-hidden":"true"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Buttons_styles_module = ({"buttonGroup":"buttonGroup_M5ko"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
function CodeBlockButtons(_ref){var className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly,{children:function children(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(className,Buttons_styles_module.buttonGroup),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(WordWrapButton,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(CopyButton,{})]});}});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"codeBlockContent":"codeBlockContent_QJqH","codeBlockTitle":"codeBlockTitle_OeMC","codeBlock":"codeBlock_a8dz"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockLayout(_ref){var className=_ref.className;var _useCodeBlockContext=useCodeBlockContext(),metadata=_useCodeBlockContext.metadata;return/*#__PURE__*/(0,jsx_runtime.jsxs)(CodeBlockContainer,{as:"div",className:(0,clsx/* default */.A)(className,metadata.className),children:[metadata.title&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Layout_styles_module.codeBlockTitle,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockTitle,{children:metadata.title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_styles_module.codeBlockContent,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContent,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButtons,{})]})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCodeBlockMetadata(props){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),prism=_useThemeConfig.prism;return createCodeBlockMetadata({code:props.children,className:props.className,metastring:props.metastring,magicComments:prism.magicComments,defaultLanguage:prism.defaultLanguage,language:props.language,title:props.title,showLineNumbers:props.showLineNumbers});}// TODO Docusaurus v4: move this component at the root?
function CodeBlockString(props){var metadata=useCodeBlockMetadata(props);var wordWrap=useCodeWordWrap();return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContextProvider,{metadata:metadata,wordWrap:wordWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLayout,{})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
var CodeBlock_excluded=["children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */function maybeStringifyChildren(children){if(react.Children.toArray(children).some(function(el){return/*#__PURE__*/(0,react.isValidElement)(el);})){return children;}// The children is now guaranteed to be one/more plain strings
return Array.isArray(children)?children.join(''):children;}function CodeBlock(_ref){var rawChildren=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,CodeBlock_excluded);// The Prism theme on SSR is always the default theme but the site theme can
// be in a different mode. React hydration doesn't update DOM styles that come
// from SSR. Hence force a re-render after mounting to apply the current
// relevant styles.
var isBrowser=(0,useIsBrowser/* default */.A)();var children=maybeStringifyChildren(rawChildren);var CodeBlockComp=typeof children==='string'?CodeBlockString:CodeBlockJSX;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockComp,Object.assign({},props,{children:children}),String(isBrowser));}

/***/ })

}]);