import{j as e}from"./iframe-CZzQp4L4.js";import{B as c}from"./bell-DqQF-wGI.js";import{H as h}from"./house-D3vbuuEi.js";import{N as g,S as u}from"./NavigationLink-B_WcGyNK.js";import{a as m,B as p}from"./BadgeContainer-BCBqHN5U.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Cp1wTSwb.js";import"./Dialog-Em9T_sNe.js";import"./Button-CMuMpLTA.js";import"./utils-BTk1BXS6.js";import"./clsx-B-dksMZM.js";import"./Hidden-BsPoJuN8.js";import"./useFocusRing-BmXcpeVt.js";import"./index-D0_fmTu-.js";import"./index-pEVaM4yo.js";import"./useLabel-BPb7Du1x.js";import"./useLabels-BJus4Fnm.js";import"./useButton-BjqkzqIi.js";import"./RSPContexts-C0f-FQan.js";import"./OverlayArrow-BWmspBAH.js";import"./useResizeObserver-kChHHO69.js";import"./useControlledState-Bzqk2M-v.js";import"./Collection-8ZnFVCkO.js";import"./index-IxhRrh31.js";import"./Separator-glEOqD4B.js";import"./SelectionManager-CzxGmGcX.js";import"./useEvent-BLtqzDzs.js";import"./scrollIntoView-C5X5vw03.js";import"./SelectionIndicator-FgeZ0UGL.js";import"./useDescription-CsoYkjOr.js";import"./ListKeyboardDelegate-DiVo4jo3.js";import"./Text-D4nq5ZrE.js";import"./PressResponder-qkhnBXZz.js";import"./useLocalizedStringFormatter-vXM2-Zab.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-8gubePBQ.js";import"./getScrollParent-D5Oq2B6G.js";import"./VisuallyHidden-aeJx5n8b.js";import"./Link-BmwfJt6w.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-mmAAgaBQ.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
