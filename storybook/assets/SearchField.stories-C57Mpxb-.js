import{S as i}from"./SearchField-CVyoRxYK.js";import"./iframe-SDpi4twy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-xrvn9yoP.js";import"./clsx-B-dksMZM.js";import"./Form-BPlMq8bY.js";import"./useFocusRing-HN10idpk.js";import"./index-DtGjaFFO.js";import"./index-BiFAAEUl.js";import"./Input-DDZMmrbv.js";import"./Hidden-DCBLchC2.js";import"./Button-CP9rYMdO.js";import"./useLabel-CsVesTp2.js";import"./useLabels-BdN3-T9J.js";import"./useButton-da7p-KW-.js";import"./FieldError-BAYSeF7s.js";import"./Text-DfMMI2V7.js";import"./clsx-Ciqy0D92.js";import"./Text-fYO5A3M_.js";import"./RSPContexts-6ABDZ8a3.js";import"./Group-Bbkpko_-.js";import"./useControlledState-DnKNiq_e.js";import"./useLocalizedStringFormatter-BT0fez2i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ljxkt21P.js";import"./useField-D_PusGes.js";import"./TextField.module-DdivwlC8.js";import"./search-hpQIrjc6.js";import"./createLucideIcon-CoSUjgph.js";import"./x-BpKlbFNN.js";import"./useLocalizedStringFormatter-DAhT7gg2.js";import"./Button-BFfXUBEp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDECxo00.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
