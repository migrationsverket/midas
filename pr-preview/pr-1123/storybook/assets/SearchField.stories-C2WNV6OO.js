import{S as i}from"./SearchField-DLykuhTL.js";import"./iframe-BkVzc2jf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BygJjxp_.js";import"./clsx-B-dksMZM.js";import"./Form-DyPSg3uh.js";import"./useFocusRing-Aiyx2UXL.js";import"./index-DCHZ6NdQ.js";import"./index-CRBDyq3W.js";import"./Input-BxA217iM.js";import"./Hidden-R6jv-Zbn.js";import"./Button-DC3ZjroM.js";import"./useLabels-r2kWzK6Q.js";import"./useButton-B1UvRsW1.js";import"./FieldError-BwPk1h0q.js";import"./Text-Cl9gTfqF.js";import"./clsx-Ciqy0D92.js";import"./Text-B79zESTX.js";import"./RSPContexts-LbRQIp3l.js";import"./Group-BBINmdWw.js";import"./useControlledState-LZdmvusm.js";import"./useLocalizedStringFormatter-DAoOwKNh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Nv1QTVpM.js";import"./useField-C412GoGD.js";import"./TextField.module-DdivwlC8.js";import"./search-CNiCM5SO.js";import"./createLucideIcon-BjNI9TSY.js";import"./x-BsyZ_dlH.js";import"./useLocalizedStringFormatter-BzPZ_rQR.js";import"./Button-ZTyLTH5E.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BWjyWmb6.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
