import{S as i}from"./SearchField-ByxoquAv.js";import"./iframe-BkUM7oEP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DWoj52PP.js";import"./clsx-B-dksMZM.js";import"./Form-BfR1VJr9.js";import"./useFocusRing-CU5ndcID.js";import"./index-Db2I9cuy.js";import"./index-BL6dPHEM.js";import"./Input-BAJDYTvn.js";import"./Hidden-iTXT5-p2.js";import"./Button-UyuoNVOf.js";import"./useLabel-Digs7FVA.js";import"./useLabels-DJtxT6T3.js";import"./useButton-y66OoghU.js";import"./FieldError-01Ml0ka5.js";import"./Text-ClKfHAct.js";import"./clsx-Ciqy0D92.js";import"./Text-pLibJUKD.js";import"./RSPContexts--U7gqoYU.js";import"./Group-CHV-O5HZ.js";import"./useControlledState-BozTthf5.js";import"./useLocalizedStringFormatter-DeI5I3jv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DELSi7lm.js";import"./useField-BtMr3my9.js";import"./TextField.module-DdivwlC8.js";import"./search-8NGa1FVc.js";import"./createLucideIcon-tb5hO106.js";import"./x-69nCWHEw.js";import"./useLocalizedStringFormatter-B4MD3dHV.js";import"./Button-aQxjv1sN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-eByAjNhP.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
