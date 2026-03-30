import{S as i}from"./SearchField-DRoSwRNe.js";import"./iframe-2y2Syr64.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-QeTQioJq.js";import"./clsx-B-dksMZM.js";import"./Form-BxZc3HF8.js";import"./useFocusRing-g5rhpMio.js";import"./index-CzLxwmqr.js";import"./index-DXQBrJfU.js";import"./Input-BRAc1KwA.js";import"./Hidden-B__XOjR0.js";import"./Button-9fFVOiJo.js";import"./useLabel-DEokNCv9.js";import"./useLabels-CDVQ8Dai.js";import"./useButton-BGrK01YR.js";import"./FieldError-C0y0OPWO.js";import"./Text-CjKUI5Vp.js";import"./clsx-Ciqy0D92.js";import"./Text-BstWv5qu.js";import"./RSPContexts-B0u5lwvT.js";import"./Group-gZuaeyva.js";import"./useControlledState-CNntbmuw.js";import"./useLocalizedStringFormatter-ChuRjCa_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CnQ0BvwO.js";import"./useField-DPhi4f-8.js";import"./TextField.module-DdivwlC8.js";import"./search-D98Rh5bf.js";import"./createLucideIcon-CukoxtoU.js";import"./x-CmHq6MLN.js";import"./useLocalizedStringFormatter-C8Cfl7Hj.js";import"./Button-D69d27MT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwQymDfp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
