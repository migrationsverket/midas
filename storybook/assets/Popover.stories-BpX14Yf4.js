import{j as r}from"./iframe-Cu5hLgBG.js";import{S as n}from"./save-C7vvrJw4.js";import{c as m}from"./createLucideIcon-CASls7dt.js";import{$ as a}from"./Dialog-C9xxRjNC.js";import{P as i}from"./Popover-BvUUcE21.js";import{B as p}from"./Button-BOIdh-Wh.js";import{T as s}from"./Text-xlVuuP9J.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DhXAJjoH.js";import"./utils-CW9D4Lv5.js";import"./clsx-B-dksMZM.js";import"./Hidden-B24fzWWq.js";import"./useFocusRing-bpKh6ibc.js";import"./index-DUcOwDca.js";import"./index-DvgRwaKu.js";import"./useLabels-3yOZ9Ivw.js";import"./useButton-DbviMFTP.js";import"./RSPContexts-C3rBS2VC.js";import"./OverlayArrow-C3xVDF-P.js";import"./useResizeObserver-DvJVvnmG.js";import"./useControlledState-C7_3uWc9.js";import"./Collection-cThH_D4l.js";import"./index-BmH71ASy.js";import"./Separator-B-lL_CDQ.js";import"./SelectionManager-jncmGFRN.js";import"./useEvent-Ddh_cSBe.js";import"./scrollIntoView-BLwcbaDf.js";import"./SelectionIndicator-n_gsSn3K.js";import"./useDescription-C3gitIed.js";import"./ListKeyboardDelegate-CudDCdpR.js";import"./Text-DP2X-ccp.js";import"./PressResponder-BbBgMSpr.js";import"./useLocalizedStringFormatter-CqfjLmNe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DFn_IfTI.js";import"./VisuallyHidden-Cj9dIF3c.js";import"./clsx-Ciqy0D92.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B204hAxd.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),X={component:i,subcomponents:{DialogTrigger:a},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara",children:r.jsx(n,{})}),r.jsx(i,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(a,{children:[r.jsx(p,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(n,{})}),r.jsx(i,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
