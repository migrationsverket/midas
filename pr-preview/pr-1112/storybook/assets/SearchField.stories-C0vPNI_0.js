import{S as i}from"./SearchField-DDR7Q0Io.js";import"./iframe-CTc60VTv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CX_MyPJp.js";import"./clsx-B-dksMZM.js";import"./Form-D62ZHhda.js";import"./useFocusRing-DGMfhUR8.js";import"./index-CopPqlir.js";import"./index-B5EHLrG2.js";import"./Input-DsNWiE5X.js";import"./Hidden-Bn2RbpW0.js";import"./Button-pB47d38A.js";import"./useLabels-DSU9QQ05.js";import"./useButton-BcQwxG2_.js";import"./FieldError-DLICbn0F.js";import"./Text-BWm8EFxq.js";import"./clsx-Ciqy0D92.js";import"./Text-U4cmy44W.js";import"./RSPContexts-DfNYkHSv.js";import"./Group-Cxt1AVrf.js";import"./useControlledState-D-bgWf48.js";import"./useLocalizedStringFormatter-B9U1Drd-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ccJ8AYql.js";import"./useField-DhnrRXLH.js";import"./TextField.module-DdivwlC8.js";import"./search-Dzfl59s-.js";import"./createLucideIcon-C63opgfS.js";import"./x-B_Vqy6_g.js";import"./useLocalizedStringFormatter-Ci3kGB7o.js";import"./Button-BjBl_qxz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-SblkdzTe.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
