import{j as r}from"./iframe-Cg9cst3Z.js";import{P as a}from"./Popover-DBhzyzXV.js";import{$ as i}from"./Dialog-qbthertG.js";import{S as n}from"./save-BoBDgO6M.js";import{c as m}from"./createLucideIcon-DCEeRogg.js";import{B as p}from"./Button-rHVBUcPU.js";import{T as s}from"./Text-Bie4Jf82.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2II4bp7.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-BJ-UO43V.js";import"./useFocusRing-tXHDCFm3.js";import"./index-BFb9kRGB.js";import"./index-DWerqO7l.js";import"./Button-ou8EhBUQ.js";import"./Hidden-BgIlWTMH.js";import"./useLabels-CiePX7Dn.js";import"./useButton-DC2n-s3O.js";import"./useResizeObserver-C3fGE7gx.js";import"./useControlledState-L5_oq_SX.js";import"./clsx-Ciqy0D92.js";import"./RSPContexts-CP6-3Q2F.js";import"./Collection-Ce5K4RD7.js";import"./index-Li7LmgrW.js";import"./Separator-De7LVMOu.js";import"./SelectionManager-CE7XN0iM.js";import"./useEvent-CEsrahCK.js";import"./scrollIntoView-DwU_eyNu.js";import"./SelectionIndicator-D78Fscba.js";import"./useDescription-BzGroFUq.js";import"./ListKeyboardDelegate-0O8vG3nd.js";import"./Text-B_9OfGMe.js";import"./PressResponder-B7Fmu7KZ.js";import"./useLocalizedStringFormatter-D4h7c2FO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YicOoIp9.js";import"./getScrollParent-D0UAKGdc.js";import"./VisuallyHidden-CqMj_RBf.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CHcVYRW-.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
