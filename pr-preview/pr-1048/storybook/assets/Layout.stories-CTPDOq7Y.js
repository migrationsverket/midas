import{j as a,r}from"./iframe-f5MFKuki.js";import{P as y,c as u,p as _}from"./Panel.stories-DwPyXZwa.js";import{M as N}from"./menu-D3kYknQZ.js";import{H as x}from"./house-BsuuB1v3.js";import{c as f}from"./createLucideIcon-BR5g7LJ9.js";import{B as j}from"./Button-BxqYbrPc.js";import{N as s}from"./Navigation.stories-_374o1Is.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./NavigationListItem-DKSbVLOD.js";import"./Link-BbDlV48T.js";import"./utils-CkYTzifC.js";import"./useFocusRing-D3kj-ql7.js";import"./index-K7RQRMNz.js";import"./index-CBu1rMHP.js";import"./Text-BnjALTAb.js";import"./Text-DdMXnW5-.js";import"./Tooltip-No_NzPu8.js";import"./OverlayArrow-DJMCNZA7.js";import"./number-DfkVkf0F.js";import"./useResizeObserver-Ctd7DF4c.js";import"./useControlledState-DpRXGdPw.js";import"./animation-B9jr5M2J.js";import"./x-n2W0P4og.js";import"./panel-left-open-CMGMZED1.js";import"./Button.module-Co5e5YHp.js";import"./Button-DuvywlRj.js";import"./Hidden-DBQGh8ME.js";import"./useLabels-7SDlHi18.js";import"./useButton-DT2Xmgs5.js";import"./useLocalizedStringFormatter-BPMFMRiW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-TWnsdG0a.js";import"./Dialog-B3VjvJ2X.js";import"./RSPContexts-Ckd37Azt.js";import"./Collection-DLH3cw_n.js";import"./index-B9FxiXbT.js";import"./Separator-CDjsrpMX.js";import"./SelectionManager-C5l9lJFC.js";import"./useEvent-CCpoTy8x.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ClChMsu_.js";import"./useDescription-fgVPMTaH.js";import"./ListKeyboardDelegate-c8qeyItX.js";import"./PressResponder-BkHqa3QA.js";import"./useLocalizedStringFormatter-DvLnM0F6.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-D3UXYekA.js";import"./plus-YLg375aL.js";import"./save-DngTGtrx.js";import"./user-BSt4jFxB.js";import"./BadgeContainer-S8bCyWXf.js";const I=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],C=f("list",I),L="_layout_15ygh_1",b={layout:L},o=({children:t})=>a.jsx("div",{className:b.layout,children:t});try{o.displayName="Layout",o.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const k="_header_13yz9_1",P={header:k},i=({children:t})=>a.jsx("header",{className:P.header,children:t});try{i.displayName="Header",i.__docgenInfo={description:"",displayName:"Header",props:{}}}catch{}const H="_navbar_zxsyj_1",O={navbar:H},n=({children:t})=>a.jsx("nav",{className:O.navbar,children:t});try{n.displayName="Navbar",n.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const{Collapse:M}=u(_),Ma={component:o,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},e={render:({children:t,...p})=>{const l=r.useId(),[m,d]=r.useState(!1),[c,g]=r.useState(!1),h=()=>d(v=>!v);return a.jsxs(o,{...p,children:[a.jsx(i,{children:a.jsx(j,{"aria-controls":l,"aria-expanded":m,"aria-haspopup":"dialog",icon:N,onPress:h,variant:"icon"})}),a.jsx(M,{isCollapsed:c,onCollapseChange:g}),a.jsx("main",{style:{height:"5rem",padding:"1rem"},children:t}),a.jsx(y,{"aria-label":"right panel",style:{gridArea:"panelRight"},children:"Panel"}),a.jsx(n,{children:a.jsxs("ul",{children:[a.jsx(s.Link,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:a.jsx(x,{})}),a.jsx(s.Link,{href:"/categories",variant:"navbar",title:"Kategorier",children:a.jsx(C,{})})]})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
