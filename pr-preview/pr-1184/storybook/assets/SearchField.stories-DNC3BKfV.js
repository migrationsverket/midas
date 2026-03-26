import{S as i}from"./SearchField-DnDfuddU.js";import"./iframe-2N4-NX-9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BDyzcRVF.js";import"./clsx-B-dksMZM.js";import"./Form-CJZMhU9i.js";import"./useFocusRing-CqNKm5um.js";import"./index-eEiNBmo6.js";import"./index-Boj7wyxf.js";import"./Input-jt-MUZjv.js";import"./Hidden-ByQp7cFw.js";import"./Button-BdOK34vS.js";import"./useLabel-Dt5gD5WC.js";import"./useLabels-BXMOGpY3.js";import"./useButton-DXuSSmPY.js";import"./FieldError-DbzXWBkQ.js";import"./Text-CG1bHrxb.js";import"./clsx-Ciqy0D92.js";import"./Text-C8oRKnIX.js";import"./RSPContexts-euEKx97A.js";import"./Group-DSrCwX2F.js";import"./useControlledState-CJB9gvxC.js";import"./useLocalizedStringFormatter-B22JGswt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DHcMB_qS.js";import"./useField-BL1xHxSq.js";import"./TextField.module-DdivwlC8.js";import"./search-cvsezeRZ.js";import"./createLucideIcon-BP_ZdL8b.js";import"./x-Ceu0gGLD.js";import"./useLocalizedStringFormatter-DUswzrwG.js";import"./Button-BhHUqRPQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BgOvzTZH.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
