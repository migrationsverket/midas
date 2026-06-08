import{j as e}from"./iframe-_-I-4bmX.js";import{B as c}from"./bell-BgI0lHCB.js";import{H as h}from"./house-Ci1bYhqc.js";import{N as g,S as u}from"./NavigationLink-BcAbxt7i.js";import{a as m,B as p}from"./BadgeContainer-DlRzP-Q7.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-0TA1baeh.js";import"./Dialog-CE24Vm4u.js";import"./Button-tRjJFBuJ.js";import"./utils-DzcaSYTj.js";import"./clsx-B-dksMZM.js";import"./Hidden-BeH_JIKl.js";import"./useFocusRing-CMcqGwdV.js";import"./index-0H3AV5Mt.js";import"./index-BRnMJqMO.js";import"./useLabel-B1uHly2S.js";import"./useLabels-DUwK_POH.js";import"./useButton-CyQYrR3g.js";import"./RSPContexts-CMPH0wn8.js";import"./OverlayArrow-CdzLxPq_.js";import"./useResizeObserver-CWYs3QmI.js";import"./useControlledState-CitIWhQv.js";import"./Collection-CWOLxi88.js";import"./index-uCmAEo7z.js";import"./Separator-CK8hcPJB.js";import"./SelectionManager-CKx8RmD7.js";import"./useEvent-BT5AWThM.js";import"./scrollIntoView-CFKl5YUv.js";import"./SelectionIndicator-Civ_JKaJ.js";import"./useDescription-BdnU8zj8.js";import"./ListKeyboardDelegate-0iBGtitd.js";import"./Text-Cm78CGL1.js";import"./PressResponder-De-KfKJN.js";import"./useLocalizedStringFormatter-CCGAROZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Db4Op6I0.js";import"./getScrollParent-BjhgnRjO.js";import"./VisuallyHidden-CK8kGowV.js";import"./Link-Dg8mAvjs.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-BlU5yNkj.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
