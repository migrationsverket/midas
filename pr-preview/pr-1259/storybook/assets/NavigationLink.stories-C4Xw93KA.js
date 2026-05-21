import{j as e}from"./iframe-BtoRqfbN.js";import{B as c}from"./bell-iCmsFYFh.js";import{H as h}from"./house-0dReKyjb.js";import{N as g,S as u}from"./NavigationLink-DlBOqbO7.js";import{a as m,B as p}from"./BadgeContainer-Nw8az9Bh.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BGwZIy7f.js";import"./Dialog-lusSOXwC.js";import"./Button-D0NLyYor.js";import"./utils-D3T2l2Oh.js";import"./clsx-B-dksMZM.js";import"./Hidden-DmNqBwSB.js";import"./useFocusRing-CPJmXdz2.js";import"./index-CLPTlYyH.js";import"./index-Wh2LXb7r.js";import"./useLabel-BusboG5C.js";import"./useLabels-DkCdbV7o.js";import"./useButton-CAXNDaeV.js";import"./RSPContexts-DkTToRLK.js";import"./OverlayArrow-Dxt346hx.js";import"./useResizeObserver-musF9ULC.js";import"./useControlledState-acke6wY8.js";import"./Collection-BxhFXTj7.js";import"./index-VivUuEmv.js";import"./Separator-C3z6jLVu.js";import"./SelectionManager-BhME_TyD.js";import"./useEvent-DfABwBS6.js";import"./scrollIntoView-DKC0Wlwj.js";import"./SelectionIndicator-DN-f_s8Q.js";import"./useDescription-Dme_kk-C.js";import"./ListKeyboardDelegate-CiLABnWW.js";import"./Text-x1siHFmD.js";import"./PressResponder-DYHSOAMr.js";import"./useLocalizedStringFormatter-CoozzIhe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuqN4n3N.js";import"./getScrollParent-D4tvg9G7.js";import"./VisuallyHidden-DH8wexDg.js";import"./Link-D2KT3Qpf.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-C4f7m7gJ.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
