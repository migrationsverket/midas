import{j as r}from"./iframe-qDdxYEqa.js";import{S as n}from"./save-8h6tLO68.js";import{c as m}from"./createLucideIcon-G8J66sNp.js";import{$ as a}from"./Dialog-Eqalv399.js";import{P as i}from"./Popover-DXxmk8LO.js";import{B as p}from"./Button-Cs7TGJjB.js";import{T as s}from"./Text-WW175J0Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-B6p9EZnf.js";import"./utils-BM4vGe7B.js";import"./clsx-B-dksMZM.js";import"./Hidden-DtSTyAaE.js";import"./useFocusRing-B6vuZu2_.js";import"./index-DzlCj9Y4.js";import"./index-BVyj6e23.js";import"./useLabels-xEn6R_2b.js";import"./useButton-5HeDBVBJ.js";import"./RSPContexts-D7OWPLkC.js";import"./OverlayArrow-DjOJ1kKX.js";import"./useResizeObserver-CV1JOXVl.js";import"./useControlledState-0uhYfAk6.js";import"./Collection-B60oJRdy.js";import"./index-RB1hbU1x.js";import"./Separator-D0zma50k.js";import"./SelectionManager-DEex84lG.js";import"./useEvent-BfpnWR31.js";import"./scrollIntoView-HxGvSmTa.js";import"./SelectionIndicator-DDjrOMDd.js";import"./useDescription-CKkIcbk2.js";import"./ListKeyboardDelegate-CVi4IbZo.js";import"./Text-bywFbAb4.js";import"./PressResponder-KMkNkSXb.js";import"./useLocalizedStringFormatter-DIrmbVtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-pPUmGKBq.js";import"./VisuallyHidden-CKY1T34r.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D8GJkiEc.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
