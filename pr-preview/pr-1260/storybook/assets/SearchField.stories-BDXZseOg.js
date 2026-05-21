import{S as i}from"./SearchField-CgPlUeih.js";import"./iframe-CU6IyPdi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C3EuF5tN.js";import"./clsx-B-dksMZM.js";import"./Form-D7KVHFov.js";import"./useFocusRing-CgN0-97j.js";import"./index-CWwAu-UJ.js";import"./index-EaiVYzVz.js";import"./Input-Bj5zRvQB.js";import"./Hidden-BMh1hBMj.js";import"./Button-Dn__6SVC.js";import"./useLabel-Bt0836mW.js";import"./useLabels-Di0VtbU1.js";import"./useButton-YhY6a0OA.js";import"./FieldError-CwoMpyv7.js";import"./Text-DjY_AY4u.js";import"./clsx-Ciqy0D92.js";import"./Text-DiW7fUXy.js";import"./RSPContexts-C8L0Tday.js";import"./Group-fabNRkLN.js";import"./useControlledState-DnKqpd9E.js";import"./useLocalizedStringFormatter-CCIw-1cs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DUbvCcvT.js";import"./useField-C6IBffWw.js";import"./TextField.module-DdivwlC8.js";import"./search-GS58OqAl.js";import"./createLucideIcon-BhPQSJHM.js";import"./x-DvEBYFLx.js";import"./useLocalizedStringFormatter-D1ier4wV.js";import"./Button-DzjFo675.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bl6sgZVR.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
