import{r,j as e}from"./iframe-Cr04uqFn.js";import{P,c as b,p as j}from"./Panel.stories-DJf6l1_M.js";import{b as I,H as L,a as w}from"./HeaderAction-btf8WZkn.js";import{M as O}from"./menu-BTF-kU3g.js";import{B as S}from"./bell-OehtZ3yl.js";import{U as H}from"./user-Dg_U5x-f.js";import{c as M}from"./clsx-Ciqy0D92.js";import{H as A}from"./house-S5Ll5GjA.js";import{c as k}from"./createLucideIcon-DucUkfKy.js";import{B as N}from"./Button-Bskr_9E8.js";import{N as C}from"./NavigationLink-wJEuvhWs.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.stories-CxZkeyfF.js";import"./Collection-BcebPgQA.js";import"./Hidden-BqmZgZ8y.js";import"./index-Ge0-Pyay.js";import"./index-BRmKR4IG.js";import"./useFocusRing-iGoUiyfg.js";import"./utils-CsC3xkQx.js";import"./clsx-B-dksMZM.js";import"./index-C1CgnfUT.js";import"./plus-B_41aO4f.js";import"./save-CIwWYV4a.js";import"./BadgeContainer-DVXMma0h.js";import"./useControlledState-DjFFz4B7.js";import"./Text-CMC0Dinw.js";import"./Text-SaXXHVxE.js";import"./panel-left-open-CPe-3pGJ.js";import"./useLocalizedStringFormatter-afGT4_9p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useIsMobileDevice-CTcbhMZM.js";import"./animation-DbRqnrVU.js";import"./x-BMsMY2q6.js";import"./LogoContext-DicB-hcY.js";import"./Button-BDZhuw74.js";import"./useLabels-Jqxce70U.js";import"./useButton-DDahEz2i.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bkfpb86W.js";import"./Dialog-BNVSg56y.js";import"./RSPContexts-DKIHjjdb.js";import"./OverlayArrow-niIw79cy.js";import"./useResizeObserver-9CmKBstP.js";import"./Separator-Clo59Z82.js";import"./SelectionManager-CztMdh1x.js";import"./useEvent-B_zIZR1f.js";import"./scrollIntoView-BS5aSLnj.js";import"./SelectionIndicator-DqEHErwo.js";import"./useDescription-vtlKpR3S.js";import"./ListKeyboardDelegate-CSgnqlFj.js";import"./PressResponder-Cskls_z-.js";import"./useLocalizedStringFormatter-CTazVPN1.js";import"./getScrollParent-DB2xYs0i.js";import"./Link-BvODn_0k.js";import"./Tooltip-BklPTcxz.js";const R=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],E=k("list",R),y=r.createContext({panels:[],setPanels:()=>{}}),h=()=>{const t=r.useContext(y);if(!t)throw new Error("usePanel must be used within LayoutProvider");return t};try{y.displayName="LayoutContext",y.__docgenInfo={description:"",displayName:"LayoutContext",props:{}}}catch{}try{h.displayName="usePanels",h.__docgenInfo={description:"\nAppend a dismissable panel in your `LayoutContent` component",displayName:"usePanels",props:{}}}catch{}const _=({children:t})=>{const[n,c]=r.useState([]),l=s=>{c(d=>{const a=typeof s=="function"?s(d):s,i=new Set,o=[];for(const p of a){const{id:m}=p;i.has(m)||(i.add(m),o.push(p))}return o})};return e.jsx(y.Provider,{value:{panels:n,setPanels:l},children:t})};try{_.displayName="LayoutProvider",_.__docgenInfo={description:"",displayName:"LayoutProvider",props:{}}}catch{}const $="_layout_4r2tn_1",B={layout:$},g=({className:t,...n})=>e.jsx(_,{children:e.jsx("div",{className:`${t??""} ${B.layout}`,...n})});try{g.displayName="Layout",g.__docgenInfo={description:"",displayName:"Layout",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const T="_layoutContent_yqjxz_1",q={layoutContent:T},f=({className:t,children:n,...c})=>{const{panels:l,setPanels:s}=h(),d=a=>i=>{i||s(o=>o.filter(p=>p.id!==a))};return e.jsxs("div",{className:M(t,q.layoutContent),...c,children:[n,l.length>0&&l.map(a=>e.jsx(P,{variant:"dismiss","data-debug":"Panel (dismiss)",isOpen:!0,onOpenChange:d(a.id),...a},a.id))]})};try{f.displayName="LayoutContent",f.__docgenInfo={description:"",displayName:"LayoutContent",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const z="_navbar_18aqo_1",U={navbar:z},x=({className:t,...n})=>e.jsx("footer",{className:`${t??""} ${U.navbar}`,...n});try{x.displayName="Navbar",x.__docgenInfo={description:"",displayName:"Navbar",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const V="_main_vtpiw_1",K={main:V},v=({className:t,...n})=>e.jsx("main",{className:`${t} ${K.main}`,...n});try{v.displayName="Main",v.__docgenInfo={description:"",displayName:"Main",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Collapse:D}=b(j),Ge={component:g,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},u={render:({children:t,...n})=>{const c=r.useId(),[l,s]=r.useState(!1),[d,a]=r.useState(!1),[i,o]=r.useState(!0),p=()=>s(m=>!m);return e.jsxs(g,{...n,children:[e.jsxs(I,{children:[e.jsx(N,{"aria-controls":c,"aria-expanded":l,"aria-haspopup":"dialog",icon:O,onPress:p,variant:"icon"}),e.jsxs(L,{children:[e.jsx(w,{icon:e.jsx(S,{}),children:"Notiser"}),e.jsx(w,{icon:e.jsx(H,{}),children:"Min profil"})]})]}),e.jsxs(f,{children:[e.jsx(D,{isCollapsed:d,onCollapseChange:a}),e.jsxs(v,{children:[t,!i&&e.jsx(N,{onPress:()=>o(!0),children:"Öppna sidopanel"})]}),e.jsx(P,{variant:"dismiss","aria-label":"right panel",isOpen:i,onOpenChange:o,style:{gridArea:"panelRight"},title:"Panel"})]}),e.jsx(x,{children:e.jsxs("ul",{children:[e.jsx(C,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:e.jsx(A,{})}),e.jsx(C,{href:"/categories",variant:"navbar",title:"Kategorier",children:e.jsx(E,{})})]})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Je=["Primary"];export{u as Primary,Je as __namedExportsOrder,Ge as default};
