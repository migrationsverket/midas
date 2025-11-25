import{j as r}from"./iframe-DbQZ1WFC.js";import{S as n}from"./save-BE0Aj1W8.js";import{c as m}from"./createLucideIcon-C67xWClu.js";import{$ as a}from"./Dialog-BLfx1Mo3.js";import{P as i}from"./Popover-C9KCiWFG.js";import{B as p}from"./Button-B2eIdaxs.js";import{T as s}from"./Text-BABzq6Ri.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Br70F59r.js";import"./utils-BkzzIoAp.js";import"./clsx-B-dksMZM.js";import"./Hidden-B3MQk5Ru.js";import"./useFocusRing-CheS-c_q.js";import"./index-CROQ9br5.js";import"./index-sIqg8Qsv.js";import"./useLabels-DRfk8RpQ.js";import"./useButton-CLtYZVZ3.js";import"./RSPContexts-uaVVndL-.js";import"./OverlayArrow-Cf8ob7Mo.js";import"./useResizeObserver-BhTRiqFg.js";import"./useControlledState-CSIEjkhQ.js";import"./Collection-Cw0fD4Gd.js";import"./index-rlRpQL3G.js";import"./Separator-BXwRpW8L.js";import"./SelectionManager-DTIFBbyP.js";import"./useEvent-CteodfXB.js";import"./scrollIntoView-Bbu8JQBY.js";import"./SelectionIndicator-baLTaFmW.js";import"./useDescription-B8U0ma1K.js";import"./ListKeyboardDelegate-B_exNFNu.js";import"./Text-B6b94t7A.js";import"./PressResponder-BsuJcOBg.js";import"./useLocalizedStringFormatter-w8tEygSo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CmwBXzrJ.js";import"./VisuallyHidden-CSCyYljM.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DN-DiLNO.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
