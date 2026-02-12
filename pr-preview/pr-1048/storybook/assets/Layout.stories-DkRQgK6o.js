import{j as a,r}from"./iframe-MVim3oui.js";import{P as y,c as u,p as _}from"./Panel.stories-BEdeLVAt.js";import{M as N}from"./menu-B1cJwoEX.js";import{H as x}from"./house-DhqmG1JU.js";import{c as f}from"./createLucideIcon-DbJYazUv.js";import{B as j}from"./Button-DXLRWKWN.js";import{N as s}from"./Navigation.stories-BL9X6h3-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./clsx-Ciqy0D92.js";import"./x-5DuCkJ-_.js";import"./Text-BRJKcgIb.js";import"./Text-CK8mjed6.js";import"./utils-GfAQeq6-.js";import"./NavigationListItem-Cxn9cqbi.js";import"./Link-CGiGNx50.js";import"./useFocusRing-DsxBFZ5w.js";import"./index-DV_xb9Te.js";import"./index-BgBUqlNN.js";import"./Tooltip-PnsnhiuB.js";import"./OverlayArrow-hTWNmnYT.js";import"./number-DfkVkf0F.js";import"./useResizeObserver-C5DKMkSY.js";import"./useControlledState-BAKDmaF6.js";import"./animation-Dvt4J9QX.js";import"./panel-left-open-uqkaFMqU.js";import"./Button.module-Co5e5YHp.js";import"./Button-gb006erw.js";import"./Hidden-BnPFK6GE.js";import"./useLabels-CDhm4meR.js";import"./useButton-BYX1uAmK.js";import"./useLocalizedStringFormatter-CQ2i-Pxa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-D4ii-ukQ.js";import"./Dialog-BM6h7Qhq.js";import"./RSPContexts-CtooKiU1.js";import"./Collection-D1rnK3KC.js";import"./index-CoAcmiIB.js";import"./Separator-CZ8vG12I.js";import"./SelectionManager-o82G2AiP.js";import"./useEvent-BkJEM1S7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgPVTL_o.js";import"./useDescription-DDMJG_rN.js";import"./ListKeyboardDelegate-CQxknM_9.js";import"./PressResponder-BdCrncWf.js";import"./useLocalizedStringFormatter-BVBlcDTw.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-DpvYgo_g.js";import"./plus-D5H_hlz5.js";import"./save-MZBy5waJ.js";import"./user-Dvflh-NF.js";import"./BadgeContainer-C5wKboGf.js";const I=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],C=f("list",I),L="_layout_15ygh_1",b={layout:L},o=({children:t})=>a.jsx("div",{className:b.layout,children:t});try{o.displayName="Layout",o.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const k="_header_13yz9_1",P={header:k},i=({children:t})=>a.jsx("header",{className:P.header,children:t});try{i.displayName="Header",i.__docgenInfo={description:"",displayName:"Header",props:{}}}catch{}const H="_navbar_zxsyj_1",O={navbar:H},n=({children:t})=>a.jsx("nav",{className:O.navbar,children:t});try{n.displayName="Navbar",n.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const{Collapse:M}=u(_),Ma={component:o,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},e={render:({children:t,...p})=>{const l=r.useId(),[m,d]=r.useState(!1),[c,g]=r.useState(!1),h=()=>d(v=>!v);return a.jsxs(o,{...p,children:[a.jsx(i,{children:a.jsx(j,{"aria-controls":l,"aria-expanded":m,"aria-haspopup":"dialog",icon:N,onPress:h,variant:"icon"})}),a.jsx(M,{isCollapsed:c,onCollapseChange:g}),a.jsx("main",{style:{height:"5rem",padding:"1rem"},children:t}),a.jsx(y,{"aria-label":"right panel",style:{gridArea:"panelRight"},children:"Panel"}),a.jsx(n,{children:a.jsxs("ul",{children:[a.jsx(s.Link,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:a.jsx(x,{})}),a.jsx(s.Link,{href:"/categories",variant:"navbar",title:"Kategorier",children:a.jsx(C,{})})]})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    const drawerId = useId();
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);
    const toggleIsNavigationOpen = () => setIsNavigationOpen(x => !x);
    return <Layout {...rest}>
        <Header>
          <Button aria-controls={drawerId} aria-expanded={isNavigationOpen} aria-haspopup='dialog' icon={Menu} onPress={toggleIsNavigationOpen} variant='icon' />
        </Header>
        <CollapsePanel isCollapsed={isNavigationCollapsed} onCollapseChange={setIsNavigationCollapsed} />
        <main style={{
        height: '5rem',
        padding: '1rem'
      }}>{children}</main>
        <Panel aria-label='right panel' style={{
        gridArea: 'panelRight'
      }}>
          Panel
        </Panel>
        <Navbar>
          <ul>
            <Navigation.Link href='/' isActive variant='navbar' title='Hem'>
              <House />
            </Navigation.Link>
            <Navigation.Link href='/categories' variant='navbar' title='Kategorier'>
              <List />
            </Navigation.Link>
          </ul>
        </Navbar>
      </Layout>;
  }
}`,...e.parameters?.docs?.source}}};const Sa=["Primary"];export{e as Primary,Sa as __namedExportsOrder,Ma as default};
