import{S as i}from"./SearchField-Q1PnpjdV.js";import"./iframe-D6gs3wS5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DJQYVgmX.js";import"./clsx-B-dksMZM.js";import"./Form-9Z_XXzsk.js";import"./useFocusRing-CFifySwi.js";import"./index-eJbc0aTW.js";import"./index-Ce1ePnt0.js";import"./Input-mOQPu2PR.js";import"./Hidden-Chxa0iBH.js";import"./Button-CbEqyxyu.js";import"./useLabel-cgRMBKD-.js";import"./useLabels-5rE94Eky.js";import"./useButton--ll78HR1.js";import"./FieldError-Bf6pWkxo.js";import"./Text-BlJm85ZR.js";import"./clsx-Ciqy0D92.js";import"./Text-DqH78Bzr.js";import"./RSPContexts-h4eiuWjg.js";import"./Group-CPeAu2W-.js";import"./useControlledState-CUa1KmDW.js";import"./useLocalizedStringFormatter-lMnXoQqL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbgRKsHa.js";import"./useField-D_VgcOBp.js";import"./TextField.module-DdivwlC8.js";import"./search-BGBIKs-8.js";import"./createLucideIcon-Cx44WpFS.js";import"./x-JmNjUnkH.js";import"./useLocalizedStringFormatter-CkggrktT.js";import"./Button-BVEXhnip.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DqFWHqpC.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
