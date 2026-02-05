import{j as r}from"./iframe-DdNBFEdS.js";import{P as a}from"./Popover-D8unhfhQ.js";import{$ as i}from"./Dialog-CWZxxwUo.js";import{B as n}from"./Button-CStTwVWg.js";import{S as p}from"./save-CRyHFr6V.js";import{c as m}from"./createLucideIcon-BK-2_1r2.js";import{T as s}from"./Text-Bgy8BGDZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BUGhProZ.js";import"./useFocusRing-C1ql2mMD.js";import"./utils-DKBoBmKc.js";import"./index-Cy32Do-K.js";import"./index-B6M-MUl5.js";import"./Button-BWr7_BWz.js";import"./Hidden-DdkFwnyL.js";import"./useLabels-CZmZ3erh.js";import"./useButton-CrvEZzSp.js";import"./useResizeObserver-Fga4vkA0.js";import"./useControlledState-BJIZRVo5.js";import"./RSPContexts-CKuuNJn4.js";import"./Collection-BHvAQsw5.js";import"./index-B0oHLev5.js";import"./Separator-C7Usgpsv.js";import"./SelectionManager-eDGBYmYv.js";import"./useEvent-CJ07A-z0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BflNvleB.js";import"./useDescription-DS4J-thO.js";import"./ListKeyboardDelegate-Cy8Ry9Ez.js";import"./Text-DJzhksm2.js";import"./PressResponder-WWYUgAPI.js";import"./useLocalizedStringFormatter-tAALMyF-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-6XctGwNP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BmJ_BOK8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ym1SGOkF.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
