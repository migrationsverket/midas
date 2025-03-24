"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6299],{

/***/ 23647:
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
  metadata: () => (/* reexport */ site_docs_components_tooltip_mdx_1e8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-tooltip-mdx-1e8.json
const site_docs_components_tooltip_mdx_1e8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/tooltip","title":"Tooltip","description":"Kort beskrivning av Tooltip","source":"@site/docs/components/tooltip.mdx","sourceDirName":"components","slug":"/components/tooltip","permalink":"/pr-preview/pr-382/components/tooltip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tooltip","description":"Kort beskrivning av Tooltip","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(39051);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/save.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Save = (0,createLucideIcon/* default */.A)("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);


//# sourceMappingURL=save.js.map

;// ./apps/docs/docs/components/tooltip.mdx


const frontMatter = {
	title: 'Tooltip',
	description: 'Kort beskrivning av Tooltip',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Tooltip: Tooltip/* Tooltip */.m,
      TooltipTrigger: Tooltip/* TooltipTrigger */.k,
      Button: Button/* Button */.$,
      Save: Save
    },
    ...props,
    children: `<TooltipTrigger isOpen>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip>Spara</Tooltip>
    </TooltipTrigger>`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Tooltip",
  "id": "tooltip",
  "level": 3
}, {
  "value": "TooltipTrigger",
  "id": "tooltiptrigger",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Tooltip',
      friendlyName: "Hjälptext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tooltip kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen."
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
        children: "import { Tooltip, TooltipTrigger, Button } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I första hand skall knappen vara tydlig nog så användaren förstår innebörden. Tooltip är till för en design där detta inte är möjligt och vi måste gömma undan informationen. Tooltip måste alltid kompletteras med en aria-label eller text som är dold visuellt men läses upp av skärmläsare."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tooltips kan också användas för att berätta mer information än vad som framkommer visuellt på knappen."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tooltip",
      children: "Tooltip"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Tooltip'
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tooltiptrigger",
      children: "TooltipTrigger"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'TooltipTrigger',
      defaultOpen: false
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



/***/ }),

/***/ 39051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip_Tooltip),
  k: () => (/* binding */ TooltipTrigger)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/tooltip/Tooltip.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tooltip_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--background-inverse-01":"light-dark(#171717, #f2f2f2)","--text-inverse":"light-dark(#f2f2f2, #171717)","tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(39013);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tooltip/Tooltip.tsx
var _excluded=["children","placement","className"],_excluded2=["children","delay"];function Tooltip_Tooltip(_ref){var children=_ref.children,placement=_ref.placement,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* Tooltip */.m_,Object.assign({className:(0,clsx/* default */.A)(Tooltip_module.tooltip,className),placement:placement},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Tooltip_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}function TooltipTrigger(_ref2){var children=_ref2.children,_ref2$delay=_ref2.delay,delay=_ref2$delay===void 0?0:_ref2$delay,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* TooltipTrigger */.k$,Object.assign({delay:delay},props,{children:children}));}

/***/ }),

/***/ 13807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ $d3f049242431219c$export$45fda7c47f93fd48),
/* harmony export */   _: () => (/* binding */ $d3f049242431219c$export$6d3443f2c48bfc20)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49953);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40961);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $d3f049242431219c$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    let isAnimationReady = isEntering && isReady;
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutEffect */ .N)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    $d3f049242431219c$var$useAnimation(ref, isAnimationReady, (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function $d3f049242431219c$export$45fda7c47f93fd48(ref, isOpen) {
    let [exitState, setExitState] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    $d3f049242431219c$var$useAnimation(ref, isExiting, (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function $d3f049242431219c$var$useAnimation(ref, isActive, onEnd) {
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutEffect */ .N)(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.all(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (0, react_dom__WEBPACK_IMPORTED_MODULE_0__.flushSync)(()=>{
                    onEnd();
                });
            }).catch(()=>{});
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}



//# sourceMappingURL=animation.module.js.map


/***/ }),

/***/ 45745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $44f671af83e7d9e0$export$2de4954e8ae13b9f),
/* harmony export */   k: () => (/* binding */ $44f671af83e7d9e0$export$746d02f47f4d381)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $44f671af83e7d9e0$export$2de4954e8ae13b9f = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    placement: 'bottom'
});
const $44f671af83e7d9e0$export$746d02f47f4d381 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function OverlayArrow(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $44f671af83e7d9e0$export$2de4954e8ae13b9f);
    let placement = props.placement;
    let style = {
        position: 'absolute',
        transform: placement === 'top' || placement === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)'
    };
    if (placement != null) style[placement] = '100%';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
        ...props,
        defaultClassName: 'react-aria-OverlayArrow',
        values: {
            placement: placement
        }
    });
    // remove undefined values from renderProps.style object so that it can be
    // spread merged with the other style object
    if (renderProps.style) Object.keys(renderProps.style).forEach((key)=>renderProps.style[key] === undefined && delete renderProps.style[key]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...props,
        ...renderProps,
        style: {
            ...style,
            ...renderProps.style
        },
        ref: ref,
        "data-placement": placement
    });
});



//# sourceMappingURL=OverlayArrow.module.js.map


/***/ })

}]);