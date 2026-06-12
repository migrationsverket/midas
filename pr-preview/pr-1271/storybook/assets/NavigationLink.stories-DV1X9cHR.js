import{j as e}from"./iframe-CZr0KooT.js";import{B as c}from"./bell-B3ZeSi5w.js";import{H as h}from"./house-DhQo-olN.js";import{N as g,S as u}from"./NavigationLink-B39vBJ_g.js";import{a as m,B as p}from"./BadgeContainer-Wx7YlSrj.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DctSE2KV.js";import"./Dialog-CrSZXTKg.js";import"./Button-BW2eFo1r.js";import"./utils-C5atDzqm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSnmYJrK.js";import"./useFocusRing-B8L-HrJZ.js";import"./index-By5QsIbW.js";import"./index-BLMOfdQA.js";import"./useLabel-BC4w3s3i.js";import"./useLabels-DBo1sJWI.js";import"./useButton-DL-yMXOz.js";import"./RSPContexts-BdxpiS-s.js";import"./OverlayArrow-DlIcz3UG.js";import"./useResizeObserver-DSJ0-9gG.js";import"./useControlledState-BYpa5spl.js";import"./Collection-DTHlVKOq.js";import"./index-BSRvY494.js";import"./Separator-DwKrjug2.js";import"./SelectionManager-BFXs2QF5.js";import"./useEvent-D8s-tVaX.js";import"./scrollIntoView-CIALb2MR.js";import"./SelectionIndicator-konGZj98.js";import"./useDescription-Q_xHtQSY.js";import"./ListKeyboardDelegate-YvmZM1FZ.js";import"./Text-DasSw5Lo.js";import"./PressResponder-yeA3wPi_.js";import"./useLocalizedStringFormatter-BJKNLBfJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-AmsNMW2r.js";import"./getScrollParent-zZf70wh8.js";import"./VisuallyHidden-f7pY2arW.js";import"./Link-KHfjP78A.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-WI0T90DN.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
