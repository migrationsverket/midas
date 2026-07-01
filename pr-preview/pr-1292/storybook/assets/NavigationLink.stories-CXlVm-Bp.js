import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CAaFZEJr.js";import{It as n,t as r,ut as i}from"./lucide-react-BJU7mAvS.js";import{r as a,t as o}from"./BadgeContainer-CtoYIgGy.js";import{t as s}from"./src-wRQ17iH9.js";import{f as c,l,n as u,t as d}from"./navigation-link-BvJ3o-0Q.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{d(),r(),l(),s(),f=t(),p={component:u,title:`Layout/Navigation/NavigationLink`,tags:[`autodocs`],args:{children:`Hem`,href:`/`,icon:(0,f.jsx)(n,{})},parameters:{layout:`centered`}},m={},h={args:{isActive:!0}},g={args:{isDisabled:!0}},_={render:e=>(0,f.jsx)(c.Provider,{value:{isCollapsed:!0},children:(0,f.jsx)(u,{...e})})},v={args:{children:`Meddelanden`,href:`/meddelanden`,icon:(0,f.jsxs)(o,{children:[(0,f.jsx)(i,{}),(0,f.jsx)(a,{})]})}},y={args:{children:`Meddelanden`,href:`/meddelanden`,icon:(0,f.jsxs)(o,{children:[(0,f.jsx)(i,{}),(0,f.jsx)(a,{children:`12`})]})}},b={args:{children:`Meddelanden`,href:`/meddelanden`,isActive:!0,icon:(0,f.jsxs)(o,{children:[(0,f.jsx)(i,{}),(0,f.jsx)(a,{children:`12`})]})}},x={render:e=>(0,f.jsx)(c.Provider,{value:{isCollapsed:!0},children:(0,f.jsx)(u,{...e,icon:(0,f.jsxs)(o,{children:[(0,f.jsx)(i,{}),(0,f.jsx)(a,{children:`12`})]}),children:`Meddelanden`})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarContext.Provider value={{
    isCollapsed: true
  }}>
      <NavigationLink {...args} />
    </SidebarContext.Provider>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    icon: <BadgeContainer>
        <Bell />
        <Badge />
      </BadgeContainer>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    icon: <BadgeContainer>
        <Bell />
        <Badge>12</Badge>
      </BadgeContainer>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    isActive: true,
    icon: <BadgeContainer>
        <Bell />
        <Badge>12</Badge>
      </BadgeContainer>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarContext.Provider value={{
    isCollapsed: true
  }}>
      <NavigationLink {...args} icon={<BadgeContainer>
            <Bell />
            <Badge>12</Badge>
          </BadgeContainer>}>
        Meddelanden
      </NavigationLink>
    </SidebarContext.Provider>
}`,...x.parameters?.docs?.source}}},S=[`Primary`,`Active`,`Disabled`,`Collapsed`,`WithBadge`,`WithBadgeLabel`,`WithBadgeActive`,`WithBadgeCollapsed`]}))();export{h as Active,_ as Collapsed,g as Disabled,m as Primary,v as WithBadge,b as WithBadgeActive,x as WithBadgeCollapsed,y as WithBadgeLabel,S as __namedExportsOrder,p as default};