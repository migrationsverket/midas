import{S as i}from"./SearchField-DcsXT52X.js";import"./iframe-BgNoMb1-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cf4EtztR.js";import"./clsx-B-dksMZM.js";import"./Form-g0lbGPQc.js";import"./useFocusRing-CdEgrIPc.js";import"./index-C0ZyhkQq.js";import"./index-BH1r8cCI.js";import"./Input-49ZUx90E.js";import"./Hidden-Oz1FCPRp.js";import"./Button-DuzmOBcr.js";import"./useLabel-BFLzfKfJ.js";import"./useLabels-D5sc6rkA.js";import"./useButton-BqxH6UIc.js";import"./FieldError-HTMfHJDa.js";import"./Text-DTrIh8Ah.js";import"./clsx-Ciqy0D92.js";import"./Text-CfXADzCS.js";import"./RSPContexts-CioY2Bmm.js";import"./Group-C1jVMi99.js";import"./useControlledState-ITUua2kv.js";import"./useLocalizedStringFormatter-pefhPmo1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4Urw3d7.js";import"./useField-CNaw7VL2.js";import"./TextField.module-DdivwlC8.js";import"./search-BrdTLKrQ.js";import"./createLucideIcon-DvRkoRzG.js";import"./x-BxCihT4A.js";import"./useLocalizedStringFormatter-D0yQtf2N.js";import"./Button-gs8bFcYH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CAQ7uxZn.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
