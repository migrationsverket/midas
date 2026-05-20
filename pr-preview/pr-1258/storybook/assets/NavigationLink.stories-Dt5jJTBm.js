import{j as e}from"./iframe-UJ3BwdI6.js";import{B as c}from"./bell-CYEiX8AD.js";import{H as h}from"./house-TszufQu3.js";import{N as g,S as u}from"./NavigationLink-a5ocdRbD.js";import{a as m,B as p}from"./BadgeContainer-DUiBVJUC.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-C1FynrDV.js";import"./Dialog-BD0IRIUG.js";import"./Button-C3rI1i5q.js";import"./utils-BYceCV3C.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dl3PKEKv.js";import"./useFocusRing-CLeeQzke.js";import"./index-DAZT_GQr.js";import"./index-Bx8foN3C.js";import"./useLabel-B0g5vJvf.js";import"./useLabels-C5RnXiv5.js";import"./useButton-Cn8mW4Ll.js";import"./RSPContexts-JudtSyi0.js";import"./OverlayArrow-CHGQ6Qmq.js";import"./useResizeObserver-DTE2Kg-d.js";import"./useControlledState-SS_iM14g.js";import"./Collection-VaBd8FzM.js";import"./index-Cm_EPirj.js";import"./Separator-CZoAQZ-8.js";import"./SelectionManager-BujgrAkT.js";import"./useEvent-CTyOrL8U.js";import"./scrollIntoView-CTYRmDo1.js";import"./SelectionIndicator-D_gUha_f.js";import"./useDescription-C3PTeJJa.js";import"./ListKeyboardDelegate-BDLnRayo.js";import"./Text-BU9YFTb1.js";import"./PressResponder-BMknpfIK.js";import"./useLocalizedStringFormatter-C9onPQuM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_ZWVv1J.js";import"./getScrollParent-DHFOoCum.js";import"./VisuallyHidden-KE5d7FBc.js";import"./Link-DpPdm6oj.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-zPXHENua.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
