import{j as a,r as o}from"./iframe-BrSFSEso.js";import{P as y,c as u,p as _}from"./Panel.stories-BGMdOQfZ.js";import{M as N}from"./menu-aOMI2UnK.js";import{H as x}from"./house--pVJeDpM.js";import{c as j}from"./createLucideIcon-D7YZh2ey.js";import{B as f}from"./Button-D56CPdXD.js";import{N as s}from"./Navigation.stories-BqVk6sej.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./NavigationListItem-DO8sT2bQ.js";import"./Link-Ds9Wlb1B.js";import"./utils-CSLr47GB.js";import"./useFocusRing-B7OMZUkL.js";import"./index-Bwu9F9er.js";import"./index-ze5CMu77.js";import"./Text-afjM-cTG.js";import"./Text-CqAiKc3c.js";import"./Tooltip-R0nKZc9q.js";import"./OverlayArrow-S-wF1zMs.js";import"./number-DfkVkf0F.js";import"./useResizeObserver-C-3K1Yg-.js";import"./useControlledState-CqGR6b7a.js";import"./animation-C2q38RaJ.js";import"./x-DQ48cbAb.js";import"./panel-left-open-DWIWdBI8.js";import"./Button.module-Co5e5YHp.js";import"./Button-sstewYaM.js";import"./Hidden-bRkw9FY4.js";import"./useLabels-BrFMbAmC.js";import"./useButton-B52JHo7m.js";import"./useLocalizedStringFormatter-CKLO5enn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-ClNUZpiZ.js";import"./Dialog-GDy5bWq5.js";import"./RSPContexts-D6LnjnjF.js";import"./Collection-gPtAIt1S.js";import"./index-AqybnyRZ.js";import"./Separator-btKLgu5F.js";import"./SelectionManager-B_55B_zK.js";import"./useEvent-Bnvwx3ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DsPVl8Wi.js";import"./useDescription-CgGPIItB.js";import"./ListKeyboardDelegate-CCJ1QruW.js";import"./PressResponder-Cw8JUUw4.js";import"./useLocalizedStringFormatter-CutqbN-G.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-BBpNHHOc.js";import"./plus-lqXBvAg6.js";import"./save-DAM0Idua.js";import"./user-B3mBSOmT.js";import"./BadgeContainer-BTaNoOpA.js";const I=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],C=j("list",I),L="_layout_15ygh_1",b={layout:L},r=({children:t})=>a.jsx("div",{className:b.layout,children:t});try{r.displayName="Layout",r.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const k="_header_13yz9_1",P={header:k},i=({children:t})=>a.jsx("header",{className:P.header,children:t});try{i.displayName="Header",i.__docgenInfo={description:"",displayName:"Header",props:{}}}catch{}const H="_navbar_zxsyj_1",O={navbar:H},n=({children:t})=>a.jsx("nav",{className:O.navbar,children:t});try{n.displayName="Navbar",n.__docgenInfo={description:"",displayName:"Navbar",props:{}}}catch{}const{Collapse:M}=u(_),Ma={component:r,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},e={render:({children:t,...p})=>{const l=o.useId(),[m,d]=o.useState(!1),[c,g]=o.useState(!1),h=()=>d(v=>!v);return a.jsxs(r,{...p,children:[a.jsx(i,{children:a.jsx(f,{"aria-controls":l,"aria-expanded":m,"aria-haspopup":"dialog",icon:N,onPress:h,variant:"icon"})}),a.jsx(M,{isCollapsed:c,onCollapseChange:g}),a.jsx("main",{style:{height:"5rem",padding:"1rem"},children:t}),a.jsx(y,{"aria-label":"right panel",style:{gridArea:"panelRight"},children:"Panel"}),a.jsx(n,{children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx(s.Link,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:a.jsx(x,{})})}),a.jsx("li",{children:a.jsx(s.Link,{href:"/categories",variant:"navbar",title:"Kategorier",children:a.jsx(C,{})})})]})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
            <li>
              <Navigation.Link href='/' isActive variant='navbar' title='Hem'>
                <House />
              </Navigation.Link>
            </li>
            <li>
              <Navigation.Link href='/categories' variant='navbar' title='Kategorier'>
                <List />
              </Navigation.Link>
            </li>
          </ul>
        </Navbar>
      </Layout>;
  }
}`,...e.parameters?.docs?.source}}};const Sa=["Primary"];export{e as Primary,Sa as __namedExportsOrder,Ma as default};
