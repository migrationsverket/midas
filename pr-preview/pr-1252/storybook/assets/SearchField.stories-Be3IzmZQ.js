import{S as i}from"./SearchField-aToBxzZ0.js";import"./iframe-DmMjYjLV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C7Za6cav.js";import"./clsx-B-dksMZM.js";import"./Form-w1xpkiob.js";import"./useFocusRing-DNsXJifB.js";import"./index-MWmo0bvh.js";import"./index-Dtm98ubu.js";import"./Input-DJHO9EVR.js";import"./Hidden-C30O7ZZj.js";import"./Button-BoGHaXxS.js";import"./useLabel-w1IJLBOX.js";import"./useLabels-KrUCHD9B.js";import"./useButton-Dmer3eRj.js";import"./FieldError-Dhwy9R14.js";import"./Text-TBh7QsjQ.js";import"./clsx-Ciqy0D92.js";import"./Text-D1BlasEz.js";import"./RSPContexts-CYlpwwtX.js";import"./Group-DApTybdo.js";import"./useControlledState-jKmX6mW8.js";import"./useLocalizedStringFormatter-Df1Z6d6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CEggPbeQ.js";import"./useField-ykwfEeQx.js";import"./TextField.module-DdivwlC8.js";import"./search-CLQqpKCh.js";import"./createLucideIcon-mwlEDpcM.js";import"./x--G2PLC8C.js";import"./useLocalizedStringFormatter-Cacp7Pde.js";import"./Button-Pdwae4O6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bt6CiHI_.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
