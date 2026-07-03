import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-CP_JPyt4.js";import{t as i}from"./iframe-wIrQpvsR.js";import{t as a}from"./Button-DfwGnCqw.js";import{K as o,Pt as s,ct as c,t as l,u}from"./lucide-react-Czj83E29.js";import{r as d,t as f}from"./BadgeContainer-CeVGqv1y.js";import{t as p}from"./src-U1TkQ5XM.js";import{n as m,t as h}from"./dist-BvynzWeV.js";import{c as g,i as _,n as v,o as y,r as b,t as x}from"./Navigation.stories-CttlN47j.js";import{d as S,n as C,u as w}from"./navigation-link-BE_ecsQH.js";var T=e({Collapsed:()=>j,Controlled:()=>P,Primary:()=>A,WithBadge:()=>M,WithBadgeCollapsed:()=>N,__namedExportsOrder:()=>F,default:()=>k}),E,D,O,k,A,j,M,N,P,F,I=t((()=>{h(),E=n(r(),1),p(),S(),v(),b(),l(),D=i(),{Nested:O}=m(x),k={component:w,title:`Layout/Sidebar`,tags:[`autodocs`],parameters:{layout:`fullscreen`,rootElement:`div`},args:{title:`My app`,children:(0,D.jsx)(O,{})}},A={},j={args:{defaultCollapsed:!0}},M={render:e=>(0,D.jsx)(w,{...e,title:`My app`,children:(0,D.jsx)(g,{children:(0,D.jsxs)(_,{children:[(0,D.jsx)(y,{children:(0,D.jsx)(C,{href:`/`,icon:(0,D.jsx)(s,{}),isActive:!0,children:`Hem`})}),(0,D.jsx)(y,{children:(0,D.jsx)(C,{href:`/arenden`,icon:(0,D.jsx)(o,{}),children:`Ärenden`})}),(0,D.jsx)(y,{children:(0,D.jsx)(C,{href:`/meddelanden`,icon:(0,D.jsxs)(f,{children:[(0,D.jsx)(c,{}),(0,D.jsx)(d,{children:`12`})]}),children:`Meddelanden`})}),(0,D.jsx)(y,{children:(0,D.jsx)(C,{href:`/installningar`,icon:(0,D.jsx)(u,{}),children:`Inställningar`})})]})})})},N={args:{defaultCollapsed:!0},render:e=>(0,D.jsx)(w,{...e,title:`My app`,children:(0,D.jsx)(g,{children:(0,D.jsxs)(_,{children:[(0,D.jsx)(y,{children:(0,D.jsx)(C,{href:`/`,icon:(0,D.jsx)(s,{}),isActive:!0,children:`Hem`})}),(0,D.jsx)(y,{children:(0,D.jsx)(C,{href:`/meddelanden`,icon:(0,D.jsxs)(f,{children:[(0,D.jsx)(c,{}),(0,D.jsx)(d,{children:`12`})]}),children:`Meddelanden`})}),(0,D.jsx)(y,{children:(0,D.jsx)(C,{href:`/installningar`,icon:(0,D.jsx)(u,{}),children:`Inställningar`})})]})})})},P={render:e=>{let[t,n]=(0,E.useState)(!1);return(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,padding:`1rem`},children:[(0,D.jsxs)(a,{onPress:()=>n(e=>!e),children:[t?`Expandera`:`Kollapsa`,` sidebar`]}),(0,D.jsx)(w,{...e,isCollapsed:t,onCollapseChange:n})]})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`Primary`,`Collapsed`,`WithBadge`,`WithBadgeCollapsed`,`Controlled`]}));I();export{j as Collapsed,P as Controlled,A as Primary,M as WithBadge,N as WithBadgeCollapsed,F as __namedExportsOrder,k as default,I as n,T as t};