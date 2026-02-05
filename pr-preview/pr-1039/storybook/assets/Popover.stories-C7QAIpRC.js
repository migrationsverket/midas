import{j as r}from"./iframe-Zc8QEBEs.js";import{P as a}from"./Popover-CyWwcwZc.js";import{$ as i}from"./Dialog-DhvD1and.js";import{B as n}from"./Button-Dkxo3GyP.js";import{S as p}from"./save-BpQsRexz.js";import{c as m}from"./createLucideIcon-BfbY4clK.js";import{T as s}from"./Text-DJvoMdLY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-DK_Hqowl.js";import"./useFocusRing-DVsvUXQz.js";import"./utils-B5Ft6r77.js";import"./index-D1lEo7Ix.js";import"./index-CTsCTBIR.js";import"./Button-CVF2QLQE.js";import"./Hidden-CwlmQhVF.js";import"./useLabels-B1tM-n7Q.js";import"./useButton-CeK3qSVj.js";import"./useResizeObserver-BHwzkzeg.js";import"./useControlledState--JkDKSQL.js";import"./RSPContexts-D6ksqvWo.js";import"./Collection-DNsKHJEo.js";import"./index-BjRnP0Cx.js";import"./Separator-BawHnKHm.js";import"./SelectionManager-C89loMqR.js";import"./useEvent-sXQWxw0f.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Db61joGp.js";import"./useDescription-Bmj6vDCw.js";import"./ListKeyboardDelegate-ra7BEp36.js";import"./Text-D3gJufSD.js";import"./PressResponder-DqvWa8Dy.js";import"./useLocalizedStringFormatter-BktvRcda.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6Zd2BsO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DAd_ytwS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bj4PzUKr.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
