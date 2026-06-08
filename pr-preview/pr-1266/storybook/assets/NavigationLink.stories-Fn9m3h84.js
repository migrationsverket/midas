import{j as e}from"./iframe-C8RsNfgP.js";import{B as c}from"./bell-D7jYn6IS.js";import{H as h}from"./house-CoQB6cYA.js";import{N as g,S as u}from"./NavigationLink-CkkcIPSa.js";import{a as m,B as p}from"./BadgeContainer-CgaZlXrU.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BIQyFJ8n.js";import"./Dialog-B1YZPLrY.js";import"./Button-A6crx_HM.js";import"./utils-CoNQ4mwz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BIvUufzC.js";import"./useFocusRing-Cez6wS5f.js";import"./index-D8K4fX28.js";import"./index-Di6EYout.js";import"./useLabel-DX_Dt9l7.js";import"./useLabels-IRIn0Uy0.js";import"./useButton-CHMv5Y4_.js";import"./RSPContexts-DnHOF8LL.js";import"./OverlayArrow-9TJsQCNt.js";import"./useResizeObserver-DyyEm7tl.js";import"./useControlledState-LFxBnaBs.js";import"./Collection-B6ieSp3r.js";import"./index-Db_2pBFe.js";import"./Separator-CK2ElXWA.js";import"./SelectionManager-CBA1K6Fq.js";import"./useEvent-Bt-5AhA-.js";import"./scrollIntoView-D2l_qE3A.js";import"./SelectionIndicator-CXMu-wz6.js";import"./useDescription-CbZGxods.js";import"./ListKeyboardDelegate-B2GotOUx.js";import"./Text-COO1Tk0x.js";import"./PressResponder-CsdNKVT2.js";import"./useLocalizedStringFormatter-6GffOhcG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YvurAC38.js";import"./getScrollParent-DXaGcTkj.js";import"./VisuallyHidden-D7WZRGTo.js";import"./Link-DcNYLOKk.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-BpIfYR9G.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
