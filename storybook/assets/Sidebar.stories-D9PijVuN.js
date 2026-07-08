import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-CP_JPyt4.js";import{t as i}from"./iframe-DetZXwzh.js";import{t as a}from"./Button-DIEhWVzL.js";import{ct as o,ft as s,it as c,mt as l,ot as u,t as d,u as f,vt as p}from"./lucide-react-COhgruO7.js";import{r as m,t as h}from"./BadgeContainer-CgnFrGBn.js";import{t as g}from"./src-CYarhL2u.js";import{c as _,i as v,o as y,t as b}from"./navigation-CcKieecP.js";import{d as x,n as S,u as C}from"./navigation-link-DEPLhiVk.js";var w=e({Collapsed:()=>A,Controlled:()=>N,Primary:()=>k,WithBadge:()=>j,WithBadgeCollapsed:()=>M,__namedExportsOrder:()=>P,default:()=>O}),T,E,D,O,k,A,j,M,N,P,F=t((()=>{T=n(r(),1),g(),x(),b(),d(),E=i(),D=()=>(0,E.jsxs)(_,{children:[(0,E.jsx)(v,{children:(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/add-event`,icon:(0,E.jsx)(l,{}),children:`Add event`})})}),(0,E.jsxs)(v,{title:`Dates`,children:[(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/remove-event`,icon:(0,E.jsx)(s,{}),children:`Remove event`})}),(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/vehicle`,icon:(0,E.jsx)(u,{}),children:`Vehicle information`})})]}),(0,E.jsxs)(v,{title:`Travel`,children:[(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/treats`,icon:(0,E.jsx)(o,{}),children:`Treats`})}),(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/road-trip`,icon:(0,E.jsx)(c,{}),children:`Road trip`})})]})]}),O={component:C,title:`Layout/Sidebar`,tags:[`autodocs`],parameters:{layout:`fullscreen`,rootElement:`div`},args:{title:`Navigation`,children:(0,E.jsx)(D,{})}},k={},A={args:{defaultCollapsed:!0}},j={render:e=>(0,E.jsx)(C,{...e,children:(0,E.jsx)(_,{children:(0,E.jsxs)(v,{children:[(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/add-event`,icon:(0,E.jsx)(l,{}),isActive:!0,children:`Add event`})}),(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/meddelanden`,icon:(0,E.jsxs)(h,{children:[(0,E.jsx)(p,{}),(0,E.jsx)(m,{children:`12`})]}),children:`Meddelanden`})}),(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/installningar`,icon:(0,E.jsx)(f,{}),children:`Inställningar`})})]})})})},M={args:{defaultCollapsed:!0},render:e=>(0,E.jsx)(C,{...e,children:(0,E.jsx)(_,{children:(0,E.jsxs)(v,{children:[(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/add-event`,icon:(0,E.jsx)(l,{}),isActive:!0,children:`Add event`})}),(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/meddelanden`,icon:(0,E.jsxs)(h,{children:[(0,E.jsx)(p,{}),(0,E.jsx)(m,{children:`12`})]}),children:`Meddelanden`})}),(0,E.jsx)(y,{children:(0,E.jsx)(S,{href:`/installningar`,icon:(0,E.jsx)(f,{}),children:`Inställningar`})})]})})})},N={render:e=>{let[t,n]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,padding:`1rem`},children:[(0,E.jsxs)(a,{onPress:()=>n(e=>!e),children:[t?`Expandera`:`Kollapsa`,` sidebar`]}),(0,E.jsx)(C,{...e,isCollapsed:t,onCollapseChange:n})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Sidebar {...args}>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink href='/add-event' icon={<CalendarPlus2 />} isActive>
              Add event
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  },
  render: args => <Sidebar {...args}>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink href='/add-event' icon={<CalendarPlus2 />} isActive>
              Add event
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
}`,...N.parameters?.docs?.source}}},P=[`Primary`,`Collapsed`,`WithBadge`,`WithBadgeCollapsed`,`Controlled`]}));F();export{A as Collapsed,N as Controlled,k as Primary,j as WithBadge,M as WithBadgeCollapsed,P as __namedExportsOrder,O as default,F as n,w as t};