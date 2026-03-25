import{S as i}from"./SearchField-uGr2a3jY.js";import"./iframe-C-K27eAl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CJaZGGf7.js";import"./clsx-B-dksMZM.js";import"./Form-CLe3G_DV.js";import"./useFocusRing-DxSA2Sop.js";import"./index-BKKwvpcz.js";import"./index-DBCMJ7yJ.js";import"./Input-DiKPnwSr.js";import"./Hidden-Vwjx6V0Q.js";import"./Button-BT6WGe3E.js";import"./useLabels-bQBwCpKg.js";import"./useButton-UoBuyatd.js";import"./FieldError-BgyRuz1D.js";import"./Text-CDT_NlP5.js";import"./clsx-Ciqy0D92.js";import"./Text-BSrzc_20.js";import"./RSPContexts-BEdbbOnm.js";import"./Group-DrDuJs4p.js";import"./useControlledState-BS7oDD3M.js";import"./useLocalizedStringFormatter-Cnb01dil.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DA_Zh3yp.js";import"./useField-FtvPERgc.js";import"./TextField.module-DdivwlC8.js";import"./search-Bg8GbbcA.js";import"./createLucideIcon-3jo47RrT.js";import"./x-BOs9pbax.js";import"./useLocalizedStringFormatter-CVaM3I0e.js";import"./Button-BIatrZTr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-u6B1l6x2.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
