import{j as r}from"./iframe-DZnzPlIp.js";import{S as n}from"./save-DDn3pqSF.js";import{c as m}from"./createLucideIcon-D1ffg5uX.js";import{$ as a}from"./Dialog-CkgzdDIo.js";import{P as i}from"./Popover-DKEhs-aD.js";import{B as p}from"./Button-Q8NbkpbT.js";import{T as s}from"./Text-B1aKKyjJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Dtht3JLw.js";import"./utils-CNFHwh-q.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHBA8I1E.js";import"./useFocusRing-Nu8QV6qN.js";import"./index-08boVIM8.js";import"./index-BK2sDAog.js";import"./useLabels-Bn0lABK-.js";import"./useButton-CARWH--T.js";import"./RSPContexts-iwyWCt_c.js";import"./OverlayArrow-B9zMfTsY.js";import"./useResizeObserver-D_U72n22.js";import"./useControlledState-CrkPfz38.js";import"./Collection-6eU8VEUR.js";import"./index-DpWj-1TC.js";import"./Separator-C0uNNuwr.js";import"./SelectionManager-BHjS2xQl.js";import"./useEvent-ChHWq_03.js";import"./scrollIntoView-X-mFgLrZ.js";import"./SelectionIndicator-0CXjV7zh.js";import"./useDescription-CATiUuAQ.js";import"./ListKeyboardDelegate-qlktSOjg.js";import"./Text-D4f0kWpn.js";import"./PressResponder-BEKAxGBZ.js";import"./useLocalizedStringFormatter-BQqTysii.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ba2DoF1m.js";import"./VisuallyHidden-DEEJ503M.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B9kfZZmT.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
