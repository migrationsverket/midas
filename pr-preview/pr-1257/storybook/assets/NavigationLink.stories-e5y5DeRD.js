import{j as e}from"./iframe-D_tI-LG6.js";import{B as c}from"./bell-DR3cjuwI.js";import{H as h}from"./house-Bw2hmQAe.js";import{N as g,S as u}from"./NavigationLink-DV3d4iu-.js";import{a as m,B as p}from"./BadgeContainer-CI1uQnyo.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Cjn_t3BL.js";import"./Dialog-eXPf3smd.js";import"./Button-hSHq5h1Q.js";import"./utils-BmuT-4CL.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7jFD7Zq.js";import"./useFocusRing-DXI1PCCK.js";import"./index-CQI2_EoC.js";import"./index-Dfh6ODF_.js";import"./useLabel-BIe-ZNj5.js";import"./useLabels-TnOGI8pm.js";import"./useButton-C13tj-EJ.js";import"./RSPContexts-C1Z7Vm5X.js";import"./OverlayArrow-BGTLKWnm.js";import"./useResizeObserver-BsODJpzd.js";import"./useControlledState-D0L1s8oX.js";import"./Collection-B7H5xaqM.js";import"./index-BH9s9hTH.js";import"./Separator-Da8IBImH.js";import"./SelectionManager-g-9xTfpe.js";import"./useEvent-BeOXJju6.js";import"./scrollIntoView-Bwch4vY3.js";import"./SelectionIndicator-B_gIlSD6.js";import"./useDescription-T8zc5UX5.js";import"./ListKeyboardDelegate-D_cKU6vh.js";import"./Text-CULJXyXM.js";import"./PressResponder-TY9kKsKw.js";import"./useLocalizedStringFormatter-COHjwRxp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMgKQrZS.js";import"./getScrollParent-BgKCMS-7.js";import"./VisuallyHidden-DzLaLv62.js";import"./Link-Dp7Wsm5N.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-CsJ0EUpW.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
