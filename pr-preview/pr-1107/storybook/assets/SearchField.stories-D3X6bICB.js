import{S as i}from"./SearchField-DXjDyqMb.js";import"./iframe-BIHPCSD7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DD1AhTmn.js";import"./clsx-B-dksMZM.js";import"./Form-DnedwBlt.js";import"./useFocusRing-BMHnjiK5.js";import"./index-D8pKX7IM.js";import"./index-fodDxchC.js";import"./Input-BAiHHtIW.js";import"./Hidden-BPDZ6gCs.js";import"./Button-CSz7Ih4-.js";import"./useLabels-j4j3caFA.js";import"./useButton-COi1XBPP.js";import"./FieldError-Kju1pqM0.js";import"./Text-41JxePIO.js";import"./clsx-Ciqy0D92.js";import"./Text-BxyjZI9K.js";import"./RSPContexts-DjrbWcHb.js";import"./Group-B8O0quDR.js";import"./useControlledState-7StlLOGr.js";import"./useLocalizedStringFormatter-ruJF4A_C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4-3csAp.js";import"./useField-N_ZHho5V.js";import"./TextField.module-DdivwlC8.js";import"./search-DVJ-XTor.js";import"./createLucideIcon-CEpUHvVi.js";import"./x-BjMfPpOk.js";import"./useLocalizedStringFormatter-DgK4llAe.js";import"./Button-B-WLyZXQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQeIgFd3.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
