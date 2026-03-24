import{j as r}from"./iframe-BkVzc2jf.js";import{P as a}from"./Popover-D0a-Z8Kn.js";import{$ as i}from"./Dialog-B11UlQIO.js";import{S as n}from"./save-W8JZcq1G.js";import{c as m}from"./createLucideIcon-BjNI9TSY.js";import{B as p}from"./Button-ZTyLTH5E.js";import{T as s}from"./Text-B79zESTX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BygJjxp_.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-B9D8DwA5.js";import"./useFocusRing-Aiyx2UXL.js";import"./index-DCHZ6NdQ.js";import"./index-CRBDyq3W.js";import"./Button-DC3ZjroM.js";import"./Hidden-R6jv-Zbn.js";import"./useLabels-r2kWzK6Q.js";import"./useButton-B1UvRsW1.js";import"./useResizeObserver-CJBdYodv.js";import"./useControlledState-LZdmvusm.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-LbRQIp3l.js";import"./Collection-CFuYVz80.js";import"./index-CqLT7pz4.js";import"./Separator-CvqaBUS5.js";import"./SelectionManager-HKzWsq0f.js";import"./useEvent-D9_iLH0i.js";import"./scrollIntoView-Yjo_y5ur.js";import"./SelectionIndicator-CMspJvvR.js";import"./useDescription-CYDZbRK4.js";import"./ListKeyboardDelegate-CRHKUCzm.js";import"./Text-Cl9gTfqF.js";import"./PressResponder-X-v42Ff3.js";import"./useLocalizedStringFormatter-DAoOwKNh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BuKlwr_J.js";import"./getScrollParent-CTmctxBz.js";import"./VisuallyHidden-BWjyWmb6.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BzPZ_rQR.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
