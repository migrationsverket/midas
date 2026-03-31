"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1],{

/***/ 99576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_components_layout_mdx_f9a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-components-layout-mdx-f9a.json
const site_docs_dev_layout_components_layout_mdx_f9a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/components/layout","title":"Layout, LayoutContent & Main","description":"Grundläggande strukturkomponenter för sidor.","source":"@site/docs/dev/layout/components/layout.mdx","sourceDirName":"dev/layout/components","slug":"/dev/layout/components/layout","permalink":"/pr-preview/pr-1203/dev/layout/components/layout","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Layout, LayoutContent & Main","description":"Grundläggande strukturkomponenter för sidor."},"sidebar":"sideBar","previous":{"title":"Header","permalink":"/pr-preview/pr-1203/dev/layout/components/header"},"next":{"title":"Navbar","permalink":"/pr-preview/pr-1203/dev/layout/components/navbar"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/components/layout.mdx


const frontMatter = {
	title: 'Layout, LayoutContent & Main',
	description: 'Grundläggande strukturkomponenter för sidor.'
};
const contentTitle = 'Layout, LayoutContent & Main';

const assets = {

};



const toc = [{
  "value": "Layout",
  "id": "layout",
  "level": 2
}, {
  "value": "LayoutContent",
  "id": "layoutcontent",
  "level": 2
}, {
  "value": "Main",
  "id": "main",
  "level": 2
}, {
  "value": "Komplett exempel",
  "id": "komplett-exempel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
        id: "layout-layoutcontent--main",
        children: "Layout, LayoutContent & Main"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dessa tre komponenter utgör grundstommen i en sida."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layout",
      children: "Layout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yttersta wrappern. Sätter upp CSS Grid för sidstrukturen och ger plats åt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Header"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LayoutContent"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout } from '@midas-ds/layout'\n\n<Layout>\n  {/* Header, LayoutContent, Navbar */}\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutcontent",
      children: "LayoutContent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wrapper för innehållsraden — det vill säga ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Main"
      }), " och eventuell ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Panel"
      }), " sida vid sida."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout, LayoutContent, Main } from '@midas-ds/layout'\n\n<Layout>\n  <LayoutContent>\n    <Sidebar>...</Sidebar>\n    <Main>...</Main>\n  </LayoutContent>\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "main",
      children: "Main"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Semantiskt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<main>"
      }), "-element för sidans huvudinnehåll. Bör alltid finnas på sidan för tillgänglighet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Main } from '@midas-ds/layout'\n\n<Main>\n  <h1>Rubrik</h1>\n  <p>Sidans innehåll</p>\n</Main>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Tillgänglighet",
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<Main>"
        }), " renderar ett semantiskt ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<main>"
        }), "-element. Varje sida bör ha exakt ett ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<main>"
        }), " — skärmläsare och tangentbordsanvändare navigerar dit direkt."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komplett-exempel",
      children: "Komplett exempel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout, LayoutContent, Main, Header, Sidebar, Navbar } from '@midas-ds/layout'\n\n<Layout>\n  <Header>...</Header>\n  <LayoutContent>\n    <Sidebar>...</Sidebar>\n    <Main>\n      {/* Ditt innehåll */}\n    </Main>\n  </LayoutContent>\n  <Navbar>...</Navbar>\n</Layout>\n"
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