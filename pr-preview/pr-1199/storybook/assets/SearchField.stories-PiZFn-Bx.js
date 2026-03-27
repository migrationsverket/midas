import{S as i}from"./SearchField-h5eZXWP5.js";import"./iframe-BbWt9Hzs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-KZAH4xlx.js";import"./clsx-B-dksMZM.js";import"./Form-D6MDpADX.js";import"./useFocusRing-B9bvRRmX.js";import"./index-DFc29hw1.js";import"./index-62xMHUAX.js";import"./Input-Chi9cHrw.js";import"./Hidden-BJHG9IZy.js";import"./Button-EJIqjvoq.js";import"./useLabel-Dajww4Y_.js";import"./useLabels-B8_jQ6mB.js";import"./useButton-B5rDFFBS.js";import"./FieldError-BzVhs6Ln.js";import"./Text-DSe1JSn0.js";import"./clsx-Ciqy0D92.js";import"./Text-DLXHrpA7.js";import"./RSPContexts-DKdTaTdn.js";import"./Group-D86u_bqU.js";import"./useControlledState-DkbXJDJp.js";import"./useLocalizedStringFormatter-Dq1sm40s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cphjw6_m.js";import"./useField-Cv-osmis.js";import"./TextField.module-DdivwlC8.js";import"./search-BCkKMoh_.js";import"./createLucideIcon-BJCyfpuO.js";import"./x-B6r1o7zQ.js";import"./useLocalizedStringFormatter-Cp8lRc68.js";import"./Button-C0W8ghEp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-zJEwCiu7.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
