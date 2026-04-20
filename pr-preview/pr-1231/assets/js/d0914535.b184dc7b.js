"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1484],{

/***/ 35910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_components_navbar_mdx_d09_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-components-navbar-mdx-d09.json
const site_docs_dev_layout_components_navbar_mdx_d09_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/components/navbar","title":"Navbar","description":"Navigationsbar längst ned på sidan för mobila enheter.","source":"@site/docs/dev/layout/components/navbar.mdx","sourceDirName":"dev/layout/components","slug":"/dev/layout/components/navbar","permalink":"/pr-preview/pr-1231/dev/layout/components/navbar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Navbar","description":"Navigationsbar längst ned på sidan för mobila enheter."},"sidebar":"sideBar","previous":{"title":"Layout, LayoutContent & Main","permalink":"/pr-preview/pr-1231/dev/layout/components/layout"},"next":{"title":"Navigation","permalink":"/pr-preview/pr-1231/dev/layout/components/navigation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/components/navbar.mdx


const frontMatter = {
	title: 'Navbar',
	description: 'Navigationsbar längst ned på sidan för mobila enheter.'
};
const contentTitle = 'Navbar';

const assets = {

};



const toc = [{
  "value": "Användning",
  "id": "användning",
  "level": 2
}, {
  "value": "Sidebar och Navbar tillsammans",
  "id": "sidebar-och-navbar-tillsammans",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "navbar",
        children: "Navbar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En navigationsbar längst ned på sidan, primärt avsedd för mobilanvändare. Håll antalet länkar till 3–5 för att undvika trängsel på små skärmar."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Navbar, Navigation, NavigationItem, NavigationLink } from '@midas-ds/layout'\nimport { House, Search, User } from 'lucide-react'\n\nexport default function App() {\n  return (\n    <Navbar>\n      <Navigation>\n        <NavigationItem>\n          <NavigationLink\n            href='/'\n            icon={<House />}\n            isActive\n          >\n            Hem\n          </NavigationLink>\n        </NavigationItem>\n        <NavigationItem>\n          <NavigationLink\n            href='/sok'\n            icon={<Search />}\n          >\n            Sök\n          </NavigationLink>\n        </NavigationItem>\n        <NavigationItem>\n          <NavigationLink\n            href='/profil'\n            icon={<User />}\n          >\n            Profil\n          </NavigationLink>\n        </NavigationItem>\n      </Navigation>\n    </Navbar>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sidebar-och-navbar-tillsammans",
      children: "Sidebar och Navbar tillsammans"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), " döljer sig automatiskt på mobila enheter. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), " renderar alltid — du ansvarar själv för att visa eller dölja den beroende på skärmstorlek."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout>\n  <Header>...</Header>\n  <LayoutContent>\n    <Sidebar>\n      <Navigation>{/* Fullständig navigering på desktop */}</Navigation>\n    </Sidebar>\n    <Main>...</Main>\n  </LayoutContent>\n\n  <Navbar>\n    <Navigation>{/* Komprimerad navigering på mobil */}</Navigation>\n  </Navbar>\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), " renderar ett semantiskt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<footer>"
      }), "-element."]
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