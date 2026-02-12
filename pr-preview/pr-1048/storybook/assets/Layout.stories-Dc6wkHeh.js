import{j as a,r}from"./iframe-Chekwr6M.js";import{P as y,c as u,p as _}from"./Panel.stories-dftUfFr5.js";import{M as N}from"./menu-DqNCY9P1.js";import{H as x}from"./house-CIAqqn-d.js";import{c as f}from"./createLucideIcon-CPHdlOig.js";import{B as j}from"./Button-D5FNdohA.js";import{N as s}from"./Navigation.stories-DaeHZae2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./clsx-Ciqy0D92.js";import"./NavigationListItem-BhRWf1nx.js";import"./Link-DJuTYe1c.js";import"./utils-Dj64B4Ck.js";import"./useFocusRing-CYwfk9cE.js";import"./index-D2-ul2QH.js";import"./index-BiGwtwNm.js";import"./Text-CNbIZlGx.js";import"./Text-d5-92hiR.js";import"./Tooltip-C2CGfb92.js";import"./OverlayArrow-C_kKr4TA.js";import"./number-DfkVkf0F.js";import"./useResizeObserver-Dp5qH922.js";import"./useControlledState-CLkXqHsM.js";import"./animation-mznppo_U.js";import"./panel-left-open-CWfpf_sS.js";import"./x-DVt_hLRk.js";import"./Button.module-Co5e5YHp.js";import"./Button-Z4awFVTj.js";import"./Hidden-Dy--Tx0W.js";import"./useLabels-DDXNXFW7.js";import"./useButton-D4rnmHPz.js";import"./useLocalizedStringFormatter-BFGhiOXi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-CfeHWJtp.js";import"./Dialog-BkMCqRU4.js";import"./RSPContexts-B-5HPXFu.js";import"./Collection-C8suguH5.js";import"./index-DBBfNPs6.js";import"./Separator-BsKQl79r.js";import"./SelectionManager-CCLf1y3R.js";import"./useEvent-Du-C-SwK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5UMCGiW.js";import"./useDescription-BaU05DyX.js";import"./ListKeyboardDelegate-C97Cy8pc.js";import"./PressResponder-jE3E7TsH.js";import"./useLocalizedStringFormatter-PB5CwfUm.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-B37h07YR.js";import"./plus-8gL6ZOKN.js";import"./save-j7w9vXrp.js";import"./user-qel7kIwA.js";import"./BadgeContainer-D8t5YnNl.js";const I=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],C=f("list",I),L="_layout_15ygh_1",b={layout:L},o=({children:t})=>a.jsx("div",{className:b.layout,children:t});try{o.displayName="Layout",o.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const k="_header_13yz9_1",P={header:k},i=({children:t})=>a.jsx("header",{className:P.header,children:t});try{i.displayName="Header",i.__docgenInfo={description:"",displayName:"Header",props:{}}}catch{}const H="_navbar_zxsyj_1",O={navbar:H},n=({children:t})=>a.jsx("nav",{className:O.navbar,children:t});try{n.displayName="Navbar",n.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const{Collapse:M}=u(_),Ma={component:o,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},e={render:({children:t,...p})=>{const l=r.useId(),[m,d]=r.useState(!1),[c,g]=r.useState(!1),h=()=>d(v=>!v);return a.jsxs(o,{...p,children:[a.jsx(i,{children:a.jsx(j,{"aria-controls":l,"aria-expanded":m,"aria-haspopup":"dialog",icon:N,onPress:h,variant:"icon"})}),a.jsx(M,{isCollapsed:c,onCollapseChange:g}),a.jsx("main",{style:{height:"5rem",padding:"1rem"},children:t}),a.jsx(y,{"aria-label":"right panel",style:{gridArea:"panelRight"},children:"Panel"}),a.jsx(n,{children:a.jsxs("ul",{children:[a.jsx(s.Link,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:a.jsx(x,{})}),a.jsx(s.Link,{href:"/categories",variant:"navbar",title:"Kategorier",children:a.jsx(C,{})})]})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
