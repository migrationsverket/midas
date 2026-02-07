"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2770],{

/***/ 38379
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_client_side_routing_mdx_870_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-client-side-routing-mdx-870.json
const site_docs_dev_client_side_routing_mdx_870_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/client-side-routing","title":"Routing på klientnivå","description":"Hantera Client Side Navigation tillsammans med designsystemet","source":"@site/docs/dev/client-side-routing.mdx","sourceDirName":"dev","slug":"/dev/client-side-routing","permalink":"/pr-preview/pr-1045/dev/client-side-routing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Routing på klientnivå","description":"Hantera Client Side Navigation tillsammans med designsystemet"},"sidebar":"sideBar","previous":{"title":"Validering i formulär","permalink":"/pr-preview/pr-1045/design-patterns/validation"},"next":{"title":"Vanliga problem","permalink":"/pr-preview/pr-1045/dev/common-issues"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/client-side-routing.mdx


const frontMatter = {
	title: 'Routing på klientnivå',
	description: 'Hantera Client Side Navigation tillsammans med designsystemet'
};
const contentTitle = 'Routing på klientnivå';

const assets = {

};



const toc = [{
  "value": "RouterProvider",
  "id": "routerprovider",
  "level": 2
}, {
  "value": "Ersätt grundkomponent",
  "id": "ersätt-grundkomponent",
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
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "routing-på-klientnivå",
        children: "Routing på klientnivå"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Client Side Routing, navigering i webbläsaren"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Våra komponenter har i grunden vanliga ankarlänkar (", (0,jsx_runtime.jsx)(_components.code, {
        children: "<a>"
      }), "-element) för att navigera mellan URL", ":er", " då dessa är absolut mest tillgängliga från grunden och standardiserade.\nOfta vill man dock använda sig av olika ramverks möjligheter till att navigera mellan routes på klientnivå. För att integrera detta med designsystemets komponenter kan man gå tillväga på två olika sätt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "routerprovider",
      children: "RouterProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Från vardera komponent som exponerar en länk kan man även importera en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouterProvider"
      }), ". Denna accepterar navigatorn från ditt ramverk. Följande exempel är för komponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " och ramverket React Router men fungerar likadant med respektive komponent samt ramverk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1,2,5,8}",
        children: "import { Link, RouterProvider } from '@midas-ds/components'\nimport { useNavigate, useHref } from 'react-router';\n...\nexport default function App() {\n  const navigate = useNavigate();\n\n  return (\n      <RouterProvider navigate={navigate} useHref={useHref}>\n          <Link href=\"/\">Startsida</Link>\n          <Link href=\"/om\">Om oss</Link>\n          <Link href=\"/kontakta-oss\">Kontakta oss</Link>\n      </RouterProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ersätt-grundkomponent",
      children: "Ersätt grundkomponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Istället för en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<RouterProvider>"
      }), " går det att ersätta grundkomponenten till en från ditt ramverk. Detta gör vi med en egenskap vi kallar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), ". Observera att egenskaperna på komponenten då förändras något.\nEgenskaper som vi från designsystemet erbjuder är kvar men egenskaper från grundkomponenten som man nu ersätt försvinner och ersätts med egenskaper från ramverkets komponent. Vi ser i exemplet nedan att komponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " justerats för att använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " från React Router och inte från React Aria.\nIstället för att skriva ", (0,jsx_runtime.jsx)(_components.code, {
        children: "href"
      }), " för länken som vi hade gjort i React Arias komponent skriver vi ", (0,jsx_runtime.jsx)(_components.code, {
        children: "to"
      }), " som React Router vill ha det. Däremot är vår egenskap ", (0,jsx_runtime.jsx)(_components.code, {
        children: "standalone"
      }), " fortfarande möjlig att använda."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link } from '@midas-ds/components'\nimport { Link as ReactRouterLink } from 'react-router';\n...\nexport default function App() {\n  return <Link as={ReactRouterLink} to=\"/\" standalone>Startsida</Link>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Du kan läsa mer om detta på React Arias dokumentationswebb. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/routing.html",
        children: "React Aria Client Side Routing"
      }), "."]
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