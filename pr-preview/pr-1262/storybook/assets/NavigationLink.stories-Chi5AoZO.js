import{j as e}from"./iframe-_Hk9HBhX.js";import{B as c}from"./bell-CojMDE5f.js";import{H as h}from"./house-BtxDMPuT.js";import{N as g,S as u}from"./NavigationLink-CkClXbVx.js";import{a as m,B as p}from"./BadgeContainer-z74FS3GZ.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-qIP4byR5.js";import"./Dialog-gbJqnVCn.js";import"./Button-BcVwX6wB.js";import"./utils-Tr1wzETD.js";import"./clsx-B-dksMZM.js";import"./Hidden-vPthIoGd.js";import"./useFocusRing-CUpBT6GV.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./RSPContexts-BkY4NJgN.js";import"./OverlayArrow-C8dc221V.js";import"./useResizeObserver-Dob1-ek4.js";import"./useControlledState-CXVEjKuF.js";import"./Collection-38fQTHAm.js";import"./index-D0DH_Og7.js";import"./Separator-mZ0uLOGM.js";import"./SelectionManager-CHKeKSA7.js";import"./useEvent-BoXIj02p.js";import"./scrollIntoView-DeSIzk3n.js";import"./SelectionIndicator-BOwLDBzR.js";import"./useDescription-Br1cNKJN.js";import"./ListKeyboardDelegate-CTPIAQRz.js";import"./Text-CFXOaGuN.js";import"./PressResponder-DSjXrWnb.js";import"./useLocalizedStringFormatter-xIKmWIeo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BrdO1Epl.js";import"./getScrollParent-arYGATXV.js";import"./VisuallyHidden-CE55BuvM.js";import"./Link-sSEyaiWQ.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-Bp1mFAJN.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
