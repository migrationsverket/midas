import{j as e}from"./iframe-Bd9H7Vfx.js";import{B as c}from"./bell-mHdYUANQ.js";import{H as h}from"./house-D9FSGDtN.js";import{N as g,S as u}from"./NavigationLink-CyRuqpP0.js";import{a as m,B as p}from"./BadgeContainer-C14NDc8A.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DpMYq6qz.js";import"./Dialog-D5Rjgzgw.js";import"./Button-BiRWLd5m.js";import"./utils-DsmRkWxC.js";import"./clsx-B-dksMZM.js";import"./Hidden-BsqjLjJT.js";import"./useFocusRing-CnLPB_6u.js";import"./index-BtBPjCGs.js";import"./index-CaWaKKHJ.js";import"./useLabel-lBHMCnWn.js";import"./useLabels-D4u2oU-D.js";import"./useButton-BfgVUf0f.js";import"./RSPContexts-CuXYnuDl.js";import"./OverlayArrow-BSvQtyR7.js";import"./useResizeObserver-BW4mypps.js";import"./useControlledState-075FDtLg.js";import"./Collection-DWNfCn8n.js";import"./index-CRFez_EJ.js";import"./Separator-Dzzbxscp.js";import"./SelectionManager-5QY68epY.js";import"./useEvent-DN0cDM1V.js";import"./scrollIntoView-Bf_lnXkb.js";import"./SelectionIndicator-CQVWmUVk.js";import"./useDescription-C3g1on3s.js";import"./ListKeyboardDelegate-JM4p0mT-.js";import"./Text-B_j7rweg.js";import"./PressResponder-OkwJmME0.js";import"./useLocalizedStringFormatter-BsyS8WPI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C-EkjH-D.js";import"./getScrollParent-Cbimak5V.js";import"./VisuallyHidden-ytL0956d.js";import"./Link-CBb_wS16.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DxcR5-El.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
