import{j as e}from"./iframe-BjXy11IP.js";import{B as c}from"./bell-CbcZ4SKb.js";import{H as h}from"./house-BL0G9xFq.js";import{N as g,S as u}from"./NavigationLink-6gYIVkC1.js";import{a as m,B as p}from"./BadgeContainer-D93_m31f.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BrUYswYS.js";import"./Dialog-B6fuA9-4.js";import"./Button-CwQmoSQG.js";import"./utils-Dj8sQgIn.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_bNI1dK.js";import"./useFocusRing-D20u5I3y.js";import"./index-BXFUTcBh.js";import"./index-BLEH-ht0.js";import"./useLabel-1ZP1GF7v.js";import"./useLabels-ipnyo4k3.js";import"./useButton-CDDhm8mD.js";import"./RSPContexts-Dc6ISs8u.js";import"./OverlayArrow-Bo6JBAss.js";import"./useResizeObserver-nRmR3_D9.js";import"./useControlledState-BFdO-Aas.js";import"./Collection-Bmvuh_aD.js";import"./index-svh7ED_h.js";import"./Separator-CbpAxHaB.js";import"./SelectionManager-MUVk0-Jq.js";import"./useEvent-BvN2BQGn.js";import"./scrollIntoView-e8j4Q6hS.js";import"./SelectionIndicator-DnJhxFrg.js";import"./useDescription-BaUF5NM6.js";import"./ListKeyboardDelegate-Dlc0U7io.js";import"./Text-DM8Ihy_8.js";import"./PressResponder-DoU1gB1A.js";import"./useLocalizedStringFormatter-2-idTql7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wH-jenxE.js";import"./getScrollParent-Cwho8gKu.js";import"./VisuallyHidden-B8YjGTUD.js";import"./Link-Cw_TGw7z.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-ERLb0uQi.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
