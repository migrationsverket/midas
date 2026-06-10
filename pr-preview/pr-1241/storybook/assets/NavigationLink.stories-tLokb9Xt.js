import{j as e}from"./iframe-y1u__L-8.js";import{B as c}from"./bell-B5SzgcE-.js";import{H as h}from"./house-DMrvo0fi.js";import{N as g,S as u}from"./NavigationLink-B_FFnv8K.js";import{a as m,B as p}from"./BadgeContainer-CE692sbE.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-C_M4Trqf.js";import"./Dialog-BiNhJBI-.js";import"./Button-Bmc3JOkJ.js";import"./utils-Da8nMI6o.js";import"./clsx-B-dksMZM.js";import"./Hidden-DTarpjft.js";import"./useFocusRing-DrPDMwIf.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./RSPContexts-BzgKoUFY.js";import"./OverlayArrow-DPD6R6ym.js";import"./useResizeObserver-DxXypk8I.js";import"./useControlledState-SL3CCMLy.js";import"./Collection-BXQTs4xV.js";import"./index-DpYlLRD4.js";import"./Separator-QJJ7D4Tg.js";import"./SelectionManager-C7uieu2B.js";import"./useEvent-BdW-8kO2.js";import"./scrollIntoView-DPjPSgYg.js";import"./SelectionIndicator-Dr5bwis_.js";import"./useDescription-C868_Zy-.js";import"./ListKeyboardDelegate-CotMEVTu.js";import"./Text-LCGDIWeJ.js";import"./PressResponder-Ci85RzOj.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4rEa8ur.js";import"./getScrollParent-DOFnmN7L.js";import"./VisuallyHidden-vMJRuQeL.js";import"./Link-Dx0bOqic.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-D4BYhRZ3.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
