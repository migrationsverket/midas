import{j as r}from"./iframe-BXi2DpH_.js";import{P as a}from"./Popover-D4tPeF9_.js";import{a as i}from"./Dialog-DmEdrapt.js";import{B as n}from"./Button-kzBXQJaB.js";import{S as p}from"./save-QI9BYvhs.js";import{c as m}from"./createLucideIcon-tldxpU3K.js";import{T as s}from"./Text-BFe5T1zy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-Dz5mBhZ3.js";import"./useFocusRing-Bp5DTDVQ.js";import"./utils-UrQDo-WA.js";import"./index-17Nv7B4H.js";import"./index-D7HPdSS2.js";import"./Button-8PW_0Mpf.js";import"./Hidden-D0eHPLgG.js";import"./useLabels-CzvTrbyR.js";import"./useButton-Dhmm4yPW.js";import"./useResizeObserver-CixoyZVD.js";import"./useControlledState-DQtA95JU.js";import"./RSPContexts-DF_vtBl9.js";import"./Collection-_V21lTNJ.js";import"./index-CoSyIhxP.js";import"./Separator-CtGHVuQj.js";import"./SelectionManager-DQXRLc7X.js";import"./useEvent-Ct55YmLp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DlNvi_i_.js";import"./useDescription-CvRpVEPx.js";import"./ListKeyboardDelegate-d2r8cszs.js";import"./Text-DIwVLx6b.js";import"./PressResponder-CsT0V5Ov.js";import"./useLocalizedStringFormatter-CsL1ogvc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSjretDM.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cw60I5mf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1ci79sH.js";const c=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],d=m("heading",c),Y={component:a,subcomponents:{DialogTrigger:i},title:"Components/Popover",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(d,{style:{marginBottom:"0.5rem"},children:"Info"}),r.jsx(s,{children:"Genom att spara detta går det ej att ta bort"})]})},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara",children:r.jsx(p,{})}),r.jsx(a,{...o})]})},e={args:{placement:"top",children:"Spara"},render:o=>r.jsxs(i,{children:[r.jsx(n,{variant:"icon","aria-label":"Spara","data-testid":"popover-placement-trigger",children:r.jsx(p,{})}),r.jsx(a,{"data-testid":"popover-placement",...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
