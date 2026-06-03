import{S as i}from"./SearchField-Cmb0e6P6.js";import"./iframe-B-lTFvoy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvE7c9kg.js";import"./clsx-B-dksMZM.js";import"./Form-BkPykOZH.js";import"./useFocusRing-1mXKXGvg.js";import"./index-DmPhFD94.js";import"./index-DAnTlNFf.js";import"./Input-DgIPJVVr.js";import"./Hidden-DgGj9s0X.js";import"./Button-DxSNXM4z.js";import"./useLabel-D3_Mwj4N.js";import"./useLabels-DPXFFgdJ.js";import"./useButton-BpEh7YD9.js";import"./FieldError-BUQWfKIf.js";import"./Text-BcmCG7pr.js";import"./clsx-Ciqy0D92.js";import"./Text-C1H4pvzD.js";import"./RSPContexts-D3IvaYAD.js";import"./Group-X44LMo-J.js";import"./useControlledState-CblkDfUl.js";import"./useLocalizedStringFormatter-DFJodF-E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUyjL-LP.js";import"./useField-CZNhYKxr.js";import"./TextField.module-DdivwlC8.js";import"./search-DcmFNp0b.js";import"./createLucideIcon-DTdT2pbF.js";import"./x-CB9WHZye.js";import"./useLocalizedStringFormatter-Cmv69HRb.js";import"./Button-aUjqyot5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BBaBjIdQ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
