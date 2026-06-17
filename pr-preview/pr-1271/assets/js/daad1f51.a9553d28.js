"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7198],{

/***/ 12107
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_page_layout_only_header_mdx_daa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-page-layout-only-header-mdx-daa.json
const site_docs_design_patterns_page_layout_only_header_mdx_daa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/page-layout/header","title":"Bara Header","description":"Sidlayout för applikationer som inte har någon navigation.","source":"@site/docs/design-patterns/page-layout/only-header.mdx","sourceDirName":"design-patterns/page-layout","slug":"/design-patterns/page-layout/header","permalink":"/pr-preview/pr-1271/design-patterns/page-layout/header","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"header","title":"Bara Header","sidebar_position":1},"sidebar":"sideBar","previous":{"title":"Tooltip","permalink":"/pr-preview/pr-1271/components/tooltip"},"next":{"title":"Header, Sidebar och Panel","permalink":"/pr-preview/pr-1271/design-patterns/page-layout/header-sidebar-panel"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/page-layout/only-header.mdx


const frontMatter = {
	id: 'header',
	title: 'Bara Header',
	sidebar_position: 1
};
const contentTitle = 'Bara Header';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bara-header",
        children: "Bara Header"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sidlayout för applikationer som inte har någon navigation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Header, HeaderActions, HeaderAction } from '@midas-ds/layout'\nimport { LogOut } from 'lucide-react'\n;<Header>\n  <HeaderActions>\n    <HeaderAction icon={<LogOut />}>Logga ut</HeaderAction>\n  </HeaderActions>\n</Header>\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }

}]);