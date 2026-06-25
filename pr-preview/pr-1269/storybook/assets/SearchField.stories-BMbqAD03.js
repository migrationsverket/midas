import{S as i}from"./SearchField-ChA4Xc4R.js";import"./iframe-zmdm5LWO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BVXhqey2.js";import"./clsx-B-dksMZM.js";import"./Form-B9squnXu.js";import"./useFocusRing-ChdwpxNy.js";import"./index-CR9Wusv4.js";import"./index-BM2_5E3m.js";import"./Input-C28jpw0n.js";import"./Hidden-Da0JYuUZ.js";import"./Button-CJHqtIe5.js";import"./useLabel-Di2CB_YG.js";import"./useLabels-Co4DVdbJ.js";import"./useButton-BIbblWcf.js";import"./FieldError-CnGNBTtl.js";import"./Text-C_A67KfE.js";import"./clsx-Ciqy0D92.js";import"./Text-BlbFrX8Z.js";import"./RSPContexts-CkA1USMd.js";import"./Group-BfrZXSfh.js";import"./useControlledState-CPsjL82m.js";import"./useLocalizedStringFormatter-LEYk1ZVN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFZmybEF.js";import"./useField-TGoSKSzA.js";import"./TextField.module-DdivwlC8.js";import"./search-BKepAVKR.js";import"./createLucideIcon-BWu7CyXu.js";import"./x-XVyRqWEu.js";import"./useLocalizedStringFormatter-Crt7pDpL.js";import"./Button-BYmNnQBF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DeZC0Ok1.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
