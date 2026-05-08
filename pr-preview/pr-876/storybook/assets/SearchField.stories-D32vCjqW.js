import{S as i}from"./SearchField-DCq2JOLR.js";import"./iframe-u1Lp3cWH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Gcf78cCr.js";import"./clsx-B-dksMZM.js";import"./Form-D4DocfVX.js";import"./useFocusRing-Bt9lRSbz.js";import"./index-vqf3vopk.js";import"./index-CV03FtcW.js";import"./Input-BPY-OfvJ.js";import"./Hidden-C90fOqUW.js";import"./Button-YBWgb3jY.js";import"./useLabel-CfQyR9Ip.js";import"./useLabels-XR_-vmuV.js";import"./useButton-CJlrbFFl.js";import"./FieldError-D-oYDuTv.js";import"./Text-DNrFEZpf.js";import"./clsx-Ciqy0D92.js";import"./Text-slIPEHAS.js";import"./RSPContexts-DkuerkqF.js";import"./Group-D9LK4iRd.js";import"./useControlledState-Dq3PeISU.js";import"./useLocalizedStringFormatter-BuqYPbAV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D94UlNAr.js";import"./useField-Dk69aVnb.js";import"./TextField.module-DdivwlC8.js";import"./search-DGjL29lq.js";import"./createLucideIcon-DswZ9rJ-.js";import"./x-BwlYKxxl.js";import"./useLocalizedStringFormatter-9sVAI35M.js";import"./Button-CeEdTiGh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7l7xynE.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
