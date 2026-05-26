import{S as i}from"./SearchField-Cb7ttTmw.js";import"./iframe-DE3udc98.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BZFqyVfK.js";import"./clsx-B-dksMZM.js";import"./Form-bIhb4EIq.js";import"./useFocusRing-Zfbb9wtm.js";import"./index-DsLsEgIC.js";import"./index-TlyN-2Ns.js";import"./Input-6rAJLlXY.js";import"./Hidden-B3N7s3Fy.js";import"./Button-WyeeTejZ.js";import"./useLabel-BaazdV9R.js";import"./useLabels-CkuL1gsk.js";import"./useButton-iHShjyV-.js";import"./FieldError-HOINxNuD.js";import"./Text-B_7CE5hn.js";import"./clsx-Ciqy0D92.js";import"./Text-6UvYXfTp.js";import"./RSPContexts-DDA8iB-A.js";import"./Group-B49H1fYm.js";import"./useControlledState-CKJ2TdtV.js";import"./useLocalizedStringFormatter-C2IC4Uej.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BBnno9zv.js";import"./useField-XJ9uRbgJ.js";import"./TextField.module-DdivwlC8.js";import"./search-BUFgTU17.js";import"./createLucideIcon-DBgVndRE.js";import"./x-Did9_kjk.js";import"./useLocalizedStringFormatter-D9xfpa_H.js";import"./Button-D9EvRssF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-JI0zcCIW.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
