"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["7234"], {
40919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocBreadcrumbs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(88287);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(88260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(19209);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(95310);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(30568);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(66497);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconHome(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
            fill: "currentColor"
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"breadcrumbHomeIcon":"breadcrumbHomeIcon_YNFT"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function HomeBreadcrumbItem() {
    const homeHref = (0,useBaseUrl/* ["default"] */.Ay)('/');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: "breadcrumbs__item",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
            "aria-label": (0,Translate/* .translate */.T)({
                id: 'theme.docs.breadcrumbs.home',
                message: 'Home page',
                description: 'The ARIA label for the home page in the breadcrumbs'
            }),
            className: "breadcrumbs__link",
            href: homeHref,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconHome, {
                className: styles_module.breadcrumbHomeIcon
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(53572);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(10898);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/structuredDataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useBreadcrumbsStructuredData(param) {
    let { breadcrumbs } = param;
    const { siteConfig } = (0,useDocusaurusContext/* ["default"] */.A)();
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs// We filter breadcrumb items without links, they are not allowed
        // See also https://github.com/facebook/docusaurus/issues/9319#issuecomment-2643560845
        .filter((breadcrumb)=>breadcrumb.href).map((breadcrumb, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: breadcrumb.label,
                item: `${siteConfig.url}${breadcrumb.href}`
            }))
    };
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/StructuredData/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function DocBreadcrumbsStructuredData(props) {
    const structuredData = useBreadcrumbsStructuredData({
        breadcrumbs: props.breadcrumbs
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("script", {
            type: "application/ld+json",
            children: JSON.stringify(structuredData)
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Z_bl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









// TODO move to design system folder
function BreadcrumbsItemLink(param) {
    let { children, href, isLast } = param;
    const className = 'breadcrumbs__link';
    if (isLast) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: className,
            children: children
        });
    }
    return href ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
        className: className,
        href: href,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: children
        })
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: className,
        children: children
    });
}
// TODO move to design system folder
function BreadcrumbsItem(param) {
    let { children, active } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx/* ["default"] */.A)('breadcrumbs__item', {
            'breadcrumbs__item--active': active
        }),
        children: children
    });
}
function DocBreadcrumbs() {
    const breadcrumbs = (0,docsUtils/* .useSidebarBreadcrumbs */.OF)();
    const homePageRoute = (0,routesUtils/* .useHomePageRoute */.Dt)();
    if (!breadcrumbs) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocBreadcrumbsStructuredData, {
                breadcrumbs: breadcrumbs
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                className: (0,clsx/* ["default"] */.A)(ThemeClassNames/* .ThemeClassNames.docs.docBreadcrumbs */.G.docs.docBreadcrumbs, DocBreadcrumbs_styles_module.breadcrumbsContainer),
                "aria-label": (0,Translate/* .translate */.T)({
                    id: 'theme.docs.breadcrumbs.navAriaLabel',
                    message: 'Breadcrumbs',
                    description: 'The ARIA label for the breadcrumbs'
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "breadcrumbs",
                    children: [
                        homePageRoute && /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeBreadcrumbItem, {}),
                        breadcrumbs.map((item, idx)=>{
                            const isLast = idx === breadcrumbs.length - 1;
                            const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbsItem, {
                                active: isLast,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbsItemLink, {
                                    href: href,
                                    isLast: isLast,
                                    children: item.label
                                })
                            }, idx);
                        })
                    ]
                })
            })
        ]
    });
}


},
9108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocCategoryGeneratedIndexPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(34308);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(88260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(66497);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/emojiUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const segmenter = new Intl.Segmenter(undefined, {
    granularity: 'grapheme'
});
/**
 * This method splits "⚠️ Hello World" into "⚠️" + " Hello World".
 * It is quite strict and dumb, only useful to handle best-effort heuristics.
 * It only extracts a leading emoji if it is the first grapheme of the string.
 * It only extracts one emoji, even if multiples are present.
 * It doesn't trim the remaining string.
 * If you need something more clever, it should be built on top.
 * @param input
 */ function extractLeadingEmoji(input) {
    const it = segmenter.segment(input)[Symbol.iterator]();
    // const first = segmenter.segment(input).containing(0)?.segment;
    const grapheme = it.next().value?.segment;
    if (!grapheme) {
        return {
            emoji: null,
            rest: input
        };
    }
    // Leading grapheme contains an emoji
    // Covers flags/ZWJ/skin tones, excludes digits
    // See https://github.com/facebook/docusaurus/pull/12072
    // eslint-disable-next-line
    if (!RegExp("^\\p{RGI_Emoji}$", "v").test(grapheme)) {
        return {
            emoji: null,
            rest: input
        };
    }
    return {
        emoji: grapheme,
        rest: input.slice(grapheme.length)
    };
} //# sourceMappingURL=emojiUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(30568);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(16497);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/docsTranslations.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function useDocCardDescriptionCategoryItemsPlural() {
    const { selectMessage } = (0,usePluralForm/* .usePluralForm */.W)();
    return (count)=>selectMessage(count, (0,Translate/* .translate */.T)({
            message: '1 item|{count} items',
            id: 'theme.docs.DocCard.categoryDescription.plurals',
            description: 'The default description for a category card in the generated index about how many items this category includes'
        }, {
            count
        }));
} //# sourceMappingURL=docsTranslations.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(58310);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(95310);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(88287);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(72072);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Heading/Icon/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const styles_module = ({"cardTitleIcon":"cardTitleIcon_GcdP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Heading/Icon/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocCardHeadingIcon(param) {
    let { icon } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (0,clsx/* ["default"] */.A)(ThemeClassNames/* .ThemeClassNames.docs.docCard.icon */.G.docs.docCard.icon, styles_module.cardTitleIcon),
        children: icon
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Heading/Text/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Text_styles_module = ({"cardTitleText":"cardTitleText_nuEl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Heading/Text/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocCardHeadingText(param) {
    let { title } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (0,clsx/* ["default"] */.A)('text--truncate', ThemeClassNames/* .ThemeClassNames.docs.docCard.title */.G.docs.docCard.title, Text_styles_module.cardTitleText),
        children: title
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Heading/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Heading_styles_module = ({"cardTitle":"cardTitle_mcqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Heading/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocCardHeading(param) {
    let { item, title, icon } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Heading/* ["default"] */.A, {
        as: "h2",
        className: (0,clsx/* ["default"] */.A)(ThemeClassNames/* .ThemeClassNames.docs.docCard.heading */.G.docs.docCard.heading, Heading_styles_module.cardTitle),
        title: title,
        children: [
            icon && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardHeadingIcon, {
                item: item,
                icon: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardHeadingText, {
                item: item,
                title: title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Description/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Description_styles_module = ({"cardDescription":"cardDescription_L2fP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Description/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocCardDescription(param) {
    let { description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
        className: (0,clsx/* ["default"] */.A)('text--truncate', ThemeClassNames/* .ThemeClassNames.docs.docCard.description */.G.docs.docCard.description, Description_styles_module.cardDescription),
        title: description,
        children: description
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Layout/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Layout_styles_module = ({"cardContainer":"cardContainer_KhuF"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/Layout/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function Container(param) {
    let { className, href, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* ["default"] */.A, {
        href: href,
        className: (0,clsx/* ["default"] */.A)('card padding--lg', ThemeClassNames/* .ThemeClassNames.docs.docCard.container */.G.docs.docCard.container, Layout_styles_module.cardContainer, className),
        children: children
    });
}
function DocCardLayout(param) {
    let { item, className, href, icon, title, description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container, {
        href: href,
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardHeading, {
                item: item,
                icon: icon,
                title: title
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardDescription, {
                item: item,
                description: description
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function getFallbackEmojiIcon(item) {
    if (item.type === 'category') {
        return '🗃';
    }
    return (0,isInternalUrl/* ["default"] */.A)(item.href) ? '📄️' : '🔗';
}
function getIconTitleProps(item) {
    const extracted = extractLeadingEmoji(item.label);
    const emoji = extracted.emoji ?? getFallbackEmojiIcon(item);
    return {
        icon: emoji,
        title: extracted.rest.trim()
    };
}
function CardCategory(param) {
    let { item } = param;
    const href = (0,docsUtils/* .findFirstSidebarItemLink */.Nr)(item);
    const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardLayout, {
        item: item,
        className: item.className,
        href: href,
        description: item.description ?? categoryItemsPlural(item.items.length),
        ...getIconTitleProps(item)
    });
}
function CardLink(param) {
    let { item } = param;
    const doc = (0,docsUtils/* .useDocById */.cC)(item.docId ?? undefined);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardLayout, {
        item: item,
        className: item.className,
        href: item.href,
        description: item.description ?? doc?.description,
        ...getIconTitleProps(item)
    });
}
function DocCard(param) {
    let { item } = param;
    switch(item.type){
        case 'link':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLink, {
                item: item
            });
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardCategory, {
                item: item
            });
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const DocCardList_styles_module = ({"docCardListItem":"docCardListItem_W1sv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocCardListForCurrentSidebarCategory(param) {
    let { className } = param;
    const items = (0,docsUtils/* .useCurrentSidebarSiblings */.a4)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardList, {
        items: items,
        className: className
    });
}
function DocCardListItem(param) {
    let { item } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: (0,clsx/* ["default"] */.A)(DocCardList_styles_module.docCardListItem, 'col col--6'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCard, {
            item: item
        })
    });
}
function DocCardList(props) {
    const { items, className } = props;
    if (!items) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory, {
            ...props
        });
    }
    const filteredItems = (0,docsUtils/* .filterDocCardListItems */.d1)(items);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: (0,clsx/* ["default"] */.A)('row', className),
        children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardListItem, {
                item: item
            }, index))
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
var DocPaginator = __webpack_require__(76783);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__(15886);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__(95587);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 6 modules
var DocBreadcrumbs = __webpack_require__(40919);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/styles.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const DocCategoryGeneratedIndexPage_styles_module = ({"generatedIndexPage":"generatedIndexPage_vN6x","title":"title_kItE"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 










function DocCategoryGeneratedIndexPageMetadata(param) {
    let { categoryGeneratedIndex } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* .PageMetadata */.be, {
        title: categoryGeneratedIndex.title,
        description: categoryGeneratedIndex.description,
        keywords: categoryGeneratedIndex.keywords,
        // TODO `require` this?
        image: (0,useBaseUrl/* ["default"] */.Ay)(categoryGeneratedIndex.image)
    });
}
function DocCategoryGeneratedIndexPageContent(param) {
    let { categoryGeneratedIndex } = param;
    const category = (0,docsUtils/* .useCurrentSidebarCategory */.$S)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: DocCategoryGeneratedIndexPage_styles_module.generatedIndexPage,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionBanner/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocBreadcrumbs/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionBadge/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* ["default"] */.A, {
                        as: "h1",
                        className: DocCategoryGeneratedIndexPage_styles_module.title,
                        children: categoryGeneratedIndex.title
                    }),
                    categoryGeneratedIndex.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: categoryGeneratedIndex.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
                className: "margin-top--lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCardList, {
                    items: category.items,
                    className: DocCategoryGeneratedIndexPage_styles_module.list
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
                className: "margin-top--md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPaginator/* ["default"] */.A, {
                    previous: categoryGeneratedIndex.navigation.previous,
                    next: categoryGeneratedIndex.navigation.next
                })
            })
        ]
    });
}
function DocCategoryGeneratedIndexPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCategoryGeneratedIndexPageMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocCategoryGeneratedIndexPageContent, {
                ...props
            })
        ]
    });
}


},
76783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocPaginator)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _theme_PaginatorNavLink__rspack_import_3 = __webpack_require__(17174);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocPaginator(props) {
    const { className, previous, next } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, 'pagination-nav'),
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination'
        }),
        children: [
            previous && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                ...previous,
                subLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.docs.paginator.previous",
                    description: "The label used to navigate to the previous doc",
                    children: "Previous"
                })
            }),
            next && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                ...next,
                subLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.docs.paginator.next",
                    description: "The label used to navigate to the next doc",
                    children: "Next"
                }),
                isNext: true
            })
        ]
    });
}


},
95587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocVersionBadge)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(30568);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(88287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(70921);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocVersionBadge(param) {
    let { className } = param;
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .useDocsVersion */.r)();
    if (versionMetadata.badge) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.docs.docVersionBadge */.G.docs.docVersionBadge, 'badge badge--secondary'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                id: "theme.docs.versionBadge.label",
                values: {
                    versionLabel: versionMetadata.label
                },
                children: 'Version: {versionLabel}'
            })
        });
    }
    return null;
}


},
15886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocVersionBanner)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_2 = __webpack_require__(10898);
/* import */ var _docusaurus_Link__rspack_import_3 = __webpack_require__(95310);
/* import */ var _docusaurus_Translate__rspack_import_4 = __webpack_require__(30568);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(80698);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(88287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_6 = __webpack_require__(42086);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_9 = __webpack_require__(70921);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function UnreleasedVersionLabel(param) {
    let { siteTitle, versionMetadata } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
        id: "theme.docs.versions.unreleasedVersionLabel",
        description: "The label used to tell the user that he's browsing an unreleased doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.'
    });
}
function UnmaintainedVersionLabel(param) {
    let { siteTitle, versionMetadata } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
        id: "theme.docs.versions.unmaintainedVersionLabel",
        description: "The label used to tell the user that he's browsing an unmaintained doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
    });
}
const BannerLabelComponents = {
    unreleased: UnreleasedVersionLabel,
    unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
    const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BannerLabelComponent, {
        ...props
    });
}
function LatestVersionSuggestionLabel(param) {
    let { versionLabel, to, onClick } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
        id: "theme.docs.versions.latestVersionSuggestionLabel",
        description: "The label used to tell the user to check the latest version",
        values: {
            versionLabel,
            latestVersionLink: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_3/* ["default"] */.A, {
                    to: to,
                    onClick: onClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
                        id: "theme.docs.versions.latestVersionLinkLabel",
                        description: "The label used for the latest version suggestion link label",
                        children: "latest version"
                    })
                })
            })
        },
        children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
    });
}
function DocVersionBannerEnabled(param) {
    let { className, versionMetadata } = param;
    const { siteConfig: { title: siteTitle } } = (0,_docusaurus_useDocusaurusContext__rspack_import_2/* ["default"] */.A)();
    const { pluginId } = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .useActivePlugin */.vT)({
        failfast: true
    });
    const getVersionMainDoc = (version)=>version.docs.find((doc)=>doc.id === version.mainDocId);
    const { savePreferredVersionName } = (0,_docusaurus_plugin_content_docs_client__rspack_import_6/* .useDocsPreferredVersion */.g1)(pluginId);
    const { latestDocSuggestion, latestVersionSuggestion } = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .useDocVersionSuggestions */.HW)(pluginId);
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docVersionBanner */.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
        role: "alert",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BannerLabel, {
                    siteTitle: siteTitle,
                    versionMetadata: versionMetadata
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "margin-top--md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LatestVersionSuggestionLabel, {
                    versionLabel: latestVersionSuggestion.label,
                    to: latestVersionSuggestedDoc.path,
                    onClick: ()=>savePreferredVersionName(latestVersionSuggestion.name)
                })
            })
        ]
    });
}
function DocVersionBanner(param) {
    let { className } = param;
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .useDocsVersion */.r)();
    if (versionMetadata.banner) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionBannerEnabled, {
            className: className,
            versionMetadata: versionMetadata
        });
    }
    return null;
}


},
17174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (PaginatorNavLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink,
        children: [
            subLabel && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__sublabel",
                children: subLabel
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__label",
                children: title
            })
        ]
    });
}


},
16497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  W: () => (usePluralForm)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(10898);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
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
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    return (0,react__rspack_import_0.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map


},

}]);