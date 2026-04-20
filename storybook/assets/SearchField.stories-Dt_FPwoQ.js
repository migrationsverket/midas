import{S as i}from"./SearchField-CT6pWDzi.js";import"./iframe-Cwy6RqRk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dig7OQRF.js";import"./clsx-B-dksMZM.js";import"./Form-S0R74D1Y.js";import"./useFocusRing-D2oXtlEb.js";import"./index-B9B4w_Jv.js";import"./index-9xU_DKCC.js";import"./Input-Dj5AMQSP.js";import"./Hidden-DypQ3tfS.js";import"./Button-iq1xipAk.js";import"./useLabel-DrD6Az6p.js";import"./useLabels-Bed1240S.js";import"./useButton-CywKmqyz.js";import"./FieldError-Dtb5uhEX.js";import"./Text-DKQA35ph.js";import"./clsx-Ciqy0D92.js";import"./Text-D4_zOmYN.js";import"./RSPContexts-CiaJ3HLw.js";import"./Group-CHuLe44F.js";import"./useControlledState-DxWn3JGW.js";import"./useLocalizedStringFormatter-DrQBb-pQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-oFn6QPRJ.js";import"./useField-Br2LzLU3.js";import"./TextField.module-DdivwlC8.js";import"./search-Brd9dGmT.js";import"./createLucideIcon-D-5pXknp.js";import"./x-BFQfEM6r.js";import"./useLocalizedStringFormatter-BIN4Z2mf.js";import"./Button-DQvr5Ms4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-4XVU0CqX.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
