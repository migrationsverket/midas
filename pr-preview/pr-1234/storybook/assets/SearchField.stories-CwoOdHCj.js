import{S as i}from"./SearchField-BTzNn4O7.js";import"./iframe-Cpv3N_Z7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ds8IarQh.js";import"./clsx-B-dksMZM.js";import"./Form-N1eN9l9p.js";import"./useFocusRing-ypjCw1vR.js";import"./index-wkqyPuv6.js";import"./index-DfwSWRjw.js";import"./Input-DZ9x1R94.js";import"./Hidden-CRjjTzwz.js";import"./Button-yYifVGdg.js";import"./useLabel-DY4t24dq.js";import"./useLabels-Cb5TS_nA.js";import"./useButton-D1nJ6Ar2.js";import"./FieldError-DDdPNrDK.js";import"./Text-CBaNxGOV.js";import"./clsx-Ciqy0D92.js";import"./Text-CywvhZI_.js";import"./RSPContexts-B7j5fLyU.js";import"./Group-DtMaHiC2.js";import"./useControlledState-BJT8QsD-.js";import"./useLocalizedStringFormatter-Cxhkiabf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BGLj0zfE.js";import"./useField-D1U1wsM_.js";import"./TextField.module-DdivwlC8.js";import"./search-DT8ktvTZ.js";import"./createLucideIcon-CPN07aPY.js";import"./x-F7c5yWaB.js";import"./useLocalizedStringFormatter-DBqNCzPo.js";import"./Button-DMMScCvt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-UFh7Pb-i.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
