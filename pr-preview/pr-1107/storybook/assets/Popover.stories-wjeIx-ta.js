import{j as r}from"./iframe-Cr04uqFn.js";import{P as a}from"./Popover-Dm01GhXm.js";import{$ as i}from"./Dialog-BNVSg56y.js";import{S as n}from"./save-CIwWYV4a.js";import{c as m}from"./createLucideIcon-DucUkfKy.js";import{B as p}from"./Button-Bskr_9E8.js";import{T as s}from"./Text-CMC0Dinw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CsC3xkQx.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-niIw79cy.js";import"./useFocusRing-iGoUiyfg.js";import"./index-Ge0-Pyay.js";import"./index-BRmKR4IG.js";import"./Button-BDZhuw74.js";import"./Hidden-BqmZgZ8y.js";import"./useLabels-Jqxce70U.js";import"./useButton-DDahEz2i.js";import"./useResizeObserver-9CmKBstP.js";import"./useControlledState-DjFFz4B7.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-DKIHjjdb.js";import"./Collection-BcebPgQA.js";import"./index-C1CgnfUT.js";import"./Separator-Clo59Z82.js";import"./SelectionManager-CztMdh1x.js";import"./useEvent-B_zIZR1f.js";import"./scrollIntoView-BS5aSLnj.js";import"./SelectionIndicator-DqEHErwo.js";import"./useDescription-vtlKpR3S.js";import"./ListKeyboardDelegate-CSgnqlFj.js";import"./Text-SaXXHVxE.js";import"./PressResponder-Cskls_z-.js";import"./useLocalizedStringFormatter-CTazVPN1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DbRqnrVU.js";import"./getScrollParent-DB2xYs0i.js";import"./VisuallyHidden-Bkfpb86W.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-afGT4_9p.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
