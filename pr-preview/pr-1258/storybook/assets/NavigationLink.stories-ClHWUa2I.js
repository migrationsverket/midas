import{j as e}from"./iframe-CXw6yEtL.js";import{B as c}from"./bell-CmtPlE-c.js";import{H as h}from"./house-wdDBs-hx.js";import{N as g,S as u}from"./NavigationLink-D3tDVdWr.js";import{a as m,B as p}from"./BadgeContainer-0kxJKNxG.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DWQv9Ysr.js";import"./Dialog-BDtLRBZX.js";import"./Button-C2Moqf7z.js";import"./utils-TMTFLosf.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7hcqzmB.js";import"./useFocusRing-BUJw-zNR.js";import"./index-CPSfvkie.js";import"./index-DlzVmrOj.js";import"./useLabel-B_dwgCb3.js";import"./useLabels-Bmz9yT3c.js";import"./useButton-DFd8dIUb.js";import"./RSPContexts-CRecp9AH.js";import"./OverlayArrow-CYsKMuHd.js";import"./useResizeObserver-BgbTD5F9.js";import"./useControlledState-uGX0UHSY.js";import"./Collection-DRs08V62.js";import"./index-D_bJjS7Z.js";import"./Separator-CiHVhPYJ.js";import"./SelectionManager-DF7_C-wd.js";import"./useEvent-CLzgpnys.js";import"./scrollIntoView-J9HcqoeY.js";import"./SelectionIndicator-CRVyJK_1.js";import"./useDescription-5GU4b1w7.js";import"./ListKeyboardDelegate-C0AuU4n7.js";import"./Text-B-ez7dVi.js";import"./PressResponder-BdAtoMPY.js";import"./useLocalizedStringFormatter-GNvNdhCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmiDGQ5a.js";import"./getScrollParent-DI5JJTrt.js";import"./VisuallyHidden-DZf8hqs4.js";import"./Link-CHwtPkEd.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-DVFPaASn.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
