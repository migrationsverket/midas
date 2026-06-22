import{j as e}from"./iframe-A34tc1ma.js";import{B as c}from"./bell-CJEkJZja.js";import{H as h}from"./house-D_R998nT.js";import{N as g,S as u}from"./NavigationLink-BtQlfonL.js";import{a as m,B as p}from"./BadgeContainer-Cyp74Kuu.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bnflbpu4.js";import"./Dialog-C2Mbm9Zl.js";import"./Button-CJGwxkR8.js";import"./utils-iaIw3nix.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bx_LiQEx.js";import"./useFocusRing-OnJtBabX.js";import"./index-Q8iWR-k3.js";import"./index-nqYRH_fx.js";import"./useLabel-B5C-WKT7.js";import"./useLabels-m8TWtq0-.js";import"./useButton-Dk5W4KfY.js";import"./RSPContexts-BvXmiLjq.js";import"./OverlayArrow-Cp6jK_Cj.js";import"./useResizeObserver-YHNjG9pb.js";import"./useControlledState-dFFgK4uz.js";import"./Collection-DXUX_Ij0.js";import"./index-jxQ6KrOQ.js";import"./Separator-C6UYN-Wn.js";import"./SelectionManager-BCe-zS_L.js";import"./useEvent-DAxeeYk2.js";import"./scrollIntoView-DqSfMztI.js";import"./SelectionIndicator-ADiRG3zF.js";import"./useDescription-CkN0W4le.js";import"./ListKeyboardDelegate-D5zJhQGj.js";import"./Text-PcmClRY0.js";import"./PressResponder-CJBJbSXq.js";import"./useLocalizedStringFormatter-CAgZjAaW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cy3ig-9a.js";import"./getScrollParent-BfgMvCMm.js";import"./VisuallyHidden-DFcjAmAE.js";import"./Link-BScjV1Jh.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DOoxmTYQ.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
