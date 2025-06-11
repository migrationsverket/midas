"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2138],{

/***/ 53465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
var OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(function(pf){return pluralForms.includes(pf);});}// Hardcoded english/fallback implementation
var EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:function select(count){return count===1?'one':'other';}};function createLocalePluralForms(locale){var pluralRules=new Intl.PluralRules(locale);return{locale:locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:function select(count){return pluralRules.select(count);}};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(),currentLocale=_useDocusaurusContext.i18n.currentLocale;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){try{return createLocalePluralForms(currentLocale);}catch(err){console.error("Failed to use Intl.PluralRules for locale \""+currentLocale+"\".\nDocusaurus will fallback to the default (English) implementation.\nError: "+err.message+"\n");return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){var separator='|';var parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error("For locale="+localePluralForms.locale+", a maximum of "+localePluralForms.pluralForms.length+" plural forms are expected ("+localePluralForms.pluralForms.join(',')+"), but the message contains "+parts.length+": "+pluralMessages);}var pluralForm=localePluralForms.select(count);var pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){var localePluralForm=useLocalePluralForms();return{selectMessage:function selectMessage(count,pluralMessages){return selectPluralMessage(pluralMessages,count,localePluralForm);}};}

/***/ }),

/***/ 41283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ theme_SearchPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js
var createForOfIteratorHelperLoose = __webpack_require__(41003);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90675);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 79 modules
var Layout = __webpack_require__(35675);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(53465);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(35527);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated.js + 1 modules
var proxiedGenerated = __webpack_require__(70789);
;// ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SEARCH_PARAM_QUERY="q";var SEARCH_PARAM_CONTEXT="ctx";var SEARCH_PARAM_VERSION="version";function useSearchQuery(){var isBrowser=(0,useIsBrowser/* default */.A)();var history=(0,react_router/* useHistory */.W6)();var location=(0,react_router/* useLocation */.zy)();var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var params=isBrowser?new URLSearchParams(location.search):null;var searchValue=(params==null?void 0:params.get(SEARCH_PARAM_QUERY))||"";var searchContext=(params==null?void 0:params.get(SEARCH_PARAM_CONTEXT))||"";var searchVersion=(params==null?void 0:params.get(SEARCH_PARAM_VERSION))||"";var getSearchParams=function getSearchParams(searchValue){var searchParams=new URLSearchParams(location.search);if(searchValue){searchParams.set(SEARCH_PARAM_QUERY,searchValue);}else{searchParams["delete"](SEARCH_PARAM_QUERY);}return searchParams;};return{searchValue:searchValue,searchContext:searchContext&&Array.isArray(proxiedGenerated/* searchContextByPaths */.Hg)&&proxiedGenerated/* searchContextByPaths */.Hg.some(function(item){return typeof item==="string"?item===searchContext:item.path===searchContext;})?searchContext:"",searchVersion:searchVersion,updateSearchPath:function updateSearchPath(searchValue){var searchParams=getSearchParams(searchValue);history.replace({search:searchParams.toString()});},updateSearchContext:function updateSearchContext(value){var searchParams=new URLSearchParams(location.search);searchParams.set(SEARCH_PARAM_CONTEXT,value);history.replace({search:searchParams.toString()});},generateSearchPageLink:function generateSearchPageLink(searchValue){var searchParams=getSearchParams(searchValue);// Refer to https://github.com/facebook/docusaurus/pull/2838
return baseUrl+"search?"+searchParams.toString();}};}/* harmony default export */ const hooks_useSearchQuery = (useSearchQuery);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker.js + 1 modules
var searchByWorker = __webpack_require__(69153);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/interfaces.js
var interfaces = __webpack_require__(69913);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight.js
var highlight = __webpack_require__(86841);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed.js + 1 modules
var highlightStemmed = __webpack_require__(43810);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions.js
var getStemmedPositions = __webpack_require__(27674);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing.jsx + 1 modules
var LoadingRing = __webpack_require__(2849);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath.js
var concatDocumentPath = __webpack_require__(4471);
;// ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchPage_module = ({"searchContextInput":"searchContextInput_mXoe","searchQueryInput":"searchQueryInput_CFBF","searchResultItem":"searchResultItem_U687","searchResultItemPath":"searchResultItemPath_uIbk","searchResultItemSummary":"searchResultItemSummary_oZHr","searchQueryColumn":"searchQueryColumn_q7nx","searchContextColumn":"searchContextColumn_oWAF"});
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/normalizeContextByPath.js
var normalizeContextByPath = __webpack_require__(43385);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.jsx
function SearchPage(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SearchPageContent,{})});}function SearchPageContent(){var _clsx;var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl,currentLocale=_useDocusaurusContext.i18n.currentLocale;var _usePluralForm=(0,usePluralForm/* usePluralForm */.W)(),selectMessage=_usePluralForm.selectMessage;var _useSearchQuery=hooks_useSearchQuery(),searchValue=_useSearchQuery.searchValue,searchContext=_useSearchQuery.searchContext,searchVersion=_useSearchQuery.searchVersion,updateSearchPath=_useSearchQuery.updateSearchPath,updateSearchContext=_useSearchQuery.updateSearchContext;var _useState=(0,react.useState)(searchValue),searchQuery=_useState[0],setSearchQuery=_useState[1];var _useState2=(0,react.useState)(),searchResults=_useState2[0],setSearchResults=_useState2[1];var versionUrl=""+baseUrl+searchVersion;var pageTitle=(0,react.useMemo)(function(){return searchQuery?(0,Translate/* translate */.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:searchQuery}):(0,Translate/* translate */.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"});},[searchQuery]);(0,react.useEffect)(function(){updateSearchPath(searchQuery);if(searchQuery){(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(){var results;return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return (0,searchByWorker/* searchByWorker */.w)(versionUrl,searchContext,searchQuery,100);case 2:results=_context.sent;setSearchResults(results);case 4:case"end":return _context.stop();}},_callee);}))();}else{setSearchResults(undefined);}// `updateSearchPath` should not be in the deps,
// otherwise will cause call stack overflow.
},[searchQuery,versionUrl,searchContext]);var handleSearchInputChange=(0,react.useCallback)(function(e){setSearchQuery(e.target.value);},[]);(0,react.useEffect)(function(){if(searchValue&&searchValue!==searchQuery){setSearchQuery(searchValue);}},[searchValue]);var _useState3=(0,react.useState)(false),searchWorkerReady=_useState3[0],setSearchWorkerReady=_useState3[1];(0,react.useEffect)(function(){function doFetchIndexes(){return _doFetchIndexes.apply(this,arguments);}function _doFetchIndexes(){_doFetchIndexes=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2(){return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:if(!(!Array.isArray(proxiedGenerated/* searchContextByPaths */.Hg)||searchContext||proxiedGenerated/* useAllContextsWithNoSearchContext */.dz)){_context2.next=3;break;}_context2.next=3;return (0,searchByWorker/* fetchIndexesByWorker */.k)(versionUrl,searchContext);case 3:setSearchWorkerReady(true);case 4:case"end":return _context2.stop();}},_callee2);}));return _doFetchIndexes.apply(this,arguments);}doFetchIndexes();},[searchContext,versionUrl]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"robots",content:"noindex, follow"}),/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:pageTitle})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container margin-vert--lg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:pageTitle}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)("col",(_clsx={},_clsx[SearchPage_module.searchQueryColumn]=Array.isArray(proxiedGenerated/* searchContextByPaths */.Hg),_clsx["col--9"]=Array.isArray(proxiedGenerated/* searchContextByPaths */.Hg),_clsx["col--12"]=!Array.isArray(proxiedGenerated/* searchContextByPaths */.Hg),_clsx)),children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"search",name:"q",className:SearchPage_module.searchQueryInput,"aria-label":"Search",onChange:handleSearchInputChange,value:searchQuery,autoComplete:"off",autoFocus:true})}),Array.isArray(proxiedGenerated/* searchContextByPaths */.Hg)?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)("col","col--3","padding-left--none",SearchPage_module.searchContextColumn),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("select",{name:"search-context",className:SearchPage_module.searchContextInput,id:"context-selector",value:searchContext,onChange:function onChange(e){return updateSearchContext(e.target.value);},children:[proxiedGenerated/* useAllContextsWithNoSearchContext */.dz&&/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"",children:(0,Translate/* translate */.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),proxiedGenerated/* searchContextByPaths */.Hg.map(function(context){var _normalizeContextByPa=(0,normalizeContextByPath/* normalizeContextByPath */.p)(context,currentLocale),label=_normalizeContextByPa.label,path=_normalizeContextByPa.path;return/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:path,children:label},path);})]})}):null]}),!searchWorkerReady&&searchQuery&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(LoadingRing/* default */.A,{})}),searchResults&&(searchResults.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:selectMessage(searchResults.length,(0,Translate/* translate */.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:searchResults.length}))}): true?/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:(0,Translate/* translate */.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})}):/*#__PURE__*/0),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{children:searchResults&&searchResults.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(SearchResultItem,{searchResult:item},item.document.i);})})]})]});}function SearchResultItem(_ref2){var _ref2$searchResult=_ref2.searchResult,document=_ref2$searchResult.document,type=_ref2$searchResult.type,page=_ref2$searchResult.page,tokens=_ref2$searchResult.tokens,metadata=_ref2$searchResult.metadata;var isTitle=type===interfaces/* SearchDocumentType */.i.Title;var isKeywords=type===interfaces/* SearchDocumentType */.i.Keywords;var isDescription=type===interfaces/* SearchDocumentType */.i.Description;var isDescriptionOrKeywords=isDescription||isKeywords;var isTitleRelated=isTitle||isDescriptionOrKeywords;var isContent=type===interfaces/* SearchDocumentType */.i.Content;var pathItems=(isTitle?document.b:page.b).slice();var articleTitle=isContent||isDescriptionOrKeywords?document.s:document.t;if(!isTitleRelated){pathItems.push(page.t);}var search="";if(proxiedGenerated/* Mark */.CU&&tokens.length>0){var params=new URLSearchParams();for(var _iterator=(0,createForOfIteratorHelperLoose/* default */.A)(tokens),_step;!(_step=_iterator()).done;){var token=_step.value;params.append("_highlight",token);}search="?"+params.toString();}return/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:SearchPage_module.searchResultItem,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:document.u+search+(document.h||""),dangerouslySetInnerHTML:{__html:isContent||isDescriptionOrKeywords?(0,highlight/* highlight */.Z)(articleTitle,tokens):(0,highlightStemmed/* highlightStemmed */.C)(articleTitle,(0,getStemmedPositions/* getStemmedPositions */.g)(metadata,"t"),tokens,100)}})}),pathItems.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:SearchPage_module.searchResultItemPath,children:(0,concatDocumentPath/* concatDocumentPath */.$)(pathItems)}),(isContent||isDescription)&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:SearchPage_module.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,highlightStemmed/* highlightStemmed */.C)(document.t,(0,getStemmedPositions/* getStemmedPositions */.g)(metadata,"t"),tokens,100)}})]});}
;// ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/index.js
/* harmony default export */ const theme_SearchPage = (SearchPage);

/***/ })

}]);