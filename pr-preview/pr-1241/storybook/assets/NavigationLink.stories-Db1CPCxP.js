import{j as e}from"./iframe-6VRTlOeH.js";import{B as c}from"./bell-BZDBvLTu.js";import{H as h}from"./house-D0E9jtf5.js";import{N as g,S as u}from"./NavigationLink-CeOH2pod.js";import{a as m,B as p}from"./BadgeContainer-BuW_EcWz.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-LiZfCQUd.js";import"./Dialog-Dgx0n_Ye.js";import"./Button-DLPX01E3.js";import"./utils-0kxM0y8Y.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlTpFa-B.js";import"./useFocusRing-DGxSfNEF.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./RSPContexts-DRe_RyK6.js";import"./OverlayArrow-DBlOlBI_.js";import"./useResizeObserver-rtx7MB9x.js";import"./useControlledState-pI_U9-IG.js";import"./Collection-TF1_6_sW.js";import"./index-M8MoRKxx.js";import"./Separator-Drv2w8La.js";import"./SelectionManager-CrHNXkN6.js";import"./useEvent-CA01mw1x.js";import"./scrollIntoView-BdAgwM8B.js";import"./SelectionIndicator-CCEQFu0T.js";import"./useDescription-VsZXCutT.js";import"./ListKeyboardDelegate-ZFjtCWQm.js";import"./Text-CpKvHOvq.js";import"./PressResponder-NzJgLDPG.js";import"./useLocalizedStringFormatter-Tc4ujGE7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-8ekBFdXr.js";import"./getScrollParent-HQ76BiU1.js";import"./VisuallyHidden-BKsZ0nD0.js";import"./Link-BB4lpP94.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-C5ZEdzu6.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
