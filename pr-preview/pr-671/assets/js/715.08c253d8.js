"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[715],{

/***/ 23125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogPostItemContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70440);
/* harmony import */ var _docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44096);
/* harmony import */ var _theme_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77910);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContent(_ref){var children=_ref.children,className=_ref.className;var _useBlogPost=(0,_docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_1__/* .useBlogPost */ .e7)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_4__/* .blogPostContainerID */ .LU:undefined,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)('markdown',className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_MDXContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:children})});}

/***/ }),

/***/ 28027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 79 modules
var Layout = __webpack_require__(35675);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(24581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(44096);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarYearGroup(_ref){var year=_ref.year,yearGroupHeadingClassName=_ref.yearGroupHeadingClassName,children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{role:"group",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",className:yearGroupHeadingClassName,children:year}),children]});}function BlogSidebarContent(_ref2){var items=_ref2.items,yearGroupHeadingClassName=_ref2.yearGroupHeadingClassName,ListComponent=_ref2.ListComponent;var themeConfig=(0,useThemeConfig/* useThemeConfig */.p)();if(themeConfig.blog.sidebar.groupByYear){var itemsByYear=(0,client/* groupBlogSidebarItemsByYear */.Ki)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:itemsByYear.map(function(_ref3){var year=_ref3[0],yearItems=_ref3[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebarYearGroup,{year:year,yearGroupHeadingClassName:yearGroupHeadingClassName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListComponent,{items:yearItems})},year);})});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(ListComponent,{items:items});}}/* harmony default export */ const Content = (/*#__PURE__*/(0,react.memo)(BlogSidebarContent));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_re4s","sidebarItemTitle":"sidebarItemTitle_pO2u","sidebarItemList":"sidebarItemList_Yudw","sidebarItem":"sidebarItem__DBe","sidebarItemLink":"sidebarItemLink_mo7H","sidebarItemLinkActive":"sidebarItemLinkActive_I1ZP","yearGroupHeading":"yearGroupHeading_rMGB"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ListComponent=function ListComponent(_ref){var items=_ref.items;return/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogSidebarItemList */.OU,{items:items,ulClassName:(0,clsx/* default */.A)(styles_module.sidebarItemList,'clean-list'),liClassName:styles_module.sidebarItem,linkClassName:styles_module.sidebarItemLink,linkActiveClassName:styles_module.sidebarItemLinkActive});};function BlogSidebarDesktop(_ref2){var sidebar=_ref2.sidebar;var items=(0,client/* useVisibleBlogSidebarItems */.Gx)(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",{className:"col col--3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:(0,clsx/* default */.A)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.T)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.sidebarItemTitle,'margin-bottom--md'),children:sidebar.title}),/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{items:items,ListComponent:ListComponent,yearGroupHeadingClassName:styles_module.yearGroupHeading})]})});}/* harmony default export */ const Desktop = (/*#__PURE__*/(0,react.memo)(BlogSidebarDesktop));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(75600);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Mobile_styles_module = ({"yearGroupHeading":"yearGroupHeading_QT03"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mobile_ListComponent=function ListComponent(_ref){var items=_ref.items;return/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogSidebarItemList */.OU,{items:items,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"});};function BlogSidebarMobileSecondaryMenu(_ref2){var sidebar=_ref2.sidebar;var items=(0,client/* useVisibleBlogSidebarItems */.Gx)(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{items:items,ListComponent:Mobile_ListComponent,yearGroupHeadingClassName:Mobile_styles_module.yearGroupHeading});}function BlogSidebarMobile(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX,{component:BlogSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ const Mobile = (/*#__PURE__*/(0,react.memo)(BlogSidebarMobile));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){var sidebar=_ref.sidebar;var windowSize=(0,useWindowSize/* useWindowSize */.l)();if(!(sidebar!=null&&sidebar.items.length)){return null;}// Mobile sidebar doesn't need to be server-rendered
if(windowSize==='mobile'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Mobile,{sidebar:sidebar});}return/*#__PURE__*/(0,jsx_runtime.jsx)(Desktop,{sidebar:sidebar});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js
var _excluded=["sidebar","toc","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){var sidebar=props.sidebar,toc=props.toc,children=props.children,layoutProps=(0,objectWithoutPropertiesLoose/* default */.A)(props,_excluded);var hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,Object.assign({},layoutProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebar,{sidebar:sidebar}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:(0,clsx/* default */.A)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),children:children}),toc&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--2",children:toc})]})})}));}

/***/ }),

/***/ 32819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogPostItemContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContainer(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("article",{className:className,children:children});}

/***/ }),

/***/ 44096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "in": () => (/* reexport */ BlogPostProvider),
  OU: () => (/* reexport */ BlogSidebarItemList),
  Ki: () => (/* reexport */ groupBlogSidebarItemsByYear),
  kJ: () => (/* reexport */ useBlogListPageStructuredData),
  x: () => (/* reexport */ useBlogMetadata),
  e7: () => (/* reexport */ useBlogPost),
  J_: () => (/* reexport */ useBlogPostStructuredData),
  Gx: () => (/* reexport */ useVisibleBlogSidebarItems)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 3 modules
var reactUtils = __webpack_require__(33590);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
var useRouteContext = __webpack_require__(36803);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/contexts.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBlogMetadata(){var _routeContext$data;var routeContext=(0,useRouteContext/* default */.A)();var blogMetadata=routeContext==null||(_routeContext$data=routeContext.data)==null?void 0:_routeContext$data.blogMetadata;if(!blogMetadata){throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");}return blogMetadata;}var Context=/*#__PURE__*/react.createContext(null);/**
 * Note: we don't use `PropBlogPostContent` as context value on purpose.
 * Metadata is currently stored inside the MDX component, but we may want to
 * change that in the future.
 */function useContextValue(_ref){var content=_ref.content,isBlogPostPage=_ref.isBlogPostPage;return (0,react.useMemo)(function(){return{metadata:content.metadata,frontMatter:content.frontMatter,assets:content.assets,toc:content.toc,isBlogPostPage:isBlogPostPage};},[content,isBlogPostPage]);}/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the blog post to the children tree.
 */function BlogPostProvider(_ref2){var children=_ref2.children,content=_ref2.content,_ref2$isBlogPostPage=_ref2.isBlogPostPage,isBlogPostPage=_ref2$isBlogPostPage===void 0?false:_ref2$isBlogPostPage;var contextValue=useContextValue({content:content,isBlogPostPage:isBlogPostPage});return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}/**
 * Returns the data of the currently browsed blog post. Gives access to
 * front matter, metadata, TOC, etc.
 * When swizzling a low-level component (e.g. the "Edit this page" link)
 * and you need some extra metadata, you don't have to drill the props
 * all the way through the component tree: simply use this hook instead.
 */function useBlogPost(){var blogPost=(0,react.useContext)(Context);if(blogPost===null){throw new reactUtils/* ReactContextError */.dV('BlogPostProvider');}return blogPost;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/structuredDataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var convertDate=function convertDate(dateMs){return new Date(dateMs).toISOString();};function getBlogPost(blogPostContent,siteConfig,withBaseUrl){var _assets$image,_frontMatter$keywords;var assets=blogPostContent.assets,frontMatter=blogPostContent.frontMatter,metadata=blogPostContent.metadata;var date=metadata.date,title=metadata.title,description=metadata.description,lastUpdatedAt=metadata.lastUpdatedAt;var image=(_assets$image=assets.image)!=null?_assets$image:frontMatter.image;var keywords=(_frontMatter$keywords=frontMatter.keywords)!=null?_frontMatter$keywords:[];var blogUrl=""+siteConfig.url+metadata.permalink;var dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;return Object.assign({'@type':'BlogPosting','@id':blogUrl,mainEntityOfPage:blogUrl,url:blogUrl,headline:title,name:title,description:description,datePublished:date},dateModified?{dateModified:dateModified}:{},getAuthor(metadata.authors),getImage(image,withBaseUrl,title),keywords?{keywords:keywords}:{});}function getAuthor(authors){var authorsStructuredData=authors.map(createPersonStructuredData);return{author:authorsStructuredData.length===1?authorsStructuredData[0]:authorsStructuredData};}function getImage(image,withBaseUrl,title){return image?{image:createImageStructuredData({imageUrl:withBaseUrl(image,{absolute:true}),caption:"title image for the blog post: "+title})}:{};}function useBlogListPageStructuredData(props){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),siteConfig=_useDocusaurusContext.siteConfig;var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.hH)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var _props$metadata=props.metadata,blogDescription=_props$metadata.blogDescription,blogTitle=_props$metadata.blogTitle,permalink=_props$metadata.permalink;var url=""+siteConfig.url+permalink;// details on structured data support: https://schema.org/Blog
return{'@context':'https://schema.org','@type':'Blog','@id':url,mainEntityOfPage:url,headline:blogTitle,description:blogDescription,blogPost:props.items.map(function(blogItem){return getBlogPost(blogItem.content,siteConfig,withBaseUrl);})};}function useBlogPostStructuredData(){var _assets$image2,_frontMatter$keywords2;var blogMetadata=useBlogMetadata();var _useBlogPost=useBlogPost(),assets=_useBlogPost.assets,metadata=_useBlogPost.metadata;var _useDocusaurusContext2=(0,useDocusaurusContext/* default */.A)(),siteConfig=_useDocusaurusContext2.siteConfig;var _useBaseUrlUtils2=(0,useBaseUrl/* useBaseUrlUtils */.hH)(),withBaseUrl=_useBaseUrlUtils2.withBaseUrl;var date=metadata.date,title=metadata.title,description=metadata.description,frontMatter=metadata.frontMatter,lastUpdatedAt=metadata.lastUpdatedAt;var image=(_assets$image2=assets.image)!=null?_assets$image2:frontMatter.image;var keywords=(_frontMatter$keywords2=frontMatter.keywords)!=null?_frontMatter$keywords2:[];var dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;var url=""+siteConfig.url+metadata.permalink;// details on structured data support: https://schema.org/BlogPosting
// BlogPosting is one of the structured data types that Google explicitly
// supports: https://developers.google.com/search/docs/appearance/structured-data/article#structured-data-type-definitions
return Object.assign({'@context':'https://schema.org','@type':'BlogPosting','@id':url,mainEntityOfPage:url,url:url,headline:title,name:title,description:description,datePublished:date},dateModified?{dateModified:dateModified}:{},getAuthor(metadata.authors),getImage(image,withBaseUrl,title),keywords?{keywords:keywords}:{},{isPartOf:{'@type':'Blog','@id':""+siteConfig.url+blogMetadata.blogBasePath,name:blogMetadata.blogTitle}});}/** @returns A {@link https://schema.org/Person} constructed from the {@link Author} */function createPersonStructuredData(author){return Object.assign({'@type':'Person'},author.name?{name:author.name}:{},author.title?{description:author.title}:{},author.url?{url:author.url}:{},author.email?{email:author.email}:{},author.imageURL?{image:author.imageURL}:{});}/** @returns A {@link https://schema.org/ImageObject} */function createImageStructuredData(_ref){var imageUrl=_ref.imageUrl,caption=_ref.caption;return{'@type':'ImageObject','@id':imageUrl,url:imageUrl,contentUrl:imageUrl,caption:caption};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(35527);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(31682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(99169);
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/sidebarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isVisible(item,pathname){if(item.unlisted&&!(0,routesUtils/* isSamePath */.ys)(item.permalink,pathname)){return false;}return true;}/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */function useVisibleBlogSidebarItems(items){var _useLocation=(0,react_router/* useLocation */.zy)(),pathname=_useLocation.pathname;return (0,react.useMemo)(function(){return items.filter(function(item){return isVisible(item,pathname);});},[items,pathname]);}function groupBlogSidebarItemsByYear(items){var groupedByYear=(0,jsUtils/* groupBy */.$z)(items,function(item){return""+new Date(item.date).getFullYear();});// "as" is safe here
// see https://github.com/microsoft/TypeScript/pull/56805#issuecomment-2196526425
var entries=Object.entries(groupedByYear);// We have to use entries because of https://x.com/sebastienlorber/status/1806371668614369486
// Objects with string/number keys are automatically sorted asc...
// Even if keys are strings like "2024"
// We want descending order for years
// Alternative: using Map.groupBy (not affected by this "reordering")
entries.reverse();return entries;}function BlogSidebarItemList(_ref){var items=_ref.items,ulClassName=_ref.ulClassName,liClassName=_ref.liClassName,linkClassName=_ref.linkClassName,linkActiveClassName=_ref.linkActiveClassName;return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:ulClassName,children:items.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:liClassName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{isNavLink:true,to:item.permalink,className:linkClassName,activeClassName:linkActiveClassName,children:item.title})},item.permalink);})});}
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

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

/***/ 61219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItemHeaderInfo)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(53465);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(36266);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(44096);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"container_mt6G"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){var _usePluralForm=(0,usePluralForm/* usePluralForm */.W)(),selectMessage=_usePluralForm.selectMessage;return function(readingTimeFloat){var readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime:readingTime}));};}function ReadingTime(_ref){var readingTime=_ref.readingTime;var readingTimePlural=useReadingTimePlural();return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readingTimePlural(readingTime)});}function DateTime(_ref2){var date=_ref2.date,formattedDate=_ref2.formattedDate;return/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:date,children:formattedDate});}function Spacer(){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:' · '});}function BlogPostItemHeaderInfo(_ref3){var className=_ref3.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata;var date=metadata.date,readingTime=metadata.readingTime;var dateTimeFormat=(0,IntlUtils/* useDateTimeFormat */.i)({day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});var formatDate=function formatDate(blogDate){return dateTimeFormat.format(new Date(blogDate));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(styles_module.container,'margin-vert--md',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateTime,{date:date,formattedDate:formatDate(date)}),typeof readingTime!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spacer,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(ReadingTime,{readingTime:readingTime})]})]});}

/***/ }),

/***/ 92357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItemHeaderTitle)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(44096);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"title":"title_f1Hy"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeaderTitle(_ref){var className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata,isBlogPostPage=_useBlogPost.isBlogPostPage;var permalink=metadata.permalink,title=metadata.title;var TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/(0,jsx_runtime.jsx)(TitleHeading,{className:(0,clsx/* default */.A)(styles_module.title,className),children:isBlogPostPage?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:permalink,children:title})});}

/***/ })

}]);