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
const site_docs_design_patterns_page_layout_only_header_mdx_daa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/page-layout/header","title":"Applikationer utan huvudmeny","description":"Detta mönster är till för applikationer som inte behöver en meny för att navigera mellan flera delar. Headern kan innehålla globala handlingar, till exempel notifieringar, profil och inställningar.","source":"@site/docs/design-patterns/page-layout/only-header.mdx","sourceDirName":"design-patterns/page-layout","slug":"/design-patterns/page-layout/header","permalink":"/pr-preview/pr-1342/design-patterns/page-layout/header","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"header","title":"Applikationer utan huvudmeny","sidebar_position":1},"sidebar":"sideBar","previous":{"title":"Tooltip","permalink":"/pr-preview/pr-1342/components/tooltip"},"next":{"title":"Applikationer med sidomeny","permalink":"/pr-preview/pr-1342/design-patterns/page-layout/header-sidebar-panel"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/layout/PageLayoutExamples.tsx + 6 modules
var PageLayoutExamples = __webpack_require__(440);
;// ./apps/docs/docs/design-patterns/page-layout/only-header.mdx


const frontMatter = {
	id: 'header',
	title: 'Applikationer utan huvudmeny',
	sidebar_position: 1
};
const contentTitle = 'Applikationer utan huvudmeny';

const assets = {

};




const toc = [{
  "value": "Exempelkod",
  "id": "exempelkod",
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
        id: "applikationer-utan-huvudmeny",
        children: "Applikationer utan huvudmeny"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta mönster är till för applikationer som inte behöver en meny för att navigera mellan flera delar. Headern kan innehålla globala handlingar, till exempel notifieringar, profil och inställningar."
    }), "\n", (0,jsx_runtime.jsx)(PageLayoutExamples/* OnlyHeaderExample */.eI, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempelkod",
      children: "Exempelkod"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Bell, Settings, User } from 'lucide-react'\nimport { Header, HeaderAction, HeaderActions, HeaderLogo, HeaderTitle } from '@midas-ds/layout'\n\nexport default function App() {\n  return (\n    <>\n      <Header>\n        <HeaderLogo />\n        <HeaderTitle>Mitt system</HeaderTitle>\n        <HeaderActions>\n          <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>\n          <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>\n          <HeaderAction icon={<Settings size={20} />}>Inställningar</HeaderAction>\n        </HeaderActions>\n      </Header>\n      {/* Resten av applikationen */}\n    </>\n  )\n}\n"
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



/***/ },

/***/ 440
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gt: () => (/* binding */ DesktopAppExample),
  qh: () => (/* binding */ MobileAppSidebarNavbarExample),
  eI: () => (/* binding */ OnlyHeaderExample)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/layout/src/header/Header.tsx + 1 modules
var Header = __webpack_require__(46468);
// EXTERNAL MODULE: ./packages/layout/src/header/header-logo/HeaderLogo.tsx + 1 modules
var HeaderLogo = __webpack_require__(34262);
// EXTERNAL MODULE: ./packages/layout/src/header/header-title/HeaderTitle.tsx + 1 modules
var HeaderTitle = __webpack_require__(34842);
// EXTERNAL MODULE: ./packages/layout/src/header/header-actions/HeaderActions.tsx + 1 modules
var HeaderActions = __webpack_require__(28911);
// EXTERNAL MODULE: ./packages/layout/src/header/header-action/HeaderAction.tsx + 1 modules
var HeaderAction = __webpack_require__(53467);
// EXTERNAL MODULE: ./packages/layout/src/navigation/Navigation.tsx + 1 modules
var Navigation = __webpack_require__(55229);
// EXTERNAL MODULE: ./packages/layout/src/navigation/navigation-item/NavigationItem.tsx + 1 modules
var NavigationItem = __webpack_require__(12089);
// EXTERNAL MODULE: ./packages/layout/src/navigation/navigation-link/NavigationLink.tsx + 1 modules
var NavigationLink = __webpack_require__(10550);
// EXTERNAL MODULE: ./packages/layout/src/layout/Layout.tsx + 4 modules
var Layout = __webpack_require__(39685);
// EXTERNAL MODULE: ./packages/layout/src/header/mobile-menu/MobileMenu.tsx + 2 modules
var MobileMenu = __webpack_require__(59875);
// EXTERNAL MODULE: ./packages/layout/src/layout/layout-content/LayoutContent.tsx + 1 modules
var LayoutContent = __webpack_require__(64546);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/Sidebar.tsx + 2 modules
var Sidebar = __webpack_require__(91338);
// EXTERNAL MODULE: ./packages/layout/src/main/Main.tsx + 1 modules
var Main = __webpack_require__(70606);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
;// ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs


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
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, react).useLayoutEffect : ()=>{};



//# sourceMappingURL=useLayoutEffect.module.js.map

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./node_modules/@react-aria/utils/dist/animation.mjs




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
    let [isEntering, setEntering] = (0, react.useState)(true);
    let isAnimationReady = isEntering && isReady;
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    $d3f049242431219c$var$useAnimation(ref, isAnimationReady, (0, react.useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function $d3f049242431219c$export$45fda7c47f93fd48(ref, isOpen) {
    let [exitState, setExitState] = (0, react.useState)(isOpen ? 'open' : 'closed');
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
    $d3f049242431219c$var$useAnimation(ref, isExiting, (0, react.useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function $d3f049242431219c$var$useAnimation(ref, isActive, onEnd) {
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
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
                if (!canceled) (0, react_dom.flushSync)(()=>{
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

;// ./node_modules/@react-aria/utils/dist/useObjectRef.mjs


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(ref) {
    const objRef = (0, react.useRef)(null);
    const cleanupRef = (0, react.useRef)(undefined);
    const refEffect = (0, react.useCallback)((instance)=>{
        if (typeof ref === 'function') {
            const refCallback = ref;
            const refCleanup = refCallback(instance);
            return ()=>{
                if (typeof refCleanup === 'function') refCleanup();
                else refCallback(null);
            };
        } else if (ref) {
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        }
    }, [
        ref
    ]);
    return (0, react.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (cleanupRef.current) {
                    cleanupRef.current();
                    cleanupRef.current = undefined;
                }
                if (value != null) cleanupRef.current = refEffect(value);
            }
        }), [
        refEffect
    ]);
}



//# sourceMappingURL=useObjectRef.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-body/PanelBody.tsx + 1 modules
var PanelBody = __webpack_require__(6704);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-content/PanelContent.tsx + 1 modules
var PanelContent = __webpack_require__(18904);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-header/PanelHeader.tsx + 1 modules
var PanelHeader = __webpack_require__(19006);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-title/PanelTitle.tsx + 1 modules
var PanelTitle = __webpack_require__(6249);
;// ./packages/layout/src/panel/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"closePanel":"Close panel"},"sv":{"closePanel":"Stäng panel"}}');
;// ./packages/layout/src/panel/Panel.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Panel_module = ({"panel":"panel_gfSy","promote":"promote_F9ZB","slide-horizontally":"slide-horizontally_LlDf","slide-vertically":"slide-vertically_JBYI","panelActions":"panelActions_dGUU","panelTitle":"panelTitle_bOPO"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/panel/Panel.tsx
'use client';var _excluded=["className","title","actions","onPress","children","isExiting","defaultOpen","promoting","onPromotionEnd","aria-hidden"];var Panel=function Panel(props){var onExited=props.onExited;var _useControlledState=(0,useControlledState/* useControlledState */.P)(props.isOpen,props.defaultOpen||false,props.onOpenChange),isOpen=_useControlledState[0],setIsOpen=_useControlledState[1];var ref=(0,react.useRef)(null);var isExiting=$d3f049242431219c$export$45fda7c47f93fd48(ref,isOpen);var handlePress=function handlePress(){return setIsOpen(function(previouslyOpen){return!previouslyOpen;});};(0,react.useEffect)(function(){if(!isOpen&&!isExiting){onExited==null||onExited();}},[isOpen,isExiting,onExited]);if(!isOpen&&!isExiting){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(PanelInner,Object.assign({isExiting:isExiting,onPress:handlePress,ref:ref},props));};var PanelInner=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,title=_ref.title,actions=_ref.actions,onPress=_ref.onPress,children=_ref.children,isExiting=_ref.isExiting,defaultOpen=_ref.defaultOpen,promoting=_ref.promoting,onPromotionEnd=_ref.onPromotionEnd,ariaHidden=_ref['aria-hidden'],rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var objectRef=$df56164dff5785e2$export$4338b53315abf666(ref);var isEntering=$d3f049242431219c$export$6d3443f2c48bfc20(objectRef,!defaultOpen);var handleAnimationEnd=function handleAnimationEnd(e){if(e.target===e.currentTarget&&promoting){onPromotionEnd==null||onPromotionEnd();}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(PanelBody/* PanelBody */.l,Object.assign({"aria-hidden":ariaHidden||undefined,"aria-label":title,className:(0,clsx/* default */.A)(className,Panel_module.panel),ref:objectRef,"data-entering":isEntering||undefined,"data-exiting":isExiting||undefined,"data-promoting":promoting||undefined,onAnimationEnd:handleAnimationEnd},(0,filterDOMProps/* filterDOMProps */.$)(rest),{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(PanelHeader/* PanelHeader */.a,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(PanelTitle/* PanelTitle */.x,{className:Panel_module.panelTitle,title:title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Panel_module.panelActions,children:[actions,/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":strings.format('closePanel'),onPress:onPress,size:"medium",variant:"icon",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(PanelContent/* PanelContent */.w,{children:children})]}));});
// EXTERNAL MODULE: ./packages/layout/src/navbar/Navbar.tsx + 1 modules
var Navbar = __webpack_require__(36782);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.js
var bell = __webpack_require__(49436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(48686);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(80964);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/house.js
var house = __webpack_require__(91805);
;// ./apps/docs/src/components/examples/layout/PageLayoutExamples.tsx
var OnlyHeaderExample=function OnlyHeaderExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{overflow:'hidden',padding:0},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Header/* Header */.Y,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderLogo/* HeaderLogo */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderTitle/* HeaderTitle */.g,{children:"Mitt system"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderActions/* HeaderActions */.l,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(bell/* default */.A,{size:20}),children:"Notiser"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.A,{size:20}),children:"Min profil"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(settings/* default */.A,{size:20}),children:"Inst\xE4llningar"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:48,display:'flex',alignItems:'center',justifyContent:'center',minHeight:180,textAlign:'center',color:'var(--ifm-color-content-secondary)'},children:"Din applikation"})]})});};var NavigationContent=function NavigationContent(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Navigation/* Navigation */.V,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationItem/* NavigationItem */.s,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationLink/* NavigationLink */.T,{href:"#",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(house/* default */.A,{}),isActive:true,children:"Hem"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationItem/* NavigationItem */.s,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationLink/* NavigationLink */.T,{href:"#",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(settings/* default */.A,{}),children:"Inst\xE4llningar"})})]});};var DesktopAppExample=function DesktopAppExample(){var _useState=(0,react.useState)(false),isOpen=_useState[0],setIsOpen=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{padding:0},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Layout */.P,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Header/* Header */.Y,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MobileMenu/* MobileMenu */.q,{title:"Meny",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationContent,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderLogo/* HeaderLogo */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderTitle/* HeaderTitle */.g,{children:"Mitt system"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderActions/* HeaderActions */.l,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(bell/* default */.A,{}),children:"Notifieringar"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.A,{}),children:"Min profil"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(LayoutContent/* LayoutContent */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Sidebar/* Sidebar */.B,{title:"Navigation",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationContent,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Main/* Main */.g,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return setIsOpen(true);},children:"\xD6ppna panel"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Panel,{id:"detaljer",title:"Detaljer",isOpen:isOpen,onOpenChange:setIsOpen,children:"Panel med detaljer"})]})]})});};var MobileAppSidebarNavbarExample=function MobileAppSidebarNavbarExample(){var _useState2=(0,react.useState)(false),isOpen=_useState2[0],setIsOpen=_useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{padding:0},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Layout */.P,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Header/* Header */.Y,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderLogo/* HeaderLogo */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderTitle/* HeaderTitle */.g,{children:"Mitt system"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderActions/* HeaderActions */.l,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(bell/* default */.A,{}),children:"Notifieringar"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.A,{}),children:"Min profil"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(LayoutContent/* LayoutContent */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Sidebar/* Sidebar */.B,{title:"Navigation",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationContent,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Main/* Main */.g,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return setIsOpen(true);},children:"\xD6ppna panel"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Panel,{id:"detaljer",title:"Detaljer",isOpen:isOpen,onOpenChange:setIsOpen,children:"Panel med detaljer"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Navbar/* Navbar */.F,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationContent,{})})]})});};

/***/ },

/***/ 5031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/logo/Logo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_module = ({"container":"container_U3H4","noPadding":"noPadding__BF5","logo":"logo_GI7z","primary":"primary_TCiF","dark":"dark_F_Ks","xSmall":"xSmall_IZ4K","small":"small_KAZl","large":"large_iAB3"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/logo/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"logotype":"Logotype of the Swedish Migration Agency"},"sv":{"logotype":"Migrationsverkets logotyp"}}');
;// ./packages/components/src/logo/LogoContext.tsx
var LogoContext=/*#__PURE__*/(0,react.createContext)({size:undefined});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/logo/Logo.tsx
var _excluded=["primary","size","padding","className"];var Logo=function Logo(_ref){var _ref2;var _ref$primary=_ref.primary,primary=_ref$primary===void 0?true:_ref$primary,size=_ref.size,_ref$padding=_ref.padding,padding=_ref$padding===void 0?true:_ref$padding,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(LogoContext);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Logo_module.container,padding===false&&Logo_module.noPadding,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SVG,{size:(_ref2=size!=null?size:context.size)!=null?_ref2:'medium',primary:primary})}));};var SVG=function SVG(_ref3){var size=_ref3.size,primary=_ref3.primary;var classNames=(0,clsx/* default */.A)(Logo_module.logo,primary?Logo_module.primary:Logo_module.dark,size==='x-small'&&Logo_module.xSmall,size==='medium'&&Logo_module.medium,size==='large'&&Logo_module.large,size==='small'&&Logo_module.small);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);if(size==='x-small')return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 92",className:classNames,role:"img","aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.99,91.69c-1.84-1.11-4.05-4.55-4.05-9.46V9.15c0-4.79,1.96-7.25,3.81-8.85h-14.75l-33.91,65.47L12.41.3H0c1.6,1.59,3.93,3.07,3.93,8.23v75.55c0,3.56-2.21,6.51-3.81,7.61h16.34c-1.72-1.22-3.93-4.18-3.93-7.98V25.97l36.24,61.42,33.04-63.26v58.96c0,5.53-2.21,7.61-3.81,8.6h21.99Z"})});return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 112 40",className:classNames,"aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M97.78,21.61c-7.48-9.73-20.06-16.03-34.32-16.03-13.07,0-24.86,5.27-32.46,13.65,6.56-5.83,15.64-9.44,25.66-9.44,11.37,0,21.52,4.56,28.18,11.83h12.94Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.45,12.58C70.67-1.51,41.26,2.77,27.49,21.61h-12.23C30.56-2.89,68.29-7.47,90.45,12.58h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.89,37.13c-.22-.13-.48-.53-.48-1.11v-8.58c0-.56.23-.85.45-1.04h-1.73l-3.98,7.69-4.54-7.69H.15c.19.19.46.36.46.97v8.87c0,.42-.26.76-.45.89h1.92c-.2-.14-.46-.49-.46-.94v-6.78l4.25,7.21,3.88-7.43v6.92c0,.65-.26.89-.45,1.01h2.58Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M15.81,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM16.22,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M24.52,30.97c-.04-.33-.17-.68-.37-.95h-1.36c-.29-.26-.87-.58-1.96-.58-1.53,0-2.8.92-2.8,2.58,0,1.02.52,1.86,1.31,2.26-.43.37-1.38.98-1.38,1.61,0,.71.79.99,1.38,1.1-.88.26-1.67.82-1.67,1.59,0,1.14,1.73,1.41,2.64,1.41,1.54,0,3.91-.78,3.91-2.64,0-1.21-1.23-1.49-2.22-1.5-2.42-.06-2.51-.2-2.51-.56,0-.2.42-.68.55-.81.23.03.48.06.71.06,1.76,0,2.93-.94,2.93-2.7,0-.48-.14-.91-.29-1.11.12-.04.25-.04.37-.04.27,0,.55.12.76.27h0ZM22.27,32.21c0,.79-.37,1.61-1.36,1.61-1.07,0-1.47-1.21-1.47-2.09,0-.95.5-1.57,1.31-1.57,1.2,0,1.51,1.25,1.51,2.05h0ZM22.89,37.92c0,.76-.82,1.31-1.93,1.31-.59,0-1.7-.3-1.69-1.15,0-.45.26-.74.59-.99l1.96.04c.5.01,1.07.1,1.07.79h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M30.11,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M36.87,37.13c-.37-.33-.43-.59-.43-1.25v-3.89c0-2.21-1.43-2.55-2.8-2.55-.61,0-1.67.22-2.03.42-.2.4-.3,1.24-.4,1.67.46-.56,1.27-1.37,2.39-1.37,1.18,0,1.36.82,1.36,1.7v.39l-2.21.76c-1.04.36-1.87,1.08-1.87,2.26,0,1.31.88,2.08,2.15,2.08.87,0,1.46-.43,1.93-.94v.72h1.92ZM34.95,35.62c-.26.32-.74.85-1.37.85-.75,0-1.18-.79-1.18-1.54,0-.71.35-1.15.89-1.37l1.66-.63v2.7h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M42.58,36.15c-.29.27-.71.46-1.11.46-.87,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M45.63,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM46.04,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M54.96,33.37c0-2.06-1.3-3.95-3.5-3.95s-3.84,1.76-3.84,4.01c0,2.06,1.28,3.95,3.49,3.95s3.85-1.76,3.85-4.01h0ZM53.43,34.04c0,1.27-.52,2.57-1.86,2.57-1.79,0-2.42-2.44-2.42-3.86,0-1.21.48-2.57,1.87-2.57,1.79,0,2.41,2.44,2.41,3.86h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M63.37,37.13c-.27-.22-.45-.42-.45-1.11v-3.94c0-1.63-.39-2.64-2.18-2.64-1.01,0-1.79.56-2.38,1.12v-.91h-1.98c.3.17.49.46.49,1.05v5.33c0,.59-.14.88-.48,1.08h2.39c-.23-.23-.43-.37-.43-1.17v-4.4c.32-.45,1.07-1.24,1.85-1.24,1.01,0,1.23,1.01,1.23,1.8v3.95c0,.74-.26.87-.46,1.05h2.39Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M69.79,35.2c0-2.21-3.42-2.71-3.42-4.07,0-.75.71-.98,1.34-.98s1.33.29,1.74.81l-.07-1.18c-.46-.17-1.11-.35-1.69-.35-1.44,0-2.68.63-2.68,1.89,0,2.36,3.46,2.68,3.46,4.25,0,.79-.62,1.05-1.31,1.05-1.01,0-1.86-.46-2.52-1.21v.1c0,.4-.03.99.3,1.27.53.43,1.53.56,2.18.56,1.36,0,2.67-.62,2.67-2.15h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M77.98,29.66h-1.43c.13.1.11.56-.19,1.33l-1.86,4.72-1.87-4.7c-.26-.65-.32-1.15-.16-1.34h-2.06c.19.1.49.85.82,1.67l2.31,5.8h1.31l2.35-5.97c.32-.81.56-1.36.78-1.5h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M84.91,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM83.34,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.95,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.79,37.16c-2.26-.37-2.49-4.04-4.7-4.04l2.62-2.8c.22-.23.5-.48.75-.66h-1.77c.14.14.13.39-.13.66l-2.65,2.83v-7.07h-1.98c.33.2.49.56.49,1.01v9.01c0,.58-.22.81-.46,1.02h2.35c-.26-.25-.4-.49-.4-1.02v-2.57c.27,0,.62.13.82.26,1.28.82,1.95,3.11,2.67,3.45.14.07.94.1,1.14.1.45,0,.84-.03,1.25-.19h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M106.3,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM104.73,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M111.85,36.15c-.29.27-.71.46-1.11.46-.86,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"})]});};

/***/ },

/***/ 8356
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ ModalOverlay)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Modal.mjs + 2 modules
var Modal = __webpack_require__(82345);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/modal/modal-overlay/ModalOverlay.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ModalOverlay_module = ({"modalOverlay":"modalOverlay_Z0Xb","modal-fade":"modal-fade_oa7s"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/modal/modal-overlay/ModalOverlay.tsx
var _excluded=["className"];var ModalOverlay=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* ModalOverlay */.mH,Object.assign({className:(0,clsx/* default */.A)(className,ModalOverlay_module.modalOverlay),ref:ref},rest));});ModalOverlay.displayName='ModalOverlay';

/***/ },

/***/ 19615
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var private_Text = __webpack_require__(20987);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","size","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var _clsx;var children=_ref.children,className=_ref.className,size=_ref.size,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var getClassName=function getClassName(){var isDescription=rest.slot==='description';if(isDescription){return size==='small'?Text_module['description-small']:Text_module['description'];}return size==='small'?Text_module['body-small']:Text_module['body'];};var textProps=Object.assign({className:(0,clsx/* default */.A)(getClassName(),(_clsx={},_clsx[Text_module.bold]=['b','strong'].includes(elementType),_clsx[Text_module.italic]=['i','em'].includes(elementType),_clsx),className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(private_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ },

/***/ 93509
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip_Tooltip),
  k: () => (/* binding */ TooltipTrigger)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/tooltip/Tooltip.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tooltip_module = ({"tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Tooltip.mjs + 4 modules
var Tooltip = __webpack_require__(76625);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tooltip/Tooltip.tsx
var _excluded=["children","className"],_excluded2=["delay"];function Tooltip_Tooltip(_ref){var _children=_ref.children,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m_,Object.assign({className:(0,clsx/* default */.A)(Tooltip_module.tooltip,className)},props,{children:function children(renderProps){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Tooltip_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),typeof _children==='function'?_children(renderProps):_children]});}}));}function TooltipTrigger(_ref2){var _ref2$delay=_ref2.delay,delay=_ref2$delay===void 0?0:_ref2$delay,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* TooltipTrigger */.k$,Object.assign({delay:delay},props));}

/***/ },

/***/ 46468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/Header.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Header_module = ({"header":"header_cbgi"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/Header.tsx
'use client';var _excluded=["className"];var Header=function Header(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("header",Object.assign({className:(0,clsx/* default */.A)(className,Header_module.header)},rest));};

/***/ },

/***/ 53467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ HeaderAction)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./packages/layout/src/header/header-action/HeaderAction.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderAction_module = ({"headerAction":"headerAction_l3SX","label":"label_Yxp2"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-action/HeaderAction.tsx
'use client';var _excluded=["children","icon","className"];var HeaderAction=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var children=_ref.children,icon=_ref.icon,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);if(!children&&!props['aria-label']&&"production"!=='production')// removed by dead control flow
{}return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({ref:ref,size:"medium",variant:"tertiary",className:(0,clsx/* default */.A)(HeaderAction_module.headerAction,className)},props,{children:(0,utils/* composeRenderProps */.HW)(children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[icon,typeof children!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:HeaderAction_module.label,children:children})]});})}));});HeaderAction.displayName='HeaderAction';

/***/ },

/***/ 28911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ HeaderActions)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/header-actions/HeaderActions.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderActions_module = ({"headerActions":"headerActions_r0j7"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-actions/HeaderActions.tsx
'use client';var HeaderActions=function HeaderActions(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(HeaderActions_module.headerActions,className),children:children});};

/***/ },

/***/ 34262
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ HeaderLogo)
});

// EXTERNAL MODULE: ./packages/components/src/logo/Logo.tsx + 3 modules
var Logo = __webpack_require__(5031);
;// ./packages/layout/src/header/header-logo/HeaderLogo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderLogo_module = ({"mobile":"mobile_uWfK","desktop":"desktop_I1ZT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-logo/HeaderLogo.tsx
'use client';var HeaderLogo=function HeaderLogo(_ref){var primary=_ref.primary;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* Logo */.g,{size:"x-small",primary:primary,padding:false,className:HeaderLogo_module.mobile}),/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* Logo */.g,{size:"small",primary:primary,padding:false,className:HeaderLogo_module.desktop})]});};

/***/ },

/***/ 34842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ HeaderTitle)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/header-title/HeaderTitle.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderTitle_module = ({"headerTitle":"headerTitle_bJCT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-title/HeaderTitle.tsx
var _excluded=["className"];var HeaderTitle=function HeaderTitle(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({className:(0,clsx/* default */.A)(HeaderTitle_module.headerTitle,className)},rest));};

/***/ },

/***/ 59875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ MobileMenu)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.js
var menu = __webpack_require__(89230);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Modal.mjs + 2 modules
var Modal = __webpack_require__(82345);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/modal/modal-overlay/ModalOverlay.tsx + 1 modules
var ModalOverlay = __webpack_require__(8356);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/layout/src/utils/useIsMobileDevice.ts
var useIsMobileDevice = __webpack_require__(10855);
// EXTERNAL MODULE: ./packages/layout/src/header/mobile-menu/MobileMenuContext.tsx
var MobileMenuContext = __webpack_require__(97757);
;// ./packages/layout/src/header/mobile-menu/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"openMenu":"Open menu"},"sv":{"openMenu":"Öppna meny"}}');
;// ./packages/layout/src/header/mobile-menu/MobileMenu.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const MobileMenu_module = ({"triggerButton":"triggerButton_NREF","overlay":"overlay_Zzls","drawer-blur":"drawer-blur_g02Y","drawer":"drawer_H_wn","drawer-slide":"drawer-slide_Mtkt","dialog":"dialog_KEPB","header":"header__BSE"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/mobile-menu/MobileMenu.tsx
'use client';var _excluded=["children","className","defaultOpen","isOpen","onOpenChange","title"];var MobileMenu=function MobileMenu(_ref){var children=_ref.children,className=_ref.className,defaultOpen=_ref.defaultOpen,isOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,title=_ref.title,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isMobile=(0,useIsMobileDevice/* useIsMobileDevice */.o)();var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return isMobile?/*#__PURE__*/(0,jsx_runtime.jsx)(MobileMenuContext/* MobileMenuContext */.x.Provider,{value:{},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{isOpen:isOpen,onOpenChange:onOpenChange,defaultOpen:defaultOpen,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":strings.format('openMenu'),icon:menu/* default */.A,variant:"icon",size:"medium",className:MobileMenu_module.triggerButton}),/*#__PURE__*/(0,jsx_runtime.jsx)(ModalOverlay/* ModalOverlay */.m,Object.assign({className:(0,clsx/* clsx */.$)(className,MobileMenu_module.overlay),isDismissable:true},rest,{children:(0,utils/* composeRenderProps */.HW)(children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* Modal */.aF,{className:MobileMenu_module.drawer,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* Dialog */.lG,{className:MobileMenu_module.dialog,children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:MobileMenu_module.header,children:title}),children]})});})}))]})}):null;};

/***/ },

/***/ 97757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ MobileMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';var MobileMenuContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 39685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/layout/Layout.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_module = ({"layout":"layout_MzRV"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./packages/layout/src/layout/skip-to-content/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"skipToContent":"Skip to main content"},"sv":{"skipToContent":"Hoppa till huvudinnehåll"}}');
;// ./packages/layout/src/layout/skip-to-content/SkipToContent.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SkipToContent_module = ({"skipToContent":"skipToContent_YFi8"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/layout/skip-to-content/SkipToContent.tsx
'use client';var SkipToContent=function SkipToContent(_ref){var _ref$selector=_ref.selector,selector=_ref$selector===void 0?'main:first-of-type':_ref$selector;var handlePress=function handlePress(){var container=document.querySelector(selector);if(container){container.tabIndex=-1;container.focus();container.addEventListener('blur',function(){return container.removeAttribute('tabindex');},{once:true});}};var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:handlePress,className:SkipToContent_module.skipToContent,children:strings.format('skipToContent')});};
;// ./packages/layout/src/layout/Layout.tsx
var _excluded=["children","className"];var Layout=function Layout(_ref){var children=_ref.children,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(className,Layout_module.layout)},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SkipToContent,{}),children]}));};

/***/ },

/***/ 64546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ LayoutContent)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/layout/layout-content/LayoutContent.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LayoutContent_module = ({"layoutContent":"layoutContent_KYbf"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/layout/layout-content/LayoutContent.tsx
var _excluded=["className"];var LayoutContent=function LayoutContent(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(className,LayoutContent_module.layoutContent)},rest));};

/***/ },

/***/ 70606
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Main)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/main/Main.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Main_module = ({"main":"main_P1t_"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/main/Main.tsx
var _excluded=["className"];var Main=function Main(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("main",Object.assign({className:(0,clsx/* default */.A)(className,Main_module.main)},rest));};

/***/ },

/***/ 36782
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/layout/src/navbar/NavbarContext.tsx
var NavbarContext = __webpack_require__(61220);
;// ./packages/layout/src/navbar/Navbar.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Navbar_module = ({"navbar":"navbar_TBxr"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/navbar/Navbar.tsx
'use client';var _excluded=["className","children"];var Navbar=function Navbar(_ref){var className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",Object.assign({className:(0,clsx/* default */.A)(className,Navbar_module.navbar)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContext/* NavbarContext */.q.Provider,{value:{},children:children})}));};

/***/ },

/***/ 61220
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ NavbarContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';var NavbarContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 55229
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/layout/src/navigation/Navigation.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Navigation_module = ({"rootList":"rootList_h7yc"});
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/navigation/Navigation.tsx
'use client';var _excluded=["className","items","children","dependencies","idScope","addIdAndValue"];var Navigation=function Navigation(_ref){var className=_ref.className,items=_ref.items,children=_ref.children,dependencies=_ref.dependencies,idScope=_ref.idScope,addIdAndValue=_ref.addIdAndValue,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("nav",Object.assign({className:className},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:Navigation_module.rootList,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:items,children:children,dependencies:dependencies,idScope:idScope,addIdAndValue:addIdAndValue})})}));};

/***/ },

/***/ 12089
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ NavigationItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(16614);
;// ./packages/layout/src/navigation/navigation-item/NavigationItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavigationItem_module = ({"navigationItem":"navigationItem_i3Ha"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/navigation/navigation-item/NavigationItem.tsx
'use client';var _excluded=["className"];var NavigationItem=function NavigationItem(_ref){var _clsx;var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var sidebarContext=(0,react.useContext)(SidebarContext/* SidebarContext */.I);return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({className:(0,clsx/* default */.A)(className,NavigationItem_module.navigationItem,(_clsx={},_clsx[NavigationItem_module.collapsed]=sidebarContext==null?void 0:sidebarContext.isCollapsed,_clsx))},rest));};

/***/ },

/***/ 10550
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ NavigationLink)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(67452);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(93509);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/layout/src/navigation/navigation-link/NavigationLink.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavigationLink_module = ({"navigationLink":"navigationLink_Q681","sidebar":"sidebar_A3L6","collapsed":"collapsed_ApWA","navbar":"navbar_s_WU","title":"title_iyJ5"});
// EXTERNAL MODULE: ./packages/layout/src/header/mobile-menu/MobileMenuContext.tsx
var MobileMenuContext = __webpack_require__(97757);
// EXTERNAL MODULE: ./packages/layout/src/navbar/NavbarContext.tsx
var NavbarContext = __webpack_require__(61220);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(16614);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/navigation/navigation-link/NavigationLink.tsx
'use client';var _excluded=["as","children","className","isActive","isDisabled","icon","aria-label"];var NavigationLink=function NavigationLink(_ref){var _clsx;var as=_ref.as,children=_ref.children,className=_ref.className,isActive=_ref.isActive,isDisabled=_ref.isDisabled,icon=_ref.icon,ariaLabel=_ref['aria-label'],rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var mobileMenuContext=(0,react.useContext)(MobileMenuContext/* MobileMenuContext */.x);var sidebarContext=(0,react.useContext)(SidebarContext/* SidebarContext */.I);var navbarContext=(0,react.useContext)(NavbarContext/* NavbarContext */.q);var isCollapsed=sidebarContext==null?void 0:sidebarContext.isCollapsed;var ctx=(0,react.useContext)(Dialog/* OverlayTriggerStateContext */.RG);var Component=as||Link/* Link */.N;var toggle=function toggle(){if(ctx!=null&&ctx.isOpen){ctx==null||ctx.setOpen(false);}};var title=typeof children==='string'?children:undefined;if(!title&&!ariaLabel&&"production"!=='production')// removed by dead control flow
{}return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{isDisabled:!isCollapsed||!title&&!ariaLabel,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(useFocusable/* Focusable */.zo,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({"aria-current":isActive&&'page',"aria-label":ariaLabel||(isCollapsed?title:undefined),className:(0,clsx/* clsx */.$)(className,NavigationLink_module.navigationLink,(_clsx={},_clsx[NavigationLink_module.sidebar]=sidebarContext||mobileMenuContext,_clsx[NavigationLink_module.navbar]=navbarContext,_clsx[NavigationLink_module.collapsed]=isCollapsed,_clsx)),"aria-disabled":isDisabled||undefined,"data-active":isActive||undefined,"data-disabled":isDisabled||undefined},as?{tabIndex:isDisabled?-1:undefined,onClick:function onClick(e){if(isDisabled){e.preventDefault();return;}toggle();rest.onClick==null||rest.onClick(e);}}:{isDisabled:isDisabled,onPress:function onPress(e){toggle();rest.onPress==null||rest.onPress(e);}},rest,{children:[icon,/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:NavigationLink_module.title,children:children})]}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{placement:"right",children:title})]});};

/***/ },

/***/ 6704
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ PanelBody)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/layout/src/panel/panel-body/PanelBody.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelBody_module = ({"panelBody":"panelBody_OFgk"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/panel/panel-body/PanelBody.tsx
var _excluded=["className"];var PanelBody=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",Object.assign({ref:ref,className:(0,clsx/* default */.A)(className,PanelBody_module.panelBody)},rest));});

/***/ },

/***/ 18904
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ PanelContent)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/layout/src/panel/panel-content/PanelContent.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelContent_module = ({"panelContent":"panelContent_WJah"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/panel/panel-content/PanelContent.tsx
var _excluded=["className"];var PanelContent=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({ref:ref,tabIndex:0// eslint-disable-line jsx-a11y/no-noninteractive-tabindex -- WCAG 2.1.1: scrollable regions must be keyboard-reachable
,className:(0,clsx/* default */.A)(className,PanelContent_module.panelContent)},rest));});

/***/ },

/***/ 19006
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ PanelHeader)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/panel/panel-header/PanelHeader.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelHeader_module = ({"panelHeader":"panelHeader_K3Yg"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/panel/panel-header/PanelHeader.tsx
var _excluded=["className"];var PanelHeader=function PanelHeader(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(className,PanelHeader_module.panelHeader)},rest));};

/***/ },

/***/ 6249
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ PanelTitle)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/layout/src/panel/panel-title/PanelTitle.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelTitle_module = ({"panelTitle":"panelTitle_z2zr"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/panel/panel-title/PanelTitle.tsx
var _excluded=["className","title"];var PanelTitle=function PanelTitle(_ref){var className=_ref.className,title=_ref.title,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,Object.assign({className:(0,clsx/* clsx */.$)(className,PanelTitle_module.panelTitle)},rest,{children:title}));};

/***/ },

/***/ 91338
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/panel-left-close.js
var panel_left_close = __webpack_require__(59644);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-body/PanelBody.tsx + 1 modules
var PanelBody = __webpack_require__(6704);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-header/PanelHeader.tsx + 1 modules
var PanelHeader = __webpack_require__(19006);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-title/PanelTitle.tsx + 1 modules
var PanelTitle = __webpack_require__(6249);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-content/PanelContent.tsx + 1 modules
var PanelContent = __webpack_require__(18904);
;// ./packages/layout/src/sidebar/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"expandSidebar":"Expand sidebar","collapseSidebar":"Collapse sidebar"},"sv":{"expandSidebar":"Expandera sidopanel","collapseSidebar":"Minimera sidopanel"}}');
// EXTERNAL MODULE: ./packages/layout/src/utils/useIsMobileDevice.ts
var useIsMobileDevice = __webpack_require__(10855);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(16614);
;// ./packages/layout/src/sidebar/Sidebar.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Sidebar_module = ({"sidebar":"sidebar_aG_T","collapsed":"collapsed__6AI","sidebarHeader":"sidebarHeader_KGRi","sidebarTitle":"sidebarTitle_r6Dn","collapseButton":"collapseButton_uzbt","sidebarContent":"sidebarContent_dmFt"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/sidebar/Sidebar.tsx
'use client';var _excluded=["children","className","title"];// @types/react's CSSProperties intentionally has no index signature for
// custom properties (see its own doc comment) — widen it here so consumers
// can pass `--midas-sidebar-width` etc. via `style` without a cast.
var Sidebar=function Sidebar(_ref){var _clsx,_clsx2,_clsx3,_clsx4;var children=_ref.children,className=_ref.className,title=_ref.title,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var isMobileDevice=(0,useIsMobileDevice/* useIsMobileDevice */.o)();var _useControlledState=(0,useControlledState/* useControlledState */.P)(props.isCollapsed,props.defaultCollapsed||false,props.onCollapseChange),isCollapsed=_useControlledState[0],setIsCollapsed=_useControlledState[1];var _React$useState=react.useState(false),isTransitioning=_React$useState[0],setIsTransitioning=_React$useState[1];var handlePress=function handlePress(){setIsTransitioning(true);setIsCollapsed(function(previouslyCollapsed){return!previouslyCollapsed;});};var handleTransitionEnd=function handleTransitionEnd(e){if(e.propertyName==='width'&&e.target===e.currentTarget){setIsTransitioning(false);}};return isMobileDevice?null:/*#__PURE__*/(0,jsx_runtime.jsx)(SidebarContext/* SidebarContext */.I.Provider,{value:{isCollapsed:isCollapsed},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(PanelBody/* PanelBody */.l,Object.assign({className:(0,clsx/* default */.A)(className,Sidebar_module.sidebar,(_clsx={},_clsx[Sidebar_module.collapsed]=isCollapsed,_clsx)),"data-transitioning":isTransitioning||undefined,onTransitionEnd:handleTransitionEnd},(0,filterDOMProps/* filterDOMProps */.$)(props,{propNames:new Set(['style'])}),{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(PanelHeader/* PanelHeader */.a,{className:(0,clsx/* default */.A)(Sidebar_module.sidebarHeader,(_clsx2={},_clsx2[Sidebar_module.collapsed]=isCollapsed,_clsx2)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(PanelTitle/* PanelTitle */.x,{className:(0,clsx/* default */.A)(Sidebar_module.sidebarTitle,(_clsx3={},_clsx3[Sidebar_module.collapsed]=isCollapsed,_clsx3)),title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":isCollapsed?strings.format('expandSidebar'):strings.format('collapseSidebar'),onPress:handlePress,variant:"icon",size:"medium",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(Sidebar_module.collapseButton,(_clsx4={},_clsx4[Sidebar_module.collapsed]=isCollapsed,_clsx4)),children:/*#__PURE__*/(0,jsx_runtime.jsx)(panel_left_close/* default */.A,{size:20})})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(PanelContent/* PanelContent */.w,{className:Sidebar_module.sidebarContent,children:children})]}))});};

/***/ },

/***/ 16614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ SidebarContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';var SidebarContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 10855
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useIsMobileDevice)
/* harmony export */ });
/* harmony import */ var _react_spectrum_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13486);
'use client';function useIsMobileDevice(){return (0,_react_spectrum_utils__WEBPACK_IMPORTED_MODULE_0__/* .useMediaQuery */ .U)('(max-width: 640px)');}

/***/ },

/***/ 59644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PanelLeftClose)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
];
const PanelLeftClose = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("panel-left-close", __iconNode);


//# sourceMappingURL=panel-left-close.js.map


/***/ },

/***/ 80964
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Settings)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("settings", __iconNode);


//# sourceMappingURL=settings.js.map


/***/ },

/***/ 48697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("x", __iconNode);


//# sourceMappingURL=x.js.map


/***/ },

/***/ 5987
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $65484d02dcb7eb3e$export$457c3d6518dd4c6f)
/* harmony export */ });
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
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $65484d02dcb7eb3e$var$globalAttrs = new Set([
    'dir',
    'lang',
    'hidden',
    'inert',
    'translate'
]);
const $65484d02dcb7eb3e$var$globalEvents = new Set([
    'onClick',
    'onAuxClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onScroll',
    'onWheel',
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    'onTransitionCancel',
    'onTransitionEnd',
    'onTransitionRun',
    'onTransitionStart'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, global: global, events: events = global, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || global && $65484d02dcb7eb3e$var$globalAttrs.has(prop) || events && ($65484d02dcb7eb3e$var$globalEvents.has(prop) || prop.endsWith('Capture') && $65484d02dcb7eb3e$var$globalEvents.has(prop.slice(0, -7))) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}



//# sourceMappingURL=filterDOMProps.module.js.map


/***/ }

}]);