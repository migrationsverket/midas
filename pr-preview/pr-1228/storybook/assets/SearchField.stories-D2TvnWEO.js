import{S as i}from"./SearchField-D2oX3Dii.js";import"./iframe-SiFgIgtO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-o2Exi7SE.js";import"./clsx-B-dksMZM.js";import"./Form-DgSr2KFi.js";import"./useFocusRing-CvkTALop.js";import"./index-DSbiV_Yq.js";import"./index-C4sSyqsa.js";import"./Input-Dj69D4Wg.js";import"./Hidden-BczPpR5h.js";import"./Button-CIm-1svz.js";import"./useLabel-z_-c7Nf0.js";import"./useLabels-KeWp1COh.js";import"./useButton-B0oseYFB.js";import"./FieldError-BG5wZCkL.js";import"./Text-iLvdh7Qr.js";import"./clsx-Ciqy0D92.js";import"./Text-JI0YDy3v.js";import"./RSPContexts-DM50IAXa.js";import"./Group-DicU3rN6.js";import"./useControlledState-BeznzCuJ.js";import"./useLocalizedStringFormatter-BSIB72Kk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BMD9JipH.js";import"./useField-BB23bqGH.js";import"./TextField.module-DdivwlC8.js";import"./search-y82T5kOw.js";import"./createLucideIcon-jPk5qvos.js";import"./x-ijd7sG5_.js";import"./useLocalizedStringFormatter-CsnzAfll.js";import"./Button-DBG0-mK7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrRKsR6_.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
