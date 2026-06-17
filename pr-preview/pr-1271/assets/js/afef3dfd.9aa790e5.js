"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[120],{

/***/ 15062
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_page_layout_header_sidebar_panel_mdx_afe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-page-layout-header-sidebar-panel-mdx-afe.json
const site_docs_design_patterns_page_layout_header_sidebar_panel_mdx_afe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/page-layout/header-sidebar-panel","title":"Header, Sidebar och Panel","description":"Kombinationen Header, Sidebar och Panel innehåller alla komponenter för desktopapplikationer. Header innehåller globala handlingar och navigation på små skärmar, Sidebar används som standardnavigation och Panel används för att visa kontextuell information t.ex. notifieringar eller mer information om element i en lista.","source":"@site/docs/design-patterns/page-layout/header-sidebar-panel.mdx","sourceDirName":"design-patterns/page-layout","slug":"/design-patterns/page-layout/header-sidebar-panel","permalink":"/pr-preview/pr-1271/design-patterns/page-layout/header-sidebar-panel","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"header-sidebar-panel","title":"Header, Sidebar och Panel","sidebar_position":3},"sidebar":"sideBar","previous":{"title":"Bara Header","permalink":"/pr-preview/pr-1271/design-patterns/page-layout/header"},"next":{"title":"Header, Navbar och Panel","permalink":"/pr-preview/pr-1271/design-patterns/page-layout/header-navbar-panel"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/page-layout/header-sidebar-panel.mdx


const frontMatter = {
	id: 'header-sidebar-panel',
	title: 'Header, Sidebar och Panel',
	sidebar_position: 3
};
const contentTitle = 'Header, Sidebar och Panel';

const assets = {

};



const toc = [{
  "value": "Navigation",
  "id": "navigation",
  "level": 2
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "header-sidebar-och-panel",
        children: "Header, Sidebar och Panel"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kombinationen ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/layout/components/header",
        children: "Header"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/layout/components/sidebar",
        children: "Sidebar"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/layout/components/panel",
        children: "Panel"
      }), " innehåller alla komponenter för desktopapplikationer. Header innehåller globala handlingar och navigation på små skärmar, Sidebar används som standardnavigation och Panel används för att visa kontextuell information t.ex. notifieringar eller mer information om element i en lista."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När fönstret eller skärmen är under 640px i bredd göms Sidebar automatiskt. För att stödja navigation för alla fönster- och skärmstorlekar måste navigation via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/layout/components/header/#mobilemenu",
        children: "MobileMenu"
      }), " alltid inkluderas i trädet. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MobileMenu"
      }), " renderar ingenting på desktop eftersom den är villkorsstyrd via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useIsMobileDevice()"
      }), ". För att undvika kodduplicering rekommenderas att lägga navigationsinnehållet i en delad komponent och använda den till MobileMenu och Sidebar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsx)("style", {
      children: `.snabbstart .theme-code-block { max-height: none; }`
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "snabbstart",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import {\n  Layout,\n  LayoutContent,\n  Main,\n  Header,\n  HeaderActions,\n  HeaderAction,\n  Sidebar,\n  Navigation,\n  NavigationItem,\n  NavigationLink,\n  PanelProvider,\n  PanelRegion,\n} from '@midas-ds/layout'\nimport { House, Settings, Bell, User } from 'lucide-react'\n\nexport default function App() {\n  return (\n    <PanelProvider panelBehavior='replace'>\n      <Layout>\n        <Header>\n          <MobileMenu title='Meny'>\n            <Navigation>\n              <NavigationItem>\n                <NavigationLink\n                  href='/'\n                  icon={<House />}\n                  isActive\n                >\n                  Hem\n                </NavigationLink>\n              </NavigationItem>\n              <NavigationItem>\n                <NavigationLink\n                  href='/installningar'\n                  icon={<Settings />}\n                >\n                  Inställningar\n                </NavigationLink>\n              </NavigationItem>\n            </Navigation>\n          </MobileMenu>\n          <HeaderActions>\n            <HeaderAction icon={<Bell />}>Notifieringar</HeaderAction>\n            <HeaderAction icon={<User />}>Min profil</HeaderAction>\n          </HeaderActions>\n        </Header>\n\n        <LayoutContent>\n          <Sidebar title='Navigation'>\n            <Navigation>\n              <NavigationItem>\n                <NavigationLink\n                  href='/'\n                  icon={<House />}\n                  isActive\n                >\n                  Hem\n                </NavigationLink>\n              </NavigationItem>\n              <NavigationItem>\n                <NavigationLink\n                  href='/installningar'\n                  icon={<Settings />}\n                >\n                  Inställningar\n                </NavigationLink>\n              </NavigationItem>\n            </Navigation>\n          </Sidebar>\n\n          <Main>{/* Ditt innehåll */}</Main>\n          <PanelRegion />\n        </LayoutContent>\n      </Layout>\n    </PanelProvider>\n  )\n}\n"
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