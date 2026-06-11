import{j as e}from"./iframe-DLIfUtVm.js";import{B as c}from"./bell-BuCkEoL8.js";import{H as h}from"./house-D3R2myTB.js";import{N as g,S as u}from"./NavigationLink-BsNXwF2w.js";import{a as m,B as p}from"./BadgeContainer-CXNp77t0.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-D_WvFzuZ.js";import"./Dialog-N4-uAqw5.js";import"./Button-DjhlSD9p.js";import"./utils-DijK3BhG.js";import"./clsx-B-dksMZM.js";import"./Hidden-gQ2c-O38.js";import"./useFocusRing-B-eRA-0U.js";import"./index-ic1LOc6Q.js";import"./index-BmToxQMH.js";import"./useLabel-CMC2PGue.js";import"./useLabels-D1ty8LnF.js";import"./useButton-B7XowPCf.js";import"./RSPContexts-D91XMIa7.js";import"./OverlayArrow-BQld5ld3.js";import"./useResizeObserver-DphTRZ6E.js";import"./useControlledState-TKTqriB6.js";import"./Collection-cGfgXwcY.js";import"./index--ml_NepL.js";import"./Separator-BOcGevY0.js";import"./SelectionManager-B5QpEOZo.js";import"./useEvent-COzGA22f.js";import"./scrollIntoView-C8C62cn2.js";import"./SelectionIndicator-XUvq_wYE.js";import"./useDescription-BaeFvinJ.js";import"./ListKeyboardDelegate-DQOkQRlN.js";import"./Text-BOHNy1km.js";import"./PressResponder-BmwLoaVU.js";import"./useLocalizedStringFormatter-4oJDcrPd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D_QCD2Ih.js";import"./getScrollParent-QlPDcvR1.js";import"./VisuallyHidden-B6pFoD4c.js";import"./Link-CnofHXyV.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-O5VWRAWO.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
