import{S as i}from"./SearchField-DMM5eT5u.js";import"./iframe-BuuAXrXC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtsDHbZe.js";import"./clsx-B-dksMZM.js";import"./Form-Dh-jyLTL.js";import"./useFocusRing-CrOe_O8c.js";import"./index-BbfDc97u.js";import"./index-32pD7yrL.js";import"./Input-BPxgunFy.js";import"./Hidden-E4h0Oh4e.js";import"./Button-DvBK65Gf.js";import"./useLabels-CGKYF4iS.js";import"./useButton-BnwORE09.js";import"./FieldError-EC843UUw.js";import"./Text-6_usI8rI.js";import"./clsx-Ciqy0D92.js";import"./Text-ri3V3kO7.js";import"./RSPContexts-GYXhZ2kG.js";import"./Group-Co9hcU3l.js";import"./useControlledState-jhkXU9fd.js";import"./useLocalizedStringFormatter-BEGIzj17.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D6jbbMzu.js";import"./useField-DDR_miEa.js";import"./TextField.module-DdivwlC8.js";import"./search-BEd-jznx.js";import"./createLucideIcon-iyjQV_Z5.js";import"./x-Dbf8QEqu.js";import"./useLocalizedStringFormatter-B4LAAnFe.js";import"./Button-DGWTIzH5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6El7FPtm.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
