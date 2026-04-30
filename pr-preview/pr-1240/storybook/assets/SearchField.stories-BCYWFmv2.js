import{S as i}from"./SearchField-dkYXgcH7.js";import"./iframe-CbAzJO9N.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B0jB1E5G.js";import"./clsx-B-dksMZM.js";import"./Form-VNKUe-wT.js";import"./useFocusRing-Cvfx5XiJ.js";import"./index-CIpD7d_z.js";import"./index-zxdvsBHT.js";import"./Input-D5NZNnfE.js";import"./Hidden-j-F0-7Lz.js";import"./Button-_5CpY_LG.js";import"./useLabel-DdRCBCBY.js";import"./useLabels-BUHgLQ-5.js";import"./useButton-CrpkGmXn.js";import"./FieldError-Q76E79z-.js";import"./Text-Cb6mQNAQ.js";import"./clsx-Ciqy0D92.js";import"./Text-B0GIqCDR.js";import"./RSPContexts-CdwstRL7.js";import"./Group-CDs_4aSR.js";import"./useControlledState-DjmxdyV_.js";import"./useLocalizedStringFormatter-DJXPkqTe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DYWRCY-s.js";import"./useField-CBtm8xuD.js";import"./TextField.module-DdivwlC8.js";import"./search-thn_6r5y.js";import"./createLucideIcon-lx1Wi4QI.js";import"./x-CrcasNM6.js";import"./useLocalizedStringFormatter-AKU0Mz00.js";import"./Button-Cly75nHE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dhjqn-q1.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
