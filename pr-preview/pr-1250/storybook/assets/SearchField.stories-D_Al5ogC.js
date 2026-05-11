import{S as i}from"./SearchField-BPYiYnMV.js";import"./iframe-ZWFuO3rS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CXJrMo2L.js";import"./clsx-B-dksMZM.js";import"./Form-QTqY28Eg.js";import"./useFocusRing-CF4sVLCG.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./Input-DDbyFfi8.js";import"./Hidden-DlAqJEIp.js";import"./Button-CuvBXfLT.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./FieldError-BqdH46Wm.js";import"./Text-CW08t5T_.js";import"./clsx-Ciqy0D92.js";import"./Text-uwKeqPz3.js";import"./RSPContexts-Dt_P8EmM.js";import"./Group-C3Kvev_s.js";import"./useControlledState-CaSPfHyR.js";import"./useLocalizedStringFormatter-w6fCSWeH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cv92JwZx.js";import"./useField-DLnhlBC6.js";import"./TextField.module-DdivwlC8.js";import"./search-BDOJpwSo.js";import"./createLucideIcon-BJpb_u0I.js";import"./x-C7_Ecf5k.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./Button-DoVlW0aQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-5iCcQboa.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
