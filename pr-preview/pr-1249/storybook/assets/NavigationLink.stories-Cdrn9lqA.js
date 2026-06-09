import{j as e}from"./iframe-DwYJYgGb.js";import{B as c}from"./bell-DfusSTu0.js";import{H as h}from"./house-BRdsT5D2.js";import{N as g,S as u}from"./NavigationLink-CSsi6ivQ.js";import{a as m,B as p}from"./BadgeContainer-Cw_Y76NX.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CCgdfoT7.js";import"./Dialog-eIQcg82T.js";import"./Button-Ddo8eX0a.js";import"./utils-fIJ7LVq8.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwjkXMFO.js";import"./useFocusRing-CXC08Tq5.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./RSPContexts-DE3QJKMh.js";import"./OverlayArrow-CmYMGfKa.js";import"./useResizeObserver-Cfbnluet.js";import"./useControlledState-CxwoTKvB.js";import"./Collection-Du3GdM9A.js";import"./index-BXWU9W6R.js";import"./Separator-Ie15OD8n.js";import"./SelectionManager-Bzzdwe4i.js";import"./useEvent-exXZI4Sz.js";import"./scrollIntoView-BsKOETet.js";import"./SelectionIndicator-D5viv05a.js";import"./useDescription-DtI32Oaq.js";import"./ListKeyboardDelegate-Cm-sBpbt.js";import"./Text-B4syvpmZ.js";import"./PressResponder-CtJMV9fG.js";import"./useLocalizedStringFormatter-LO9Tkb5c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DJwCaNaH.js";import"./getScrollParent-Dee46RGf.js";import"./VisuallyHidden-B0sEyNoY.js";import"./Link-Cvv4p1k-.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DfwToRJu.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
