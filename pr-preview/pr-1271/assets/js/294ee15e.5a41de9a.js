"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7749],{

/***/ 30137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_page_layout_header_navbar_panel_mdx_294_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-page-layout-header-navbar-panel-mdx-294.json
const site_docs_design_patterns_page_layout_header_navbar_panel_mdx_294_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/page-layout/header-navbar-panel","title":"Header, Navbar och Panel","description":"Denna kombination är till för applikationer som ska upplevas som mobilappar t.ex. Min Sida och inte tänkt för interna desktopapplikationer. Här ersätts Sidebar med Navbar som ligger längst ner på sidan. Navbar har endast plats för ett begränsat antal (max 5) menyalternativ eftersom det inte får plats fler på en liten skärm.","source":"@site/docs/design-patterns/page-layout/header-navbar-panel.mdx","sourceDirName":"design-patterns/page-layout","slug":"/design-patterns/page-layout/header-navbar-panel","permalink":"/pr-preview/pr-1271/design-patterns/page-layout/header-navbar-panel","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"header-navbar-panel","title":"Header, Navbar och Panel","sidebar_position":5},"sidebar":"sideBar","previous":{"title":"Header, Sidebar och Panel","permalink":"/pr-preview/pr-1271/design-patterns/page-layout/header-sidebar-panel"},"next":{"title":"Handlingar","permalink":"/pr-preview/pr-1271/design-patterns/actions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/page-layout/header-navbar-panel.mdx


const frontMatter = {
	id: 'header-navbar-panel',
	title: 'Header, Navbar och Panel',
	sidebar_position: 5
};
const contentTitle = 'Header, Navbar och Panel';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "header-navbar-och-panel",
        children: "Header, Navbar och Panel"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Denna kombination är till för applikationer som ska upplevas som mobilappar t.ex. Min Sida och inte tänkt för interna desktopapplikationer. Här ersätts Sidebar med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/layout/components/navbar",
        children: "Navbar"
      }), " som ligger längst ner på sidan. Navbar har endast plats för ett begränsat antal (max 5) menyalternativ eftersom det inte får plats fler på en liten skärm."]
    }), "\n", (0,jsx_runtime.jsx)("style", {
      children: `.snabbstart .theme-code-block { max-height: none; }`
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "snabbstart",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import {\n  Layout,\n  LayoutContent,\n  Main,\n  Header,\n  HeaderActions,\n  HeaderAction,\n  Navigation,\n  NavigationItem,\n  NavigationLink,\n  Navbar,\n  PanelProvider,\n  PanelRegion,\n} from '@midas-ds/layout'\nimport { House, Settings, Bell, User } from 'lucide-react'\n\nexport default function App() {\n  return (\n    <PanelProvider panelBehavior='replace'>\n      <Layout>\n        <Header>\n          <HeaderActions>\n            <HeaderAction icon={<Bell />}>Notiser</HeaderAction>\n            <HeaderAction icon={<User />}>Min profil</HeaderAction>\n          </HeaderActions>\n        </Header>\n\n        <LayoutContent>\n          <Main>{/* Ditt innehåll */}</Main>\n          <PanelRegion />\n        </LayoutContent>\n        <Navbar>\n          <Navigation>\n            <NavigationItem>\n              <NavigationLink\n                href='/'\n                icon={<House />}\n                isActive\n              >\n                Hem\n              </NavigationLink>\n            </NavigationItem>\n            <NavigationItem>\n              <NavigationLink\n                href='/installningar'\n                icon={<Settings />}\n              >\n                Inställningar\n              </NavigationLink>\n            </NavigationItem>\n          </Navigation>\n        </Navbar>\n      </Layout>\n    </PanelProvider>\n  )\n}\n"
        })
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