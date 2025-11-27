import{j as r}from"./iframe-CwLkjgpT.js";import{S as n}from"./save-BPyuzVIB.js";import{c as m}from"./createLucideIcon-DeGNxWTw.js";import{$ as a}from"./Dialog-PD56cuDU.js";import{P as i}from"./Popover-DXbYzZFC.js";import{B as p}from"./Button-DtGuvUjf.js";import{T as s}from"./Text-BQIFYXN4.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CQyRRKMW.js";import"./utils-DSWzARDZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DdX0U8LA.js";import"./useFocusRing-DAwt605V.js";import"./index-DksoI_g-.js";import"./index-B5Ydvek1.js";import"./useLabels-C8OlSCO5.js";import"./useButton-BS52WYPg.js";import"./RSPContexts-5uc_6UdN.js";import"./OverlayArrow-Bj1Y5OAh.js";import"./useResizeObserver-zNonKEnh.js";import"./useControlledState-aJ_MxFDE.js";import"./Collection-CBg4ukBX.js";import"./index-kdVZxqd5.js";import"./Separator-Z-GnE651.js";import"./SelectionManager-C1UZmZTF.js";import"./useEvent-D_IHmf9Z.js";import"./scrollIntoView-CO_UKuN0.js";import"./SelectionIndicator-CO6cAmp2.js";import"./useDescription-DbGCeq7X.js";import"./ListKeyboardDelegate-CNEKZ9v2.js";import"./Text-BZsBZWaE.js";import"./PressResponder-DaJ7LY8c.js";import"./useLocalizedStringFormatter-4a_u7Il3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C95P398o.js";import"./VisuallyHidden-DcUNvP8l.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BIv7akwD.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
