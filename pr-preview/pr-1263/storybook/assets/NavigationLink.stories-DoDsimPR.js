import{j as e}from"./iframe-gbJBpoDx.js";import{B as c}from"./bell-C3f-LUiL.js";import{H as h}from"./house-Bsctx8Cn.js";import{N as g,S as u}from"./NavigationLink-BCEu8fDn.js";import{a as m,B as p}from"./BadgeContainer-C4HKkQoD.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-C3IEX8hu.js";import"./Dialog-AHauR5Fo.js";import"./Button-C3tdjGV6.js";import"./utils-DUgHs6FT.js";import"./clsx-B-dksMZM.js";import"./Hidden-CvjG_1RQ.js";import"./useFocusRing-CdGrrviA.js";import"./index-DGfeUZWJ.js";import"./index-h8QHE_zG.js";import"./useLabel-DBWjU4Cx.js";import"./useLabels-CGcCPDWZ.js";import"./useButton-BmNiDIvC.js";import"./RSPContexts-DiLb2jsV.js";import"./OverlayArrow-BI4pGjQC.js";import"./useResizeObserver-DIAWS4tV.js";import"./useControlledState-CVd5Xqz2.js";import"./Collection-CM-3lYwE.js";import"./index-BdX53cNt.js";import"./Separator-Bc-mZsv-.js";import"./SelectionManager-C0D1h0Vh.js";import"./useEvent-waE1JgxF.js";import"./scrollIntoView-DIgHhdMC.js";import"./SelectionIndicator-Ce5zkH-2.js";import"./useDescription-6CJm5bcg.js";import"./ListKeyboardDelegate-la3RUrG9.js";import"./Text-CE4EKtCP.js";import"./PressResponder-CdMFoX3r.js";import"./useLocalizedStringFormatter--yN4gUH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BadfckAr.js";import"./getScrollParent-CXwwiqPr.js";import"./VisuallyHidden-Ck3fIWPQ.js";import"./Link-nxgH913I.js";import"./clsx-Ciqy0D92.js";import"./Tooltip-B8peDIgY.js";const ne={component:g,title:"Layout/Navigation/NavigationLink",tags:["autodocs"],args:{children:"Hem",href:"/",icon:e.jsx(h,{})},parameters:{layout:"centered"}},r={},a={args:{isActive:!0}},n={args:{isDisabled:!0}},o={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l})})},i={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{})]})}},s={args:{children:"Meddelanden",href:"/meddelanden",icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},t={args:{children:"Meddelanden",href:"/meddelanden",isActive:!0,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]})}},d={render:l=>e.jsx(u.Provider,{value:{isCollapsed:!0},children:e.jsx(g,{...l,icon:e.jsxs(m,{children:[e.jsx(c,{}),e.jsx(p,{children:"12"})]}),children:"Meddelanden"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
