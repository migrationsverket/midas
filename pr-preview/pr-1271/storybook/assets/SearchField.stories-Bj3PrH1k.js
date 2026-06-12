import{S as i}from"./SearchField-BT6gZRZ_.js";import"./iframe-CVnRxWgx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CGtyN9cn.js";import"./clsx-B-dksMZM.js";import"./Form-YZ9PuLqX.js";import"./useFocusRing-94VK6gl0.js";import"./index-Br_PJyAP.js";import"./index-DGjZojd9.js";import"./Input-B5olS4Q4.js";import"./Hidden-DjmPCuwM.js";import"./Button-i9ocr7Pu.js";import"./useLabel-u8jIf097.js";import"./useLabels-DvMiIHJl.js";import"./useButton-DiNxNOYc.js";import"./FieldError-CfE9jQyI.js";import"./Text-CIPwlNyJ.js";import"./clsx-Ciqy0D92.js";import"./Text-D7ORYKKB.js";import"./RSPContexts-CE4pINDX.js";import"./Group-DvpDJCQD.js";import"./useControlledState-DJTyz9Tw.js";import"./useLocalizedStringFormatter-6_DEL2_r.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFydc_q3.js";import"./useField-BkKnTjOj.js";import"./TextField.module-DdivwlC8.js";import"./search-KfROoK_5.js";import"./createLucideIcon-CO_w61Gv.js";import"./x-CUtMZV2x.js";import"./useLocalizedStringFormatter-B64DUcOo.js";import"./Button-BlcQlVBG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-x3g4TarU.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
