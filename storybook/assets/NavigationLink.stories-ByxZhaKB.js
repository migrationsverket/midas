import{j as e}from"./iframe-BKRZxWBZ.js";import{B as c}from"./bell-CDw9Yv0A.js";import{H as h}from"./house-H2777Pew.js";import{N as g,S as u}from"./NavigationLink-BcXEwu1L.js";import{a as m,B as p}from"./BadgeContainer-Cf-ZJ_p6.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B2GxFjYG.js";import"./Dialog-C7WdF5zb.js";import"./Button-Bag6HyT1.js";import"./utils-Y4JGSljl.js";import"./clsx-B-dksMZM.js";import"./Hidden-D261fXZx.js";import"./useFocusRing-CbgDMaVp.js";import"./index-2JeAuUPI.js";import"./index-B0HfdUG8.js";import"./useLabel-BieDJ9AW.js";import"./useLabels-BXP993UL.js";import"./useButton-SiXTvTV2.js";import"./RSPContexts-BLR_J2o2.js";import"./OverlayArrow-CvFYChOZ.js";import"./useResizeObserver-BVT5-EIf.js";import"./useControlledState-C2ay6qCb.js";import"./Collection-Dp6UAv6j.js";import"./index-Kq-8Ist-.js";import"./Separator-C7yLVvrB.js";import"./SelectionManager-DBzFzXpy.js";import"./useEvent-CJgh-wfk.js";import"./scrollIntoView-9DVoBKAT.js";import"./SelectionIndicator-DfHJkRwt.js";import"./useDescription-BeUx0Y0j.js";import"./ListKeyboardDelegate-rL3nlI98.js";import"./Text-DGzS_SrA.js";import"./PressResponder-BNXMCjL5.js";import"./useLocalizedStringFormatter-CGG1SsZP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sv7RN9Kz.js";import"./getScrollParent-5vt1eUdP.js";import"./VisuallyHidden-DbkQs6Cg.js";import"./Link-BbOAO-TT.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-Be8vKg6W.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
