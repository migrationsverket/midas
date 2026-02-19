import{j as e,r as i}from"./iframe-DxANLnMg.js";import{u as w,P as N,c as b,p as C}from"./Panel.stories-D04X9fn4.js";import{c as I}from"./clsx-Ciqy0D92.js";import{L as j}from"./LogoContext-BGsS9Cfe.js";import{M as O}from"./menu-CwB-dma8.js";import{H as P}from"./house-DpXLyZuK.js";import{c as L}from"./createLucideIcon-euW2jQkG.js";import{B as m}from"./Button-ClCUxMP6.js";import{N as u}from"./Navigation.stories-DqWwVeKJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./NavigationListItem-BQp5YD0Z.js";import"./Link-B0ZSYzsb.js";import"./utils-BQIgjTYG.js";import"./useFocusRing-Bfpm0Sir.js";import"./index-BPgjZc5C.js";import"./index-kmI4I0vE.js";import"./Text-DSJVLgNs.js";import"./Text-CUhbmYK5.js";import"./Tooltip-5SDOaSBp.js";import"./OverlayArrow-o6fLMtGY.js";import"./number-DfkVkf0F.js";import"./useResizeObserver-BEEXoR30.js";import"./useControlledState-DzADzBNp.js";import"./animation-CTYnrBtQ.js";import"./panel-left-open-CTBs6OAN.js";import"./useLocalizedStringFormatter-Nw5RAls2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./x-W8kckzsu.js";import"./Button.module-Co5e5YHp.js";import"./Button-BgFZ3kti.js";import"./Hidden-OELWSN_z.js";import"./useLabels-B_4RNjuB.js";import"./useButton-CeQGViBo.js";import"./VisuallyHidden-Cp8jWSEw.js";import"./plus-C2LqTAg0.js";import"./save-DkOYjJ7h.js";import"./user-DGZGzn41.js";import"./BadgeContainer-10tbYn7s.js";const S=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],M=L("list",S),k="_layout_1v9xd_1",R="_content_1v9xd_9",g={layout:k,content:R},$=({className:t,children:a,...n})=>e.jsx("div",{className:`${t??""} ${g.content}`,...n,children:a}),s=Object.assign(({className:t,children:a,...n})=>e.jsx("div",{className:`${t??""} ${g.layout}`,...n,children:a}),{Content:$});try{s.displayName="Layout",s.__docgenInfo={description:"",displayName:"Layout",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const H="_header_105ne_1",E={header:H},o=({className:t,...a})=>{const n=w();return e.jsx(j.Provider,{value:{size:n?"x-small":"large"},children:e.jsx("header",{className:I(t,E.header),...a})})};try{o.displayName="Header",o.__docgenInfo={description:"",displayName:"Header",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const T="_navbar_18aqo_1",q={navbar:T},l=({className:t,...a})=>e.jsx("nav",{"aria-label":"bottom navbar",className:`${t??""} ${q.navbar}`,...a});try{l.displayName="Navbar",l.__docgenInfo={description:"",displayName:"Navbar",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const B="_main_k6283_1",z={main:B},p=({className:t,...a})=>e.jsx("main",{className:`${t} ${z.main}`,...a});try{p.displayName="Main",p.__docgenInfo={description:"",displayName:"Main",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Collapse:A}=b(C),Oe={component:s,title:"Components/Layout/Layout",tags:["autodocs"],args:{children:"Content"},parameters:{layout:"fullscreen",rootElement:"div"}},r={render:({children:t,...a})=>{const n=i.useId(),[h,y]=i.useState(!1),[x,v]=i.useState(!1),[c,d]=i.useState(!0),f=()=>y(_=>!_);return e.jsxs(s,{...a,children:[e.jsx(o,{children:e.jsx(m,{"aria-controls":n,"aria-expanded":h,"aria-haspopup":"dialog",icon:O,onPress:f,variant:"icon"})}),e.jsxs(s.Content,{children:[e.jsx(A,{isCollapsed:x,onCollapseChange:v}),e.jsxs(p,{children:[t,!c&&e.jsx(m,{onPress:()=>d(!0),children:"Öppna sidopanel"})]}),e.jsx(N,{variant:"dismiss","aria-label":"right panel",isOpen:c,onOpenChange:d,style:{gridArea:"panelRight"},title:"Panel"})]}),e.jsx(l,{children:e.jsxs("ul",{children:[e.jsx(u.Link,{href:"/",isActive:!0,variant:"navbar",title:"Hem",children:e.jsx(P,{})}),e.jsx(u.Link,{href:"/categories",variant:"navbar",title:"Kategorier",children:e.jsx(M,{})})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
