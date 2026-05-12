import{j as e}from"./iframe-DXV5yNVg.js";import{B as c}from"./bell-DvrQbcXe.js";import{H as h}from"./house-DqJ3wsNl.js";import{N as g,S as u}from"./NavigationLink-CsVbUKmc.js";import{a as m,B as p}from"./BadgeContainer-Cg0uC--C.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BzcStSQs.js";import"./Dialog-CbPWg4ki.js";import"./Button-BFHR6RXp.js";import"./utils-D2X0V_ch.js";import"./clsx-B-dksMZM.js";import"./Hidden-D1mzcqIQ.js";import"./useFocusRing-D5WWltRW.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./RSPContexts-CFPuUxx1.js";import"./OverlayArrow-BFyUX9eS.js";import"./useResizeObserver-B-tmIu7G.js";import"./useControlledState-gqmUfamI.js";import"./Collection-BHKWOZuO.js";import"./index-DLzlm1NY.js";import"./Separator-Cnj1iZa1.js";import"./SelectionManager-DOb3wefr.js";import"./useEvent-BKSnxFNZ.js";import"./scrollIntoView-Gtl3EXZL.js";import"./SelectionIndicator-BAznZF8p.js";import"./useDescription-Br6-58Tk.js";import"./ListKeyboardDelegate-qY0cUxF-.js";import"./Text-CKvHTakV.js";import"./PressResponder-jCanc_1p.js";import"./useLocalizedStringFormatter-DMugWIr_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cln5OJdR.js";import"./getScrollParent-DEOaQKh5.js";import"./VisuallyHidden-BEiLaXoC.js";import"./Link-C7SxDFX6.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-_ufs1Jba.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
