import{S as i}from"./SearchField-CzkHt5JQ.js";import"./iframe-CH21sBFo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BTsYysht.js";import"./clsx-B-dksMZM.js";import"./Form-CVljI_fE.js";import"./useFocusRing-DLE_Hwk5.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./Input-C0xGllCq.js";import"./Hidden-BZUBqXYz.js";import"./Button-Cyld21y_.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./FieldError-27wmxIep.js";import"./Text-BvEBpsjb.js";import"./clsx-Ciqy0D92.js";import"./Text-irla2VTm.js";import"./RSPContexts-kvxCI0gF.js";import"./Group-BkO6iFKp.js";import"./useControlledState-BSIuYOQP.js";import"./useLocalizedStringFormatter-DawUslhI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-RMARdNiJ.js";import"./useField-D98AzuON.js";import"./TextField.module-DdivwlC8.js";import"./search-DZGKVacc.js";import"./createLucideIcon-BCbaEzrv.js";import"./x-BvM5og85.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";import"./Button-DAqWGZgG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BbJs2R-u.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
