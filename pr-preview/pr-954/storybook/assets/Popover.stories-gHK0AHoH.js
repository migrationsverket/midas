import{j as r}from"./iframe-Bb5Ll2Q_.js";import{S as n}from"./save-W5w54v6x.js";import{c as m}from"./createLucideIcon-BTIRr7kd.js";import{$ as a}from"./Dialog-CsqxZxHZ.js";import{P as i}from"./Popover-Bf4yOUJ_.js";import{B as p}from"./Button-DcMiNBaO.js";import{T as s}from"./Text-DGL_pGNa.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CLgs0RHO.js";import"./utils-DUu2sqhX.js";import"./clsx-B-dksMZM.js";import"./Hidden-CIkUgucj.js";import"./useFocusRing-Che-PLf9.js";import"./index-hJZDNH39.js";import"./index-DaWpECPB.js";import"./useLabels-B4ytSInX.js";import"./useButton-Drix0Soe.js";import"./RSPContexts-BF108fh5.js";import"./OverlayArrow-DIocl6xa.js";import"./useResizeObserver-DQ_T9M9d.js";import"./useControlledState-CQTokbDY.js";import"./Collection-DcqfTVLD.js";import"./index-DIszDctj.js";import"./Separator-CDZt8W4n.js";import"./SelectionManager-CNhGT5Rw.js";import"./useEvent-DFeGPwZo.js";import"./scrollIntoView-xcKTDZvX.js";import"./SelectionIndicator-v0XOazhO.js";import"./useDescription-C_IELAs0.js";import"./ListKeyboardDelegate-B6kaB3YJ.js";import"./Text-ATBrkPw2.js";import"./PressResponder-CFEyG_-H.js";import"./useLocalizedStringFormatter-BmXF49Fn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dwp_thdi.js";import"./VisuallyHidden-BT0heQ-H.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-r0kj4Pje.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
