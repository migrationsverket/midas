"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2711],{

/***/ 89331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogArchive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28774);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61213);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36266);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28244);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51107);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Year(_ref){var year=_ref.year,posts=_ref.posts;var dateTimeFormat=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useDateTimeFormat */ .i)({day:'numeric',month:'long',timeZone:'UTC'});var formatDate=function formatDate(lastUpdated){return dateTimeFormat.format(new Date(lastUpdated));};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{as:"h3",id:year,children:year}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul",{children:posts.map(function(post){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{to:post.metadata.permalink,children:[formatDate(post.metadata.date)," - ",post.metadata.title]})},post.metadata.date);})})]});}function YearsSection(_ref2){var years=_ref2.years;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section",{className:"margin-vert--lg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"container",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"row",children:years.map(function(_props,idx){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col col--4 margin-vert--lg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Year,Object.assign({},_props))},idx);})})})});}function listPostsByYears(blogPosts){var postsByYear=blogPosts.reduce(function(posts,post){var _posts$get;var year=post.metadata.date.split('-')[0];var yearPosts=(_posts$get=posts.get(year))!=null?_posts$get:[];return posts.set(year,[post].concat(yearPosts));},new Map());return Array.from(postsByYear,function(_ref3){var year=_ref3[0],posts=_ref3[1];return{year:year,posts:posts};});}function BlogArchive(_ref4){var archive=_ref4.archive;var title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.blog.archive.title',message:'Archive',description:'The page & hero title of the blog archive page'});var description=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.blog.archive.description',message:'Archive',description:'The page & hero description of the blog archive page'});var years=listPostsByYears(archive.blogPosts);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .PageMetadata */ .be,{title:title,description:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("header",{className:"hero hero--primary",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{as:"h1",className:"hero__title",children:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{className:"hero__subtitle",children:description})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main",{children:years.length>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(YearsSection,{years:years})})]})]});}

/***/ }),

/***/ 36266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useDateTimeFormat)
/* harmony export */ });
/* unused harmony export useCalendar */
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCalendar(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,localeConfigs=_useDocusaurusContext2.localeConfigs;return localeConfigs[currentLocale].calendar;}function useDateTimeFormat(options){if(options===void 0){options={};}var _useDocusaurusContext3=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),currentLocale=_useDocusaurusContext3.i18n.currentLocale;var calendar=useCalendar();return new Intl.DateTimeFormat(currentLocale,Object.assign({calendar:calendar},options));}

/***/ })

}]);