import{j as r}from"./iframe-CxtXgaif.js";import{S as n}from"./save-Cv28Nf5j.js";import{c as m}from"./createLucideIcon-CsCGHR6v.js";import{$ as a}from"./Dialog-CgqKWoFh.js";import{P as i}from"./Popover-B2f3b-vi.js";import{B as p}from"./Button-CZkEUMhX.js";import{T as s}from"./Text-BZPjmLfW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-QJx86_Xy.js";import"./utils-BHaXAsAf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtogIfXa.js";import"./useFocusRing-C31KCpBg.js";import"./index-LOJiVQyp.js";import"./index-McGX5QjV.js";import"./useLabels-Cied99SI.js";import"./useButton-Cv4m8R1u.js";import"./RSPContexts-Bpq_c5A9.js";import"./OverlayArrow-BKY1QcVg.js";import"./useResizeObserver-mh8bib83.js";import"./useControlledState-va708PFm.js";import"./Collection-CdnIVEB-.js";import"./index-BSkO2kw7.js";import"./Separator-8R5I02kA.js";import"./SelectionManager-BIHQBZZj.js";import"./useEvent-BLEaEyxT.js";import"./scrollIntoView-DVjFN4rN.js";import"./SelectionIndicator-GniDyRJ4.js";import"./useDescription-BJDx3EcI.js";import"./ListKeyboardDelegate-CRqh4x3V.js";import"./Text-hsuWdQJy.js";import"./PressResponder-DtdN1iJv.js";import"./useLocalizedStringFormatter-CiYxBryn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B9reZdFx.js";import"./VisuallyHidden-CVvKj0Xg.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVPw1CAM.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Y=["Primary","Placement"];export{e as Placement,t as Primary,Y as __namedExportsOrder,X as default};
