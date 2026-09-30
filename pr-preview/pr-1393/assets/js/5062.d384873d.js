"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["5062"], {
30955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (NotFoundContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _theme_Heading__rspack_import_3 = __webpack_require__(72072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function NotFoundContent({ className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)('container margin-vert--xl', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "col col--6 col--offset-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_3/* ["default"] */.A, {
                        as: "h1",
                        className: "hero__title",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.title",
                            description: "The title of the 404 page",
                            children: "Page Not Found"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.p1",
                            description: "The first paragraph of the 404 page",
                            children: "We could not find what you were looking for."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.p2",
                            description: "The 2nd paragraph of the 404 page",
                            children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
                        })
                    })
                ]
            })
        })
    });
}


},
70629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Index)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(34308);
/* import */ var _theme_Layout__rspack_import_3 = __webpack_require__(86270);
/* import */ var _theme_NotFound_Content__rspack_import_4 = __webpack_require__(30955);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Index() {
    const title = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.NotFound.title',
        message: 'Page Not Found'
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_5/* .PageMetadata */.be, {
                title: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_3/* ["default"] */.A, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_NotFound_Content__rspack_import_4/* ["default"] */.A, {})
            })
        ]
    });
}


},

}]);