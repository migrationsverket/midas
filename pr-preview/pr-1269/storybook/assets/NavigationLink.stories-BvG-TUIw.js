import{j as e}from"./iframe-Cc2x2NhL.js";import{B as c}from"./bell-DwBQ-QHY.js";import{H as h}from"./house-Db1fIacb.js";import{N as g,S as u}from"./NavigationLink-BoccYOKw.js";import{a as m,B as p}from"./BadgeContainer-BfhrKaV7.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DcmAEzc9.js";import"./Dialog-BPf3IZOs.js";import"./Button-ByJMIeTP.js";import"./utils-4Igqbjf8.js";import"./clsx-B-dksMZM.js";import"./Hidden-DXurTabA.js";import"./useFocusRing-WAjZqxaV.js";import"./index-B2z8J_iy.js";import"./index-BMFqcPHU.js";import"./useLabel-C3c6HGiK.js";import"./useLabels-DlHfLFqT.js";import"./useButton-DbeNFfwU.js";import"./RSPContexts-0YfvD9LK.js";import"./OverlayArrow-FlYvI0_Z.js";import"./useResizeObserver-DWx8oCEL.js";import"./useControlledState-B_OZWkkq.js";import"./Collection-DrMZK_17.js";import"./index-DXdtOShX.js";import"./Separator-7WC-UZS3.js";import"./SelectionManager-DEIbJdB3.js";import"./useEvent-BBH3oYjA.js";import"./scrollIntoView-BdS7fMnb.js";import"./SelectionIndicator-BhAuP5hr.js";import"./useDescription-Djm_rT5S.js";import"./ListKeyboardDelegate-BFNmsEvi.js";import"./Text-D3p3B56u.js";import"./PressResponder-C8VUQxtG.js";import"./useLocalizedStringFormatter-DvNtIm_P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dll6ZQaD.js";import"./getScrollParent-D5jUw6gC.js";import"./VisuallyHidden-CAnoPPmf.js";import"./Link-CIcOwfwg.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-BieSjX-l.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
