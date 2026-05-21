import{j as e}from"./iframe-BXzs3x0C.js";import{B as c}from"./bell-DdHIaM9X.js";import{H as h}from"./house-BuxUVJod.js";import{N as g,S as u}from"./NavigationLink-B5fn-wwL.js";import{a as m,B as p}from"./BadgeContainer-BitkXKNF.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DAXq1X88.js";import"./Dialog-BEMaGKOQ.js";import"./Button-_6aq1n6B.js";import"./utils-B7YpdZz-.js";import"./clsx-B-dksMZM.js";import"./Hidden-HpZioBNJ.js";import"./useFocusRing-DAr84UVu.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./RSPContexts-CQe6j-NN.js";import"./OverlayArrow-CQqIg-Jb.js";import"./useResizeObserver-CEMKu04O.js";import"./useControlledState-DXnq9ftx.js";import"./Collection-CPe6OLkZ.js";import"./index-BK7PRc4P.js";import"./Separator-B0USoDoM.js";import"./SelectionManager-BeubQEj5.js";import"./useEvent-Bna1V34X.js";import"./scrollIntoView-DmyPyYUI.js";import"./SelectionIndicator-BG5WiYa3.js";import"./useDescription-BDCx7FV_.js";import"./ListKeyboardDelegate-C5EkxWNC.js";import"./Text-a0ukmHPT.js";import"./PressResponder-DIcn1mDB.js";import"./useLocalizedStringFormatter-D7Rvr_ao.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-s3i8KAlX.js";import"./getScrollParent-CeZ4u_Xo.js";import"./VisuallyHidden-C6-1r25j.js";import"./Link-EUvfX62p.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-Blx6vYJT.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
