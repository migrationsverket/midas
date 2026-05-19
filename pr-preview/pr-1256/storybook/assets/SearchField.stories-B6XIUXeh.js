import{S as i}from"./SearchField-DiGMtexs.js";import"./iframe-B3gHnZ_4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CdET5WnV.js";import"./clsx-B-dksMZM.js";import"./Form-BZOB3ErZ.js";import"./useFocusRing-DIJ0sANO.js";import"./index-D2HHYUpr.js";import"./index-ClVbkfNF.js";import"./Input-BzmTIW1x.js";import"./Hidden-dfLF-Ti8.js";import"./Button-tj4RHwPQ.js";import"./useLabel-Co4jWqc7.js";import"./useLabels-BzsFe6ap.js";import"./useButton-wyQ3LRsu.js";import"./FieldError-pXnrGUBV.js";import"./Text-C8paMr1m.js";import"./clsx-Ciqy0D92.js";import"./Text-DcZUZMzL.js";import"./RSPContexts-DQ5I8I6_.js";import"./Group-DDmPJ7wi.js";import"./useControlledState-BvujKDrt.js";import"./useLocalizedStringFormatter-DX3s4o0C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IvDQy2TR.js";import"./useField-DuF-U182.js";import"./TextField.module-DdivwlC8.js";import"./search-CFrmVsEk.js";import"./createLucideIcon-ClRsgvfJ.js";import"./x-DCrvMdPs.js";import"./useLocalizedStringFormatter-Cp3BGEKs.js";import"./Button-Cw4w6g1P.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_rpyZ3J.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
