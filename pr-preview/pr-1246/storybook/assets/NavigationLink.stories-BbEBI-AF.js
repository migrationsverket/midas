import{j as e}from"./iframe-hven07mH.js";import{B as c}from"./bell-Cr4dmTaV.js";import{H as h}from"./house-BzNf7Rea.js";import{N as g,S as u}from"./NavigationLink-BYXlNW6E.js";import{a as m,B as p}from"./BadgeContainer-DOFy8EPU.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-rLeAgfXY.js";import"./Dialog-CrXu0Iq4.js";import"./Button-b_-88Jdv.js";import"./utils-CP0dC5bD.js";import"./clsx-B-dksMZM.js";import"./Hidden-bl0dyrpb.js";import"./useFocusRing-6_qWLH8D.js";import"./index-CAaUGq6x.js";import"./index-VYEOm2qh.js";import"./useLabel-3fPS2DpE.js";import"./useLabels-8upbqgKW.js";import"./useButton-Bg6zMZft.js";import"./RSPContexts-BL3sWo_M.js";import"./OverlayArrow-Pyj2Sm6q.js";import"./useResizeObserver-C_bQTHpI.js";import"./useControlledState-_nq-pl6I.js";import"./Collection-CUMhwKNV.js";import"./index-OuXY1_jV.js";import"./Separator-PQI-1kJF.js";import"./SelectionManager-DwZcMojQ.js";import"./useEvent-BzIwcgMz.js";import"./scrollIntoView--hYGjISc.js";import"./SelectionIndicator-W2IT6oIH.js";import"./useDescription-DSRfQAcu.js";import"./ListKeyboardDelegate-9T6GEUhl.js";import"./Text-BAoIm1rg.js";import"./PressResponder-DI_yOdFi.js";import"./useLocalizedStringFormatter-DAcMpTAF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzzI9YUs.js";import"./getScrollParent-vliVuo3m.js";import"./VisuallyHidden-B42_LAgy.js";import"./Link-CuaWFIje.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DDnsKEtj.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
