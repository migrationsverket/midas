import{j as e}from"./iframe-CaeJqQ8f.js";import{B as c}from"./bell-D8plItCO.js";import{H as h}from"./house-Ciw9bFvw.js";import{N as g,S as u}from"./NavigationLink-Dest-wG7.js";import{a as m,B as p}from"./BadgeContainer-C0_xwliB.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bkh4JM6J.js";import"./Dialog-oYWFwQZ3.js";import"./Button-CmYrsmdS.js";import"./utils-BteVPZy0.js";import"./clsx-B-dksMZM.js";import"./Hidden-DAb19HuU.js";import"./useFocusRing-B-IWjK53.js";import"./index-DqQtAxv6.js";import"./index-CeMSaifd.js";import"./useLabel-DiiZxaHU.js";import"./useLabels-CvBePrBc.js";import"./useButton-BT2OPEq9.js";import"./RSPContexts-C23pPjhB.js";import"./OverlayArrow-BaxcOtUd.js";import"./useResizeObserver-CZNaWLID.js";import"./useControlledState-DVDrYLuR.js";import"./Collection-Dcy9D0L3.js";import"./index-BBE2CXqT.js";import"./Separator-CuJpgSRs.js";import"./SelectionManager-bLePU0IW.js";import"./useEvent-DrhgR5ub.js";import"./scrollIntoView-Dv9TGF9T.js";import"./SelectionIndicator-DzgiSh9y.js";import"./useDescription-BGB3EMY_.js";import"./ListKeyboardDelegate-GnYqBagy.js";import"./Text-kWHKD_uI.js";import"./PressResponder-BmizWJnN.js";import"./useLocalizedStringFormatter-B6KzQfdD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNhOQaSp.js";import"./getScrollParent-B7OSUguh.js";import"./VisuallyHidden-CDogNmlo.js";import"./Link-B1DzRlSM.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-HxDmMSna.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
