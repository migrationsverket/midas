import{j as e}from"./iframe-CU6IyPdi.js";import{B as c}from"./bell-NDwumvVE.js";import{H as h}from"./house-ZDD-ho9j.js";import{N as g,S as u}from"./NavigationLink-SKDGX5bX.js";import{a as m,B as p}from"./BadgeContainer-BflsO99b.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BhPQSJHM.js";import"./Dialog-CW6SQVMt.js";import"./Button-Dn__6SVC.js";import"./utils-C3EuF5tN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMh1hBMj.js";import"./useFocusRing-CgN0-97j.js";import"./index-CWwAu-UJ.js";import"./index-EaiVYzVz.js";import"./useLabel-Bt0836mW.js";import"./useLabels-Di0VtbU1.js";import"./useButton-YhY6a0OA.js";import"./RSPContexts-C8L0Tday.js";import"./OverlayArrow-B5JIWtP2.js";import"./useResizeObserver-Cp6oxV6U.js";import"./useControlledState-DnKqpd9E.js";import"./Collection-DuVcoonJ.js";import"./index-BLTV2BVr.js";import"./Separator-MT-0gEh2.js";import"./SelectionManager-mV4APRA7.js";import"./useEvent-CbNpr6qP.js";import"./scrollIntoView-CBeKWyA3.js";import"./SelectionIndicator-Aj5ctdzm.js";import"./useDescription-C14Mmfay.js";import"./ListKeyboardDelegate-IB4zQhb7.js";import"./Text-DjY_AY4u.js";import"./PressResponder-Cv1zl0GD.js";import"./useLocalizedStringFormatter-CCIw-1cs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wYJS1t3d.js";import"./getScrollParent-DPGj-_74.js";import"./VisuallyHidden-Bl6sgZVR.js";import"./Link-BvOQSxgx.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DT9k1EsW.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
