import{S as i}from"./SearchField-2YQf8zst.js";import"./iframe-B1G803WZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZnrybaQS.js";import"./clsx-B-dksMZM.js";import"./Form-B7gF1kuZ.js";import"./useFocusRing-BRG6MU6i.js";import"./index-QTGoW66r.js";import"./index-DlLvDP-d.js";import"./Input-CHYIWEI4.js";import"./Hidden-DDSSvdX3.js";import"./Button-BLDI2QQO.js";import"./useLabel-lJyU4eyr.js";import"./useLabels-CNGc6RPU.js";import"./useButton-BMGmM7Rg.js";import"./FieldError-BgDbsvpf.js";import"./Text-CAOAbmad.js";import"./clsx-Ciqy0D92.js";import"./Text-B-AGxk9K.js";import"./RSPContexts-CUgMF8uD.js";import"./Group-CyICP2Gz.js";import"./useControlledState-BlM9LERq.js";import"./useLocalizedStringFormatter-BMaygKaE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOyU3cBb.js";import"./useField-BpNxarce.js";import"./TextField.module-DdivwlC8.js";import"./search-EcGNgMVR.js";import"./createLucideIcon-_Uu-7Yuy.js";import"./x-C-I1ixf_.js";import"./useLocalizedStringFormatter-D7GfR7l1.js";import"./Button-DU4dwGZ1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B__tRjGj.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
