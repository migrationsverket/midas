import{S as i}from"./SearchField-DR7fMKEH.js";import"./iframe-Bb_VlPo9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-2r_62JIY.js";import"./clsx-B-dksMZM.js";import"./Form-CPAndHnn.js";import"./useFocusRing-DQRmwydT.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./Input-C4khlQQT.js";import"./Hidden-Da5yr2Rv.js";import"./Button-DwR9JkjB.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./FieldError-CbhfVIv0.js";import"./Text-D7Tr2OQH.js";import"./clsx-Ciqy0D92.js";import"./Text-DTJEuclf.js";import"./RSPContexts-DMtGcFC9.js";import"./Group-CHrDpi7F.js";import"./useControlledState-CFQUuuzt.js";import"./useLocalizedStringFormatter-BINmwfC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVFvsBTT.js";import"./useField-Be7ObOKH.js";import"./TextField.module-DdivwlC8.js";import"./search-C3SC2sZU.js";import"./createLucideIcon-a3otmfa0.js";import"./x-BdcCpJzo.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";import"./Button-BoP38GQz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-7RIQbTv5.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
