import{S as i}from"./SearchField-DmxiwvjC.js";import"./iframe-GWyqpu_M.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dt2I5FC1.js";import"./clsx-B-dksMZM.js";import"./Form-sABXXLqd.js";import"./useFocusRing-BEBkue70.js";import"./index-D2WS1qCH.js";import"./index-CwQDUu6A.js";import"./Input-C0LTVSrQ.js";import"./Hidden-i5KMI_eW.js";import"./Button-DaVw9Yu8.js";import"./useLabel-DHRJ-v17.js";import"./useLabels-BvrpK5k3.js";import"./useButton-BCnnqreW.js";import"./FieldError-BY8gNanm.js";import"./Text-BzWdciNH.js";import"./clsx-Ciqy0D92.js";import"./Text-P__SInd9.js";import"./RSPContexts-BgONfnva.js";import"./Group-HQhXS4fd.js";import"./useControlledState-Cjxvjhkl.js";import"./useLocalizedStringFormatter-BQ4PapsB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DzFMhfOD.js";import"./useField-hN3b_TA5.js";import"./TextField.module-DdivwlC8.js";import"./search-C5xpVS5_.js";import"./createLucideIcon-BoYLuSqv.js";import"./x-UXvlZnGy.js";import"./useLocalizedStringFormatter-CybCfRF3.js";import"./Button-CSLm8s2k.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-d58nTTlD.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
