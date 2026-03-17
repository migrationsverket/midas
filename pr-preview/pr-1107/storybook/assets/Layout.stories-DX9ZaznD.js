import{r as a,j as e}from"./iframe-Bf1Ah5rB.js";import{P as N,c as b,p as j}from"./Panel.stories-Dw3rRt-h.js";import{b as I,H as L,a as f}from"./HeaderAction-DFUt4Iym.js";import{M as O}from"./menu-CeEtWwNh.js";import{B as S}from"./bell-uC9rnR5K.js";import{U as H}from"./user-B4G-ySNF.js";import{c as M}from"./clsx-Ciqy0D92.js";import{H as A}from"./house-BWdAsz1M.js";import{c as k}from"./createLucideIcon-upfVu1an.js";import{B as v}from"./Button-BY8ZqICl.js";import{N as w}from"./NavigationLink-C8b1SOUE.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.stories-mGz_-VaI.js";import"./Collection-CeaFj-zL.js";import"./Hidden-Cbiq0OqP.js";import"./index-Dbyil8jF.js";import"./index-CF1c_2Pb.js";import"./useFocusRing-DSdU7aAS.js";import"./utils-DXJEO7_N.js";import"./clsx-B-dksMZM.js";import"./index-BkrJk2hY.js";import"./plus-DEBHWUO9.js";import"./save-PhlvvlQ5.js";import"./BadgeContainer-CJwV0gt0.js";import"./useControlledState-C7EdL_Lb.js";import"./Text-DhXeS_DS.js";import"./Text-BHf7sfPg.js";import"./panel-left-open-Ba4Q4_nR.js";import"./useLocalizedStringFormatter-8eSi0SDt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useIsMobileDevice-CsQLhYxk.js";import"./animation-ELYvfrXm.js";import"./x-DLmn2Tbc.js";import"./LogoContext-DVyXZF4h.js";import"./Button-CnYQaxyi.js";import"./useLabels-B4_UAfBy.js";import"./useButton-DSIJ1kYo.js";import"./Button.module-D_C6WeTN.js";import"./VisuallyHidden-CeYEhVtC.js";import"./Dialog-DMo2WVxs.js";import"./RSPContexts-kOrZQZ_t.js";import"./OverlayArrow-D4fzUYmv.js";import"./useResizeObserver-CLqob_Ia.js";import"./Separator-CYB-nHSA.js";import"./SelectionManager-CfAasErd.js";import"./useEvent-BxaPwLOP.js";import"./scrollIntoView-GI-dTWRJ.js";import"./SelectionIndicator-CnH_HEy_.js";import"./useDescription-CpnzDPEn.js";import"./ListKeyboardDelegate-57vVEhHE.js";import"./PressResponder-9r-iyqIh.js";import"./useLocalizedStringFormatter-tsrFn-Jf.js";import"./getScrollParent-BUiYsgTc.js";import"./Link-ir8N-iIS.js";import"./Tooltip-C63A5LB7.js";const R=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],E=k("list",R),r=a.createContext({panel:null,setPanel:()=>{}}),m=()=>{const t=a.useContext(r);if(!t)throw new Error("usePanel must be used within LayoutProvider");return t};try{r.displayName="LayoutContext",r.__docgenInfo={description:"",displayName:"LayoutContext",props:{}}}catch{}try{m.displayName="usePanel",m.__docgenInfo={description:"\nAppend a dismissable panel in your `LayoutContent` component",displayName:"usePanel",props:{}}}catch{}const u=({children:t})=>{const[n,i]=a.useState(null);return e.jsx(r.Provider,{value:{panel:n,setPanel:i},children:t})};try{u.displayName="LayoutProvider",u.__docgenInfo={description:"",displayName:"LayoutProvider",props:{}}}catch{}const $="_layout_4r2tn_1",B={layout:$},l=({className:t,...n})=>e.jsx(u,{children:e.jsx("div",{className:`${t??""} ${B.layout}`,...n})});try{l.displayName="Layout",l.__docgenInfo={description:"",displayName:"Layout",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const T="_layoutContent_yqjxz_1",q={layoutContent:T},y=({className:t,children:n,...i})=>{const{panel:s,setPanel:p}=m(),c=d=>{d||p(null)};return e.jsxs("div",{className:M(t,q.layoutContent),...i,children:[n,e.jsx(N,{variant:"dismiss","data-debug":"Panel (dismiss)",isOpen:!!s,onOpenChange:c,...s})]})};try{y.displayName="LayoutContent",y.__docgenInfo={description:"",displayName:"LayoutContent",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const z="_navbar_18aqo_1",V={navbar:z},g=({className:t,...n})=>e.jsx("footer",{className:`${t??""} ${V.navbar}`,...n});try{g.displayName="Navbar",g.__docgenInfo={description:"",displayName:"Navbar",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const U="_main_vtpiw_1",K={main:U},h=({className:t,...n})=>e.jsx("main",{className:`${t} ${K.main}`,...n});try{h.displayName="Main",h.__docgenInfo={description:"",displayName:"Main",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Collapse:D}=b(j),Ge={component:l,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},o={render:({children:t,...n})=>{const i=a.useId(),[s,p]=a.useState(!1),[c,d]=a.useState(!1),[_,x]=a.useState(!0),C=()=>p(P=>!P);return e.jsxs(l,{...n,children:[e.jsxs(I,{children:[e.jsx(v,{"aria-controls":i,"aria-expanded":s,"aria-haspopup":"dialog",icon:O,onPress:C,variant:"icon"}),e.jsxs(L,{children:[e.jsx(f,{icon:e.jsx(S,{}),children:"Notiser"}),e.jsx(f,{icon:e.jsx(H,{}),children:"Min profil"})]})]}),e.jsxs(y,{children:[e.jsx(D,{isCollapsed:c,onCollapseChange:d}),e.jsxs(h,{children:[t,!_&&e.jsx(v,{onPress:()=>x(!0),children:"Öppna sidopanel"})]}),e.jsx(N,{variant:"dismiss","aria-label":"right panel",isOpen:_,onOpenChange:x,style:{gridArea:"panelRight"},title:"Panel"})]}),e.jsx(g,{children:e.jsxs("ul",{children:[e.jsx(w,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:e.jsx(A,{})}),e.jsx(w,{href:"/categories",variant:"navbar",title:"Kategorier",children:e.jsx(E,{})})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
