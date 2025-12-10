import{j as r}from"./iframe-rZSXM0eC.js";import{S as n}from"./save-C9axgXy9.js";import{c as m}from"./createLucideIcon-D5ASq0Cm.js";import{$ as a}from"./Dialog-DmsUL9Jk.js";import{P as i}from"./Popover--uWUScbK.js";import{B as p}from"./Button-fbKI_IfZ.js";import{T as s}from"./Text-BOwlJhSq.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BI9OLJBe.js";import"./utils-CoXmV-kq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CkS_PPul.js";import"./useFocusRing-DLR1K1QN.js";import"./index-BYjFf690.js";import"./index-BIlXx4dX.js";import"./useLabels-CSFhnw6H.js";import"./useButton-BLxitDUj.js";import"./RSPContexts-DSdgfpLb.js";import"./OverlayArrow-ClrxKWwq.js";import"./useResizeObserver-Bd8nUfnP.js";import"./useControlledState-Cj9hNixb.js";import"./Collection-BxOYom5k.js";import"./index-XNR0rVDo.js";import"./Separator--U5ICTkE.js";import"./SelectionManager-BBFDQXT0.js";import"./useEvent-rYUL_cNQ.js";import"./scrollIntoView-Dmb1hsjT.js";import"./SelectionIndicator-cp_a9dTe.js";import"./useDescription-yVm4-GE8.js";import"./ListKeyboardDelegate-DAJ87Yt-.js";import"./Text-emOnGTp7.js";import"./PressResponder-BLte0a_M.js";import"./useLocalizedStringFormatter-BguK_3zR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CT4GRoEo.js";import"./VisuallyHidden-9EaIoABp.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ddfk2Acf.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
