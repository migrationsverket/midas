import{S as i}from"./SearchField-BcJfvZCv.js";import"./iframe-C6zRxPwt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEZo77lv.js";import"./clsx-B-dksMZM.js";import"./Form-PpHcZF8L.js";import"./useFocusRing-BPpPWTKG.js";import"./index-iboGWBaX.js";import"./index-DnknE0l7.js";import"./Input-cBzcpn5k.js";import"./Hidden-IUN1uUBY.js";import"./Button-C8Zk09p7.js";import"./useLabel-ecSwuXG2.js";import"./useLabels-BCAoW4uD.js";import"./useButton-BrsN7x1k.js";import"./FieldError-CzljslfK.js";import"./Text-BdoBf6Jw.js";import"./clsx-Ciqy0D92.js";import"./Text-DJ32dSE7.js";import"./RSPContexts-DPB_5Wnw.js";import"./Group-BQUgB0PV.js";import"./useControlledState-BY6_m9cF.js";import"./useLocalizedStringFormatter-D9_WmAaw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CGcSuHK2.js";import"./useField-CUNsCkrM.js";import"./TextField.module-DdivwlC8.js";import"./search-COLa-bWw.js";import"./createLucideIcon-ANvKNx91.js";import"./x-Dji1ZwpV.js";import"./useLocalizedStringFormatter-B15xbeUv.js";import"./Button-DHMnWLGJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-9r_S3aDL.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
