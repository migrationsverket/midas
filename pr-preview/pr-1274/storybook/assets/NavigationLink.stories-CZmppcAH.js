import{j as e}from"./iframe-CX9u6T8Y.js";import{B as c}from"./bell-BJqc0uBI.js";import{H as h}from"./house-DsOpBcvZ.js";import{N as g,S as u}from"./NavigationLink-BdJDD8xO.js";import{a as m,B as p}from"./BadgeContainer-_cBrStye.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B3Yd5B-T.js";import"./Dialog-KMkeEz2A.js";import"./Button-DNtvrS_L.js";import"./utils-B_VHG1Gv.js";import"./clsx-B-dksMZM.js";import"./Hidden-BBME2lcH.js";import"./useFocusRing-VvtcDzXm.js";import"./index-CMK6CEsG.js";import"./index-BVrz2ZAp.js";import"./useLabel-BDLn6W6W.js";import"./useLabels-B630tUke.js";import"./useButton-CBDoaz5U.js";import"./RSPContexts-BNooXlrN.js";import"./OverlayArrow-DyKE0IPh.js";import"./useResizeObserver-C6yuo73Q.js";import"./useControlledState-CqdFbIjJ.js";import"./Collection-BQaK6DiV.js";import"./index-BxaUb3R0.js";import"./Separator-4Z7SGmJN.js";import"./SelectionManager-B23DL8iR.js";import"./useEvent-zf2pcSAO.js";import"./scrollIntoView-DpK8DHna.js";import"./SelectionIndicator-hxR0v41A.js";import"./useDescription-EWWy_tBC.js";import"./ListKeyboardDelegate-DbPEeBPI.js";import"./Text-C6_BqquS.js";import"./PressResponder-BB8d3xdq.js";import"./useLocalizedStringFormatter-Bk5zOPZH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BEO9m3RA.js";import"./getScrollParent-CX4KiXNJ.js";import"./VisuallyHidden-CQlGnIWD.js";import"./Link-BkH_7_XZ.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-Bh24MibT.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
