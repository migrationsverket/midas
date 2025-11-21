import{j as r}from"./iframe-DyxCcCyx.js";import{S as n}from"./save-BUn9Stx_.js";import{c as m}from"./createLucideIcon-DUhw7aDt.js";import{$ as a}from"./Dialog-9GNryo_S.js";import{P as i}from"./Popover-BQPOL7SL.js";import{B as p}from"./Button-B8YpJpXe.js";import{T as s}from"./Text-CB6Z4njm.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CGJ03pmK.js";import"./utils-BW0-JoNA.js";import"./clsx-B-dksMZM.js";import"./Hidden-VmbWRniU.js";import"./useFocusRing-V7JnXRkU.js";import"./index-Bg_Ixq-d.js";import"./index-mxOIoeQ7.js";import"./useLabels-SpNJAkxC.js";import"./useButton-DaIHAkHH.js";import"./RSPContexts-DtjzuVJm.js";import"./OverlayArrow-B2TCZkzT.js";import"./useResizeObserver-BSHhgy0g.js";import"./useControlledState-D71RWKqh.js";import"./Collection-ChlMaR9s.js";import"./index--EBG1dQ6.js";import"./Separator-CGPNFxVg.js";import"./SelectionManager-C-k-XY9u.js";import"./useEvent-C6lvkRcD.js";import"./scrollIntoView-BsJxCnbB.js";import"./SelectionIndicator-DD87XjXe.js";import"./useDescription-CKUziIh1.js";import"./ListKeyboardDelegate-CInpcvds.js";import"./Text-B9nGcsnc.js";import"./PressResponder-DAMkc3FX.js";import"./useLocalizedStringFormatter-z0DNDuDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJdWTGBu.js";import"./VisuallyHidden-DtpJAIUo.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-FMsSjGTt.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
