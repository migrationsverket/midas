import{j as e}from"./iframe-BqNGaS3Q.js";import{B as c}from"./bell-CL6jggME.js";import{H as h}from"./house-B3uh1_h6.js";import{N as g,S as u}from"./NavigationLink-Lr0O7ePW.js";import{a as m,B as p}from"./BadgeContainer-DMsVWXpf.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DCKEqRJ8.js";import"./Dialog-B4koJbGS.js";import"./Button-DSR7b1dw.js";import"./utils-YRMroG4N.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSU9xJ9h.js";import"./useFocusRing-CGkrrHUz.js";import"./index-84uqcsRw.js";import"./index-Vj0nGHdt.js";import"./useLabel-EeiXtDoW.js";import"./useLabels-adoQ0dml.js";import"./useButton-DOhwhZT1.js";import"./RSPContexts-BStQ6TrK.js";import"./OverlayArrow-D4O3P2k_.js";import"./useResizeObserver-Xrkj96LM.js";import"./useControlledState-CmrGw6Qp.js";import"./Collection-BR8w3g5X.js";import"./index-DYyYHmLM.js";import"./Separator-CIXTBnH2.js";import"./SelectionManager-Daec-eOD.js";import"./useEvent-CbShBTQB.js";import"./scrollIntoView-DqdmP0Ox.js";import"./SelectionIndicator-BTVq9xT9.js";import"./useDescription-qTJacu0G.js";import"./ListKeyboardDelegate-B0AvXnDg.js";import"./Text-1jSgyZAH.js";import"./PressResponder-C41x452R.js";import"./useLocalizedStringFormatter-Dy-KyAJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3Omskkq.js";import"./getScrollParent-D3JQJWO2.js";import"./VisuallyHidden-Bp1KH-we.js";import"./Link-NdlkgyuN.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-B51CAB4D.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
