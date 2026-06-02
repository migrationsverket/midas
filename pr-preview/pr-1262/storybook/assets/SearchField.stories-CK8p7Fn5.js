import{S as i}from"./SearchField-nVAZ53oU.js";import"./iframe-C8wbd0xw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvSYGh_U.js";import"./clsx-B-dksMZM.js";import"./Form-BSu3vikM.js";import"./useFocusRing-Bg15NFQh.js";import"./index-620_CD08.js";import"./index-Db09nDsC.js";import"./Input-Bd26tLqj.js";import"./Hidden-C80CkRC2.js";import"./Button-CshDR4Sg.js";import"./useLabel-VczPGpuz.js";import"./useLabels-DNgQ3t5h.js";import"./useButton-J8srJfI2.js";import"./FieldError-BgH3yzjq.js";import"./Text-CNrdh4nj.js";import"./clsx-Ciqy0D92.js";import"./Text-DfltvgM6.js";import"./RSPContexts-CJjr_xEH.js";import"./Group-DXxlE4I0.js";import"./useControlledState-Ctd2zKcE.js";import"./useLocalizedStringFormatter-CzJGuAX0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOnZLDFN.js";import"./useField-C7yQkaFy.js";import"./TextField.module-DdivwlC8.js";import"./search-Bfr83Uoi.js";import"./createLucideIcon-DuCqgbBp.js";import"./x-BZlVtVMn.js";import"./useLocalizedStringFormatter-Cn7XrlA9.js";import"./Button-CYDl1rDD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Br2qyVeY.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
