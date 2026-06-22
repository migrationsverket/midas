import{j as e}from"./iframe-P3qrm_tw.js";import{B as c}from"./bell-DRmUu4NM.js";import{H as h}from"./house-ClDa9QbM.js";import{N as g,S as u}from"./NavigationLink-DGdHjd3G.js";import{a as m,B as p}from"./BadgeContainer-BEXArqU0.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-dl19Mkak.js";import"./Dialog-CAsWsL1c.js";import"./Button-DhFyMRUa.js";import"./utils-Cu9HNXzK.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdxXq6fe.js";import"./useFocusRing-BLJ-Rv5B.js";import"./index-sMyOSi6p.js";import"./index-DWrpe-jF.js";import"./useLabel-CyrOFGd3.js";import"./useLabels-C-xox_2r.js";import"./useButton-Co-DeDts.js";import"./RSPContexts-BPVGWq9w.js";import"./OverlayArrow-dQPLWnfN.js";import"./useResizeObserver-egy9g9Ju.js";import"./useControlledState-UTFpRQoc.js";import"./Collection-BfPyiiOr.js";import"./index-B_B3CX6j.js";import"./Separator-D3Nu6UpI.js";import"./SelectionManager-CmZUjzIx.js";import"./useEvent-uJeReNRd.js";import"./scrollIntoView-D7nJ6B6R.js";import"./SelectionIndicator-NCDsTiNC.js";import"./useDescription-Dx_6VVp1.js";import"./ListKeyboardDelegate-BOK_v8Uu.js";import"./Text-GLSAKrWj.js";import"./PressResponder-DEDclZz9.js";import"./useLocalizedStringFormatter-CJciJbzM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DILHiYuv.js";import"./getScrollParent-DDX5O9pm.js";import"./VisuallyHidden-BQNLfJdW.js";import"./Link-Dsh6B56G.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-CZVMUC_k.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
