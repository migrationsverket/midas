"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4212],{

/***/ 13250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogAuthorsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(45500);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/blogTranslations.js
var blogTranslations = __webpack_require__(96461);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 6 modules
var BlogLayout = __webpack_require__(28027);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(41463);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(39907);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"authorListItem":"authorListItem_n3yI"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AuthorListItem(_ref){var author=_ref.author;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.authorListItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Author/* default */.A,{as:"h2",author:author,count:author.count})});}function AuthorsList(_ref2){var authors=_ref2.authors;return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)('margin-vert--lg',styles_module.authorsListSection),children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{children:authors.map(function(author){return/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorListItem,{author:author},author.key);})})});}function BlogAuthorsListPage(_ref3){var authors=_ref3.authors,sidebar=_ref3.sidebar;var title=(0,blogTranslations/* translateBlogAuthorsListPageTitle */.uz)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogAuthorsListPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"blog_authors_list"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogLayout/* default */.A,{sidebar:sidebar,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorsList,{authors:authors})]})]});}

/***/ }),

/***/ 96461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZD: () => (/* binding */ useBlogTagsPostsPageTitle),
/* harmony export */   uz: () => (/* binding */ translateBlogAuthorsListPageTitle)
/* harmony export */ });
/* unused harmony exports useBlogAuthorPageTitle, BlogAuthorsListViewAllLabel, BlogAuthorNoPostsLabel */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21312);
/* harmony import */ var _utils_usePluralForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53465);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Only used locally
function useBlogPostsPlural(){var _usePluralForm=(0,_utils_usePluralForm__WEBPACK_IMPORTED_MODULE_3__/* .usePluralForm */ .W)(),selectMessage=_usePluralForm.selectMessage;return function(count){return selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count:count}));};}function useBlogTagsPostsPageTitle(tag){var blogPostsPlural=useBlogPostsPlural();return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(tag.count),tagName:tag.label});}function useBlogAuthorPageTitle(author){var blogPostsPlural=useBlogPostsPlural();return translate({id:'theme.blog.author.pageTitle',description:'The title of the page for a blog author',message:'{authorName} - {nPosts}'},{nPosts:blogPostsPlural(author.count),authorName:author.name||author.key});}var translateBlogAuthorsListPageTitle=function translateBlogAuthorsListPageTitle(){return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.authorsList.pageTitle',message:'Authors',description:'The title of the authors page'});};function BlogAuthorsListViewAllLabel(){return/*#__PURE__*/_jsx(Translate,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"});}function BlogAuthorNoPostsLabel(){return/*#__PURE__*/_jsx(Translate,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."});}

/***/ })

}]);