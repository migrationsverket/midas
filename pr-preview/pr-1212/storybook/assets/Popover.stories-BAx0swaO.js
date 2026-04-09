import{j as r}from"./iframe-CFC4xcGk.js";import{P as a}from"./Popover-BpelOKcf.js";import{$ as i}from"./Dialog-bC6Mtm0x.js";import{S as n}from"./save-DZvgHPxw.js";import{c as m}from"./createLucideIcon-BfFQGVhS.js";import{B as p}from"./Button-DmKKfG5W.js";import{T as s}from"./Text-ZUooKx_2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-YAjyJ6o5.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-CELddGWW.js";import"./useFocusRing-jXz3NGbj.js";import"./index-BxLA2RHQ.js";import"./index-CMa239of.js";import"./Button-Dlhy25YO.js";import"./Hidden-BvfitbEd.js";import"./useLabel-BN4J_loo.js";import"./useLabels-D-PAbcSB.js";import"./useButton-DvjQ4vDc.js";import"./useResizeObserver-Bzr-P-UD.js";import"./useControlledState-CPr8PZqM.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-BaTuXADK.js";import"./Collection-Usc2d9zU.js";import"./index-3mOn_vPA.js";import"./Separator-CvBitslZ.js";import"./SelectionManager-CAmHqMfl.js";import"./useEvent-BUJ9aQ4c.js";import"./scrollIntoView-CKdxk-E0.js";import"./SelectionIndicator-DeAU8qDC.js";import"./useDescription-BsBgpIxP.js";import"./ListKeyboardDelegate-BO04bF22.js";import"./Text-AmqWzkOV.js";import"./PressResponder-BiBghsJL.js";import"./useLocalizedStringFormatter-dA5DnFaT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-noZqyxMd.js";import"./getScrollParent-v4OBvkmq.js";import"./VisuallyHidden-BPhSZleF.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BYPhK6jM.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Z={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Heading style={{
        marginBottom: '0.5rem'
      }}>Info</Heading>
        <Text>Genom att spara detta går det ej att ta bort</Text>
      </div>
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara'>
        <Save />
      </Button>
      <Popover {...args} />
    </DialogTrigger>
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    children: 'Spara'
  },
  render: args => <DialogTrigger>
      <Button variant='icon' aria-label='Spara' data-testid='popover-placement-trigger'>
        <Save />
      </Button>
      <Popover data-testid='popover-placement' {...args} />
    </DialogTrigger>
}`,...e.parameters?.docs?.source}}};const rr=["Primary","Placement"];export{e as Placement,t as Primary,rr as __namedExportsOrder,Z as default};
