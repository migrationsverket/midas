import{j as e}from"./iframe-CDA_ildW.js";import{B as c}from"./bell-BcHcLwqO.js";import{H as h}from"./house-BS06sumy.js";import{N as g,S as u}from"./NavigationLink-93GqQ-l6.js";import{a as m,B as p}from"./BadgeContainer-CIkEVd7O.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-HvfaTVWX.js";import"./Dialog-BQv3YqZW.js";import"./Button-Djyjt8oy.js";import"./utils-DYwc33gT.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPevkO8m.js";import"./useFocusRing-3NNdwvus.js";import"./index-CSSYRJw_.js";import"./index-BBLevZqB.js";import"./useLabel-B0vXNp9W.js";import"./useLabels-CI-l0tvd.js";import"./useButton-BoIayeTx.js";import"./RSPContexts-txMKpHrt.js";import"./OverlayArrow-C2FN7BXZ.js";import"./useResizeObserver-rW2TM9K1.js";import"./useControlledState-K9GQEKN-.js";import"./Collection-SRMBzawM.js";import"./index-CXnan05L.js";import"./Separator-CduiM4Yn.js";import"./SelectionManager-DvdfVsnr.js";import"./useEvent-H41NhmUB.js";import"./scrollIntoView-CDtwkdUZ.js";import"./SelectionIndicator-Mz0JAxcc.js";import"./useDescription-_BnwWcQ8.js";import"./ListKeyboardDelegate-B31G3H95.js";import"./Text-K4BkD2rQ.js";import"./PressResponder-ymxt6aWP.js";import"./useLocalizedStringFormatter-Bx9Y73Mw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CrDB_43n.js";import"./getScrollParent-BOHsqMJ6.js";import"./VisuallyHidden-D1KRANLi.js";import"./Link-CgenocqE.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DCJntHF0.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
