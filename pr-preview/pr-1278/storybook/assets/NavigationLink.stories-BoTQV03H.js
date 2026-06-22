import{j as e}from"./iframe-CN8uU3WK.js";import{B as c}from"./bell-C_3xaMAT.js";import{H as h}from"./house-BoQh31_Q.js";import{N as g,S as u}from"./NavigationLink-5uwkG5Pq.js";import{a as m,B as p}from"./BadgeContainer-CZz3mLPE.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-D_RMlAle.js";import"./Dialog-Y4sieQzC.js";import"./Button-BnmvhNcQ.js";import"./utils-CZdGWMo4.js";import"./clsx-B-dksMZM.js";import"./Hidden-i_4Qa2VQ.js";import"./useFocusRing-CUcvtRrG.js";import"./index-C0vdhhw7.js";import"./index-Cks_K4jE.js";import"./useLabel-DgboamvD.js";import"./useLabels-Do1n23m3.js";import"./useButton-DjAvv2ab.js";import"./RSPContexts-FWWfLY0V.js";import"./OverlayArrow-DY03tKAK.js";import"./useResizeObserver-PMRAu2PC.js";import"./useControlledState-n2go4XxZ.js";import"./Collection-ClFv3c_D.js";import"./index-hDLoztzN.js";import"./Separator-aXVDjkAu.js";import"./SelectionManager-DC7iicly.js";import"./useEvent-B3wdZg5O.js";import"./scrollIntoView-dW3ZURKy.js";import"./SelectionIndicator-CK6GDs9o.js";import"./useDescription-DVfq5zSO.js";import"./ListKeyboardDelegate-DTVdwrrg.js";import"./Text-DntZGJ-I.js";import"./PressResponder-DKwZi8Z6.js";import"./useLocalizedStringFormatter-BM2-R2IO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoqKfwmY.js";import"./getScrollParent-g_sxJttE.js";import"./VisuallyHidden-D1gwq_r2.js";import"./Link-DpIu85Og.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-C8_Dzpw4.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
