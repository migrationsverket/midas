import{S as i}from"./SearchField-Ja4R47Z4.js";import"./iframe-Csz20ARP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLTlmF8J.js";import"./clsx-B-dksMZM.js";import"./Form-BfSRrjfS.js";import"./useFocusRing-86VLoSnj.js";import"./index-DgqWrau-.js";import"./index-8BKLnV0B.js";import"./Input-D6Coi_9K.js";import"./Hidden-Be3C43tB.js";import"./Button-kUaaPtXV.js";import"./useLabel-B-St2Amk.js";import"./useLabels-ChCuyKnh.js";import"./useButton-DECUyEyv.js";import"./FieldError-DCrfS5vQ.js";import"./Text-C-Hcl69m.js";import"./clsx-Ciqy0D92.js";import"./Text--2gnQNTy.js";import"./RSPContexts-CleR7f2E.js";import"./Group-BE_iKPcJ.js";import"./useControlledState-C0z1d-QQ.js";import"./useLocalizedStringFormatter-l_-wyep1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DhB9rdcz.js";import"./useField-DIH099Vh.js";import"./TextField.module-DdivwlC8.js";import"./search-CzNtenPQ.js";import"./createLucideIcon-BQ-CV6Lk.js";import"./x-BnuAwExu.js";import"./useLocalizedStringFormatter-B7OoXNKl.js";import"./Button-CwrtXb_B.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5NA-uw_.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
