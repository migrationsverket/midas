import{R as H,j as e,r as M}from"./iframe-CN8uU3WK.js";import{c as w}from"./index-ZNlMxVCO.js";import{c as x}from"./clsx-B-dksMZM.js";import{$ as E}from"./useControlledState-n2go4XxZ.js";import{b as z}from"./useFocusRing-CUcvtRrG.js";import{S as $,N as i}from"./NavigationLink-5uwkG5Pq.js";import{u as q}from"./useIsMobileDevice-CVMDbGiE.js";import{P as A,a as D}from"./panel-left-open-B2GnQliX.js";import{u as F}from"./useLocalizedStringFormatter-C8jrJhCU.js";import{P as O,a as V,b as W,c as R}from"./PanelTitle-DaqtFSKt.js";import{B as b}from"./Button-BVfd33cu.js";import{N as C,a as N,b as r,F as K,n as G}from"./Navigation.stories-DqKeeeQi.js";import{H as j}from"./house-BoQh31_Q.js";import{B as S}from"./bell-C_3xaMAT.js";import{S as y}from"./settings-XdWLpjzt.js";import{a as _,B as I}from"./BadgeContainer-CZz3mLPE.js";const J={expandSidebar:"Expand sidebar",collapseSidebar:"Collapse sidebar"},Q={expandSidebar:"Expandera sidopanel",collapseSidebar:"Minimera sidopanel"},U={en:J,sv:Q},X="_sidebar_zlaev_1",Y="_collapsed_zlaev_8",Z="_sidebarHeader_zlaev_17",ee="_sidebarTitle_zlaev_26",ae="_sidebarContent_zlaev_49",s={sidebar:X,collapsed:Y,sidebarHeader:Z,sidebarTitle:ee,sidebarContent:ae},o=({children:a,className:f,title:l,...t})=>{const v=F(U),B=q(),[n,L]=E(t.isCollapsed,t.defaultCollapsed||!1,t.onCollapseChange),[P,h]=H.useState(!1),k=()=>{h(!0),L(d=>!d)},T=d=>{d.propertyName==="width"&&d.target===d.currentTarget&&h(!1)};return B?null:e.jsx($.Provider,{value:{isCollapsed:n},children:e.jsxs(O,{className:x(f,s.sidebar,{[s.collapsed]:n}),"data-transitioning":P||void 0,onTransitionEnd:T,...z(t),children:[e.jsxs(V,{className:x(s.sidebarHeader,{[s.collapsed]:n}),children:[l?e.jsx(W,{className:x(s.sidebarTitle,{[s.collapsed]:n}),title:l}):e.jsx("div",{}),e.jsx(b,{"aria-label":n?v.format("expandSidebar"):v.format("collapseSidebar"),onPress:k,variant:"icon",size:n?"large":"medium",children:n?e.jsx(A,{size:20}):e.jsx(D,{size:20})})]}),e.jsx(R,{className:s.sidebarContent,children:a})]})})};try{o.displayName="Sidebar",o.__docgenInfo={description:"",displayName:"Sidebar",props:{isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:null,description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((isCollapsed: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const{Nested:ne}=w(G),se={component:o,title:"Layout/Sidebar",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"My app",children:e.jsx(ne,{})}},c={},p={args:{defaultCollapsed:!0}},m={render:a=>e.jsx(o,{...a,title:"My app",children:e.jsx(C,{children:e.jsxs(N,{children:[e.jsx(r,{children:e.jsx(i,{href:"/",icon:e.jsx(j,{}),isActive:!0,children:"Hem"})}),e.jsx(r,{children:e.jsx(i,{href:"/arenden",icon:e.jsx(K,{}),children:"Ärenden"})}),e.jsx(r,{children:e.jsx(i,{href:"/meddelanden",icon:e.jsxs(_,{children:[e.jsx(S,{}),e.jsx(I,{children:"12"})]}),children:"Meddelanden"})}),e.jsx(r,{children:e.jsx(i,{href:"/installningar",icon:e.jsx(y,{}),children:"Inställningar"})})]})})})},g={args:{defaultCollapsed:!0},render:a=>e.jsx(o,{...a,title:"My app",children:e.jsx(C,{children:e.jsxs(N,{children:[e.jsx(r,{children:e.jsx(i,{href:"/",icon:e.jsx(j,{}),isActive:!0,children:"Hem"})}),e.jsx(r,{children:e.jsx(i,{href:"/meddelanden",icon:e.jsxs(_,{children:[e.jsx(S,{}),e.jsx(I,{children:"12"})]}),children:"Meddelanden"})}),e.jsx(r,{children:e.jsx(i,{href:"/installningar",icon:e.jsx(y,{}),children:"Inställningar"})})]})})})},u={render:a=>{const[f,l]=M.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[e.jsxs(b,{onPress:()=>l(t=>!t),children:[f?"Expandera":"Kollapsa"," sidebar"]}),e.jsx(o,{...a,isCollapsed:f,onCollapseChange:l})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Sidebar {...args} title='My app'>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink href='/' icon={<House />} isActive>
              Hem
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/arenden' icon={<FileText />}>
              Ärenden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/meddelanden' icon={<BadgeContainer>
                  <Bell />
                  <Badge>12</Badge>
                </BadgeContainer>}>
              Meddelanden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/installningar' icon={<Settings />}>
              Inställningar
            </NavigationLink>
          </NavigationItem>
        </NavigationSection>
      </Navigation>
    </Sidebar>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  },
  render: args => <Sidebar {...args} title='My app'>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink href='/' icon={<House />} isActive>
              Hem
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/meddelanden' icon={<BadgeContainer>
                  <Bell />
                  <Badge>12</Badge>
                </BadgeContainer>}>
              Meddelanden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/installningar' icon={<Settings />}>
              Inställningar
            </NavigationLink>
          </NavigationItem>
        </NavigationSection>
      </Navigation>
    </Sidebar>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem'
    }}>
        <Button onPress={() => setIsCollapsed(c => !c)}>
          {isCollapsed ? 'Expandera' : 'Kollapsa'} sidebar
        </Button>
        <Sidebar {...args} isCollapsed={isCollapsed} onCollapseChange={setIsCollapsed} />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const ie=["Primary","Collapsed","WithBadge","WithBadgeCollapsed","Controlled"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:p,Controlled:u,Primary:c,WithBadge:m,WithBadgeCollapsed:g,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{Ne as s};
