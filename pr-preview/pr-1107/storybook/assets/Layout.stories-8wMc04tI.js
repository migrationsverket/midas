import{r as a,j as e}from"./iframe-DfM6kEgP.js";import{P as _,c as P,p as j}from"./Panel.stories-3GVuD1dA.js";import{b,H as I,a as h}from"./HeaderAction-BYhbzCLa.js";import{M as L}from"./menu-DR2u9gXJ.js";import{B as O}from"./bell-BHpMTOwM.js";import{U as S}from"./user-CSeRlBT8.js";import{c as H}from"./clsx-Ciqy0D92.js";import{H as M}from"./house-D1Xz9lYe.js";import{c as A}from"./createLucideIcon-DO7HuIXt.js";import{B as x}from"./Button-6n3SyLgE.js";import{N as v}from"./NavigationLink-5QDAqoiQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.stories-D5w6Ocit.js";import"./Collection-09IBPkRq.js";import"./Hidden-B-o_Z7ot.js";import"./index-DJ_VatpF.js";import"./index-C5hIZfwH.js";import"./useFocusRing-IDQhhoIK.js";import"./utils-D8PGfxYb.js";import"./clsx-B-dksMZM.js";import"./index-3kktDTdc.js";import"./plus-C5RgRZGC.js";import"./save-CTEkBocH.js";import"./BadgeContainer-BPpo1EVY.js";import"./useControlledState-kzArnBYE.js";import"./Text-19RelmEi.js";import"./Text-BibBkfuq.js";import"./panel-left-open-BvazFTGf.js";import"./useLocalizedStringFormatter-BjlGfbr7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useIsMobileDevice-Dpiigh7k.js";import"./animation-BsUrANvt.js";import"./x-YUyJRI2G.js";import"./LogoContext-CDjW9C1q.js";import"./Button-Czn9lX0K.js";import"./useLabels-SIl08feW.js";import"./useButton-MJN3qUWn.js";import"./Button.module-D_C6WeTN.js";import"./VisuallyHidden-B1MOHF_-.js";import"./Dialog-OKjalaOk.js";import"./RSPContexts-BeTSInpY.js";import"./OverlayArrow-DiNb5Fu3.js";import"./useResizeObserver-Dhz32DFD.js";import"./Separator-CRnSeFy5.js";import"./SelectionManager-Dcw7EeBz.js";import"./useEvent-gEY0uIrq.js";import"./scrollIntoView-DF5-5d4s.js";import"./SelectionIndicator-B7PNH1gU.js";import"./useDescription-CAoO2SDf.js";import"./ListKeyboardDelegate-zBpsm9mR.js";import"./PressResponder--6CUqe1-.js";import"./useLocalizedStringFormatter-DnY2UHeu.js";import"./getScrollParent-C3WNykc8.js";import"./Link-D23Jwrsm.js";import"./Tooltip-M_vdisN4.js";const k=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],R=A("list",k),o=a.createContext({activePanel:void 0,setActivePanel:()=>{}}),E=()=>{const t=a.useContext(o);if(!t)throw new Error("usePanel must be used within LayoutProvider");return t};try{o.displayName="LayoutContext",o.__docgenInfo={description:"",displayName:"LayoutContext",props:{}}}catch{}const c=({children:t})=>{const[n,i]=a.useState();return e.jsx(o.Provider,{value:{activePanel:n,setActivePanel:i},children:t})};try{c.displayName="LayoutProvider",c.__docgenInfo={description:"",displayName:"LayoutProvider",props:{}}}catch{}const $="_layout_4r2tn_1",B={layout:$},l=({className:t,...n})=>e.jsx(c,{children:e.jsx("div",{className:`${t??""} ${B.layout}`,...n})});try{l.displayName="Layout",l.__docgenInfo={description:"",displayName:"Layout",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const T="_layoutContent_yqjxz_1",q={layoutContent:T},d=({className:t,children:n,...i})=>{const{activePanel:s,setActivePanel:p}=E();return e.jsxs("div",{className:H(t,q.layoutContent),...i,children:[n,e.jsx(_,{variant:"dismiss","data-debug":"Panel (dismiss)",isOpen:!!s,onOpenChange:()=>p(void 0),...s})]})};try{d.displayName="LayoutContent",d.__docgenInfo={description:"",displayName:"LayoutContent",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const z="_navbar_18aqo_1",V={navbar:z},m=({className:t,...n})=>e.jsx("footer",{className:`${t??""} ${V.navbar}`,...n});try{m.displayName="Navbar",m.__docgenInfo={description:"",displayName:"Navbar",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const U="_main_vtpiw_1",K={main:U},u=({className:t,...n})=>e.jsx("main",{className:`${t} ${K.main}`,...n});try{u.displayName="Main",u.__docgenInfo={description:"",displayName:"Main",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Collapse:D}=P(j),Ge={component:l,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},r={render:({children:t,...n})=>{const i=a.useId(),[s,p]=a.useState(!1),[f,w]=a.useState(!1),[y,g]=a.useState(!0),N=()=>p(C=>!C);return e.jsxs(l,{...n,children:[e.jsxs(b,{children:[e.jsx(x,{"aria-controls":i,"aria-expanded":s,"aria-haspopup":"dialog",icon:L,onPress:N,variant:"icon"}),e.jsxs(I,{children:[e.jsx(h,{icon:e.jsx(O,{}),children:"Notiser"}),e.jsx(h,{icon:e.jsx(S,{}),children:"Min profil"})]})]}),e.jsxs(d,{children:[e.jsx(D,{isCollapsed:f,onCollapseChange:w}),e.jsxs(u,{children:[t,!y&&e.jsx(x,{onPress:()=>g(!0),children:"Öppna sidopanel"})]}),e.jsx(_,{variant:"dismiss","aria-label":"right panel",isOpen:y,onOpenChange:g,style:{gridArea:"panelRight"},title:"Panel"})]}),e.jsx(m,{children:e.jsxs("ul",{children:[e.jsx(v,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:e.jsx(M,{})}),e.jsx(v,{href:"/categories",variant:"navbar",title:"Kategorier",children:e.jsx(R,{})})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Je=["Primary"];export{r as Primary,Je as __namedExportsOrder,Ge as default};
