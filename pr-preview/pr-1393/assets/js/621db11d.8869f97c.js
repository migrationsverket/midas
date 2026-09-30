"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["1221"], {
86433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogAuthorsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(34308);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(88287);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/blogTranslations.js
var blogTranslations = __webpack_require__(79365);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 6 modules
var BlogLayout = __webpack_require__(98579);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(54175);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(72072);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(6947);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"authorListItem":"authorListItem_n3yI"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function AuthorListItem({ author }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: styles_module.authorListItem,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Author/* ["default"] */.A, {
            as: "h2",
            author: author,
            count: author.count
        })
    });
}
function AuthorsList({ authors }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: (0,clsx/* ["default"] */.A)('margin-vert--lg', styles_module.authorsListSection),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            children: authors.map((author)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AuthorListItem, {
                    author: author
                }, author.key))
        })
    });
}
function BlogAuthorsListPage({ authors, sidebar }) {
    const title = (0,blogTranslations/* .translateBlogAuthorsListPageTitle */.uz)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx/* ["default"] */.A)(ThemeClassNames/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages, ThemeClassNames/* .ThemeClassNames.page.blogAuthorsListPage */.G.page.blogAuthorsListPage),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .PageMetadata */.be, {
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* ["default"] */.A, {
                tag: "blog_authors_list"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BlogLayout/* ["default"] */.A, {
                sidebar: sidebar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                        as: "h1",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthorsList, {
                        authors: authors
                    })
                ]
            })
        ]
    });
}


},
79365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZD: () => (useBlogTagsPostsPageTitle),
  uz: () => (translateBlogAuthorsListPageTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _utils_usePluralForm__rspack_import_3 = __webpack_require__(16497);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Only used locally
function useBlogPostsPlural() {
    const { selectMessage } = (0,_utils_usePluralForm__rspack_import_3/* .usePluralForm */.W)();
    return (count)=>selectMessage(count, (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.post.plurals',
            description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One post|{count} posts'
        }, {
            count
        }));
}
function useBlogTagsPostsPageTitle(tag) {
    const blogPostsPlural = useBlogPostsPlural();
    return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.tagTitle',
        description: 'The title of the page for a blog tag',
        message: '{nPosts} tagged with "{tagName}"'
    }, {
        nPosts: blogPostsPlural(tag.count),
        tagName: tag.label
    });
}
function useBlogAuthorPageTitle(author) {
    const blogPostsPlural = useBlogPostsPlural();
    return translate({
        id: 'theme.blog.author.pageTitle',
        description: 'The title of the page for a blog author',
        message: '{authorName} - {nPosts}'
    }, {
        nPosts: blogPostsPlural(author.count),
        authorName: author.name || author.key
    });
}
const translateBlogAuthorsListPageTitle = ()=>(0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.authorsList.pageTitle',
        message: 'Authors',
        description: 'The title of the authors page'
    });
function BlogAuthorsListViewAllLabel() {
    return /*#__PURE__*/ _jsx(Translate, {
        id: "theme.blog.authorsList.viewAll",
        description: "The label of the link targeting the blog authors page",
        children: "View all authors"
    });
}
function BlogAuthorNoPostsLabel() {
    return /*#__PURE__*/ _jsx(Translate, {
        id: "theme.blog.author.noPosts",
        description: "The text for authors with 0 blog post",
        children: "This author has not written any posts yet."
    });
} //# sourceMappingURL=blogTranslations.js.map


},

}]);