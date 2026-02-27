import{j as r}from"./iframe-D7a0roTE.js";import{P as a}from"./Popover-3kbYKwYt.js";import{$ as i}from"./Dialog-Q6kvsWpt.js";import{B as n}from"./Button-BmkKd0hD.js";import{S as p}from"./save-CTov-PSY.js";import{c as m}from"./createLucideIcon-CpMQKadj.js";import{T as s}from"./Text-BQJnC-MG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-kD9LOTQD.js";import"./useFocusRing-CFRP2Jek.js";import"./utils-CCwC5od5.js";import"./index-CFLLbIUX.js";import"./index-Bcz-F3t-.js";import"./Button-202_c7Iv.js";import"./Hidden-Dy39TreI.js";import"./useLabels-BtRp1y_K.js";import"./useButton-DiS7UUja.js";import"./useResizeObserver-BVF-O22x.js";import"./useControlledState-DDhJysn8.js";import"./RSPContexts-CZ_mWjdj.js";import"./Collection-D2cuxciY.js";import"./index-CRYr5dw0.js";import"./Separator-jEsBjNUK.js";import"./SelectionManager-DtNgJa0N.js";import"./useEvent-BLyKonF-.js";import"./scrollIntoView-DNIYTqEF.js";import"./SelectionIndicator-BU_YSj6V.js";import"./useDescription-3cPSrQCV.js";import"./ListKeyboardDelegate-Dw3xad8c.js";import"./Text-BeZ98S-S.js";import"./PressResponder-hfgqwsy-.js";import"./useLocalizedStringFormatter-e3ysiM8J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BncEy6IE.js";import"./getScrollParent-DOj-Lfm1.js";import"./VisuallyHidden-C3QcPrAB.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CzDArdEs.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
