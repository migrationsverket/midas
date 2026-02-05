import{j as r}from"./iframe-BKVZlbwK.js";import{P as a}from"./Popover-vbRgXQBq.js";import{$ as i}from"./Dialog-DyLYXNfk.js";import{B as n}from"./Button-CMuF6ttX.js";import{S as p}from"./save-BxFt4QIe.js";import{c as m}from"./createLucideIcon-DBPtg95-.js";import{T as s}from"./Text-B3rWnA0b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-M76ULew0.js";import"./useFocusRing-B5vFDtZh.js";import"./utils-DPuolxVc.js";import"./index-PkL0TDm3.js";import"./index-BKxFf4CA.js";import"./Button-BXNg7Jsx.js";import"./Hidden-BRpSC0Ka.js";import"./useLabels-BVLaKNrB.js";import"./useButton-BvRx9rmC.js";import"./useResizeObserver-CrYaDSu2.js";import"./useControlledState-DGZkTwEL.js";import"./RSPContexts-B4IeL1gt.js";import"./Collection-BX0rPR2l.js";import"./index-B_usJpQo.js";import"./Separator-FYBudPC2.js";import"./SelectionManager-D5x3q2vB.js";import"./useEvent-vLHKVDXB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CWqxxjhH.js";import"./useDescription-xVVRlRNW.js";import"./ListKeyboardDelegate-CWBS7xji.js";import"./Text-B3d4ibdb.js";import"./PressResponder-ycJef-yO.js";import"./useLocalizedStringFormatter-B2KN6w1Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bmrdo5L6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRvu9CAK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-hBwIhHtL.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Z=["Primary","Placement"];export{e as Placement,t as Primary,Z as __namedExportsOrder,Y as default};
