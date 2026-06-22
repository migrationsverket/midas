import{j as e}from"./iframe-Dzhbyx-V.js";import{B as c}from"./bell-Bc0Z5YFg.js";import{H as h}from"./house-C6ErVVJV.js";import{N as g,S as u}from"./NavigationLink-HNrX51gA.js";import{a as m,B as p}from"./BadgeContainer-DeX86fjj.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Daz74Vgk.js";import"./Dialog-PCq06Qm1.js";import"./Button-CBTAD5ia.js";import"./utils-CB1YxmUd.js";import"./clsx-B-dksMZM.js";import"./Hidden-CFP4Nw8t.js";import"./useFocusRing-DJW4L7nP.js";import"./index-GOgi-yIv.js";import"./index-C7t27xFG.js";import"./useLabel-Cr2tVHj4.js";import"./useLabels-Dn3VJT3c.js";import"./useButton-ZzDTgbRW.js";import"./RSPContexts-BZBUf3ht.js";import"./OverlayArrow-DC5up_Z2.js";import"./useResizeObserver-DA-7fZmx.js";import"./useControlledState-BsGPn7dI.js";import"./Collection-Cyrn4hfM.js";import"./index-COsjAsAS.js";import"./Separator-dQuh_2rQ.js";import"./SelectionManager-CAcvLEQx.js";import"./useEvent-CM_jpF7d.js";import"./scrollIntoView-CGVh69Nr.js";import"./SelectionIndicator-FpX-lNKX.js";import"./useDescription-CQR6r60R.js";import"./ListKeyboardDelegate-D4rfyZ0F.js";import"./Text-B9yiudZO.js";import"./PressResponder-XCyiw1VR.js";import"./useLocalizedStringFormatter-D1IY3EM8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQB60EaB.js";import"./getScrollParent-BKCTdMaY.js";import"./VisuallyHidden-BTnUWvIm.js";import"./Link-C4lLB1qx.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-CsdYU25U.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
