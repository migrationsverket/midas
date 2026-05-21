import{j as e}from"./iframe-DWEKRq51.js";import{B as c}from"./bell-DZ0mZj73.js";import{H as h}from"./house-C9IysSmL.js";import{N as g,S as u}from"./NavigationLink-DB8V_wz5.js";import{a as m,B as p}from"./BadgeContainer-GPsuVvCM.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BuZoCqNM.js";import"./Dialog-31znzm89.js";import"./Button-Bw7IRosA.js";import"./utils-CvB-FF5L.js";import"./clsx-B-dksMZM.js";import"./Hidden-6-qbYCow.js";import"./useFocusRing-oyMjxI0a.js";import"./index-Du9C_P01.js";import"./index-MiMvQR0t.js";import"./useLabel-07pv796X.js";import"./useLabels-P5GsSUyo.js";import"./useButton-CoUdGt-0.js";import"./RSPContexts-Cwb07yZR.js";import"./OverlayArrow-DoyV8V5a.js";import"./useResizeObserver-BiEPZYAp.js";import"./useControlledState-BpWescyC.js";import"./Collection-DgwJjlxw.js";import"./index-ZJcgO-78.js";import"./Separator-00c_RoBF.js";import"./SelectionManager-J7bJBg_Z.js";import"./useEvent-CTaznQxk.js";import"./scrollIntoView-CPfbYeEn.js";import"./SelectionIndicator-CTz6ddff.js";import"./useDescription-FiAMJAPm.js";import"./ListKeyboardDelegate-o9CjPHxf.js";import"./Text-DNCNcmFD.js";import"./PressResponder-CFhbO3pj.js";import"./useLocalizedStringFormatter-Dh-ctuYo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DWKhMLsb.js";import"./getScrollParent-C8jbhUL1.js";import"./VisuallyHidden-D7nX5YNu.js";import"./Link-cvhsAQw2.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DwGAzXPA.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
