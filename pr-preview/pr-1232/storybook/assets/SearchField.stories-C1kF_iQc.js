import{S as i}from"./SearchField-DE7DbYRl.js";import"./iframe-Cu_fcUaC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mLyOZ5qk.js";import"./clsx-B-dksMZM.js";import"./Form-Cpr59noW.js";import"./useFocusRing-Dsj_Rw-j.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./Input-DXT2_3F3.js";import"./Hidden-D1QpNxPu.js";import"./Button-BJB-9Zcd.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./FieldError-CcL3qzc2.js";import"./Text-BcWcM5HD.js";import"./clsx-Ciqy0D92.js";import"./Text-CJt2oElV.js";import"./RSPContexts-voJfQs_F.js";import"./Group-B_4MjRqC.js";import"./useControlledState-Cc2dWwpP.js";import"./useLocalizedStringFormatter-DyfcmqRi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D7XMH20H.js";import"./useField-Cl39vdxi.js";import"./TextField.module-DdivwlC8.js";import"./search-BY-rWnUi.js";import"./createLucideIcon-B_FH30vd.js";import"./x-_aLctjLl.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";import"./Button-DbgphF2R.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bo9ouMME.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
