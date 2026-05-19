import{j as e}from"./iframe-BE6opBBQ.js";import{B as c}from"./bell-C5dhJ1ib.js";import{H as h}from"./house-Ch3rqFJT.js";import{N as g,S as u}from"./NavigationLink-B8ZlH5my.js";import{a as m,B as p}from"./BadgeContainer-Czr8uxOl.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BCuYuRMM.js";import"./Dialog-DryXQOzK.js";import"./Button-33q5ghqc.js";import"./utils-C8ofSvVg.js";import"./clsx-B-dksMZM.js";import"./Hidden-ZOBOpRNs.js";import"./useFocusRing-B2vnni9l.js";import"./index-DAQ_HM4b.js";import"./index-yi7QOzex.js";import"./useLabel-DYb1uAYa.js";import"./useLabels-CTwsRaEG.js";import"./useButton-Ds0Hb-Tu.js";import"./RSPContexts-D18522_R.js";import"./OverlayArrow-D_lM7QjR.js";import"./useResizeObserver-J_5HhmcL.js";import"./useControlledState-DKq-QKGp.js";import"./Collection-BDfNZ04v.js";import"./index-DBqXhfdp.js";import"./Separator-BABspNhk.js";import"./SelectionManager-DcfHF2BT.js";import"./useEvent-Df4XmH1c.js";import"./scrollIntoView-CGjnRAcf.js";import"./SelectionIndicator-DIMhBzC8.js";import"./useDescription-Cm-6_l4m.js";import"./ListKeyboardDelegate--moD0RsY.js";import"./Text-DssX7oue.js";import"./PressResponder-DODdLQvF.js";import"./useLocalizedStringFormatter-D7yAGsCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-GI6DuVjb.js";import"./getScrollParent-B6ANYB0N.js";import"./VisuallyHidden-TQ9t5iSG.js";import"./Link-CtSQyn3o.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-eZSTF5BN.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
