import{j as e}from"./iframe-BONLLpOF.js";import{B as c}from"./bell-D9a7tSHS.js";import{H as h}from"./house-DSS7Z5ni.js";import{N as g,S as u}from"./NavigationLink-CVV9fBX0.js";import{a as m,B as p}from"./BadgeContainer-DjGm9dgK.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Dg8jUY-5.js";import"./Dialog-BZzLBxOh.js";import"./Button-2Duwp_Ic.js";import"./utils-C9VmisX4.js";import"./clsx-B-dksMZM.js";import"./Hidden-DEirP3-u.js";import"./useFocusRing-DKupva6E.js";import"./index-CxKo4ITi.js";import"./index-AexxYhB1.js";import"./useLabel-Q48Rkvkt.js";import"./useLabels-Bh7NN-Ow.js";import"./useButton-hyzNfx3L.js";import"./RSPContexts-DjgvGlJ6.js";import"./OverlayArrow-DSBWh69a.js";import"./useResizeObserver-4MMtw46c.js";import"./useControlledState-f1OgfOOU.js";import"./Collection-CyJQtxg_.js";import"./index-B047Z5Cb.js";import"./Separator-M5_WXlgZ.js";import"./SelectionManager-BFJf1PXq.js";import"./useEvent-BT5XuWp7.js";import"./scrollIntoView-BwrYAJjM.js";import"./SelectionIndicator-BstBVfA8.js";import"./useDescription-xh0FTpCi.js";import"./ListKeyboardDelegate-CIuiaVcB.js";import"./Text-CYi48kKA.js";import"./PressResponder-wZdbtsyo.js";import"./useLocalizedStringFormatter-Bxafu6ud.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYswFIpa.js";import"./getScrollParent-BgLE-lAx.js";import"./VisuallyHidden-DGoVngfB.js";import"./Link-DmYNc2Pg.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-8tpLWsN0.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
