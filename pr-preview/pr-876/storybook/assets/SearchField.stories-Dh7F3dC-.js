import{S as i}from"./SearchField-yz21nBhD.js";import"./iframe-CARYWlMr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CpzDmsYi.js";import"./clsx-B-dksMZM.js";import"./Form-MW-kx8SJ.js";import"./useFocusRing-eR43gCGN.js";import"./index-D4HHjk07.js";import"./index-DCEAqPJW.js";import"./Input-B_h6sSj8.js";import"./Hidden-eR-QFzh5.js";import"./Button-Czff7WUO.js";import"./useLabel-BqT-6tGp.js";import"./useLabels-D9vbRTn9.js";import"./useButton-pxShH704.js";import"./FieldError-D96zTf6J.js";import"./Text-CYKeiFr8.js";import"./clsx-Ciqy0D92.js";import"./Text-C6YZuIwj.js";import"./RSPContexts-DmmT8ORw.js";import"./Group-D4_10SET.js";import"./useControlledState-PiJ1bWKV.js";import"./useLocalizedStringFormatter-BapB3aBW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-c7e20TCM.js";import"./useField-DA0e3gVp.js";import"./TextField.module-DdivwlC8.js";import"./search-C9Y51uQI.js";import"./createLucideIcon-DMrxxS3N.js";import"./x-D6m6mvyo.js";import"./useLocalizedStringFormatter-iKS83_lA.js";import"./Button-CJO8gD-9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BdHdXLzS.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
