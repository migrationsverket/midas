import{j as r}from"./iframe-Bt2IPdm_.js";import{P as a}from"./Popover-BfGWYSLO.js";import{$ as i}from"./Dialog-B0PJn95G.js";import{B as n}from"./Button-CLF5zjXA.js";import{S as p}from"./save-BFfi0_3w.js";import{c as m}from"./createLucideIcon-CLpn3Yea.js";import{T as s}from"./Text-sG9oy4ZT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-5ddhla-X.js";import"./useFocusRing-DkE8kJUj.js";import"./utils-C3T3ztzp.js";import"./index-BDiIIlI6.js";import"./index-CN1OBmgy.js";import"./Button-C79FTkxg.js";import"./Hidden--XR3ujDb.js";import"./useLabels-CUKIRIlp.js";import"./useButton-CWjFkamK.js";import"./useResizeObserver-BcS0osVM.js";import"./useControlledState-CHQWAa9G.js";import"./RSPContexts-D7GX16CF.js";import"./Collection-IHp_di3t.js";import"./index-yOO_3eVZ.js";import"./Separator-DqcgbAKb.js";import"./SelectionManager-CnZMajYP.js";import"./useEvent-DjOTsNLO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DJI9OpIi.js";import"./useDescription-COVCGZbr.js";import"./ListKeyboardDelegate-CK6HBViI.js";import"./Text-4gkk9B6S.js";import"./PressResponder-BaEex6DO.js";import"./useLocalizedStringFormatter-Dq04GxHG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0ebx63S.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B4zsPLSx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-yIeft2Rj.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
