import{S as i}from"./SearchField-CmXizecL.js";import"./iframe-C5ngTzwY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dg8dAIMb.js";import"./clsx-B-dksMZM.js";import"./Form-CItLNKU2.js";import"./useFocusRing-widihIkF.js";import"./index-q0KT5jnp.js";import"./index-Ccze4rZ3.js";import"./Input-DrXI5JNl.js";import"./Hidden-D_4pS1pD.js";import"./Button-CG1C0RCC.js";import"./useLabel-Dvu8tBif.js";import"./useLabels-DAN8PIoI.js";import"./useButton-BWnFtbTH.js";import"./FieldError-BAFjpL0i.js";import"./Text-Dao-YHjx.js";import"./clsx-Ciqy0D92.js";import"./Text-BREpfkEt.js";import"./RSPContexts-lIIzFU1O.js";import"./Group-BmSX7JQZ.js";import"./useControlledState-xqz1UZWj.js";import"./useLocalizedStringFormatter-ByZ5j5zE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CMupa5sr.js";import"./useField-5SggJKuz.js";import"./TextField.module-DdivwlC8.js";import"./search-JvVSxOeX.js";import"./createLucideIcon-Ctpe4pW9.js";import"./x-CYTkygL5.js";import"./useLocalizedStringFormatter-DgMvPFf5.js";import"./Button-paZ2bXFh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1SQTSBU.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
