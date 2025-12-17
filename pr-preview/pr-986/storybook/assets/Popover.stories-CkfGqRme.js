import{j as r}from"./iframe-BkwZBgQB.js";import{S as n}from"./save-BfWfs16i.js";import{c as m}from"./createLucideIcon-D32Zx4L2.js";import{$ as a}from"./Dialog-CwWk4o7K.js";import{P as i}from"./Popover-WXNltfzT.js";import{B as p}from"./Button-BXuxybWM.js";import{T as s}from"./Text-BS5-w4Gk.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DpNES8Mp.js";import"./utils-DRDg4FYD.js";import"./clsx-B-dksMZM.js";import"./Hidden-CjaNJwk3.js";import"./useFocusRing-yaIiikqm.js";import"./index-Dc04iqLv.js";import"./index-tLxIEPdH.js";import"./useLabels-CoCvP3vg.js";import"./useButton-f6mPFvlj.js";import"./RSPContexts-DfwIAS8E.js";import"./OverlayArrow-D_E5Q14Q.js";import"./useResizeObserver-2zGeZJAK.js";import"./useControlledState-BBX4_4Sa.js";import"./Collection-70mOt9uf.js";import"./index-Did7KFZZ.js";import"./Separator-C0Djmryq.js";import"./SelectionManager-Dhwe5l0W.js";import"./useEvent-CsBEnloE.js";import"./scrollIntoView-DoC-WaXh.js";import"./SelectionIndicator-D0a4Qyly.js";import"./useDescription-DJivPjTX.js";import"./ListKeyboardDelegate-BIUOdfPa.js";import"./Text-CqraFZpH.js";import"./PressResponder-DO6GQeqd.js";import"./useLocalizedStringFormatter-DU0hnyiw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DRpoKEwA.js";import"./VisuallyHidden-CfZQE67O.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BDvEu7Qr.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
