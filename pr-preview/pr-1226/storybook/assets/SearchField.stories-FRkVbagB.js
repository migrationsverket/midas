import{S as i}from"./SearchField-B9-JNmei.js";import"./iframe-BspZq9tj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DAmpme0n.js";import"./clsx-B-dksMZM.js";import"./Form-D4R1YekT.js";import"./useFocusRing-ZSLB6af2.js";import"./index-CNFgOk2C.js";import"./index-CYPXKPzf.js";import"./Input-BA9l2p_L.js";import"./Hidden-BxNHn6hu.js";import"./Button-W6h6LqJQ.js";import"./useLabel-SKuz0xAF.js";import"./useLabels-DTPL2hi6.js";import"./useButton-Du_s3oIP.js";import"./FieldError-CWZFsZje.js";import"./Text-DJFK0YJf.js";import"./clsx-Ciqy0D92.js";import"./Text-D4utVkCo.js";import"./RSPContexts-CPwEBVvI.js";import"./Group-C5bte03E.js";import"./useControlledState-BFbpEbwN.js";import"./useLocalizedStringFormatter-Cea7ejb5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CWwIEGt6.js";import"./useField-DEHFco72.js";import"./TextField.module-DdivwlC8.js";import"./search-Dshgdf8X.js";import"./createLucideIcon-DZ4T53Ud.js";import"./x-B87ahrOa.js";import"./useLocalizedStringFormatter-CSYYDYLy.js";import"./Button-CgVYtA8O.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-mXHZbk3a.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
