import{j as e}from"./iframe-DcpPkcOs.js";import{B as c}from"./bell-C5jLhvnb.js";import{H as h}from"./house-Bpq26EqT.js";import{N as g,S as u}from"./NavigationLink-B01pyTkZ.js";import{a as m,B as p}from"./BadgeContainer-47VxIr6V.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CmxgNO3A.js";import"./Dialog-qTO-2YAL.js";import"./Button-Ct2gBhbQ.js";import"./utils-CXltNwJi.js";import"./clsx-B-dksMZM.js";import"./Hidden-DC53IPGT.js";import"./useFocusRing-C7oRwYv0.js";import"./index-B5JE_P2G.js";import"./index-BObIBW6r.js";import"./useLabel-CzBIgrEB.js";import"./useLabels-L34wTJFT.js";import"./useButton-1kWau5nf.js";import"./RSPContexts-BUPHzZx4.js";import"./OverlayArrow-C3cN_iuY.js";import"./useResizeObserver-Cw_kr4qy.js";import"./useControlledState-CqQWqGWO.js";import"./Collection-rQ5njRkg.js";import"./index-nmIxaWMa.js";import"./Separator-xF4GrPwW.js";import"./SelectionManager-BjMDwzbf.js";import"./useEvent-BNdFNVTO.js";import"./scrollIntoView-DIZ8_NQ2.js";import"./SelectionIndicator-D1NBEiqF.js";import"./useDescription-BvGFSiIZ.js";import"./ListKeyboardDelegate-DwdjdjQX.js";import"./Text-gI7geXGi.js";import"./PressResponder-DTfh9jEN.js";import"./useLocalizedStringFormatter-CuAPqpgo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCoMn1WX.js";import"./getScrollParent-Ck1J4Oi-.js";import"./VisuallyHidden-WVnnRw_3.js";import"./Link-B0qoG68V.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-BT2yXrLX.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarContext.Provider value={{
    isCollapsed: true
  }}>
      <NavigationLink {...args} />
    </SidebarContext.Provider>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    icon: <BadgeContainer>
        <Bell />
        <Badge />
      </BadgeContainer>
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    icon: <BadgeContainer>
        <Bell />
        <Badge>12</Badge>
      </BadgeContainer>
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    isActive: true,
    icon: <BadgeContainer>
        <Bell />
        <Badge>12</Badge>
      </BadgeContainer>
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const oe=["Primary","Active","Disabled","Collapsed","WithBadge","WithBadgeLabel","WithBadgeActive","WithBadgeCollapsed"];export{a as Active,o as Collapsed,n as Disabled,r as Primary,i as WithBadge,t as WithBadgeActive,d as WithBadgeCollapsed,s as WithBadgeLabel,oe as __namedExportsOrder,ne as default};
