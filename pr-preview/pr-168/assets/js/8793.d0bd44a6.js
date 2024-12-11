"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8793],{

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
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 5 modules
var reactUtils = __webpack_require__(43807);
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
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
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
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(28244);
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

/***/ 31240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(44096);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContainer(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:className,children:children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"title":"title_f1Hy"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeaderTitle(_ref){var className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata,isBlogPostPage=_useBlogPost.isBlogPostPage;var permalink=metadata.permalink,title=metadata.title;var TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/(0,jsx_runtime.jsx)(TitleHeading,{className:(0,clsx/* default */.A)(styles_module.title,className),children:isBlogPostPage?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:permalink,children:title})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(53465);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(36266);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Info_styles_module = ({"container":"container_mt6G"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){var _usePluralForm=(0,usePluralForm/* usePluralForm */.W)(),selectMessage=_usePluralForm.selectMessage;return function(readingTimeFloat){var readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime:readingTime}));};}function ReadingTime(_ref){var readingTime=_ref.readingTime;var readingTimePlural=useReadingTimePlural();return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readingTimePlural(readingTime)});}function DateTime(_ref2){var date=_ref2.date,formattedDate=_ref2.formattedDate;return/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:date,children:formattedDate});}function Spacer(){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:' · '});}function BlogPostItemHeaderInfo(_ref3){var className=_ref3.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata;var date=metadata.date,readingTime=metadata.readingTime;var dateTimeFormat=(0,IntlUtils/* useDateTimeFormat */.i)({day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});var formatDate=function formatDate(blogDate){return dateTimeFormat.format(new Date(blogDate));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Info_styles_module.container,'margin-vert--md',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateTime,{date:date,formattedDate:formatDate(date)}),typeof readingTime!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spacer,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(ReadingTime,{readingTime:readingTime})]})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/Twitter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function Twitter(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})}));}/* harmony default export */ const Socials_Twitter = (Twitter);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/GitHub/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const GitHub_styles_module = ({"githubSvg":"githubSvg_Uu4N"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/GitHub/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function GitHub(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 256 250",width:"1em",height:"1em"},props,{className:(0,clsx/* default */.A)(props.className,GitHub_styles_module.githubSvg),xmlns:"http://www.w3.org/2000/svg",style:{'--dark':'#000','--light':'#fff'},preserveAspectRatio:"xMidYMid",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})}));}/* harmony default export */ const Socials_GitHub = (GitHub);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/X/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const X_styles_module = ({"xSvg":"xSvg_y3PF"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/X/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function X(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227"},props,{className:(0,clsx/* default */.A)(props.className,X_styles_module.xSvg),style:{'--dark':'#000','--light':'#fff'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})}));}/* harmony default export */ const Socials_X = (X);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/StackOverflow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function StackOverflow(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]}));}/* harmony default export */ const Socials_StackOverflow = (StackOverflow);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/LinkedIn/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function LinkedIn(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})}));}/* harmony default export */ const Socials_LinkedIn = (LinkedIn);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/Default/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://tabler.io/
function DefaultSocial(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M3.6 9h16.8"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M3.6 15h16.8"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]}));}/* harmony default export */ const Default = (DefaultSocial);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/Socials/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Socials_styles_module = ({"authorSocials":"authorSocials_rSDt","authorSocialLink":"authorSocialLink_owbf","authorSocialIcon":"authorSocialIcon_XYv3"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/Socials/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SocialPlatformConfigs={twitter:{Icon:Socials_Twitter,label:'Twitter'},github:{Icon:Socials_GitHub,label:'GitHub'},stackoverflow:{Icon:Socials_StackOverflow,label:'Stack Overflow'},linkedin:{Icon:Socials_LinkedIn,label:'LinkedIn'},x:{Icon:Socials_X,label:'X'}};function getSocialPlatformConfig(platformKey){var _SocialPlatformConfig;return(_SocialPlatformConfig=SocialPlatformConfigs[platformKey])!=null?_SocialPlatformConfig:{Icon:Default,label:platformKey};}function SocialLink(_ref){var platform=_ref.platform,link=_ref.link;var _getSocialPlatformCon=getSocialPlatformConfig(platform),Icon=_getSocialPlatformCon.Icon,label=_getSocialPlatformCon.label;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:Socials_styles_module.authorSocialLink,href:link,title:label,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:(0,clsx/* default */.A)(Socials_styles_module.authorSocialLink)})});}function BlogAuthorSocials(_ref2){var _author$socials;var author=_ref2.author;var entries=Object.entries((_author$socials=author.socials)!=null?_author$socials:{});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Socials_styles_module.authorSocials,children:entries.map(function(_ref3){var platform=_ref3[0],linkUrl=_ref3[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(SocialLink,{platform:platform,link:linkUrl},platform);})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Author_styles_module = ({"authorImage":"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM","authorDetails":"authorDetails_lV9A","authorName":"authorName_yefp","authorTitle":"authorTitle_nd0D","authorBlogPostCount":"authorBlogPostCount_iiJ5"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MaybeLink(props){if(props.href){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({},props));}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}function AuthorTitle(_ref){var title=_ref.title;return/*#__PURE__*/(0,jsx_runtime.jsx)("small",{className:Author_styles_module.authorTitle,title:title,children:title});}function AuthorName(_ref2){var name=_ref2.name,as=_ref2.as;if(!as){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Author_styles_module.authorName,children:name});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:as,className:Author_styles_module.authorName,children:name});}}function AuthorBlogPostCount(_ref3){var count=_ref3.count;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(Author_styles_module.authorBlogPostCount),children:count});}// Note: in the future we might want to have multiple "BlogAuthor" components
// Creating different display modes with the "as" prop may not be the best idea
// Explainer: https://kyleshevlin.com/prefer-multiple-compositions/
// For now, we almost use the same design for all cases, so it's good enough
function BlogAuthor(_ref4){var as=_ref4.as,author=_ref4.author,className=_ref4.className,count=_ref4.count;var name=author.name,title=author.title,url=author.url,imageURL=author.imageURL,email=author.email,page=author.page;var link=(page==null?void 0:page.permalink)||url||email&&"mailto:"+email||undefined;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('avatar margin-bottom--sm',className,Author_styles_module["author-as-"+as]),children:[imageURL&&/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeLink,{href:link,className:"avatar__photo-link",children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:(0,clsx/* default */.A)('avatar__photo',Author_styles_module.authorImage),src:imageURL,alt:name})}),(name||title)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('avatar__intro',Author_styles_module.authorDetails),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"avatar__name",children:[name&&/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeLink,{href:link,children:/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorName,{name:name,as:as})}),count!==undefined&&/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorBlogPostCount,{count:count})]}),!!title&&/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorTitle,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogAuthorSocials,{author:author})]})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Authors_styles_module = ({"authorCol":"authorCol_Hf19","imageOnlyAuthorRow":"imageOnlyAuthorRow_pa_O","imageOnlyAuthorCol":"imageOnlyAuthorCol_G86a"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostItemHeaderAuthors(_ref){var className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),authors=_useBlogPost.metadata.authors,assets=_useBlogPost.assets;var authorsCount=authors.length;if(authorsCount===0){return null;}var imageOnly=authors.every(function(_ref2){var name=_ref2.name;return!name;});var singleAuthor=authors.length===1;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('margin-top--md margin-bottom--sm',imageOnly?Authors_styles_module.imageOnlyAuthorRow:'row',className),children:authors.map(function(author,idx){var _assets$authorsImageU;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(!imageOnly&&(singleAuthor?'col col--12':'col col--6'),imageOnly?Authors_styles_module.imageOnlyAuthorCol:Authors_styles_module.authorCol),children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogAuthor,{author:Object.assign({},author,{// Handle author images using relative paths
imageURL:(_assets$authorsImageU=assets.authorsImageUrls[idx])!=null?_assets$authorsImageU:author.imageURL})})},idx);})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderTitle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderInfo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors,{})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(70440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__(77910);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContent(_ref){var children=_ref.children,className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?lib/* blogPostContainerID */.LU:undefined,className:(0,clsx/* default */.A)('markdown',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:children})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 5 modules
var EditMetaRow = __webpack_require__(4336);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 3 modules
var TagsListInline = __webpack_require__(58046);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js
var _excluded=["blogPostTitle"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ReadMoreLabel(){return/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})});}function BlogPostItemFooterReadMoreLink(props){var blogPostTitle=props.blogPostTitle,linkProps=(0,objectWithoutPropertiesLoose/* default */.A)(props,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({"aria-label":(0,Translate/* translate */.T)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title:blogPostTitle})},linkProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ReadMoreLabel,{})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemFooter(){var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata,isBlogPostPage=_useBlogPost.isBlogPostPage;var tags=metadata.tags,title=metadata.title,editUrl=metadata.editUrl,hasTruncateMarker=metadata.hasTruncateMarker,lastUpdatedBy=metadata.lastUpdatedBy,lastUpdatedAt=metadata.lastUpdatedAt;// A post is truncated if it's in the "list view" and it has a truncate marker
var truncatedPost=!isBlogPostPage&&hasTruncateMarker;var tagsExists=tags.length>0;var renderFooter=tagsExists||truncatedPost||editUrl;if(!renderFooter){return null;}// BlogPost footer - details view
if(isBlogPostPage){var canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('row','margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow/* default */.A,{className:(0,clsx/* default */.A)('margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]});}// BlogPost footer - list view
else{return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',{'col--9':truncatedPost}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})}),truncatedPost&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col text--right',{'col--3':tagsExists}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink,{blogPostTitle:title,to:metadata.permalink})})]});}}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// apply a bottom margin in list view
function useContainerClassName(){var _useBlogPost=(0,client/* useBlogPost */.e7)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return!isBlogPostPage?'margin-bottom--xl':undefined;}function BlogPostItem(_ref){var children=_ref.children,className=_ref.className;var containerClassName=useContainerClassName();return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogPostItemContainer,{className:(0,clsx/* default */.A)(containerClassName,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemContent,{children:children}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooter,{})]});}

/***/ }),

/***/ 39022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28774);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){var permalink=props.permalink,title=props.title,subLabel=props.subLabel,isNext=props.isNext;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pagination-nav__label",children:title})]});}

/***/ }),

/***/ 58046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){var permalink=_ref.permalink,label=_ref.label,count=_ref.count,description=_ref.description;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{href:permalink,title:description,className:(0,clsx/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TagsListInline_styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(TagsListInline_styles_module.tags,'padding--none','margin-left--sm'),children:tags.map(function(tag){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:TagsListInline_styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,Object.assign({},tag))},tag.permalink);})})]});}

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

/***/ })

}]);