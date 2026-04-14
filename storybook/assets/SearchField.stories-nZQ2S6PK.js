import{S as i}from"./SearchField-XfracO7o.js";import"./iframe-6UVP4gzF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DOxsvNuE.js";import"./clsx-B-dksMZM.js";import"./Form-BWiq1SRj.js";import"./useFocusRing-C5gCUZ-8.js";import"./index-BBGJ7VjO.js";import"./index-BcvrcLrL.js";import"./Input-u6Bt_Sng.js";import"./Hidden-CM-w2pmZ.js";import"./Button-Cexa-7Qi.js";import"./useLabel-CWCmiQI5.js";import"./useLabels-DW_gz9ei.js";import"./useButton-BvM28DdE.js";import"./FieldError-BpE-wczM.js";import"./Text-BTPWticG.js";import"./clsx-Ciqy0D92.js";import"./Text-C9xgYxgE.js";import"./RSPContexts-Brux6LMo.js";import"./Group-D2Uwocfd.js";import"./useControlledState-CSt56eyg.js";import"./useLocalizedStringFormatter-CRr2CS_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-YMrNxEAy.js";import"./useField-B43db6Ve.js";import"./TextField.module-DdivwlC8.js";import"./search-CvM0N5XH.js";import"./createLucideIcon-CZM_qkx4.js";import"./x-DRrtJvVE.js";import"./useLocalizedStringFormatter-BHlCXMz2.js";import"./Button-Dank0oAc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Coo2bS_I.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
