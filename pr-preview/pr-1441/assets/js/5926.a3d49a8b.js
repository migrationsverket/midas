"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["5926"], {
24553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogListPaginator)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _theme_PaginatorNavLink__rspack_import_3 = __webpack_require__(17174);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogListPaginator(props) {
    const { metadata } = props;
    const { previousPage, nextPage } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
        className: "pagination-nav",
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.paginator.navAriaLabel',
            message: 'Blog list page navigation',
            description: 'The ARIA label for the blog pagination'
        }),
        children: [
            previousPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: previousPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.newerEntries",
                    description: "The label used to navigate to the newer blog posts page (previous page)",
                    children: "Newer entries"
                })
            }),
            nextPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: nextPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.olderEntries",
                    description: "The label used to navigate to the older blog posts page (next page)",
                    children: "Older entries"
                }),
                isNext: true
            })
        ]
    });
}


},
84533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(17645);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function BlogPostItemContainer(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: className,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(95310);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"title":"title_f1Hy"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogPostItemHeaderTitle(param) {
    let { className } = param;
    const { metadata, isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    const { permalink, title } = metadata;
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TitleHeading, {
        className: (0,clsx/* ["default"] */.A)(styles_module.title, className),
        children: isBlogPostPage ? title : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
            to: permalink,
            children: title
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(30568);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(16497);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(27954);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Info_styles_module = ({"container":"container_mt6G"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
    const { selectMessage } = (0,usePluralForm/* .usePluralForm */.W)();
    return (readingTimeFloat)=>{
        const readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(readingTime, (0,Translate/* .translate */.T)({
            id: 'theme.blog.post.readingTime.plurals',
            description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One min read|{readingTime} min read'
        }, {
            readingTime
        }));
    };
}
function ReadingTime(param) {
    let { readingTime } = param;
    const readingTimePlural = useReadingTimePlural();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: readingTimePlural(readingTime)
    });
}
function DateTime(param) {
    let { date, formattedDate } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("time", {
        dateTime: date,
        children: formattedDate
    });
}
function Spacer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: ' · '
    });
}
function BlogPostItemHeaderInfo(param) {
    let { className } = param;
    const { metadata } = (0,client/* .useBlogPost */.e7)();
    const { date, readingTime } = metadata;
    const dateTimeFormat = (0,IntlUtils/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formatDate = (blogDate)=>dateTimeFormat.format(new Date(blogDate));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* ["default"] */.A)(Info_styles_module.container, 'margin-vert--md', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTime, {
                date: date,
                formattedDate: formatDate(date)
            }),
            typeof readingTime !== 'undefined' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Spacer, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadingTime, {
                        readingTime: readingTime
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(6947);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Authors_styles_module = ({"authorCol":"authorCol_Hf19","imageOnlyAuthorRow":"imageOnlyAuthorRow_pa_O","imageOnlyAuthorCol":"imageOnlyAuthorCol_G86a"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// Component responsible for the authors layout
function BlogPostItemHeaderAuthors(param) {
    let { className } = param;
    const { metadata: { authors }, assets } = (0,client/* .useBlogPost */.e7)();
    const authorsCount = authors.length;
    if (authorsCount === 0) {
        return null;
    }
    const imageOnly = authors.every((param)=>{
        let { name } = param;
        return !name;
    });
    const singleAuthor = authors.length === 1;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)('margin-top--md margin-bottom--sm', imageOnly ? Authors_styles_module.imageOnlyAuthorRow : 'row', className),
        children: authors.map((author, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (0,clsx/* ["default"] */.A)(!imageOnly && (singleAuthor ? 'col col--12' : 'col col--6'), imageOnly ? Authors_styles_module.imageOnlyAuthorCol : Authors_styles_module.authorCol),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Author/* ["default"] */.A, {
                    author: {
                        ...author,
                        // Handle author images using relative paths
                        imageURL: assets.authorsImageUrls[idx] ?? author.imageURL
                    }
                })
            }, idx))
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogPostItemHeader() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderTitle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors, {})
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(5248);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__(46318);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogPostItemContent(param) {
    let { children, className } = param;
    const { isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        // This ID is used for the feed generation to locate the main content
        id: isBlogPostPage ? lib.blogPostContainerID : undefined,
        className: (0,clsx/* ["default"] */.A)('markdown', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* ["default"] */.A, {
            children: children
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(88287);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 5 modules
var EditMetaRow = __webpack_require__(67410);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(24999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function ReadMoreLabel() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* ["default"] */.A, {
            id: "theme.blog.post.readMore",
            description: "The label used in blog post item excerpts to link to full blog posts",
            children: "Read more"
        })
    });
}
function BlogPostItemFooterReadMoreLink(props) {
    const { blogPostTitle, ...linkProps } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
        "aria-label": (0,Translate/* .translate */.T)({
            message: 'Read more about {title}',
            id: 'theme.blog.post.readMoreLabel',
            description: 'The ARIA label for the link to full blog posts from excerpts'
        }, {
            title: blogPostTitle
        }),
        ...linkProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadMoreLabel, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BlogPostItemFooter() {
    const { metadata, isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    const { tags, title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata;
    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;
    const tagsExists = tags.length > 0;
    const renderFooter = tagsExists || truncatedPost || editUrl;
    if (!renderFooter) {
        return null;
    }
    // BlogPost footer - details view
    if (isBlogPostPage) {
        const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* ["default"] */.A)('row', 'margin-top--sm', ThemeClassNames/* .ThemeClassNames.blog.blogFooterEditMetaRow */.G.blog.blogFooterEditMetaRow),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline/* ["default"] */.A, {
                            tags: tags
                        })
                    })
                }),
                canDisplayEditMetaRow && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditMetaRow/* ["default"] */.A, {
                    className: (0,clsx/* ["default"] */.A)('margin-top--sm', ThemeClassNames/* .ThemeClassNames.blog.blogFooterEditMetaRow */.G.blog.blogFooterEditMetaRow),
                    editUrl: editUrl,
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "row docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* ["default"] */.A)('col', {
                        'col--9': truncatedPost
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline/* ["default"] */.A, {
                        tags: tags
                    })
                }),
                truncatedPost && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* ["default"] */.A)('col text--right', {
                        'col--3': tagsExists
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink, {
                        blogPostTitle: title,
                        to: metadata.permalink
                    })
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// apply a bottom margin in list view
function useContainerClassName() {
    const { isBlogPostPage } = (0,client/* .useBlogPost */.e7)();
    return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}
function BlogPostItem(param) {
    let { children, className } = param;
    const containerClassName = useContainerClassName();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BlogPostItemContainer, {
        className: (0,clsx/* ["default"] */.A)(containerClassName, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemContent, {
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemFooter, {})
        ]
    });
}


},
50284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItems)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(17645);
/* import */ var _theme_BlogPostItem__rspack_import_3 = __webpack_require__(84533);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogPostItems(param) {
    let { items, component: BlogPostItemComponent = _theme_BlogPostItem__rspack_import_3/* ["default"] */.A } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: items.map((param)=>{
            let { content: BlogPostContent } = param;
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_2/* .BlogPostProvider */["in"], {
                content: BlogPostContent,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostItemComponent, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostContent, {})
                })
            }, BlogPostContent.metadata.permalink);
        })
    });
}


},
20149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogTagsPostsPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_12 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _docusaurus_theme_common__rspack_import_11 = __webpack_require__(34308);
/* import */ var _docusaurus_theme_common__rspack_import_13 = __webpack_require__(88287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_10 = __webpack_require__(79365);
/* import */ var _docusaurus_Link__rspack_import_3 = __webpack_require__(95310);
/* import */ var _theme_BlogLayout__rspack_import_4 = __webpack_require__(98579);
/* import */ var _theme_BlogListPaginator__rspack_import_5 = __webpack_require__(24553);
/* import */ var _theme_SearchMetadata__rspack_import_6 = __webpack_require__(54175);
/* import */ var _theme_BlogPostItems__rspack_import_7 = __webpack_require__(50284);
/* import */ var _theme_ContentVisibility_Unlisted__rspack_import_8 = __webpack_require__(41250);
/* import */ var _theme_Heading__rspack_import_9 = __webpack_require__(72072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 











function BlogTagsPostsPageMetadata(param) {
    let { tag } = param;
    const title = (0,_docusaurus_theme_common_internal__rspack_import_10/* .useBlogTagsPostsPageTitle */.ZD)(tag);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_11/* .PageMetadata */.be, {
                title: title,
                description: tag.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_6/* ["default"] */.A, {
                tag: "blog_tags_posts"
            })
        ]
    });
}
function BlogTagsPostsPageContent(param) {
    let { tag, items, sidebar, listMetadata } = param;
    const title = (0,_docusaurus_theme_common_internal__rspack_import_10/* .useBlogTagsPostsPageTitle */.ZD)(tag);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_BlogLayout__rspack_import_4/* ["default"] */.A, {
        sidebar: sidebar,
        children: [
            tag.unlisted && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_ContentVisibility_Unlisted__rspack_import_8/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                className: "margin-bottom--xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_9/* ["default"] */.A, {
                        as: "h1",
                        children: title
                    }),
                    tag.description && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: tag.description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_3/* ["default"] */.A, {
                        href: tag.allTagsPath,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.tags.tagsPageLink",
                            description: "The label of the link targeting the tag list page",
                            children: "View All Tags"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItems__rspack_import_7/* ["default"] */.A, {
                items: items
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogListPaginator__rspack_import_5/* ["default"] */.A, {
                metadata: listMetadata
            })
        ]
    });
}
function BlogTagsPostsPage(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_theme_common__rspack_import_11/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx__rspack_import_12/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_13/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages, _docusaurus_theme_common__rspack_import_13/* .ThemeClassNames.page.blogTagPostListPage */.G.page.blogTagPostListPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogTagsPostsPageMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogTagsPostsPageContent, {
                ...props
            })
        ]
    });
}


},
41250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Unlisted)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(83276);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(88287);
/* import */ var _theme_Admonition__rspack_import_2 = __webpack_require__(19388);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function UnlistedBanner(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition__rspack_import_2/* ["default"] */.A, {
        type: "caution",
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedBannerTitle */.Rc, {}),
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.common.unlistedBanner */.G.common.unlistedBanner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedBannerMessage */.Uh, {})
    });
}
function Unlisted(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedMetadata */.AE, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(UnlistedBanner, {
                ...props
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
83276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  AE: () => (UnlistedMetadata),
  Rc: () => (UnlistedBannerTitle),
  TT: () => (DraftBannerMessage),
  Uh: () => (UnlistedBannerMessage),
  Yh: () => (DraftBannerTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _docusaurus_Head__rspack_import_3 = __webpack_require__(53572);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Head__rspack_import_3/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map


},

}]);