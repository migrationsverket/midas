import{S as i}from"./SearchField-BVJT6BMd.js";import"./iframe-C2ifzLFW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-73qIUJkS.js";import"./clsx-B-dksMZM.js";import"./Form-DaC6-Hhf.js";import"./useFocusRing-D5sowTP0.js";import"./index-D40BKMj1.js";import"./index-Cku3_zST.js";import"./Input-BI0h4qhc.js";import"./Hidden-arruSKBU.js";import"./Button-DrEkBHNm.js";import"./useLabel-BkkkauYh.js";import"./useLabels-BURtxaJp.js";import"./useButton-BQcZ3c2T.js";import"./FieldError-CG9ZMBd0.js";import"./Text-CD2yXDFK.js";import"./clsx-Ciqy0D92.js";import"./Text-BHGhTSao.js";import"./RSPContexts-D7FudQaj.js";import"./Group-DTqfokrf.js";import"./useControlledState-DIVk5_t_.js";import"./useLocalizedStringFormatter-Bfe8f42t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6rn5EayW.js";import"./useField-DcFwBOo5.js";import"./TextField.module-DdivwlC8.js";import"./search-NNP-kYAW.js";import"./createLucideIcon-BoPfjMKr.js";import"./x-Dn6Rxjbp.js";import"./useLocalizedStringFormatter-BkkLiQpX.js";import"./Button-DtzYCx6b.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1aqafDE.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
