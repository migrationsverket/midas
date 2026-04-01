import{S as i}from"./SearchField-BkMvPXfS.js";import"./iframe-D4usB9n2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Chiz1oN2.js";import"./clsx-B-dksMZM.js";import"./Form-DzQgMoUt.js";import"./useFocusRing-ihkH1nOS.js";import"./index-D_BiQ3CN.js";import"./index-D7VIiBEs.js";import"./Input-DfrvXYgD.js";import"./Hidden-Cn6dZTod.js";import"./Button-C0ozI8gk.js";import"./useLabel-Bqb-L3h5.js";import"./useLabels-D2vaRbqn.js";import"./useButton-DDapGTCA.js";import"./FieldError-CPaCZkAy.js";import"./Text-DCjCSbNe.js";import"./clsx-Ciqy0D92.js";import"./Text-BPVUDIkV.js";import"./RSPContexts-D-vGj3gL.js";import"./Group-CLbmpECC.js";import"./useControlledState-DA5Xz2a0.js";import"./useLocalizedStringFormatter-_6pgVaCX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CANanKHX.js";import"./useField-Cgg__gMv.js";import"./TextField.module-DdivwlC8.js";import"./search-XYvZx_jY.js";import"./createLucideIcon-DqajdqxS.js";import"./x-B4mY3mrq.js";import"./useLocalizedStringFormatter-C7hYA8xN.js";import"./Button-DaUg4W92.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DISGYBiK.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
