import{j as e}from"./iframe-D6gs3wS5.js";import{B as c}from"./bell-5Ay25rnZ.js";import{H as h}from"./house-lwh5NNUu.js";import{N as g,S as u}from"./NavigationLink-B0nuMFOa.js";import{a as m,B as p}from"./BadgeContainer-fi_VY__N.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Cx44WpFS.js";import"./Dialog-C98XP9pU.js";import"./Button-CbEqyxyu.js";import"./utils-DJQYVgmX.js";import"./clsx-B-dksMZM.js";import"./Hidden-Chxa0iBH.js";import"./useFocusRing-CFifySwi.js";import"./index-eJbc0aTW.js";import"./index-Ce1ePnt0.js";import"./useLabel-cgRMBKD-.js";import"./useLabels-5rE94Eky.js";import"./useButton--ll78HR1.js";import"./RSPContexts-h4eiuWjg.js";import"./OverlayArrow-Cu6bIr93.js";import"./useResizeObserver-DN7Cfe0F.js";import"./useControlledState-CUa1KmDW.js";import"./Collection-BPj3IxkI.js";import"./index-MBhbw5TK.js";import"./Separator-DFBkIcjx.js";import"./SelectionManager-D39yDHWQ.js";import"./useEvent-BmTKd3HL.js";import"./scrollIntoView-RTV5yabh.js";import"./SelectionIndicator-BbY2R1af.js";import"./useDescription-ChQWj-NI.js";import"./ListKeyboardDelegate-B-UkNWQd.js";import"./Text-BlJm85ZR.js";import"./PressResponder-65KHhKmn.js";import"./useLocalizedStringFormatter-lMnXoQqL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CdlQofa4.js";import"./getScrollParent-Do3-zmpB.js";import"./VisuallyHidden-DqFWHqpC.js";import"./Link-CpYMlPtw.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-CmgblbU8.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
