"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1826],{

/***/ 26417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Example: () => (/* binding */ Example),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_badge_mdx_320_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-badge-mdx-320.json
const site_docs_components_badge_mdx_320_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/badge","title":"Badge","description":"Badge används tillsammans med en ikon eller knapp för att påvisa att användaren har något oläst att ta del av.","source":"@site/docs/components/badge.mdx","sourceDirName":"components","slug":"/components/badge","permalink":"/pr-preview/pr-404/components/badge","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Badge","description":"Badge används tillsammans med en ikon eller knapp för att påvisa att användaren har något oläst att ta del av.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/badge/Badge.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Badge_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--signal-red-140":"#e62323","--text-on-color":"light-dark(#ffffff, #ffffff)","badge":"badge_nGgv","hasChildren":"hasChildren_Zdhr","badgeContainer":"badgeContainer_X7uq"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/badge/Badge.tsx
var _excluded=["children","className"];var Badge=function Badge(_ref){var children=_ref.children,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var hasChildren=react.Children.count(children)>0;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({className:(0,clsx/* default */.A)(Badge_module.badge,hasChildren&&Badge_module.hasChildren,className)},rest,{children:children}));};
;// ./packages/components/src/badge/BadgeContainer.tsx
var BadgeContainer_excluded=["children","className"];var BadgeContainer=function BadgeContainer(_ref){var children=_ref.children,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,BadgeContainer_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({className:(0,clsx/* default */.A)(Badge_module.badgeContainer,className)},rest,{children:children}));};
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/bell.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Bell = (0,createLucideIcon/* default */.A)("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);


//# sourceMappingURL=bell.js.map

;// ./apps/docs/docs/components/badge.mdx


const frontMatter = {
	title: 'Badge',
	description: 'Badge används tillsammans med en ikon eller knapp för att påvisa att användaren har något oläst att ta del av.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Button: Button/* Button */.$,
      Badge: Badge,
      BadgeContainer: BadgeContainer,
      Bell: Bell
    },
    ...props,
    children: `<Button variant='tertiary' aria-label='Meddelanden'>
        <BadgeContainer>
          <Bell />
          <Badge />
        </BadgeContainer>
      </Button>`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Placering",
  "id": "placering",
  "level": 2
}, {
  "value": "Label",
  "id": "label",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Badge',
      friendlyName: "Notisindikator, Statusindikator",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Badge används tillsammans med en ikon eller knapp för att påvisa att användaren har något oläst att ta del av."
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideCode: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Badge } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placering",
      children: "Placering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att placera Badge korrekt ovanpå till exempel en ikon eller knapp kan du använda komponenten BadgeContainer. Denna komponent skapar en relativ position för Badge att placera sig mot och säkerställer att den placeras korrekt. Använder du inte BadgeContainer kommer badge att placeras som ett normalt blockelement."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "label",
      children: "Label"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd en label för att till exempel visa hur många meddelanden som är olästa."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Button: Button/* Button */.$,
        Badge: Badge,
        BadgeContainer: BadgeContainer,
        Bell: Bell
      },
      children: `<Button variant='tertiary' aria-label='Meddelanden'>
  <BadgeContainer>
    <Bell />
    <Badge>12</Badge>
  </BadgeContainer>
</Button>`
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



/***/ })

}]);