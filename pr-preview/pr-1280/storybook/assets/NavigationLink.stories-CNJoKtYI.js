import{j as e}from"./iframe-BusKbIuL.js";import{B as c}from"./bell-Cg7NOfUm.js";import{H as h}from"./house-D0L5zG09.js";import{N as g,S as u}from"./NavigationLink-aJrzni7w.js";import{a as m,B as p}from"./BadgeContainer-DC6uIPhw.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CsIH265l.js";import"./Dialog-Bl6BPUcG.js";import"./Button-D16PjYbu.js";import"./utils-BLk-MBDB.js";import"./clsx-B-dksMZM.js";import"./Hidden-IsjPxMOX.js";import"./useFocusRing-Bkm-baB3.js";import"./index-CnP2yi1p.js";import"./index-DAOAnwsN.js";import"./useLabel-RD_wy9US.js";import"./useLabels-Dzl_jQ3w.js";import"./useButton-BmGPf_ms.js";import"./RSPContexts-CMg-o8P6.js";import"./OverlayArrow-XVvRfD3R.js";import"./useResizeObserver-BmwpnOhf.js";import"./useControlledState-VeRXhIhk.js";import"./Collection-DZTceJ5c.js";import"./index-DlodUe4K.js";import"./Separator-Br0Bxz8Z.js";import"./SelectionManager-CZQO9iyQ.js";import"./useEvent-D1SRwD2V.js";import"./scrollIntoView-DVC3yEfE.js";import"./SelectionIndicator-DIVBfEpP.js";import"./useDescription-0cGLMs3d.js";import"./ListKeyboardDelegate-BhTo0HRI.js";import"./Text-By1Rmolv.js";import"./PressResponder-NQ2bsNbb.js";import"./useLocalizedStringFormatter-BzO50CYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CLn9Imaq.js";import"./getScrollParent-BBgpxqF_.js";import"./VisuallyHidden-DfUkCTQh.js";import"./Link-DfX3PqiA.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-CLD9FF8y.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
