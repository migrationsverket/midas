import{r as n,j as t}from"./iframe-O2McX3yB.js";import{L as p,a as x,M as f,P as j}from"./Main-CrUFB42b.js";import{H as v,a as N}from"./Header-BEOLaJYl.js";import{M as O}from"./menu-BwIORRCf.js";import{H as r}from"./HeaderAction-BY8v0liJ.js";import{B as y}from"./bell-BFFo2CX9.js";import{U as P}from"./user-BQLROyor.js";import{N as H}from"./Navbar-DAuQV_Gd.js";import{N as a}from"./NavigationLink-Bdr_rvEV.js";import{H as L}from"./house-B1gbpHrq.js";import{c as I}from"./createLucideIcon-C4xn0wXs.js";import{B as s}from"./Button-D2h_fsiV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DXhkJRky.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useControlledState-CDscPa5k.js";import"./useFocusRing-C_4jX8C9.js";import"./utils-DO-wSHzc.js";import"./index-DgGltmSJ.js";import"./index-DYmc9y-m.js";import"./animation-t_x6ksxO.js";import"./PanelTitle-DKKmG_VN.js";import"./clsx-Ciqy0D92.js";import"./Text-YZ7QSVuR.js";import"./Text-7Ipy1BR9.js";import"./x-Bexz8DwZ.js";import"./LogoContext-CKvX5seQ.js";import"./useIsMobileDevice-DCcsdXFY.js";import"./Dialog-DssWk71x.js";import"./Button-2hnImx6E.js";import"./Hidden-kbzwSHo-.js";import"./useLabel-Crm93zgP.js";import"./useLabels-CAQMy46X.js";import"./useButton-DSHOccpc.js";import"./RSPContexts-D9PIXrmH.js";import"./OverlayArrow-C3RzwJA8.js";import"./useResizeObserver-DmVTWwXU.js";import"./Collection-D_qCe12e.js";import"./index-CIqtmhd8.js";import"./Separator-D-dfcXvV.js";import"./SelectionManager-B61PS9GO.js";import"./useEvent-D1NiEUxW.js";import"./scrollIntoView-CYxkmzpX.js";import"./SelectionIndicator-AuNVYjmH.js";import"./useDescription-DyLngsul.js";import"./ListKeyboardDelegate-DKIOtHk3.js";import"./PressResponder-C85iqAbq.js";import"./useLocalizedStringFormatter-DIk6ZtyX.js";import"./getScrollParent-DMJ8Owx1.js";import"./VisuallyHidden-CVECtPk8.js";import"./Link-DDAE4zgD.js";import"./Tooltip-APCGqg3E.js";import"./Button.module-BB7N-cLd.js";const M=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],k=I("list",M),At={component:p,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},e={render:({children:m,...l})=>{const c=n.useId(),[d,h]=n.useState(!1),[i,o]=n.useState(!0),g=()=>h(u=>!u);return t.jsxs(p,{...l,children:[t.jsxs(v,{children:[t.jsx(s,{"aria-controls":c,"aria-expanded":d,"aria-haspopup":"dialog",icon:O,onPress:g,variant:"icon"}),t.jsxs(N,{children:[t.jsx(r,{icon:t.jsx(y,{}),children:"Notiser"}),t.jsx(r,{icon:t.jsx(P,{}),children:"Min profil"})]})]}),t.jsxs(x,{children:[t.jsxs(f,{children:[m,!i&&t.jsx(s,{onPress:()=>o(!0),children:"Öppna sidopanel"})]}),t.jsx(j,{id:"panel","aria-label":"right panel",isOpen:i,onOpenChange:o,style:{gridArea:"panelRight"},title:"Panel"})]}),t.jsx(H,{children:t.jsxs("ul",{children:[t.jsx(a,{href:"/",isActive:!0,icon:t.jsx(L,{}),children:"Hem"}),t.jsx(a,{href:"/categories",icon:t.jsx(k,{}),children:"Kategorier"})]})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    const drawerId = useId();
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
    const toggleIsNavigationOpen = () => setIsNavigationOpen(x => !x);
    return <Layout {...rest}>
        <Header>
          <Button aria-controls={drawerId} aria-expanded={isNavigationOpen} aria-haspopup='dialog' icon={Menu} onPress={toggleIsNavigationOpen} variant='icon' />
          <HeaderActions>
            <HeaderAction icon={<Bell />}>Notiser</HeaderAction>
            <HeaderAction icon={<User />}>Min profil</HeaderAction>
          </HeaderActions>
        </Header>
        <LayoutContent>
          <Main>
            {children}
            {!isRightPanelOpen && <Button onPress={() => setIsRightPanelOpen(true)}>
                Öppna sidopanel
              </Button>}
          </Main>
          <Panel id='panel' aria-label='right panel' isOpen={isRightPanelOpen} onOpenChange={setIsRightPanelOpen} style={{
          gridArea: 'panelRight'
        }} title='Panel' />
        </LayoutContent>
        <Navbar>
          <ul>
            <NavigationLink href='/' isActive icon={<House />}>
              Hem
            </NavigationLink>
            <NavigationLink href='/categories' icon={<List />}>
              Kategorier
            </NavigationLink>
          </ul>
        </Navbar>
      </Layout>;
  }
}`,...e.parameters?.docs?.source}}};const Rt=["Primary"];export{e as Primary,Rt as __namedExportsOrder,At as default};
