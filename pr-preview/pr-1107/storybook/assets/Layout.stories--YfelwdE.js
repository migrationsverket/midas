import{r as a,j as e}from"./iframe-CPHjxRlP.js";import{P as w,c as P,p as j}from"./Panel.stories-BwCTlWax.js";import{b,H as I,a as v}from"./HeaderAction-CQumnv9O.js";import{M as L}from"./menu-CI_2F_JD.js";import{B as O}from"./bell-BD7K6xlc.js";import{U as S}from"./user-yHwZT0vA.js";import{c as H}from"./clsx-Ciqy0D92.js";import{H as M}from"./house-DiY5Pqxo.js";import{c as A}from"./createLucideIcon-iYSxmCjy.js";import{B as _}from"./Button-BPjf-uHP.js";import{N as f}from"./NavigationLink-Dgyd39EQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.stories-BjQ2r_mU.js";import"./Collection-dzAraWz5.js";import"./Hidden-BaLLinj_.js";import"./index-BH0p0wiY.js";import"./index-HgmA4Z-C.js";import"./useFocusRing-DWjPv-Rc.js";import"./utils-B-Qbv9d3.js";import"./clsx-B-dksMZM.js";import"./index-DlfcjIIA.js";import"./plus-CkVc2Lsm.js";import"./save-BWlEUHzP.js";import"./BadgeContainer-dA6OW8eY.js";import"./useControlledState-kjVA7Iho.js";import"./Text-p3Ykg7gy.js";import"./Text-BM8b8hjA.js";import"./panel-left-open-DSqB6MUh.js";import"./useLocalizedStringFormatter-BXoUii7t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useIsMobileDevice-C8abDmdJ.js";import"./animation-C04746Dl.js";import"./x-CL_KZXEW.js";import"./LogoContext-lHepzG80.js";import"./Button-0oqu_HuR.js";import"./useLabels-JrHx6Rsk.js";import"./useButton-BM6c3a1z.js";import"./Button.module-D_C6WeTN.js";import"./VisuallyHidden-DUGlWYSK.js";import"./Dialog-BpI-i29_.js";import"./RSPContexts-IuRmAr1v.js";import"./OverlayArrow-Dqn5MO81.js";import"./useResizeObserver-Cs363CQE.js";import"./Separator-CXP1fQTs.js";import"./SelectionManager-BPXPWQd0.js";import"./useEvent-B67iovzO.js";import"./scrollIntoView-qZ3V1AoT.js";import"./SelectionIndicator-Cpy4WKkL.js";import"./useDescription-BrEL6S7F.js";import"./ListKeyboardDelegate-C6dnvuD-.js";import"./PressResponder-CpG4UWem.js";import"./useLocalizedStringFormatter-IAU1f4xs.js";import"./getScrollParent-vFXpP8ab.js";import"./Link-k95Ky1kM.js";import"./Tooltip-D0RaIKou.js";const k=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],R=A("list",k),r=a.createContext({activePanel:void 0,setActivePanel:()=>{}}),E=()=>{const t=a.useContext(r);if(!t)throw new Error("usePanel must be used within LayoutProvider");return t};try{r.displayName="LayoutContext",r.__docgenInfo={description:"",displayName:"LayoutContext",props:{}}}catch{}const m=({children:t})=>{const[n,i]=a.useState();return e.jsx(r.Provider,{value:{activePanel:n,setActivePanel:i},children:t})};try{m.displayName="LayoutProvider",m.__docgenInfo={description:"",displayName:"LayoutProvider",props:{}}}catch{}const $="_layout_4r2tn_1",B={layout:$},l=({className:t,...n})=>e.jsx(m,{children:e.jsx("div",{className:`${t??""} ${B.layout}`,...n})});try{l.displayName="Layout",l.__docgenInfo={description:"",displayName:"Layout",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const T="_layoutContent_yqjxz_1",q={layoutContent:T},u=({className:t,children:n,...i})=>{const{activePanel:s,setActivePanel:p}=E(),c=d=>p(d?s:void 0);return e.jsxs("div",{className:H(t,q.layoutContent),...i,children:[n,e.jsx(w,{variant:"dismiss","data-debug":"Panel (dismiss)",isOpen:!!s,onOpenChange:c,...s})]})};try{u.displayName="LayoutContent",u.__docgenInfo={description:"",displayName:"LayoutContent",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const z="_navbar_18aqo_1",V={navbar:z},y=({className:t,...n})=>e.jsx("footer",{className:`${t??""} ${V.navbar}`,...n});try{y.displayName="Navbar",y.__docgenInfo={description:"",displayName:"Navbar",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const U="_main_vtpiw_1",K={main:U},g=({className:t,...n})=>e.jsx("main",{className:`${t} ${K.main}`,...n});try{g.displayName="Main",g.__docgenInfo={description:"",displayName:"Main",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Collapse:D}=P(j),Ge={component:l,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},o={render:({children:t,...n})=>{const i=a.useId(),[s,p]=a.useState(!1),[c,d]=a.useState(!1),[h,x]=a.useState(!0),N=()=>p(C=>!C);return e.jsxs(l,{...n,children:[e.jsxs(b,{children:[e.jsx(_,{"aria-controls":i,"aria-expanded":s,"aria-haspopup":"dialog",icon:L,onPress:N,variant:"icon"}),e.jsxs(I,{children:[e.jsx(v,{icon:e.jsx(O,{}),children:"Notiser"}),e.jsx(v,{icon:e.jsx(S,{}),children:"Min profil"})]})]}),e.jsxs(u,{children:[e.jsx(D,{isCollapsed:c,onCollapseChange:d}),e.jsxs(g,{children:[t,!h&&e.jsx(_,{onPress:()=>x(!0),children:"Öppna sidopanel"})]}),e.jsx(w,{variant:"dismiss","aria-label":"right panel",isOpen:h,onOpenChange:x,style:{gridArea:"panelRight"},title:"Panel"})]}),e.jsx(y,{children:e.jsxs("ul",{children:[e.jsx(f,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:e.jsx(M,{})}),e.jsx(f,{href:"/categories",variant:"navbar",title:"Kategorier",children:e.jsx(R,{})})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    const drawerId = useId();
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);
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
          <CollapsePanel isCollapsed={isNavigationCollapsed} onCollapseChange={setIsNavigationCollapsed} />
          <Main>
            {children}
            {!isRightPanelOpen && <Button onPress={() => setIsRightPanelOpen(true)}>
                Öppna sidopanel
              </Button>}
          </Main>
          <Panel variant='dismiss' aria-label='right panel' isOpen={isRightPanelOpen} onOpenChange={setIsRightPanelOpen} style={{
          gridArea: 'panelRight'
        }} title='Panel' />
        </LayoutContent>
        <Navbar>
          <ul>
            <NavigationLink href='/' isActive variant='navbar' title='Hem'>
              <House />
            </NavigationLink>
            <NavigationLink href='/categories' variant='navbar' title='Kategorier'>
              <List />
            </NavigationLink>
          </ul>
        </Navbar>
      </Layout>;
  }
}`,...o.parameters?.docs?.source}}};const Je=["Primary"];export{o as Primary,Je as __namedExportsOrder,Ge as default};
