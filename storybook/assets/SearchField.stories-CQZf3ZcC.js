import{S as i}from"./SearchField-B484h0fX.js";import"./iframe-Dtb7hqk6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DwGYJ0wo.js";import"./clsx-B-dksMZM.js";import"./Form-Cgua6hQf.js";import"./useFocusRing-RCYgGSJe.js";import"./index-VDhw-r5F.js";import"./index-BaORL6uX.js";import"./Input-CEKUG48_.js";import"./Hidden-DQwBNi6i.js";import"./Button-BTwY4tVw.js";import"./useLabel-D9hpHeoi.js";import"./useLabels-DiO75QpW.js";import"./useButton-D8LV6Lrl.js";import"./FieldError-CymQbIva.js";import"./Text-Dub-joLT.js";import"./clsx-Ciqy0D92.js";import"./Text-wLzVGxAi.js";import"./RSPContexts-BRMTqOVY.js";import"./Group-C8i1Lk7e.js";import"./useControlledState-B0XIHWrT.js";import"./useLocalizedStringFormatter-imoO5bwq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZdcatsz.js";import"./useField-BGrWgRXS.js";import"./TextField.module-DdivwlC8.js";import"./search-DVMlGC5b.js";import"./createLucideIcon-CMh4hIEg.js";import"./x-BPYm2e-6.js";import"./useLocalizedStringFormatter-BZzFMzpp.js";import"./Button-CgYfRdd2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BB5g-TMV.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
