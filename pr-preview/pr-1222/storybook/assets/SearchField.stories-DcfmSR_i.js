import{S as i}from"./SearchField-DB3dfQ_p.js";import"./iframe-DD86HrH2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-COpPBJUa.js";import"./clsx-B-dksMZM.js";import"./Form-CeuJdreE.js";import"./useFocusRing-BexPlixw.js";import"./index-BRqGpYZa.js";import"./index-c37RaAEE.js";import"./Input-DaAIxGI2.js";import"./Hidden-DxNA2jAI.js";import"./Button-Dlxsdkdy.js";import"./useLabel-Bo2GeM8m.js";import"./useLabels-C7ZzmUeQ.js";import"./useButton-D2fUs3pD.js";import"./FieldError-DI4cB23D.js";import"./Text-DuibH3v7.js";import"./clsx-Ciqy0D92.js";import"./Text-CmsABE1n.js";import"./RSPContexts-OgLCyc19.js";import"./Group-B11b6zrd.js";import"./useControlledState-k07B6mZK.js";import"./useLocalizedStringFormatter-CL-qCV33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtX9gWJC.js";import"./useField-K4C8pkC3.js";import"./TextField.module-DdivwlC8.js";import"./search-CR5C9Rm2.js";import"./createLucideIcon-DzgrZqcN.js";import"./x-BX_qSKOQ.js";import"./useLocalizedStringFormatter-rPCKOnn1.js";import"./Button-BFvCKzsz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DI8ejz9M.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
