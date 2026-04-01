import{S as i}from"./SearchField-TFsCZC8U.js";import"./iframe-BcVWnjiq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BHfrMThS.js";import"./clsx-B-dksMZM.js";import"./Form-Bki39RKU.js";import"./useFocusRing-Cr43T2xz.js";import"./index-Bf6BaTQp.js";import"./index-lTGn0qSi.js";import"./Input-DeQXhFoY.js";import"./Hidden-B1e2ot4t.js";import"./Button-X_O9ad-3.js";import"./useLabel-CdT-X_Un.js";import"./useLabels-H_5_YSkD.js";import"./useButton-CJEr5rsL.js";import"./FieldError-RgIIuEHk.js";import"./Text-Cf3_Dpr9.js";import"./clsx-Ciqy0D92.js";import"./Text-aEiNTvlh.js";import"./RSPContexts-DwUzfd_N.js";import"./Group-DnSo1KJl.js";import"./useControlledState-BeIEKiqF.js";import"./useLocalizedStringFormatter-BzQp9VXy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-WgrE_jSW.js";import"./useField-Dhrmud0j.js";import"./TextField.module-DdivwlC8.js";import"./search-7jdoct7Q.js";import"./createLucideIcon-DKRKL4qZ.js";import"./x-B_mInUxe.js";import"./useLocalizedStringFormatter-BGPexIt5.js";import"./Button-aD9_wGcx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DQYzeIJf.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
