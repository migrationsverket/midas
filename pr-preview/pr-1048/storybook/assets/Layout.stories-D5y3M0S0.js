import{j as e,r as i}from"./iframe-CyQ_Q7rG.js";import{u as N,P as b,c as C,p as I}from"./Panel.stories-Bqbbu-RN.js";import{c as o}from"./clsx-Ciqy0D92.js";import{L as j}from"./LogoContext-B0crCp3y.js";import{M as O}from"./menu-kCtCbxWx.js";import{H as P}from"./house-CzYae8-X.js";import{c as L}from"./createLucideIcon-DGHBNn-o.js";import{B as u}from"./Button-BTfIzcvP.js";import{N as g}from"./Navigation.stories-I10ilhZs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./NavigationListItem-DRNzaG2p.js";import"./Link-DQ_oA5da.js";import"./utils-BoW3E2H5.js";import"./useFocusRing-BQ-1QbEG.js";import"./index-CR1l2dC_.js";import"./index-DOUe2Txr.js";import"./Text-agLRoWzJ.js";import"./Text-Dq2_g6JH.js";import"./Tooltip-CaNFyhCW.js";import"./OverlayArrow-w7zPFq0b.js";import"./number-DfkVkf0F.js";import"./useResizeObserver-CiwbCPBb.js";import"./useControlledState-fHHUIill.js";import"./animation-Did0fznj.js";import"./panel-left-open-BDShNMf4.js";import"./useLocalizedStringFormatter-CDxyTvCl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./x-BDgCrCJo.js";import"./Button.module-Co5e5YHp.js";import"./Button-CntAlnRy.js";import"./Hidden-CRjkj892.js";import"./useLabels-CGrF7Gz1.js";import"./useButton-DyeUmxt9.js";import"./VisuallyHidden-DBSUrbfY.js";import"./plus-TQHXwfyR.js";import"./save-Cgc0_WGe.js";import"./user-CNvRJBHB.js";import"./BadgeContainer-BVZGT38N.js";const S=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],M=L("list",S),k="_layout_1v9xd_1",R="_content_1v9xd_9",h={layout:k,content:R},H=({className:t,children:a,...n})=>e.jsx("div",{className:o(t,h.content),...n,children:a}),s=Object.assign(({className:t,children:a,...n})=>e.jsx("div",{className:o(t,h.layout),...n,children:a}),{Content:H});try{s.displayName="Layout",s.__docgenInfo={description:"",displayName:"Layout",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const E="_header_105ne_1",T={header:E},l=({className:t,...a})=>{const n=N();return e.jsx(j.Provider,{value:{size:n?"x-small":"large"},children:e.jsx("header",{className:o(t,T.header),...a})})};try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const q="_navbar_18aqo_1",B={navbar:q},p=({className:t,...a})=>e.jsx("nav",{"aria-label":"bottom navbar",className:o(t,B.navbar),...a});try{p.displayName="Navbar",p.__docgenInfo={description:"",displayName:"Navbar",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const $="_main_k6283_1",z={main:$},c=({className:t,...a})=>e.jsx("main",{className:`${t} ${z.main}`,...a});try{c.displayName="Main",c.__docgenInfo={description:"",displayName:"Main",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Collapse:A}=C(I),Oe={component:s,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},r={render:({children:t,...a})=>{const n=i.useId(),[y,x]=i.useState(!1),[v,f]=i.useState(!1),[d,m]=i.useState(!0),_=()=>x(w=>!w);return e.jsxs(s,{...a,children:[e.jsx(l,{children:e.jsx(u,{"aria-controls":n,"aria-expanded":y,"aria-haspopup":"dialog",icon:O,onPress:_,variant:"icon"})}),e.jsxs(s.Content,{children:[e.jsx(A,{isCollapsed:v,onCollapseChange:f}),e.jsxs(c,{children:[t,!d&&e.jsx(u,{onPress:()=>m(!0),children:"Öppna sidopanel"})]}),e.jsx(b,{variant:"dismiss","aria-label":"right panel",isOpen:d,onOpenChange:m,style:{gridArea:"panelRight"},title:"Panel"})]}),e.jsx(p,{children:e.jsxs("ul",{children:[e.jsx(g.Link,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:e.jsx(P,{})}),e.jsx(g.Link,{href:"/categories",variant:"navbar",title:"Kategorier",children:e.jsx(M,{})})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        </Header>
        <Layout.Content>
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
        </Layout.Content>
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
}`,...r.parameters?.docs?.source}}};const Pe=["Primary"];export{r as Primary,Pe as __namedExportsOrder,Oe as default};
