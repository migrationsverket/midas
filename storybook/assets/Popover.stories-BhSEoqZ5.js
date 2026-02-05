import{j as r}from"./iframe-Da7nq29g.js";import{P as a}from"./Popover-Cp3vv8Pj.js";import{$ as i}from"./Dialog-BNTDZ4sx.js";import{B as n}from"./Button-BlivHiUN.js";import{S as p}from"./save-BeiUih75.js";import{c as m}from"./createLucideIcon-DXCReTis.js";import{T as s}from"./Text-BQLX2n4Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BLgifpcW.js";import"./useFocusRing-BfWaxzv3.js";import"./utils-B0CyUW-5.js";import"./index-Chz3wJrr.js";import"./index-BQQ1R4UO.js";import"./Button-CtgdX1q6.js";import"./Hidden-DRaikK2a.js";import"./useLabels-uo9Op09U.js";import"./useButton-DItgdLXo.js";import"./useResizeObserver-CwtpUuD9.js";import"./useControlledState-DqL64D7D.js";import"./RSPContexts-CA4TT0Pe.js";import"./Collection-C71fexbD.js";import"./index-Ck07IVt1.js";import"./Separator-BuSY1b1y.js";import"./SelectionManager-BQXF1WZ2.js";import"./useEvent-Dtm5G7ur.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-73xE8EMW.js";import"./useDescription-VrbZdKT0.js";import"./ListKeyboardDelegate-i42XoEpM.js";import"./Text-BYaoYc1H.js";import"./PressResponder-BnGFuSGl.js";import"./useLocalizedStringFormatter-CdeSJGSi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DyxF6Fwu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DaXw9Zgt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5xCdXuP.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
