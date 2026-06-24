import{j as e}from"./iframe-CMUT-aY9.js";import{B as c}from"./bell-Bp4hlYOS.js";import{H as h}from"./house-CVmIWiEE.js";import{N as g,S as u}from"./NavigationLink-BZZ0KZF-.js";import{a as m,B as p}from"./BadgeContainer-BE_cT6I-.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B4JXtaTl.js";import"./Dialog-BWo9KHc3.js";import"./Button-CgVVJh0n.js";import"./utils-x-Fz6ypf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BmEcMQf3.js";import"./useFocusRing-D378a6oQ.js";import"./index-j8YavyCt.js";import"./index-CqplKhbN.js";import"./useLabel-D7aQ5vjs.js";import"./useLabels-DlsJNfJR.js";import"./useButton-PZHXztAT.js";import"./RSPContexts-CAfUuHUZ.js";import"./OverlayArrow--ZC8Uo7u.js";import"./useResizeObserver-CEERAmrN.js";import"./useControlledState-BVAe2WbZ.js";import"./Collection-DACuoUr3.js";import"./index-BEes7jX8.js";import"./Separator-BjTPBP6R.js";import"./SelectionManager-EkeIU2ti.js";import"./useEvent-Bali3OPG.js";import"./scrollIntoView-Dk0hb8O6.js";import"./SelectionIndicator-PFHf5Vkm.js";import"./useDescription-BGt3XOT5.js";import"./ListKeyboardDelegate-FyBaGESI.js";import"./Text-BjIPArye.js";import"./PressResponder-B1vSOFem.js";import"./useLocalizedStringFormatter-CTG8JuvI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmuUCG3g.js";import"./getScrollParent-BxpbEdf1.js";import"./VisuallyHidden-CLkRcp8r.js";import"./Link-CHdg4g1g.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-zR49U1Db.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
