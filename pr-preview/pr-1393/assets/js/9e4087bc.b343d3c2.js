"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["9660"], {
87243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogArchive)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_Translate__rspack_import_3 = __webpack_require__(30568);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(34308);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(27954);
/* import */ var _theme_Layout__rspack_import_4 = __webpack_require__(86270);
/* import */ var _theme_Heading__rspack_import_5 = __webpack_require__(72072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function Year({ year, posts }) {
    const dateTimeFormat = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC'
    });
    const formatDate = (lastUpdated)=>dateTimeFormat.format(new Date(lastUpdated));
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                as: "h3",
                id: year,
                children: year
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                            to: post.metadata.permalink,
                            children: [
                                formatDate(post.metadata.date),
                                " - ",
                                post.metadata.title
                            ]
                        })
                    }, post.metadata.date))
            })
        ]
    });
}
function YearsSection({ years }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "margin-vert--lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "row",
                children: years.map((_props, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col col--4 margin-vert--lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Year, {
                            ..._props
                        })
                    }, idx))
            })
        })
    });
}
function listPostsByYears(blogPosts) {
    const postsByYear = blogPosts.reduce((posts, post)=>{
        const year = post.metadata.date.split('-')[0];
        const yearPosts = posts.get(year) ?? [];
        return posts.set(year, [
            post,
            ...yearPosts
        ]);
    }, new Map());
    return Array.from(postsByYear, ([year, posts])=>({
            year,
            posts
        }));
}
function BlogArchive({ archive }) {
    const title = (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
        id: 'theme.blog.archive.title',
        message: 'Archive',
        description: 'The page & hero title of the blog archive page'
    });
    const description = (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
        id: 'theme.blog.archive.description',
        message: 'Archive',
        description: 'The page & hero description of the blog archive page'
    });
    const years = listPostsByYears(archive.blogPosts);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_7/* .PageMetadata */.be, {
                title: title,
                description: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_4/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("header", {
                        className: "hero hero--primary",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                                    as: "h1",
                                    className: "hero__title",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "hero__subtitle",
                                    children: description
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                        children: years.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(YearsSection, {
                            years: years
                        })
                    })
                ]
            })
        ]
    });
}


},
27954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  i: () => (useDateTimeFormat)
});
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_0 = __webpack_require__(10898);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useCalendar() {
    const { i18n: { currentLocale, localeConfigs } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat(options = {}) {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    const calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, {
        calendar,
        ...options
    });
} //# sourceMappingURL=IntlUtils.js.map


},

}]);