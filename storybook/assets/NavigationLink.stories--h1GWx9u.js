import{j as e}from"./iframe-DhO1D3QS.js";import{B as c}from"./bell-1FblK3LV.js";import{H as h}from"./house-BfxBBf97.js";import{N as g,S as u}from"./NavigationLink-Ls-Gol1H.js";import{a as m,B as p}from"./BadgeContainer-CkqA_Kgc.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DKHdgiD6.js";import"./Dialog-DnbLLgMq.js";import"./Button-C3UugFSS.js";import"./utils-CSNCD2yj.js";import"./clsx-B-dksMZM.js";import"./Hidden-I1lhyBbs.js";import"./useFocusRing-CQcNXJs3.js";import"./index-LXpDKKNQ.js";import"./index-DoTz7Iqr.js";import"./useLabel-DkS0rVDY.js";import"./useLabels-DLba56LZ.js";import"./useButton-CWHmgq4Y.js";import"./RSPContexts-6O3ucjMQ.js";import"./OverlayArrow-Bt3V5xwN.js";import"./useResizeObserver-Dy2ut44h.js";import"./useControlledState-C9CuHrJu.js";import"./Collection-Cimwf5Zr.js";import"./index-Bc5wjcDh.js";import"./Separator-CAP_u--M.js";import"./SelectionManager-BiDDZLNk.js";import"./useEvent-CAEIwGNs.js";import"./scrollIntoView-aGeNnyvC.js";import"./SelectionIndicator-DS0PCRu2.js";import"./useDescription-CghzDXw0.js";import"./ListKeyboardDelegate-D5nCii-g.js";import"./Text-_SRXujoE.js";import"./PressResponder-Dn7Sr3dQ.js";import"./useLocalizedStringFormatter-BuzJnweE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8lt5G5V.js";import"./getScrollParent-CDShaaNJ.js";import"./VisuallyHidden-D9luNuIh.js";import"./Link-BhS7FW6M.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-m_cPdBcY.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
