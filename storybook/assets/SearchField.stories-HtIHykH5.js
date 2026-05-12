import{S as i}from"./SearchField-DYQbUc5W.js";import"./iframe-DXV5yNVg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2X0V_ch.js";import"./clsx-B-dksMZM.js";import"./Form-ChJqqoAq.js";import"./useFocusRing-D5WWltRW.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./Input-DkCtsT4u.js";import"./Hidden-D1mzcqIQ.js";import"./Button-BFHR6RXp.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./FieldError-BqMBz98l.js";import"./Text-CKvHTakV.js";import"./clsx-Ciqy0D92.js";import"./Text-CBeHelAL.js";import"./RSPContexts-CFPuUxx1.js";import"./Group-2TNpPRTn.js";import"./useControlledState-gqmUfamI.js";import"./useLocalizedStringFormatter-DMugWIr_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BYn9VW6y.js";import"./useField-zA9g1QiW.js";import"./TextField.module-DdivwlC8.js";import"./search-CYT7n846.js";import"./createLucideIcon-BzcStSQs.js";import"./x-C8jYBObA.js";import"./useLocalizedStringFormatter-C4UT3jd4.js";import"./Button-BlXLhIpL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BEiLaXoC.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
