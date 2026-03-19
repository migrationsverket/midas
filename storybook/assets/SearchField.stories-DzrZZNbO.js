import{S as i}from"./SearchField-BDmcNrKO.js";import"./iframe-BPfLM7Ck.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSi4b_Yv.js";import"./clsx-B-dksMZM.js";import"./Form-CrktwBOH.js";import"./useFocusRing-CsxpvGDo.js";import"./index-rhZ-B0wi.js";import"./index-CiQawPHP.js";import"./Input-2ckGPC8P.js";import"./Hidden-_AH0dQ5R.js";import"./Button-BCZt_uJ2.js";import"./useLabels-BKPQIAbg.js";import"./useButton-B_Q5X_Fs.js";import"./FieldError-DA7YJhow.js";import"./Text-EDTELklb.js";import"./clsx-Ciqy0D92.js";import"./Text-BuCe-OoK.js";import"./RSPContexts-D9Yw33px.js";import"./Group-Qss8jsPR.js";import"./useControlledState-Bu5kp2Ub.js";import"./useLocalizedStringFormatter-L6JiFowf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dw1W1uwx.js";import"./useField-C8qUntCT.js";import"./TextField.module-DdivwlC8.js";import"./search-DIT5F83j.js";import"./createLucideIcon-DawqXxM8.js";import"./x-B_Ef23XO.js";import"./useLocalizedStringFormatter-DYlaFC6-.js";import"./Button-DJ8_vDZW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BbgyoPj6.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
