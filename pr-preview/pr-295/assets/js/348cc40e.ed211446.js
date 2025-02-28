"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4741],{

/***/ 33618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AppExample: () => (/* binding */ AppExample),
  Example: () => (/* binding */ Example),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_layout_mdx_348_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-layout-mdx-348.json
const site_docs_components_layout_mdx_348_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/layout","title":"Layout","description":"En skalkomponent för att få en simpel sidomeny och sidhuvud.","source":"@site/docs/components/layout.mdx","sourceDirName":"components","slug":"/components/layout","permalink":"/pr-preview/pr-295/components/layout","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Layout","description":"En skalkomponent för att få en simpel sidomeny och sidhuvud.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
;// ./packages/components/src/layout/Layout.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","primaryBackground":"#143c50","mediumWeight":"500","gray10":"#f2f2f2","gray20":"#e6e6e6","gray30":"#d9d9d9","gray60":"#b3b3b3","gray70":"#a6a6a6","gray130":"#5d5d5d","gray150":"#1f1f1f","mdBreakpoint":"(min-width: 768px)","logoPrimary":"#b90835","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","baseLayout":"baseLayout_zbio","mainContent":"mainContent_gC2_","header":"header_uiom","headerContent":"headerContent_jYo4","headerItems":"headerItems_lrOS","logo":"logo_gBzW","headerMenu":"headerMenu_hZgW","toggleButton":"toggleButton_fPrO","sidebar":"sidebar_QHDx","main":"main_PWyq","app":"app_fqnG","sidebarOpened":"sidebarOpened_UxQW","sidebarFooter":"sidebarFooter_tnhI","appName":"appName_o_3G","collapseButton":"collapseButton_Pyn1","sidebarCollapsed":"sidebarCollapsed_qhwX","sidebarHeader":"sidebarHeader_tAp9","userName":"userName_eZUA","abbr":"abbr_ynpm","userTitle":"userTitle_YOqq","title":"title_lFs8","sidebarNav":"sidebarNav_dmzl","list":"list_HkzA","listGroupTitle":"listGroupTitle_S4qt","listItem":"listItem_dsWx","listItemCollapsed":"listItemCollapsed__wa3","listLink":"listLink_U9e2","listLinkCollapsed":"listLinkCollapsed_WIQq","active":"active_ZbOm","linkText":"linkText_kr67","backdrop":"backdrop_qjXm","backdropOpened":"backdropOpened_1RGb","skipToContent":"skipToContent_ihMq"});
// EXTERNAL MODULE: ./packages/components/src/flex/FlexItem.tsx
var FlexItem = __webpack_require__(52981);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/panel-left-open.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const PanelLeftOpen = (0,createLucideIcon/* default */.A)("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);


//# sourceMappingURL=panel-left-open.js.map

;// ./node_modules/lucide-react/dist/esm/icons/panel-left-close.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const PanelLeftClose = (0,createLucideIcon/* default */.A)("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);


//# sourceMappingURL=panel-left-close.js.map

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(39051);
;// ./packages/components/src/layout/context/LayoutContext.tsx
var LayoutContext=/*#__PURE__*/react.createContext(undefined);var LayoutProvider=function LayoutProvider(_ref){var items=_ref.items,title=_ref.title,user=_ref.user,app=_ref.app,children=_ref.children,clientSideRouter=_ref.clientSideRouter,clientSideHref=_ref.clientSideHref,headerChildren=_ref.headerChildren,isCollapsed=_ref.isCollapsed,setIsCollapsed=_ref.setIsCollapsed,isOpened=_ref.isOpened,setIsOpened=_ref.setIsOpened;return/*#__PURE__*/(0,jsx_runtime.jsx)(LayoutContext.Provider,{value:{items:items,title:title,user:user,app:app,headerChildren:headerChildren,isCollapsed:isCollapsed,setIsCollapsed:setIsCollapsed,isOpened:isOpened,setIsOpened:setIsOpened,clientSideRouter:clientSideRouter,clientSideHref:clientSideHref},children:children});};var useLayoutContext=function useLayoutContext(){var context=react.useContext(LayoutContext);if(!context){throw new Error('useLayoutContext must be used within a LayoutProvider');}return context;};
;// ./packages/components/src/layout/components/SidebarLink.tsx
'use client';var SidebarLink=function SidebarLink(_ref){var title=_ref.title,href=_ref.href,IconComponent=_ref.icon,active=_ref.active;var _useLayoutContext=useLayoutContext(),isCollapsed=_useLayoutContext.isCollapsed,setIsOpened=_useLayoutContext.setIsOpened;var _React$useState=react.useState(false),isActive=_React$useState[0],setIsActive=_React$useState[1];react.useEffect(function(){if(typeof window!=='undefined'){setIsActive(active!=null?active:window.location.pathname===href);}},[active,href]);if(isCollapsed)return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,{href:href,"aria-label":title,className:(0,clsx/* default */.A)(Layout_module.listLink,Layout_module.listLinkCollapsed,isActive&&Layout_module.active),onPress:function onPress(){return setIsOpened(false);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,"aria-label":title})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{placement:"right",children:title})]});return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* Link */.N,{href:href,"aria-label":title,className:(0,clsx/* default */.A)(Layout_module.listLink,isActive&&Layout_module.active),onPress:function onPress(){return setIsOpened(false);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20}),title]});};
;// ./packages/components/src/layout/components/Sidebar.tsx
'use client';var Sidebar=function Sidebar(){var _useLayoutContext=useLayoutContext(),items=_useLayoutContext.items,app=_useLayoutContext.app,isOpened=_useLayoutContext.isOpened,isCollapsed=_useLayoutContext.isCollapsed,setIsCollapsed=_useLayoutContext.setIsCollapsed,setIsOpened=_useLayoutContext.setIsOpened,clientSideRouter=_useLayoutContext.clientSideRouter,clientSideHref=_useLayoutContext.clientSideHref;var LinkTree=function LinkTree(_ref){var group=_ref.group;return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:Layout_module.list,children:group.items.map(function(link,i){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(0,clsx/* default */.A)(Layout_module.listItem,isCollapsed&&Layout_module.listItemCollapsed),children:/*#__PURE__*/(0,jsx_runtime.jsx)(SidebarLink,Object.assign({},link))},'link_'+i);})});};react.useEffect(function(){var handleEsc=function handleEsc(event){if(event.key==='Escape'){setIsOpened(false);}};window.addEventListener('keydown',handleEsc);return function(){window.removeEventListener('keydown',handleEsc);};},[setIsOpened]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("aside",{id:"midasMainMenu",className:(0,clsx/* default */.A)(Layout_module.sidebar,isCollapsed&&Layout_module.sidebarCollapsed,isOpened&&Layout_module.sidebarOpened),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{className:Layout_module.sidebarNav,children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:Layout_module.list,children:items.map(function(group,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[group.title&&!isCollapsed&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Layout_module.listGroupTitle,children:group.title}),clientSideRouter?/*#__PURE__*/(0,jsx_runtime.jsx)(openLink/* RouterProvider */.pg,{navigate:clientSideRouter,useHref:clientSideHref,children:/*#__PURE__*/(0,jsx_runtime.jsx)(LinkTree,{group:group})}):/*#__PURE__*/(0,jsx_runtime.jsx)(LinkTree,{group:group})]},'list_'+i);})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_module.sidebarFooter,children:[!isCollapsed&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Layout_module.appName,children:app.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary","aria-label":isCollapsed?'Maximera sidomenyn':'Minimera sidomenyn',onPress:function onPress(){return setIsCollapsed(!isCollapsed);},className:Layout_module.collapseButton,children:isCollapsed?/*#__PURE__*/(0,jsx_runtime.jsx)(PanelLeftOpen,{size:20}):/*#__PURE__*/(0,jsx_runtime.jsx)(PanelLeftClose,{size:20})})]})]});};
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(66995);
// EXTERNAL MODULE: ./packages/components/src/logo/Logo.tsx + 1 modules
var Logo = __webpack_require__(17911);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./node_modules/lucide-react/dist/esm/icons/menu.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Menu = (0,createLucideIcon/* default */.A)("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);


//# sourceMappingURL=menu.js.map

// EXTERNAL MODULE: ./packages/components/src/dropdown/Dropdown.tsx + 1 modules
var Dropdown = __webpack_require__(94623);
;// ./packages/components/src/layout/components/Header.tsx
'use client';var Header=function Header(){var _useLayoutContext=useLayoutContext(),title=_useLayoutContext.title,user=_useLayoutContext.user,app=_useLayoutContext.app,isOpened=_useLayoutContext.isOpened,setIsOpened=_useLayoutContext.setIsOpened,setIsCollapsed=_useLayoutContext.setIsCollapsed,headerChildren=_useLayoutContext.headerChildren;return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:Layout_module.header,style:{borderTop:"solid 4px "+(app.color?app.color:tokens.midasColors.logoPrimary)},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_module.headerContent,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* Logo */.g,{padding:false,size:"small",className:Layout_module.logo}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",className:Layout_module.toggleButton,"aria-label":isOpened?'Stäng meny':'Öppna meny',"aria-controls":"midasMainMenu",onPressStart:function onPressStart(){setIsCollapsed(false);setIsOpened(true);},children:isOpened?/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":"true"}):/*#__PURE__*/(0,jsx_runtime.jsx)(Menu,{size:20,"aria-hidden":"true"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Layout_module.userName,children:user.name}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Layout_module.userTitle,children:user.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Layout_module.title,children:title})]})]}),headerChildren&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Layout_module.headerItems,children:headerChildren}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Layout_module.headerMenu,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dropdown/* Dropdown */.m,{label:"\xD6ppna meny",children:react.Children.map(headerChildren,function(child){return/*#__PURE__*/(0,jsx_runtime.jsx)(Dropdown/* DropdownItem */.t,{children:child});})})})]})]});};
;// ./packages/components/src/layout/components/SkipLink.tsx
'use client';var SkipLink=function SkipLink(_ref){var _ref$id=_ref.id,id=_ref$id===void 0?'#main:first-of-type':_ref$id;var handleSkipToContent=function handleSkipToContent(){var container=document.querySelector(id);if(container){container.tabIndex=-1;container.focus();setTimeout(function(){return container.removeAttribute('tabindex');},1000);}};return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:handleSkipToContent,className:Layout_module.skipToContent,children:"Hoppa till huvudinneh\xE5ll"});};
;// ./packages/components/src/layout/components/Backdrop.tsx
var Backdrop=function Backdrop(){var _useLayoutContext=useLayoutContext(),isOpened=_useLayoutContext.isOpened,setIsOpened=_useLayoutContext.setIsOpened;if(!isOpened)return null;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(Layout_module.backdrop,Layout_module.backdropOpened),onClick:function onClick(){setIsOpened(false);},"aria-hidden":true});};
;// ./packages/components/src/layout/Layout.tsx
'use client';var _Layout=function Layout(_ref){var items=_ref.items,title=_ref.title,user=_ref.user,app=_ref.app,children=_ref.children,headerChildren=_ref.headerChildren,clientSideRouter=_ref.clientSideRouter,clientSideHref=_ref.clientSideHref;var _React$useState=react.useState(false),isCollapsed=_React$useState[0],setIsCollapsed=_React$useState[1];var _React$useState2=react.useState(false),isOpened=_React$useState2[0],setIsOpened=_React$useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(_Layout.Provider,{items:items,title:title,user:user,app:app,clientSideRouter:clientSideRouter,clientSideHref:clientSideHref,headerChildren:headerChildren,isCollapsed:isCollapsed,setIsCollapsed:setIsCollapsed,isOpened:isOpened,setIsOpened:setIsOpened,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_module.baseLayout,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SkipLink,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(_Layout.Header,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_module.mainContent,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(_Layout.Sidebar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:Layout_module.main,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Layout_module.app,children:children})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Backdrop,{})]})]})});};_Layout.Provider=LayoutProvider;_Layout.Header=Header;_Layout.Sidebar=Sidebar;_Layout.SidebarLink=SidebarLink;
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 2 modules
var LinkButton = __webpack_require__(1353);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./node_modules/lucide-react/dist/esm/icons/calendar.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Calendar = (0,createLucideIcon/* default */.A)("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);


//# sourceMappingURL=calendar.js.map

;// ./node_modules/lucide-react/dist/esm/icons/gavel.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Gavel = (0,createLucideIcon/* default */.A)("Gavel", [
  ["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8", key: "15492f" }],
  ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
  ["path", { d: "m8 8 6-6", key: "18bi4p" }],
  ["path", { d: "m9 7 8 8", key: "5jnvq1" }],
  ["path", { d: "m21 11-8-8", key: "z4y7zo" }]
]);


//# sourceMappingURL=gavel.js.map

;// ./node_modules/lucide-react/dist/esm/icons/house.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const House = (0,createLucideIcon/* default */.A)("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
]);


//# sourceMappingURL=house.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(80697);
;// ./node_modules/lucide-react/dist/esm/icons/clipboard-list.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ClipboardList = (0,createLucideIcon/* default */.A)("ClipboardList", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);


//# sourceMappingURL=clipboard-list.js.map

;// ./apps/docs/docs/components/layout.mdx


const frontMatter = {
	title: 'Layout',
	description: 'En skalkomponent för att få en simpel sidomeny och sidhuvud.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};











const AppExample = () => {
  return (0,jsx_runtime.jsx)("div", {
    style: {
      background: tokens.baseColors.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      border: `dotted 2px ${tokens.baseColors.gray20}`
    },
    children: "Din applikation"
  });
};
const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Layout: _Layout,
      LinkButton: LinkButton/* LinkButton */.z,
      Calendar: Calendar,
      Gavel: Gavel,
      House: House,
      Plus: plus/* default */.A,
      ClipboardList: ClipboardList,
      AppExample
    },
    ...props,
    children: `<Layout
        items={[{
          items: [
            {
              title: 'Översikt',
              href: '#',
              icon: House
            }
          ]
        },
        {
          title: 'Ansökan',
          items: [
            {
              title: 'Skapa ansökan',
              href: '#',
              icon: Plus
            },
            {
              title: 'Beslut',
              href: '#',
              icon: Gavel
            }
          ]
        },
        {
          title: 'Kort och konto',
          items: [
            {
              title: 'LMA-kort',
              href: '#',
              icon: Calendar
            },
            {
              title: 'Avvikelser',
              href: '#',
              icon: ClipboardList
            }
          ]
        }]}
        title='Skapa ansökningar'
        user={{ name: 'Namn Namnsson', title: 'Roll eller behörighet' }}
        app={{ name: 'Namn på applikationen' }}
        headerChildren={
          <LinkButton
            variant='tertiary'
            target='_blank'
          >
            Öppna annan tjänst
          </LinkButton>
        }
      >
          <AppExample /> 
      </Layout>`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Använda separat",
  "id": "använda-separat",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Layout',
      friendlyName: "Meny, baslayout, sidomeny, sidhuvud",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En skalkomponent för att få en simpel sidomeny och sidhuvud."
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
        children: "import { Layout } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "använda-separat",
      children: "Använda separat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det går att importera sidomenyn samt sidhuvudet som separata komponenter om så önskas, det är dock rekommenderat att använda hela Layoutkomponenten."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout.Header, Layout.Sidebar } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kommer snart"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Layout'
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

/***/ 94623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Dropdown),
  t: () => (/* binding */ DropdownItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Menu.mjs + 7 modules
var Menu = __webpack_require__(6484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 40 modules
var Popover = __webpack_require__(20699);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var ellipsis_vertical = __webpack_require__(3213);
;// ./packages/components/src/dropdown/Dropdown.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Dropdown_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","gray10":"#f2f2f2","dropDownMenu":"dropDownMenu_VQGa","dropdownMenu":"dropdownMenu_OMSj"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/dropdown/Dropdown.tsx
var _excluded=["label","title","children"];function Dropdown(_ref){var label=_ref.label,title=_ref.title,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Menu/* MenuTrigger */.cQ,Object.assign({},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{"aria-label":label||props['aria-label'],variant:"icon",children:[title,/*#__PURE__*/(0,jsx_runtime.jsx)(ellipsis_vertical/* default */.A,{size:20,"aria-hidden":true})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Menu/* Menu */.W1,Object.assign({},props,{className:Dropdown_module.dropDownMenu,children:children}))})]}));}function DropdownItem(props){var textValue=props.textValue||(typeof props.children==='string'?props.children:undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(Menu/* MenuItem */.Dr,Object.assign({},props,{textValue:textValue,className:function className(_ref2){var isFocused=_ref2.isFocused,isOpen=_ref2.isOpen;return Dropdown_module.dropdownMenu+" "+(isFocused?'focused':'')+" "+(isOpen?'open':'');},children:function children(_ref3){var hasSubmenu=_ref3.hasSubmenu;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[props.children,hasSubmenu&&/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{className:"chevron",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"m9 18 6-6-6-6"})})]});}}));}

/***/ }),

/***/ 17911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/logo/Logo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_module = ({"tokens":"\"../theme/tokens.css\"","red100":"#b90835","black":"#000000","gray130":"#5d5d5d","white":"#ffffff","container":"container_U3H4","noPadding":"noPadding__BF5","logo":"logo_GI7z","primary":"primary_TCiF","dark":"dark_F_Ks","xSmall":"xSmall_IZ4K","small":"small_KAZl","large":"large_iAB3","backgroundPrimary":"backgroundPrimary_qYL9","backgroundDark":"backgroundDark_UHEQ"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/logo/Logo.tsx
var _excluded=["primary","size","background","padding","className"];var Logo=function Logo(_ref){var _ref$primary=_ref.primary,primary=_ref$primary===void 0?true:_ref$primary,_ref$size=_ref.size,size=_ref$size===void 0?'medium':_ref$size,_ref$background=_ref.background,background=_ref$background===void 0?false:_ref$background,_ref$padding=_ref.padding,padding=_ref$padding===void 0?true:_ref$padding,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames=(0,clsx/* default */.A)(Logo_module.logo,primary?Logo_module.primary:Logo_module.dark,size==='x-small'&&Logo_module.xSmall,size==='small'&&Logo_module.small,size==='medium'&&Logo_module.medium,size==='large'&&Logo_module.large);var SVG=function SVG(){if(size==='x-small')return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 92",className:classNames,role:"img","aria-hidden":"false",focusable:"false","aria-label":"Migrationsverkets logotyp",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.99,91.69c-1.84-1.11-4.05-4.55-4.05-9.46V9.15c0-4.79,1.96-7.25,3.81-8.85h-14.75l-33.91,65.47L12.41.3H0c1.6,1.59,3.93,3.07,3.93,8.23v75.55c0,3.56-2.21,6.51-3.81,7.61h16.34c-1.72-1.22-3.93-4.18-3.93-7.98V25.97l36.24,61.42,33.04-63.26v58.96c0,5.53-2.21,7.61-3.81,8.6h21.99Z"})});return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 112 40",className:classNames,"aria-hidden":"false",focusable:"false","aria-label":"Migrationsverkets logotyp",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M97.78,21.61c-7.48-9.73-20.06-16.03-34.32-16.03-13.07,0-24.86,5.27-32.46,13.65,6.56-5.83,15.64-9.44,25.66-9.44,11.37,0,21.52,4.56,28.18,11.83h12.94Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.45,12.58C70.67-1.51,41.26,2.77,27.49,21.61h-12.23C30.56-2.89,68.29-7.47,90.45,12.58h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.89,37.13c-.22-.13-.48-.53-.48-1.11v-8.58c0-.56.23-.85.45-1.04h-1.73l-3.98,7.69-4.54-7.69H.15c.19.19.46.36.46.97v8.87c0,.42-.26.76-.45.89h1.92c-.2-.14-.46-.49-.46-.94v-6.78l4.25,7.21,3.88-7.43v6.92c0,.65-.26.89-.45,1.01h2.58Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M15.81,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM16.22,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M24.52,30.97c-.04-.33-.17-.68-.37-.95h-1.36c-.29-.26-.87-.58-1.96-.58-1.53,0-2.8.92-2.8,2.58,0,1.02.52,1.86,1.31,2.26-.43.37-1.38.98-1.38,1.61,0,.71.79.99,1.38,1.1-.88.26-1.67.82-1.67,1.59,0,1.14,1.73,1.41,2.64,1.41,1.54,0,3.91-.78,3.91-2.64,0-1.21-1.23-1.49-2.22-1.5-2.42-.06-2.51-.2-2.51-.56,0-.2.42-.68.55-.81.23.03.48.06.71.06,1.76,0,2.93-.94,2.93-2.7,0-.48-.14-.91-.29-1.11.12-.04.25-.04.37-.04.27,0,.55.12.76.27h0ZM22.27,32.21c0,.79-.37,1.61-1.36,1.61-1.07,0-1.47-1.21-1.47-2.09,0-.95.5-1.57,1.31-1.57,1.2,0,1.51,1.25,1.51,2.05h0ZM22.89,37.92c0,.76-.82,1.31-1.93,1.31-.59,0-1.7-.3-1.69-1.15,0-.45.26-.74.59-.99l1.96.04c.5.01,1.07.1,1.07.79h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M30.11,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M36.87,37.13c-.37-.33-.43-.59-.43-1.25v-3.89c0-2.21-1.43-2.55-2.8-2.55-.61,0-1.67.22-2.03.42-.2.4-.3,1.24-.4,1.67.46-.56,1.27-1.37,2.39-1.37,1.18,0,1.36.82,1.36,1.7v.39l-2.21.76c-1.04.36-1.87,1.08-1.87,2.26,0,1.31.88,2.08,2.15,2.08.87,0,1.46-.43,1.93-.94v.72h1.92ZM34.95,35.62c-.26.32-.74.85-1.37.85-.75,0-1.18-.79-1.18-1.54,0-.71.35-1.15.89-1.37l1.66-.63v2.7h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M42.58,36.15c-.29.27-.71.46-1.11.46-.87,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M45.63,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM46.04,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M54.96,33.37c0-2.06-1.3-3.95-3.5-3.95s-3.84,1.76-3.84,4.01c0,2.06,1.28,3.95,3.49,3.95s3.85-1.76,3.85-4.01h0ZM53.43,34.04c0,1.27-.52,2.57-1.86,2.57-1.79,0-2.42-2.44-2.42-3.86,0-1.21.48-2.57,1.87-2.57,1.79,0,2.41,2.44,2.41,3.86h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M63.37,37.13c-.27-.22-.45-.42-.45-1.11v-3.94c0-1.63-.39-2.64-2.18-2.64-1.01,0-1.79.56-2.38,1.12v-.91h-1.98c.3.17.49.46.49,1.05v5.33c0,.59-.14.88-.48,1.08h2.39c-.23-.23-.43-.37-.43-1.17v-4.4c.32-.45,1.07-1.24,1.85-1.24,1.01,0,1.23,1.01,1.23,1.8v3.95c0,.74-.26.87-.46,1.05h2.39Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M69.79,35.2c0-2.21-3.42-2.71-3.42-4.07,0-.75.71-.98,1.34-.98s1.33.29,1.74.81l-.07-1.18c-.46-.17-1.11-.35-1.69-.35-1.44,0-2.68.63-2.68,1.89,0,2.36,3.46,2.68,3.46,4.25,0,.79-.62,1.05-1.31,1.05-1.01,0-1.86-.46-2.52-1.21v.1c0,.4-.03.99.3,1.27.53.43,1.53.56,2.18.56,1.36,0,2.67-.62,2.67-2.15h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M77.98,29.66h-1.43c.13.1.11.56-.19,1.33l-1.86,4.72-1.87-4.7c-.26-.65-.32-1.15-.16-1.34h-2.06c.19.1.49.85.82,1.67l2.31,5.8h1.31l2.35-5.97c.32-.81.56-1.36.78-1.5h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M84.91,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM83.34,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.95,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.79,37.16c-2.26-.37-2.49-4.04-4.7-4.04l2.62-2.8c.22-.23.5-.48.75-.66h-1.77c.14.14.13.39-.13.66l-2.65,2.83v-7.07h-1.98c.33.2.49.56.49,1.01v9.01c0,.58-.22.81-.46,1.02h2.35c-.26-.25-.4-.49-.4-1.02v-2.57c.27,0,.62.13.82.26,1.28.82,1.95,3.11,2.67,3.45.14.07.94.1,1.14.1.45,0,.84-.03,1.25-.19h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M106.3,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM104.73,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M111.85,36.15c-.29.27-.71.46-1.11.46-.86,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"})]});};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Logo_module.container,padding===false&&Logo_module.noPadding,background?primary?Logo_module.backgroundPrimary:Logo_module.backgroundDark:null,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SVG,{})}));};

/***/ }),

/***/ 66995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessibility: () => (/* binding */ accessibility),
/* harmony export */   baseColors: () => (/* binding */ baseColors),
/* harmony export */   borderRadius: () => (/* binding */ borderRadius),
/* harmony export */   borderWidths: () => (/* binding */ borderWidths),
/* harmony export */   boxShadow: () => (/* binding */ boxShadow),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   buttonColors: () => (/* binding */ buttonColors),
/* harmony export */   font: () => (/* binding */ font),
/* harmony export */   fontSizes: () => (/* binding */ fontSizes),
/* harmony export */   fontWeights: () => (/* binding */ fontWeights),
/* harmony export */   inputColor: () => (/* binding */ inputColor),
/* harmony export */   midasColors: () => (/* binding */ midasColors),
/* harmony export */   midasTransitions: () => (/* binding */ midasTransitions),
/* harmony export */   signalColors: () => (/* binding */ signalColors)
/* harmony export */ });
var baseColors={white:'#ffffff',black:'#000000',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray130:'#5d5d5d',gray150:'#1f1f1f',red10:'#f7e9e7',red20:'#f1d4d1',red30:'#e9beba',red40:'#e2a8a4',red50:'#d9918e',red60:'#d37a7a',red70:'#cc6467',red80:'#c54c56',red90:'#be3345',red100:'#b90835',red130:'#8b1327',red150:'#641018',blue10:'#eaf2f6',blue20:'#d5e5ed',blue30:'#c0d7e4',blue40:'#abcbdb',blue50:'#94bcd1',blue60:'#82b0c9',blue70:'#6ca3c0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue130:'#25607f',blue150:'#143c50'};var buttonColors={outline:'#303030',primaryBackground:baseColors['blue150'],primaryText:'#303030',primaryHover:baseColors['blue130'],primaryFocus:baseColors['black'],primaryActive:'#4289ae',secondaryBackground:baseColors['gray130'],secondaryText:baseColors['white'],secondaryHover:'#303030',secondaryActive:'#303030'};var inputColor={inputText:baseColors['gray150']};var signalColors={signalGreen10:'#d5f2d9',signalGreen100:'#008d3c',signalBlue10:baseColors['blue10'],signalBlue100:'#0066cc',signalYellow10:'#fff8e1',signalYellow100:'#f1c21b',signalRed10:'#ffdfdf',signalRed100:'#e62323',signalRed130:'#b31b1b',signalRed150:'#801313'};var borderRadius={sRadius:' 0.125rem',// 2px
mRadius:' 0.25rem'// 4px
};var borderWidths={xsWidth:' 0.0625rem',// 1px
sWidth:' 0.125rem',// 2px
mWidth:' 0.25rem'// 4px
};var fontWeights={lightWeight:'300',regularWeight:'400',mediumWeight:'500',semiBoldWeight:'600',boldWeight:'700',blackWeight:'900'};var fontSizes={desktopSize:'1rem',mobileSize:'1rem',largeSize:'1.5rem',inputNormalSize:'0.875rem',inputMessageSize:'0.75rem',inputLabelSize:'1rem',inputDescriptionSize:'0.875rem'};var midasColors={logoPrimary:baseColors['red100'],logoSecondary:baseColors['white'],textPrimary:baseColors['gray150'],textSecondary:baseColors['white'],textTertiary:baseColors['red100'],link:baseColors['blue130'],linkVisited:'#663366',backgroundPrimary:baseColors['white'],backgroundSecondary:baseColors['gray10'],backgroundFooter1:baseColors['red100'],backgroundFooter2:baseColors['red130'],backgroundInfo:baseColors['blue10'],backgroundImportant:signalColors['signalYellow10'],borderPrimary:baseColors['black'],borderSecondary:baseColors['gray60'],borderFocusOuter:baseColors['black'],borderFocusInner:baseColors['white'],iconPrimary:baseColors['black'],iconInverted:baseColors['white']};var midasTransitions={slowTransition:'500ms',normalTransition:'300ms',fastTransition:'250ms'};var breakpoints={smBreakpoint:'(max-width: 767px)',mdBreakpoint:'(min-width: 768px)',lgBreakpoint:'(min-width: 1200px)',xlBreakpoint:'(min-width: 1440px)'};var accessibility={forcedColorsMode:'(forced-colors: active)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var font={display:'"Inter", sans-serif'};var boxShadow={focus:'0 0 0 2px white, 0 0 0 4px black'};

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
/* harmony default export */ const Tooltip_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","gray150":"#1f1f1f","tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tooltip.mjs + 4 modules
var Tooltip = __webpack_require__(9741);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tooltip/Tooltip.tsx
var _excluded=["children","placement","className"],_excluded2=["children","delay"];function Tooltip_Tooltip(_ref){var children=_ref.children,placement=_ref.placement,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* Tooltip */.m_,Object.assign({className:(0,clsx/* default */.A)(Tooltip_module.tooltip,className),placement:placement},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Tooltip_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}function TooltipTrigger(_ref2){var children=_ref2.children,_ref2$delay=_ref2.delay,delay=_ref2$delay===void 0?0:_ref2$delay,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* TooltipTrigger */.k$,Object.assign({delay:delay},props,{children:children}));}

/***/ }),

/***/ 3213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ EllipsisVertical)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const EllipsisVertical = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);


//# sourceMappingURL=ellipsis-vertical.js.map


/***/ }),

/***/ 80697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);


//# sourceMappingURL=plus.js.map


/***/ }),

/***/ 48697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ 37061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $313b98861ee5dd6c$export$d6875122194c7b44)
/* harmony export */ });
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84137);


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
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, _useId_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}



//# sourceMappingURL=useLabels.module.js.map


/***/ }),

/***/ 27279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $514c0188e459b4c0$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $514c0188e459b4c0$export$9afb8bc826b033ea)
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

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: ElementType = 'span', ...domProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.module.js.map


/***/ })

}]);