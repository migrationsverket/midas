import{S as i}from"./SearchField-lhPobGDp.js";import"./iframe-DdBf1SRL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DMchxVzX.js";import"./clsx-B-dksMZM.js";import"./Form-BnkXR6RV.js";import"./useFocusRing-B7kbWjnk.js";import"./index-CkQqcEDO.js";import"./index-Dx_kN6Ou.js";import"./Input-BZTpPI0z.js";import"./Hidden-DnCBwxQo.js";import"./Button-DfVfuE86.js";import"./useLabel-Cmr2t4Vn.js";import"./useLabels-BTBbAQZZ.js";import"./useButton-Bi1rLOkK.js";import"./FieldError-CxsQvr-l.js";import"./Text-BubyCo8k.js";import"./clsx-Ciqy0D92.js";import"./Text-Crsqw0eJ.js";import"./RSPContexts-DeLkFkii.js";import"./Group-Dz-A39lc.js";import"./useControlledState-aSEVnCiN.js";import"./useLocalizedStringFormatter-B5aKiSMw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BwJPM4sj.js";import"./useField-B-UKPEcq.js";import"./TextField.module-DdivwlC8.js";import"./search-C4W9atMZ.js";import"./createLucideIcon-DMjdayIV.js";import"./x-DQUfmUsq.js";import"./useLocalizedStringFormatter-D9iDsPFm.js";import"./Button-BcNKuXh9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-TAipgByj.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
