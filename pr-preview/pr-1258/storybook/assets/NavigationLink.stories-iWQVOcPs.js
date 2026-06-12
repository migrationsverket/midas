import{j as e}from"./iframe-CWlixrW_.js";import{B as c}from"./bell-DXc7aCQY.js";import{H as h}from"./house-EKOuMy07.js";import{N as g,S as u}from"./NavigationLink-BXs0xv3L.js";import{a as m,B as p}from"./BadgeContainer-3P0floZb.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Ay7p0EQv.js";import"./Dialog-DjmcXnG0.js";import"./Button-kA2ued5f.js";import"./utils-CRaSuqNF.js";import"./clsx-B-dksMZM.js";import"./Hidden-C139jkL0.js";import"./useFocusRing-DDmLMMaV.js";import"./index-9FhWo1dj.js";import"./index-_BXH5tR9.js";import"./useLabel-DkzOQx4t.js";import"./useLabels-C00UR8Eo.js";import"./useButton-DQDkLrpI.js";import"./RSPContexts-D4D98plB.js";import"./OverlayArrow-DKZA2JNv.js";import"./useResizeObserver-C-ftW52s.js";import"./useControlledState-CzRWfzat.js";import"./Collection-EO1AcQfg.js";import"./index-CFLy-5bI.js";import"./Separator-ClT2p5T2.js";import"./SelectionManager-Be9sokqv.js";import"./useEvent-Ditv3QO5.js";import"./scrollIntoView-AfG37jOw.js";import"./SelectionIndicator-DtNX-UQ2.js";import"./useDescription-DXpo-reC.js";import"./ListKeyboardDelegate-C63MTa-n.js";import"./Text-oz4ou16d.js";import"./PressResponder-DFbfA2hF.js";import"./useLocalizedStringFormatter-ViKOiGge.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzLA8zs-.js";import"./getScrollParent-DWEouMlM.js";import"./VisuallyHidden-BQ6ylskT.js";import"./Link-DY6avqTC.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-CWCbgBff.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
