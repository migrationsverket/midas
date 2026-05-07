import{S as i}from"./SearchField-BSyFTehY.js";import"./iframe-CkvNFrYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgwUMJBy.js";import"./clsx-B-dksMZM.js";import"./Form-CWYzH3eB.js";import"./useFocusRing-DW5q3Sep.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./Input-D72VaGU6.js";import"./Hidden-Bsx77DlA.js";import"./Button-vUvfAWls.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./FieldError-BN50R8Gs.js";import"./Text-DIpvUzoX.js";import"./clsx-Ciqy0D92.js";import"./Text-DsB1bVac.js";import"./RSPContexts-DGIABOWW.js";import"./Group-C9L071lP.js";import"./useControlledState-Dmid9ay2.js";import"./useLocalizedStringFormatter-DSoEqpDY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B4kTnNrI.js";import"./useField-C89JW0cR.js";import"./TextField.module-DdivwlC8.js";import"./search-Bq9AL0KP.js";import"./createLucideIcon-CeEwKqzx.js";import"./x-DsRbZUfb.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";import"./Button-D17vaezS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DC7QTvoq.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
