import{S as i}from"./SearchField-CcVsaZel.js";import"./iframe-zC7rO4bQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DJDHHgRa.js";import"./clsx-B-dksMZM.js";import"./Form-q4yO7ogf.js";import"./useFocusRing-BstF4Rhc.js";import"./index-Dv34dGV6.js";import"./index-2cydjPlj.js";import"./Input-zVniGLzA.js";import"./Hidden-iMadBBvo.js";import"./Button-C21x7wzp.js";import"./useLabel-1c7fDk1R.js";import"./useLabels-DXFco5wv.js";import"./useButton-DgxqVrin.js";import"./FieldError-uFgMezhi.js";import"./Text-B2ypy93g.js";import"./clsx-Ciqy0D92.js";import"./Text-Dq6fJTxq.js";import"./RSPContexts-CFrdutnD.js";import"./Group-CrkI56L2.js";import"./useControlledState-B6sghpTG.js";import"./useLocalizedStringFormatter-EHiso99i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ch8VeyvL.js";import"./useField-BJzHfYu3.js";import"./TextField.module-DdivwlC8.js";import"./search-CFwz-Gr8.js";import"./createLucideIcon-BRqO66r7.js";import"./x-Bhv1l1lN.js";import"./useLocalizedStringFormatter-CWhgLXAn.js";import"./Button-w7ryzoNy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-satwz06w.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
